const items = [
  {
    id: "education-detail",
    type: "교육",
    title: "K-디지털 트레이닝",
    period: "2025.12 — 2026.07",
    summary:
      "AI 서비스의 모델부터 웹서비스까지 연결하는 실무 과정을 학습했습니다.",
    details: [
      "React와 Flask를 활용한 웹 애플리케이션 개발",
      "MySQL 데이터베이스 모델링과 서비스 연동",
      "Git·GitHub 기반 팀 협업과 Notion 문서화",
      "요구사항 분석, 기능 구현, 단위·통합 테스트와 유지보수",
      "고속도로 야생동물 탐지 및 화재 감지 비전 AI 프로젝트 수행",
    ],
  },
  {
    id: "university-detail",
    type: "학력",
    title: "한국공학대학교 나노반도체공학과 공학사",
    period: "2015.03 — 2021.02",
    summary:
      "공학적 기반을 쌓고 센서·영상 분석을 결합한 졸업 프로젝트를 진행했습니다.",
    details: [
      "4년제 학사 졸업 · 학점 3.57 / 4.5",
      "Raspberry Pi 3B+와 FLIR 열화상 센서를 활용한 신생아 체온 모니터링 시스템 개발",
      "C/C++, Qt5, OpenCV로 사용자 화면과 영상 분석 기능 구현",
      "위험 온도 감지 시 Pushbullet API를 통한 실시간 알림 기능 구현",
    ],
  },
  {
    id: "certificate-detail",
    type: "자격",
    title: "정보처리기사 · SQL 개발자",
    period: "2026",
    summary:
      "소프트웨어 개발과 데이터베이스 활용에 필요한 기반 지식을 체계화했습니다.",
    details: [
      "소프트웨어 설계·개발과 데이터베이스 구축에 관한 기반 지식 정리",
      "SQL 작성, 데이터 모델링과 데이터베이스 활용 역량 강화",
      "실무에서 경험한 웹서비스와 데이터 흐름을 이론적으로 보완",
    ],
  },
  {
    id: "exchange-detail",
    type: "해외 경험",
    title: "독일 HsKA 교환학생",
    period: "2016.09 — 2017.02",
    summary: "낯선 환경에 적응하며 새로운 관점으로 소통하는 경험을 쌓았습니다.",
    details: [
      "독일 카를스루에 HsKA에서 6개월간 교환학생으로 생활",
      "국제 교류와 독일어 학습을 통한 의사소통 경험",
      "서로 다른 문화와 생활 방식에 적응하며 유연한 문제 해결 태도 형성",
    ],
  },
];

export default function LearningCredentials() {
  return (
    <>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line max-sm:grid-cols-1">
        {items.map((item) => (
          <a
            href={`#${item.id}`}
            className="group bg-background p-7 text-left transition-colors hover:bg-surface focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-accent"
            key={item.id}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-bold text-accent">{item.type}</span>
              <span
                className="text-lg text-accent transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                ↗
              </span>
            </div>
            <h3 className="mt-5 text-xl font-black leading-snug">
              {item.title}
            </h3>
            <p className="mt-3 font-mono text-sm text-muted">{item.period}</p>
            <p className="mt-5 text-sm font-bold text-muted">상세 내용 보기</p>
          </a>
        ))}
      </div>

      {items.map((item) => (
        <div
          id={item.id}
          className="credential-modal fixed inset-0 z-[100] p-5"
          key={`${item.id}-modal`}
        >
          <a
            href="#learning"
            className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm"
            aria-label="상세 내용 닫기"
          />
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${item.id}-title`}
            className="absolute left-1/2 top-1/2 max-h-[85vh] w-[calc(100%-2.5rem)] max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-line bg-background p-8 shadow-2xl max-md:p-6"
          >
            <a
              href="#learning"
              className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-line text-xl transition-colors hover:border-accent hover:text-accent"
              aria-label="상세 내용 닫기"
            >
              ×
            </a>
            <span className="text-base font-bold tracking-[.16em] text-accent">
              {item.type}
            </span>
            <h2
              id={`${item.id}-title`}
              className="mt-5 max-w-lg pr-12 text-[clamp(28px,5vw,44px)] font-black leading-tight tracking-[-.04em]"
            >
              {item.title}
            </h2>
            <p className="mt-4 font-mono text-sm text-muted">{item.period}</p>
            <p className="mt-7 text-lg leading-8 text-foreground">
              {item.summary}
            </p>
            <ul className="mt-7 space-y-4 border-t border-line pt-7">
              {item.details.map((detail) => (
                <li
                  className="flex gap-3 text-base leading-8 text-muted"
                  key={detail}
                >
                  <span className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      ))}
    </>
  );
}
