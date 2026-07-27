import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import LearningCredentials from "./components/learning-credentials";
import TerminalWindow from "./components/terminal-window";

const projects = [
  {
    index: "01",
    category: "의료 AI · 풀스택 · 인프라",
    title: "뉴로엔 ENIT-AI",
    description:
      "qEEG 데이터를 분류하고 AI 분석 리포트를 생성하는 의료진용 웹 서비스와 분산 시스템 기반을 구축했습니다.",
    tags: ["PyTorch", "FastAPI", "React", "Docker"],
    href: "/projects/neuroen-enit-ai",
    image: {
      src: "/projects/neuroen/patient-input.jpg",
      width: 4014,
      height: 2473,
      alt: "뉴로엔 ENIT-AI 환자 정보와 qEEG 이미지 입력 화면",
    },
  },
];

const skillGroups = [
  [
    "프론트엔드",
    [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "반응형 웹",
    ],
  ],
  [
    "백엔드",
    ["Java", "Spring MVC", "MyBatis", "Python", "FastAPI", "Flask", "Node.js"],
  ],
  ["데이터베이스", ["MySQL", "MariaDB", "SQL", "데이터 모델링"]],
  ["AI · 비전", ["PyTorch", "OpenCV", "DeepCluster", "MLflow", "JupyterLab"]],
  [
    "시스템 · 인프라",
    ["Linux", "Docker", "Gooroom OS", "PAM", "Cloudflare", "가상 머신"],
  ],
  ["협업", ["Git", "GitHub", "요구사항 분석", "문서화", "오류 리포트"]],
];

const experiences = [
  {
    period: "2025.03 — 2025.05",
    organization: "뉴로엔",
    role: "의료 AI 풀스택 개발 인턴",
    description:
      "약 1만 1천 건의 qEEG 데이터를 바탕으로 비지도 학습 모델을 실험하고, 의료진용 분석 웹서비스와 연구·배포 환경을 연결했습니다.",
    raar: [
      {
        label: "결과",
        title: "모델을 의료진이 사용할 수 있는 제품으로 연결",
        text: "약 1만 1천 건의 qEEG 데이터를 활용한 모델 실험부터 데이터 입력, 추론, 분석 결과 확인이 가능한 의료진용 웹서비스까지 하나의 흐름으로 구현했습니다.",
      },
      {
        label: "행동",
        title: "학습 조건을 나누고 반복 실험",
        text: "qEEG 이미지의 특성을 분석해 전처리 과정을 구성하고, DeepCluster의 클러스터 수와 학습 조건을 변경하며 결과를 비교했습니다.",
      },
      {
        label: "접근",
        title: "실험·백엔드·화면·배포 환경을 함께 설계",
        text: "MLflow와 JupyterLab로 연구 환경을 만들고 FastAPI, Next.js, Cloudflare를 연결했습니다. 의료진·뇌과학 전문가와 요구사항과 분석 결과도 함께 검토했습니다.",
      },
      {
        label: "배운 점",
        title: "좋은 모델만으로는 좋은 제품이 되지 않습니다",
        text: "AI의 성능뿐 아니라 데이터 품질, 의료진의 사용 흐름, 결과를 신뢰할 수 있는 설명과 안전한 접속 환경까지 함께 설계해야 한다는 점을 배웠습니다.",
      },
    ],
    resumeSections: [
      {
        title: "활동 내용",
        items: [
          "약 1만 1천 건의 qEEG Brain Mapping 이미지 데이터 분석 및 전처리",
          "DeepCluster 기반 비지도 학습 모델 개발과 학습 조건별 성능 실험",
          "MLflow를 활용한 모델 학습 결과 및 실험 이력 관리",
          "JupyterLab 기반 AI 모델 학습·연구 환경 구축",
        ],
      },
      {
        title: "주요 프로젝트",
        items: [
          "FastAPI 기반 AI 모델 추론 및 데이터 관리 백엔드 개발",
          "React와 Next.js 기반 의료진용 웹서비스 개발",
          "Cloudflare를 활용한 보안 접속 및 서비스 배포 환경 구성",
          "AI 모델·백엔드·프론트엔드·인프라를 연결한 전체 파이프라인 설계",
        ],
      },
      {
        title: "협업 경험",
        items: [
          "정신과 전문의 및 뇌과학 전문가와 요구사항 협의 및 결과 검토",
          "관련 논문과 의료 자료를 학습하며 qEEG와 정신 건강 AI 도메인 이해",
          "데이터 품질부터 의료진의 사용 흐름까지 제품 관점에서 함께 검토",
        ],
      },
    ],
  },
  {
    period: "2023.05 — 2024.05",
    organization: "아홉",
    role: "개발부 및 CBC팀 사원",
    description:
      "관광 플랫폼 관리자 기능 개발과 운영 오류 분석을 담당하고, Gooroom OS 기반 망분리 관리도구 개발 및 현장 구축을 지원했습니다.",
    raar: [
      {
        label: "결과",
        title: "운영 서비스와 보안 현장을 모두 지원",
        text: "인천e지 관리자 기능을 개발·유지보수하고, V-Spacer 망분리 관리도구 개발과 발전소 내부망·외부망 환경의 시스템 구축을 지원했습니다.",
      },
      {
        label: "행동",
        title: "운영자 기능을 구현하고 오류 원인을 추적",
        text: "가이드 카테고리, 1:1 문의, FAQ 관리와 모바일 웹뷰 스탬프 화면을 개발했습니다. 운영 오류는 재현한 뒤 데이터와 코드 흐름을 확인해 원인을 분석했습니다.",
      },
      {
        label: "접근",
        title: "웹 코드 밖의 실행 환경까지 확인",
        text: "Flask 기반 관리 기능과 PAM 인증 로직을 테스트하고, 현장에서 Linux 서버 설치·설정과 네트워크 연결 상태를 점검하며 발생한 문제를 문서로 공유했습니다.",
      },
      {
        label: "배운 점",
        title: "문제는 화면과 코드 밖에서도 발생합니다",
        text: "서비스 오류를 정확히 해결하려면 사용자 화면부터 데이터, 인증, 서버와 네트워크까지 전체 실행 환경을 함께 이해해야 한다는 관점을 갖게 되었습니다.",
      },
    ],
    resumeSections: [
      {
        title: "주요 업무",
        items: [
          "인천e지 관리자 서비스의 가이드 카테고리, 1:1 문의 답변, FAQ 분류·관리 기능 개발",
          "모바일 웹뷰 기반 스탬프 기능과 반응형 화면 구현",
          "운영 오류 재현, 원인 분석, 데이터 확인 및 리포트 작성",
          "Gooroom OS 기반 V-Spacer 망분리 관리 기능 개발 및 현장 구축 지원",
        ],
      },
      {
        title: "사용 기술",
        items: [
          "React, JavaScript, HTML5, CSS3, JSP",
          "Java, Spring MVC, MyBatis, Python, Flask",
          "SQL, MySQL·MariaDB 계열 데이터베이스",
          "Linux, Gooroom OS, PAM, 가상 머신",
        ],
      },
      {
        title: "핵심 역량",
        items: [
          "관리자·백오피스 기능 개발과 반응형 웹 화면 구현",
          "SQL을 활용한 데이터 확인 및 운영 오류 원인 분석",
          "요구사항 분석부터 기능 구현, 테스트, 리포트까지 이어지는 업무 수행",
          "기획자·디자이너·백엔드 개발자와 요구사항을 조율한 협업 경험",
        ],
      },
    ],
  },
];

const wrap = "mx-auto w-full max-w-[1440px]";
const pagePadding = "px-10 max-md:px-5";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SystemVisual() {
  return (
    <div className="relative h-full min-h-[520px] overflow-hidden bg-[#081322] text-slate-100 max-md:min-h-[430px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgba(59,130,246,.32),transparent_28%),radial-gradient(circle_at_24%_82%,rgba(14,165,233,.2),transparent_32%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(96,165,250,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,.22)_1px,transparent_1px)] [background-size:48px_48px]" />
      <TerminalWindow>
        <div
          className="flex gap-2 border-b border-slate-700/70 pb-5"
          aria-hidden="true"
        >
          <span className="size-2 rounded-full bg-red-400" />
          <span className="size-2 rounded-full bg-amber-300" />
          <span className="size-2 rounded-full bg-emerald-400" />
        </div>
        <div className="flex items-center gap-4 border-b border-slate-700/70 py-5">
          <div className="relative size-14 shrink-0 overflow-hidden rounded-xl border border-slate-600">
            <Image
              src="/profile.jpg"
              alt="장은재 프로필 사진"
              fill
              sizes="56px"
              className="object-cover object-top"
              priority
            />
          </div>
          <div>
            <strong className="block text-base text-white">장은재</strong>
            <span className="mt-1 block text-xs text-slate-400">
              AI 제품 개발자
            </span>
          </div>
        </div>
        <div className="flex-1 py-5 font-mono text-[13px] leading-7 text-slate-300 max-md:text-xs max-md:leading-6">
          <p>
            <span className="text-violet-300">const</span> 개발자 = &#123;
          </p>
          <p className="pl-4">
            이름: <span className="text-cyan-300">&quot;장은재&quot;</span>,
          </p>
          <p className="pl-4">
            집중 분야:{" "}
            <span className="text-cyan-300">&quot;AI 제품 개발&quot;</span>,
          </p>
          <p className="pl-4">연결: [</p>
          <p className="pl-8 text-cyan-300">
            &quot;모델&quot;, &quot;API&quot;, &quot;웹 서비스&quot;
          </p>
          <p className="pl-4">]</p>
          <p>&#125;</p>
        </div>
        <div className="flex items-center gap-3 border-t border-slate-700/70 pt-5 text-xs text-slate-400">
          <span className="size-2 rounded-full bg-emerald-400" />
          새로운 문제를 제품으로 해결하고 있습니다
        </div>
      </TerminalWindow>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-md">
        <div
          className={classNames(
            wrap,
            pagePadding,
            "flex h-[74px] items-center justify-between",
          )}
        >
          <a href="#top" className="group flex items-center gap-3">
            <span className="relative block h-3 w-8" aria-hidden="true">
              <span className="absolute left-0 top-0 size-2 rounded-full bg-accent transition-transform group-hover:translate-x-6" />
              <span className="absolute bottom-0 right-0 h-1 w-4 rounded-full bg-foreground transition-transform group-hover:-translate-x-4" />
            </span>
            <span>
              <strong className="block text-lg font-black tracking-[-.02em]">
                장은재
              </strong>
              <span className="mt-0.5 block text-[14px] font-medium tracking-[.08em] text-muted">
                풀스택&AI 개발자
              </span>
            </span>
          </a>
          <nav
            className="flex items-center gap-14 text-xs max-md:gap-4"
            aria-label="주요 메뉴"
          >
            <a className="hover:text-accent max-md:hidden" href="#about">
              소개
            </a>
            <a className="hover:text-accent max-md:hidden" href="#work">
              프로젝트
            </a>
            <a
              href="mailto:ejjang2030@gmail.com"
              className="bg-foreground px-6 py-3 text-[10px] font-bold text-background max-md:px-4"
            >
              연락하기 👋
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className={classNames(
          wrap,
          "grid min-h-[520px] grid-cols-2 border-x border-line max-md:grid-cols-1",
        )}
      >
        <div
          className={classNames(
            pagePadding,
            "flex flex-col justify-center border-r border-line py-16 max-md:min-h-[500px] max-md:border-r-0",
          )}
        >
          <p className="mb-4 text-[16px] font-bold tracking-[.2em] text-accent">
            풀스택 · AI 개발자
          </p>
          <h1 className="max-w-xl text-[clamp(42px,5vw,72px)] font-black leading-[1.10] tracking-[-.055em]">
            안녕하세요, <br />
            <span className="highlight-mark">Product Engineer</span>
            <br />
            장은재입니다.
            <br />
          </h1>
          <p className="text-[20px] mt-7 max-w-lg text-base leading-8 text-muted">
            사용자의 문제를 이해하고
            <br /> AI 모델, 안정적인 API, 직관적인 인터페이스를 연결해
            <br />
            실제로 쓰이는 제품을 만듭니다.
          </p>
          <div className="mt-10 flex gap-3">
            <a
              href="#about"
              className="bg-foreground px-7 py-4 text-xs font-bold text-background"
            >
              더 알아보기
            </a>
            <a
              href="#work"
              className="border border-line px-7 py-4 text-xs font-bold transition-colors hover:border-accent"
            >
              프로젝트 보기
            </a>
          </div>
        </div>
        <SystemVisual />
      </section>

      <div
        className="marquee-shell overflow-hidden border-y border-line py-2"
        aria-hidden="true"
      >
        <div className="marquee-track flex w-max whitespace-nowrap text-[clamp(52px,8vw,122px)] font-black leading-none tracking-[-.06em] text-transparent [-webkit-text-stroke:1px_var(--line)]">
          {[0, 1].map((group) => (
            <span className="pr-12" key={group}>
              {["AI 제품 개발", "풀스택", "시스템 설계", "사용자 경험"].map(
                (label) => (
                  <span key={label}>
                    <span className="marquee-item">{label}</span>
                    <span className="marquee-separator"> · </span>
                  </span>
                ),
              )}
            </span>
          ))}
        </div>
      </div>

      <section
        id="about"
        className={classNames(
          wrap,
          "grid grid-cols-2 border-x border-line max-md:grid-cols-1",
        )}
      >
        <div className="min-h-[560px] border-r border-line max-md:border-r-0">
          <div className="relative h-full min-h-[560px] overflow-hidden bg-surface p-10 max-md:min-h-[420px] max-md:p-5">
            <div className="absolute -left-20 bottom-0 size-[430px] rounded-full border border-line" />
            <div className="absolute -left-4 bottom-16 size-[300px] rounded-full border border-line" />
            <div className="relative z-10 grid h-full place-items-center">
              <div className="w-[76%] rotate-[-4deg] rounded-xl border border-line bg-background p-6 shadow-2xl">
                <p className="font-mono text-[9px] tracking-[.2em] text-accent">
                  작업 방식
                </p>
                <div className="mt-8 space-y-5">
                  {[
                    "01. 문제와 사용자 이해",
                    "02. 작게 설계하고 빠르게 검증",
                    "03. 안정적으로 연결하고 운영",
                  ].map((item) => (
                    <div
                      className="border-b border-line pb-4 text-sm font-bold"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            pagePadding,
            "flex flex-col justify-center py-24",
          )}
        >
          <p className="text-[16px] font-bold tracking-[.2em] text-accent">
            소개 / 01
          </p>
          <h2 className="mt-6 text-[clamp(38px,5vw,68px)] font-black leading-[1.05] tracking-[-.05em]">
            기술보다 먼저,
            <br />
            문제를 봅니다.
          </h2>
          <p className="mt-8 max-w-xl text-base leading-8 text-muted">
            좋은 제품은 기술의 수보다 해결하는 문제의 선명함에서 시작한다고
            믿습니다. 프론트엔드와 백엔드, AI와 시스템의 경계를 나누지 않고 제품
            전체를 바라봅니다.
          </p>
          <a
            href="mailto:ejjang2030@gmail.com"
            className="mt-10 flex w-fit items-center gap-8 border-b border-accent pb-2 text-sm font-bold"
          >
            함께 이야기하기 <Arrow />
          </a>
        </div>
      </section>

      <section id="work" className="border-y border-line py-24 max-md:py-16">
        <div className={classNames(wrap, pagePadding)}>
          <div className="flex items-end justify-between gap-8 max-md:block">
            <div>
              <p className="text-[16px] font-bold tracking-[.2em] text-accent">
                선택한 작업 / 02
              </p>
              <h2 className="mt-5 text-[clamp(42px,6vw,82px)] font-black tracking-[-.055em]">
                진행한 프로젝트
              </h2>
            </div>
          </div>
          <div className="mt-16 grid max-w-[460px] grid-cols-1">
            {projects.map((project) => (
              <Link
                href={project.href}
                key={project.index}
                className="group flex min-h-[580px] flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
              >
                <div className="h-[220px] overflow-hidden border-b border-line bg-[#081322]">
                  <Image
                    src={project.image.src}
                    width={project.image.width}
                    height={project.image.height}
                    alt={project.image.alt}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 460px"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-accent">
                      {project.index}
                    </span>
                    <p className="text-[10px] font-bold tracking-[.14em] text-muted">
                      {project.category}
                    </p>
                  </div>
                  <h3 className="mt-6 text-[clamp(25px,2.5vw,36px)] font-black leading-tight tracking-[-.04em]">
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-muted">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-line px-3 py-1.5 text-[10px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-line pt-6 text-sm font-bold">
                    <span>프로젝트 상세 보기</span>
                    <span className="text-xl text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                      <Arrow />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line py-24 max-md:py-16">
        <div className={classNames(wrap, pagePadding)}>
          <p className="text-[16px] font-bold tracking-[.2em] text-accent">
            경험 / 03
          </p>
          <div className="mt-6 flex flex-col gap-14">
            <div>
              <h2 className="text-[clamp(38px,5vw,68px)] font-black leading-[1.05] tracking-[-.05em]">
                서비스와 현장을
                <br />
                함께 경험했습니다.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted">
                운영 중인 웹서비스부터 보안이 중요한 현장 시스템, 의료 AI
                제품까지 서로 다른 환경에서 문제를 파악하고 구현했습니다.
              </p>
            </div>
            <div className="border-t border-line">
              {experiences.map((experience) => (
                <article
                  key={experience.organization}
                  className="grid grid-cols-[160px_1fr] gap-8 border-b border-line py-8 max-md:grid-cols-1 max-md:gap-3"
                >
                  <span className="font-mono text-sm text-accent">
                    {experience.period}
                  </span>
                  <div>
                    <div className="flex items-baseline justify-between gap-4 max-sm:block">
                      <h3 className="text-2xl font-black">
                        {experience.organization}
                      </h3>
                      <span className="text-sm font-bold text-muted">
                        {experience.role}
                      </span>
                    </div>
                    <p className="mt-5 text-base leading-8 text-muted">
                      {experience.description}
                    </p>
                    <div className="mt-7 space-y-8 rounded-xl border border-line bg-surface p-7 max-md:p-5">
                      {experience.resumeSections.map(
                        (section, sectionIndex) => (
                          <section
                            className={classNames(
                              sectionIndex > 0 && "border-t border-line pt-8",
                            )}
                            key={section.title}
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-sm font-bold text-accent">
                                {String(sectionIndex + 1).padStart(2, "0")}
                              </span>
                              <h4 className="text-lg font-black">
                                {section.title}
                              </h4>
                            </div>
                            <ul className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3 max-lg:grid-cols-1">
                              {section.items.map((item) => (
                                <li
                                  className="flex gap-3 text-sm leading-7 text-muted"
                                  key={item}
                                >
                                  <span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-accent" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </section>
                        ),
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="learning"
        className="border-b border-line py-24 max-md:py-16"
      >
        <div className={classNames(wrap, pagePadding)}>
          <div className="flex flex-col gap-12">
            <div>
              <p className="text-[16px] font-bold tracking-[.2em] text-accent">
                배움과 기반 / 04
              </p>
              <h2 className="mt-6 text-[clamp(36px,4.5vw,60px)] font-black leading-[1.08] tracking-[-.05em]">
                낯선 분야도
                <br />
                구조화하며 배웁니다.
              </h2>
            </div>
            <LearningCredentials />
          </div>
        </div>
      </section>

      <section
        className={classNames(
          wrap,
          "grid grid-cols-2 border-x border-line max-md:grid-cols-1",
        )}
      >
        <div
          className={classNames(
            pagePadding,
            "border-r border-line py-24 max-md:border-r-0",
          )}
        >
          <p className="text-[16px] font-bold tracking-[.2em] text-accent">
            주요 스킬 / 05
          </p>
          <h2 className="mt-6 text-[clamp(38px,5vw,68px)] font-black leading-[1.05] tracking-[-.05em]">
            제품을 완성하는
            <br />
            기술 스택.
          </h2>
        </div>
        <div className="py-10">
          {skillGroups.map(([title, skills], index) => (
            <div
              key={title as string}
              className="border-b border-line px-10 py-7 first:border-t max-md:px-5"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-black">{title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {(skills as string[]).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:bg-accent/10 hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className={classNames(wrap, pagePadding, "py-28 text-center")}>
          <p className="text-[16px] font-bold tracking-[.2em] text-accent">
            함께할 프로젝트가 있나요?
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(32px,4.5vw,62px)] font-black leading-[1.08] tracking-[-.13em]">
            좋은 문제를 함께 풀고,
            <br />
            <span className="text-accent">
              실제로 쓰이는 제품을 만들고 싶습니다.
            </span>
          </h2>
          <a
            href="mailto:ejjang2030@gmail.com"
            className="mt-12 inline-flex items-center gap-8 bg-accent px-7 py-4 text-sm font-bold text-button-text"
          >
            대화 시작하기 <Arrow />
          </a>
        </div>
      </section>

      <footer className="border-t border-line">
        <div
          className={classNames(
            wrap,
            pagePadding,
            "flex h-24 items-center justify-between text-[10px] text-muted",
          )}
        >
          <span>© 2026 EUNJAE JANG</span>
          <div className="flex text-[16px] gap-6">
            <a href="https://github.com/ejjang2030">깃허브</a>
          </div>
        </div>
      </footer>
      <a
        href="#top"
        aria-label="페이지 맨 위로 이동"
        className="fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full border border-line bg-foreground text-xl text-background shadow-lg transition-all hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-button-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <span aria-hidden="true">↑</span>
      </a>
    </main>
  );
}
