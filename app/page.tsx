import classNames from "classnames";
import ThemeToggle from "./components/theme-toggle";

const projects = [
  {
    number: "01",
    title: "AI 기반 정신건강 분석",
    description:
      "qEEG Brain Mapping 데이터를 활용해 정신건강 상태를 분류하고 결과를 직관적으로 보여주는 서비스입니다.",
    tags: ["Next.js", "FastAPI", "PyTorch"],
    href: "#",
  },
  {
    number: "02",
    title: "법무관리 시스템",
    description:
      "복잡한 법무 업무를 한눈에 파악하고 팀의 진행 상황을 효율적으로 관리하는 대시보드입니다.",
    tags: ["React", "TypeScript", "PostgreSQL"],
    href: "#",
  },
  {
    number: "03",
    title: "Linux 보안 시스템",
    description:
      "Gooroom OS, PAM, systemd와 데이터베이스 복제를 활용한 안정적인 망분리 보안 환경입니다.",
    tags: ["Linux", "MariaDB", "Docker"],
    href: "#",
  },
];

const skills = [
  { group: "Frontend", items: "React · Next.js · TypeScript · JavaScript" },
  { group: "Backend", items: "FastAPI · Flask · Spring · PostgreSQL" },
  { group: "AI & System", items: "PyTorch · OpenCV · Linux · Docker" },
];

const wrap =
  "mx-auto w-[min(1180px,calc(100%-48px))] max-md:w-[min(1180px,calc(100%-32px))]";
const label = "text-[11px] font-bold tracking-[.2em] text-muted";

export default function Home() {
  return (
    <main>
      <header
        className={classNames(wrap, "relative z-10 flex h-[88px] items-center justify-between")}
      >
        <a
          className="text-2xl font-black tracking-[-1px]"
          href="#top"
          aria-label="홈"
        >
          EJ<span className="text-accent">.</span>
        </a>
        <nav
          className="flex items-center gap-[34px] text-sm max-md:gap-[15px]"
          aria-label="주요 메뉴"
        >
          <a
            className="transition-colors hover:text-accent max-md:hidden"
            href="#about"
          >
            소개
          </a>
          <a
            className="transition-colors hover:text-accent max-md:hidden"
            href="#projects"
          >
            프로젝트
          </a>
          <a
            className="transition-colors hover:text-accent max-md:hidden"
            href="#skills"
          >
            기술
          </a>
          <ThemeToggle />
          <a
            className="rounded-full border border-line px-5 py-3 transition-colors hover:border-accent"
            href="mailto:ejjang2030@gmail.com"
          >
            연락하기
          </a>
        </nav>
      </header>

      <section
        className={classNames(wrap, "relative min-h-[calc(100vh-88px)] overflow-hidden pt-[12vh] max-md:pt-[10vh]")}
        id="top"
      >
        <div className={label}>
          <span className="mr-2.5 inline-block size-[7px] rounded-full bg-accent shadow-[0_0_16px_var(--accent)]" />{" "}
          AVAILABLE FOR NEW PROJECTS
        </div>
        <h1 className="my-[26px] max-w-[900px] text-[clamp(56px,8vw,108px)] font-bold leading-[.98] tracking-[-.065em]">
          복잡한 문제를
          <br />
          <em className="not-italic text-accent">명확한 경험</em>으로.
        </h1>
        <p className="text-lg leading-[1.8] text-body-copy max-md:text-[15px]">
          안녕하세요, 풀스택 개발자{" "}
          <strong className="text-foreground">장은재</strong>입니다.
          <br />
          AI와 견고한 시스템을 연결해 실제로 쓰이는 제품을 만듭니다.
        </p>
        <div className="mt-[38px] flex gap-3">
          <a
            className="rounded-sm bg-accent px-[22px] py-4 text-sm font-bold text-button-text"
            href="#projects"
          >
            프로젝트 보기 <span className="ml-5">↘</span>
          </a>
          <a
            className="rounded-sm border border-line px-[22px] py-4 text-sm font-bold transition-colors hover:border-accent"
            href="mailto:ejjang2030@gmail.com"
          >
            이메일 보내기
          </a>
        </div>
        <div
          className="absolute right-[-30px] top-20 size-[460px] opacity-65 max-md:right-[-160px] max-md:top-[170px] max-md:size-[300px]"
          aria-hidden="true"
        >
          <div className="orbit-animation absolute inset-[10%] animate-[orbit-spin_18s_linear_infinite] rounded-full border border-orbit after:absolute after:left-[12%] after:top-[14%] after:size-2.5 after:rounded-full after:bg-accent after:shadow-[0_0_20px_var(--accent)]" />
          <div className="orbit-animation absolute inset-[25%] animate-[orbit-spin_12s_linear_infinite_reverse] rounded-full border border-orbit after:absolute after:left-[12%] after:top-[14%] after:size-2.5 after:rounded-full after:bg-accent after:shadow-[0_0_20px_var(--accent)]" />
          <div className="absolute inset-[41%] grid place-items-center rounded-full border border-orbit-core font-black text-accent">
            EJ
          </div>
        </div>
        <div className="absolute bottom-9 left-0 text-[10px] tracking-[.18em] text-muted">
          SCROLL TO EXPLORE <span className="ml-3 text-accent">↓</span>
        </div>
      </section>

      <section
        className={classNames(wrap, "grid grid-cols-[1fr_3fr] border-t border-line py-[150px] max-md:grid-cols-1 max-md:gap-[60px] max-md:py-[100px]")}
        id="about"
      >
        <div className={label}>01 / ABOUT</div>
        <div>
          <h2 className="mb-[60px] text-[clamp(40px,5vw,68px)] font-bold leading-[1.08] tracking-[-.045em]">
            기술보다 먼저,
            <br />
            문제를 이해합니다.
          </h2>
          <div className="grid grid-cols-[1.4fr_1fr] gap-20 max-md:grid-cols-1 max-md:gap-10">
            <p className="m-0 text-lg leading-[1.9] text-soft-copy">
              좋은 제품은 화려한 기술이 아니라 정확한 질문에서 시작한다고
              믿습니다. 사용자 경험부터 시스템 구조까지 함께 바라보며 오래 쓰일
              수 있는 해답을 설계합니다.
            </p>
            <div className="flex gap-[55px]">
              <div className="flex flex-col">
                <strong className="text-5xl text-accent">4+</strong>
                <span className="mt-2 text-xs text-muted">Focus Areas</span>
              </div>
              <div className="flex flex-col">
                <strong className="text-5xl text-accent">∞</strong>
                <span className="mt-2 text-xs text-muted">Curiosity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={classNames(wrap, "border-t border-line py-[150px] max-md:py-[100px]")}
        id="projects"
      >
        <div className="flex items-end justify-between max-md:block">
          <div className={label}>02 / SELECTED WORK</div>
          <h2 className="mb-10 text-[clamp(40px,5vw,68px)] font-bold leading-[1.08] tracking-[-.045em] max-md:mt-6">
            선택한 프로젝트
          </h2>
        </div>
        <div>
          {projects.map((project) => (
            <a
              className="group grid grid-cols-[80px_1fr_60px] gap-[30px] border-t border-line px-3.5 py-[38px] transition-all last:border-b hover:bg-surface hover:pl-7 max-md:grid-cols-[35px_1fr_25px] max-md:gap-3 max-md:px-0 max-md:py-[30px]"
              href={project.href}
              key={project.number}
            >
              <span className="text-xs text-accent">{project.number}</span>
              <div>
                <h3 className="mb-3 text-[27px] font-bold max-md:text-[21px]">
                  {project.title}
                </h3>
                <p className="mb-5 max-w-[700px] leading-[1.6] text-muted max-md:text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      className="rounded-full border border-line px-2.5 py-1.5 text-[11px] text-tag-copy"
                      key={tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-right text-2xl">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section
        className={classNames(wrap, "grid grid-cols-2 gap-[100px] border-t border-line py-[150px] max-md:grid-cols-1 max-md:gap-[60px] max-md:py-[100px]")}
        id="skills"
      >
        <div>
          <div className={label}>03 / CAPABILITIES</div>
          <h2 className="mt-0 mb-[60px] text-[clamp(40px,5vw,68px)] font-bold leading-[1.08] tracking-[-.045em]">
            아이디어를 제품으로
            <br />
            만드는 기술.
          </h2>
        </div>
        <div>
          {skills.map((skill, index) => (
            <div
              className="grid grid-cols-[45px_1fr] border-t border-line py-7"
              key={skill.group}
            >
              <span className="text-[11px] text-accent">0{index + 1}</span>
              <div>
                <h3 className="mb-2.5 text-[22px] font-bold">{skill.group}</h3>
                <p className="leading-[1.6] text-muted">{skill.items}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={classNames(wrap, "py-40 text-center max-md:py-[110px]")}>
        <span className="text-[11px] tracking-[.22em] text-muted">
          HAVE A PROJECT IN MIND?
        </span>
        <h2 className="my-[28px] mb-[50px] text-[clamp(50px,7vw,90px)] font-bold leading-none tracking-[-.06em]">
          함께 멋진 것을
          <br />
          <em className="not-italic text-accent">만들어 볼까요?</em>
        </h2>
        <a
          className="inline-block border-b border-accent pb-[9px] text-lg"
          href="mailto:ejjang2030@gmail.com"
        >
          ejjang2030@gmail.com <span className="ml-[15px] text-accent">↗</span>
        </a>
      </section>

      <footer
        className={classNames(wrap, "flex min-h-[100px] items-center justify-between border-t border-line text-xs text-muted max-md:flex-wrap max-md:gap-6 max-md:py-[30px]")}
      >
        <a
          className="text-2xl font-black tracking-[-1px] text-foreground"
          href="#top"
        >
          EJ<span className="text-accent">.</span>
        </a>
        <p className="max-md:order-3 max-md:w-full">
          © 2026 Eunjae Jang. Built with Next.js.
        </p>
        <div className="flex gap-6">
          <a className="hover:text-accent" href="#">
            GitHub
          </a>
          <a className="hover:text-accent" href="#">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}
