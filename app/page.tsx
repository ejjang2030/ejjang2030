import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./components/theme-toggle";

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
  {
    index: "02",
    category: "풀스택 · 업무 시스템",
    title: "커머스 운영 시스템",
    description:
      "상품, 주문, 재고와 고객 데이터를 하나의 흐름으로 연결한 업무 관리 시스템입니다.",
    tags: ["Next.js", "Spring", "PostgreSQL"],
    href: "#",
  },
  {
    index: "03",
    category: "AI · 지능형 검색",
    title: "문서 기반 지능형 검색",
    description:
      "문서 안의 정보를 빠르게 검색하고 근거와 함께 답변하는 지능형 검색 서비스입니다.",
    tags: ["LLM", "RAG", "Python"],
    href: "#",
  },
];

const capabilities = [
  ["01", "프론트엔드", "React, Next.js, TypeScript"],
  ["02", "백엔드", "FastAPI, Spring, PostgreSQL"],
  ["03", "AI와 시스템", "PyTorch, OpenCV, Linux, Docker"],
];

const wrap = "mx-auto w-full max-w-[1440px]";
const pagePadding = "px-10 max-md:px-5";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SystemVisual() {
  return (
    <div className="relative h-full min-h-[620px] overflow-hidden bg-[#081322] text-slate-100 max-md:min-h-[430px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_26%,rgba(59,130,246,.32),transparent_28%),radial-gradient(circle_at_24%_82%,rgba(14,165,233,.2),transparent_32%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(96,165,250,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,.22)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="absolute left-[8%] top-[12%] w-[58%] rounded-xl border border-blue-300/20 bg-slate-950/60 p-5 shadow-2xl backdrop-blur-sm">
        <div className="mb-6 flex gap-1.5">
          <span className="size-2 rounded-full bg-red-400" />
          <span className="size-2 rounded-full bg-amber-400" />
          <span className="size-2 rounded-full bg-emerald-400" />
        </div>
        <div className="space-y-3 font-mono text-[10px] text-blue-200/75">
          <p>
            <span className="text-cyan-300">const</span> 개발자 = &#123;
          </p>
          <p className="pl-4">
            집중분야:{" "}
            <span className="text-white">&quot;AI 제품 개발&quot;</span>,
          </p>
          <p className="pl-4">
            기술: [
            <span className="text-white">
              &quot;모델&quot;, &quot;API&quot;, &quot;웹&quot;
            </span>
            ],
          </p>
          <p className="pl-4">
            상태: <span className="text-emerald-300">&quot;개발 중&quot;</span>
          </p>
          <p>&#125;</p>
        </div>
      </div>
      <div className="absolute bottom-[13%] right-[7%] w-[56%] rounded-xl border border-slate-600/70 bg-slate-950/85 p-5 shadow-2xl">
        <p className="font-mono text-[9px] tracking-[.18em] text-blue-300">
          실시간 시스템 현황
        </p>
        <div className="mt-5 grid grid-cols-3 gap-2">
          {[
            ["92.9", "mAP50"],
            ["89.3", "F1"],
            ["24/7", "가동"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-md border border-slate-700 p-3">
              <strong className="block text-lg text-white">{value}</strong>
              <span className="text-[8px] text-slate-500">{label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-8">
        <p className="text-[clamp(24px,3vw,42px)] font-black tracking-[-.04em]">
          AI는 제품이 될 때
          <br />
          비로소 가치를 만듭니다.
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="border-b border-line bg-background">
        <div
          className={classNames(
            wrap,
            pagePadding,
            "flex h-[74px] items-center justify-between",
          )}
        >
          <a href="#top" className="flex items-center gap-2 text-sm font-black">
            <span className="grid size-7 place-items-center rounded-md bg-accent text-[10px] text-button-text">
              EJ
            </span>
            개발자 포트폴리오
          </a>
          <nav
            className="flex items-center gap-14 text-xs max-md:gap-4"
            aria-label="주요 메뉴"
          >
            <a className="hover:text-accent max-md:hidden" href="#work">
              프로젝트
            </a>
            <a className="hover:text-accent max-md:hidden" href="#about">
              소개
            </a>
            <a
              className="hover:text-accent max-md:hidden"
              href="mailto:ejjang2030@gmail.com"
            >
              연락처
            </a>
            <ThemeToggle />
            <a
              href="mailto:ejjang2030@gmail.com"
              className="bg-foreground px-6 py-3 text-[10px] font-bold text-background max-md:px-4"
            >
              인사하기 👋
            </a>
          </nav>
        </div>
      </header>

      <section
        id="top"
        className={classNames(
          wrap,
          "grid min-h-[620px] grid-cols-2 border-x border-line max-md:grid-cols-1",
        )}
      >
        <div
          className={classNames(
            pagePadding,
            "flex flex-col justify-center border-r border-line py-20 max-md:min-h-[500px] max-md:border-r-0",
          )}
        >
          <div className="mb-12 grid size-16 place-items-center rounded-full border border-line bg-surface font-mono text-lg font-black text-accent">
            EJ
          </div>
          <p className="mb-4 text-[10px] font-bold tracking-[.2em] text-accent">
            풀스택 · AI 개발자
          </p>
          <h1 className="max-w-xl text-[clamp(42px,5vw,72px)] font-black leading-[1.08] tracking-[-.055em]">
            안녕하세요, 장은재입니다.
            <br />
            <span className="text-muted">AI 제품 개발자</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-8 text-muted">
            사용자의 문제를 이해하고 AI 모델, 안정적인 API, 직관적인
            인터페이스를 연결해 실제로 쓰이는 제품을 만듭니다.
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
        className="overflow-hidden border-y border-line py-2"
        aria-hidden="true"
      >
        <div className="marquee-track flex w-max whitespace-nowrap text-[clamp(52px,8vw,122px)] font-black leading-none tracking-[-.06em] text-transparent [-webkit-text-stroke:1px_var(--line)]">
          <span className="pr-12">AI 제품 개발 · 풀스택 · 시스템 설계 · 사용자 경험 ·</span>
          <span className="pr-12">AI 제품 개발 · 풀스택 · 시스템 설계 · 사용자 경험 ·</span>
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
          <p className="text-[10px] font-bold tracking-[.2em] text-accent">
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
              <p className="text-[10px] font-bold tracking-[.2em] text-accent">
                선택한 작업 / 02
              </p>
              <h2 className="mt-5 text-[clamp(42px,6vw,82px)] font-black tracking-[-.055em]">
                진행한 프로젝트
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-muted max-md:mt-5">
              모델부터 서비스 화면까지 직접 연결하며 완성한 대표 프로젝트입니다.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
            {projects.map((project) => (
              <Link
                href={project.href}
                key={project.index}
                className="group flex min-h-[620px] flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl"
              >
                <div className="h-[220px] overflow-hidden border-b border-line bg-[#081322]">
                  {"image" in project && project.image && (
                    <Image src={project.image.src} width={project.image.width} height={project.image.height} alt={project.image.alt} className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width:768px) 100vw, 380px" />
                  )}
                  {!("image" in project) && <div className="relative grid h-full place-items-center overflow-hidden bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,.3),transparent_35%)]"><div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(96,165,250,.3)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,.3)_1px,transparent_1px)] [background-size:32px_32px]" /><div className="relative rounded-lg border border-blue-300/20 bg-slate-950/70 px-8 py-6 font-mono text-xs text-blue-200">{project.index} / SYSTEM READY</div></div>}
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between"><span className="font-mono text-sm font-bold text-accent">{project.index}</span><p className="text-[10px] font-bold tracking-[.14em] text-muted">{project.category}</p></div>
                  <h3 className="mt-6 text-[clamp(25px,2.5vw,36px)] font-black leading-tight tracking-[-.04em]">{project.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-muted">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-line px-3 py-1.5 text-[10px] text-muted">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-line pt-6 text-sm font-bold"><span>프로젝트 상세 보기</span><span className="text-xl text-accent transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"><Arrow /></span></div>
                </div>
              </Link>
            ))}
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
          <p className="text-[10px] font-bold tracking-[.2em] text-accent">
            주요 역량 / 03
          </p>
          <h2 className="mt-6 text-[clamp(38px,5vw,68px)] font-black leading-[1.05] tracking-[-.05em]">
            아이디어에서
            <br />
            실제 서비스까지.
          </h2>
        </div>
        <div className="py-14">
          {capabilities.map(([number, title, stack]) => (
            <div
              key={number}
              className="grid grid-cols-[60px_1fr] border-b border-line px-10 py-8 first:border-t max-md:px-5"
            >
              <span className="font-mono text-[10px] text-accent">
                {number}
              </span>
              <div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-2 text-xs text-muted">{stack}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line">
        <div className={classNames(wrap, pagePadding, "py-28 text-center")}>
          <p className="text-[10px] font-bold tracking-[.2em] text-accent">
            함께할 프로젝트가 있나요?
          </p>
          <h2 className="mx-auto mt-6 max-w-4xl text-[clamp(44px,7vw,96px)] font-black leading-none tracking-[-.06em]">
            함께 멋진 제품을
            <br />
            <span className="text-accent">만들어 볼까요?</span>
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
          <div className="flex gap-6">
            <a href="#">깃허브</a>
            <a href="#">링크드인</a>
            <a href="#top">맨 위로 ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
