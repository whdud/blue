# BLUE Interior — 포트폴리오 사이트

인테리어 회사 소개 및 포트폴리오용 정적 웹사이트입니다. 빌드 과정 없이 HTML/CSS/JS만으로 동작합니다.

## 구성

- **Hero** — 메인 카피와 CTA
- **About** — 회사 소개와 주요 수치(카운트업 애니메이션)
- **Portfolio** — 카테고리 필터(주거/상업/오피스), 클릭 시 상세 모달 + 이미지 슬라이드
- **Services / Process / Reviews** — 서비스, 진행 과정, 고객 후기
- **Contact** — 상담 신청 폼, 연락처

## 실행

```bash
python3 -m http.server 8000
# http://localhost:8000
```

`index.html`을 브라우저로 바로 열어도 됩니다. GitHub Pages, Netlify, Vercel 등에 그대로 올려 배포할 수 있습니다.

## 콘텐츠 수정

| 항목 | 위치 |
| --- | --- |
| 프로젝트 목록 | `js/projects.js` — 배열에 항목을 추가/수정 |
| 프로젝트 사진 | `images/projects/` — `projects.js`의 `images` 경로와 파일명을 맞춰주세요 (첫 장이 썸네일) |
| 메인 배경 사진 | `images/hero.jpg` |
| 회사명·연락처·문구 | `index.html` |
| 색상·폰트 | `css/style.css` 상단 `:root` 변수 |

사진이 아직 없거나 경로가 틀리면 프로젝트별 `tone` 색상으로 만든 플레이스홀더가 자동으로 표시됩니다.

## 상담 폼 연동

현재 폼은 입력 검증 후 완료 메시지만 보여줍니다. 실제로 문의를 받으려면 `js/main.js`의 `TODO` 부분에서
[Formspree](https://formspree.io) 같은 폼 서비스나 자체 API로 전송하도록 연결하세요.
