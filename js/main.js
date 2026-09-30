(function () {
  "use strict";

  const projects = window.PROJECTS || [];
  const labels = window.CATEGORY_LABELS || {};

  /* ---------- Image helpers ---------- */

  // 이미지가 존재하면 배경으로, 없으면 tone 그라데이션 플레이스홀더 유지
  function setBackground(el, src, tone) {
    if (tone) {
      el.style.background = `linear-gradient(135deg, ${tone[0]}, ${tone[1]})`;
    }
    if (!src) return;
    const img = new Image();
    img.onload = () => {
      el.style.backgroundImage = `url("${src}")`;
      el.style.backgroundSize = "cover";
      el.style.backgroundPosition = "center";
      el.classList.add("has-image");
    };
    img.src = src;
  }

  const heroBg = document.querySelector(".hero__bg");
  if (heroBg) setBackground(heroBg, heroBg.dataset.img, null);

  /* ---------- Header ---------- */

  const header = document.getElementById("header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuBtn.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("no-scroll", open);
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuBtn.classList.remove("is-open");
      menuBtn.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    })
  );

  /* ---------- Portfolio grid ---------- */

  const grid = document.getElementById("projectGrid");

  function renderGrid(filter) {
    grid.innerHTML = "";
    projects
      .filter((p) => filter === "all" || p.category === filter)
      .forEach((p, i) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "card";
        card.style.animationDelay = `${i * 60}ms`;
        card.setAttribute("aria-label", `${p.title} 자세히 보기`);
        card.innerHTML = `
          <div class="card__image"><span class="card__view">View</span></div>
          <div class="card__info">
            <span class="card__cat">${labels[p.category] || ""} · ${p.size}</span>
            <h3 class="card__title">${p.title}</h3>
            <span class="card__loc">${p.location} · ${p.year}</span>
          </div>`;
        setBackground(card.querySelector(".card__image"), p.images && p.images[0], p.tone);
        card.addEventListener("click", () => openModal(p));
        grid.appendChild(card);
      });
  }

  const filterBtns = document.querySelectorAll("#filters .filter");
  filterBtns.forEach((btn) =>
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-selected", String(b === btn));
      });
      renderGrid(btn.dataset.filter);
    })
  );
  renderGrid("all");

  /* ---------- Modal ---------- */

  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const modalDots = document.getElementById("modalDots");
  const modalPrev = document.getElementById("modalPrev");
  const modalNext = document.getElementById("modalNext");
  let current = null;
  let index = 0;
  let lastFocus = null;

  function showImage(i) {
    const imgs = current.images && current.images.length ? current.images : [null];
    index = (i + imgs.length) % imgs.length;
    modalImage.className = "modal__image";
    modalImage.removeAttribute("style");
    setBackground(modalImage, imgs[index], current.tone);
    modalDots.querySelectorAll("span").forEach((d, n) => d.classList.toggle("is-active", n === index));
    const multi = imgs.length > 1;
    modalPrev.hidden = modalNext.hidden = modalDots.hidden = !multi;
  }

  function openModal(p) {
    current = p;
    lastFocus = document.activeElement;
    document.getElementById("modalCategory").textContent = labels[p.category] || "";
    document.getElementById("modalTitle").textContent = p.title;
    document.getElementById("modalDesc").textContent = p.description;
    document.getElementById("modalMeta").innerHTML = [
      ["위치", p.location],
      ["면적", p.size],
      ["공사 기간", p.duration],
      ["완공", p.year],
    ]
      .filter(([, v]) => v)
      .map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`)
      .join("");
    modalDots.innerHTML = (p.images || []).map(() => "<span></span>").join("");
    showImage(0);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    modal.querySelector(".modal__close").focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }

  modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
  modalPrev.addEventListener("click", () => showImage(index - 1));
  modalNext.addEventListener("click", () => showImage(index + 1));
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") showImage(index - 1);
    if (e.key === "ArrowRight") showImage(index + 1);
  });

  /* ---------- Reveal on scroll & counters ---------- */

  function animateCount(el) {
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "+";
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          entry.target.querySelectorAll("[data-count]").forEach(animateCount);
          io.unobserve(entry.target);
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
    document.querySelectorAll("[data-count]").forEach((el) => {
      el.textContent = el.dataset.count + (el.dataset.suffix || "+");
    });
  }

  /* ---------- Contact form ---------- */

  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const invalid = [...form.querySelectorAll("[required]")].find((f) =>
      f.type === "checkbox" ? !f.checked : !f.value.trim()
    );
    if (invalid) {
      status.textContent = "필수 항목을 모두 입력해 주세요.";
      status.className = "form__status is-error";
      invalid.focus();
      return;
    }
    // TODO: 실제 운영 시 이메일 발송 서비스(Formspree 등)나 백엔드 API로 전송
    status.textContent = "상담 신청이 접수되었습니다. 곧 연락드리겠습니다!";
    status.className = "form__status is-success";
    form.reset();
  });

  document.getElementById("year").textContent = new Date().getFullYear();
})();
