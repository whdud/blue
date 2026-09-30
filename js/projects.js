/*
 * 포트폴리오 데이터
 * - 프로젝트를 추가/수정하려면 이 배열만 편집하면 됩니다.
 * - images: images/projects/ 폴더에 사진을 넣고 경로를 적어주세요. (첫 번째 사진이 썸네일)
 *   사진이 없거나 경로가 틀리면 tone 색상으로 된 플레이스홀더가 대신 표시됩니다.
 * - category: residential(주거) | commercial(상업) | office(오피스)
 */
window.PROJECTS = [
  {
    id: "seongsu-apt",
    title: "성수동 34평 아파트",
    category: "residential",
    location: "서울 성동구",
    size: "34평",
    year: "2026",
    duration: "6주",
    tone: ["#d9cfc1", "#a89684"],
    images: ["images/projects/seongsu-1.jpg", "images/projects/seongsu-2.jpg", "images/projects/seongsu-3.jpg"],
    description:
      "맞벌이 부부와 반려묘를 위한 집. 거실과 주방 사이 벽을 허물어 하나의 큰 생활 공간을 만들고, 오크 원목과 라임스톤 톤의 마감재로 따뜻하고 차분한 분위기를 완성했습니다.",
  },
  {
    id: "yeonnam-cafe",
    title: "연남동 카페 ‘Morning Blue’",
    category: "commercial",
    location: "서울 마포구",
    size: "28평",
    year: "2026",
    duration: "4주",
    tone: ["#8aa0b3", "#3f556b"],
    images: ["images/projects/yeonnam-1.jpg", "images/projects/yeonnam-2.jpg"],
    description:
      "브랜드 컬러인 딥 블루를 벽면 한 곳에만 집중시키고 나머지는 노출 콘크리트와 스테인리스로 절제했습니다. 창가 바 테이블은 골목 풍경을 액자처럼 담아냅니다.",
  },
  {
    id: "pangyo-office",
    title: "판교 스타트업 오피스",
    category: "office",
    location: "경기 성남시",
    size: "120평",
    year: "2025",
    duration: "8주",
    tone: ["#c9ccc4", "#6f7768"],
    images: ["images/projects/pangyo-1.jpg", "images/projects/pangyo-2.jpg"],
    description:
      "60명 규모 개발 조직을 위한 오피스. 집중 업무 존, 협업 라운지, 폰부스를 동선에 따라 배치하고 회의실 전체에 흡음 패널을 적용했습니다.",
  },
  {
    id: "hannam-house",
    title: "한남동 단독주택",
    category: "residential",
    location: "서울 용산구",
    size: "62평",
    year: "2025",
    duration: "14주",
    tone: ["#e4ddd3", "#b7a58f"],
    images: ["images/projects/hannam-1.jpg", "images/projects/hannam-2.jpg"],
    description:
      "30년 된 주택의 구조를 보강하고 중정을 중심으로 공간을 재구성했습니다. 계절마다 달라지는 빛이 집 안 깊숙이 들어오도록 개구부를 새로 설계했습니다.",
  },
  {
    id: "cheongdam-showroom",
    title: "청담동 가구 쇼룸",
    category: "commercial",
    location: "서울 강남구",
    size: "85평",
    year: "2025",
    duration: "7주",
    tone: ["#bdb3a6", "#4a433b"],
    images: ["images/projects/cheongdam-1.jpg"],
    description:
      "제품이 주인공이 되도록 바닥과 벽은 한 가지 톤의 미장으로 통일하고, 트랙 조명으로 전시 구성을 자유롭게 바꿀 수 있게 했습니다.",
  },
  {
    id: "mapo-apt",
    title: "마포 24평 신혼집",
    category: "residential",
    location: "서울 마포구",
    size: "24평",
    year: "2024",
    duration: "5주",
    tone: ["#efe6da", "#c9b49a"],
    images: ["images/projects/mapo-1.jpg"],
    description:
      "작은 평수를 넓게 쓰기 위해 붙박이 수납을 벽 안으로 숨기고, 화이트와 라이트 베이지 톤으로 시각적 여백을 확보했습니다.",
  },
  {
    id: "gangnam-clinic",
    title: "강남 피부과 클리닉",
    category: "commercial",
    location: "서울 강남구",
    size: "70평",
    year: "2024",
    duration: "6주",
    tone: ["#e7e4df", "#9aa6a8"],
    images: ["images/projects/clinic-1.jpg"],
    description:
      "병원 특유의 차가운 인상을 줄이기 위해 곡선 벽체와 간접 조명을 사용했습니다. 대기 공간은 라운지처럼 편안하게 구성했습니다.",
  },
  {
    id: "yeouido-office",
    title: "여의도 금융사 라운지",
    category: "office",
    location: "서울 영등포구",
    size: "90평",
    year: "2024",
    duration: "6주",
    tone: ["#a7a9a4", "#2f3437"],
    images: ["images/projects/yeouido-1.jpg"],
    description:
      "고객 응대 라운지와 임원 회의실. 월넛 우드와 다크 스톤으로 신뢰감 있는 분위기를 만들고, 한강 조망을 살려 좌석을 배치했습니다.",
  },
];

window.CATEGORY_LABELS = {
  residential: "주거",
  commercial: "상업",
  office: "오피스",
};
