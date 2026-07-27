import ThemeToggle from "./components/theme-toggle";

const projects = [
  {
    number: "01",
    title: "AI 기반 정신건강 분석",
    description: "qEEG Brain Mapping 데이터를 활용해 정신건강 상태를 분류하고 결과를 직관적으로 보여주는 서비스입니다.",
    tags: ["Next.js", "FastAPI", "PyTorch"],
    href: "#",
  },
  {
    number: "02",
    title: "법무관리 시스템",
    description: "복잡한 법무 업무를 한눈에 파악하고 팀의 진행 상황을 효율적으로 관리하는 대시보드입니다.",
    tags: ["React", "TypeScript", "PostgreSQL"],
    href: "#",
  },
  {
    number: "03",
    title: "Linux 보안 시스템",
    description: "Gooroom OS, PAM, systemd와 데이터베이스 복제를 활용한 안정적인 망분리 보안 환경입니다.",
    tags: ["Linux", "MariaDB", "Docker"],
    href: "#",
  },
];

const skills = [
  { group: "Frontend", items: "React · Next.js · TypeScript · JavaScript" },
  { group: "Backend", items: "FastAPI · Flask · Spring · PostgreSQL" },
  { group: "AI & System", items: "PyTorch · OpenCV · Linux · Docker" },
];

export default function Home() {
  return (
    <main>
      <header className="nav wrap">
        <a className="logo" href="#top" aria-label="홈">EJ<span>.</span></a>
        <nav aria-label="주요 메뉴">
          <a href="#about">소개</a><a href="#projects">프로젝트</a><a href="#skills">기술</a>
          <ThemeToggle />
          <a className="navCta" href="mailto:ejjang2030@gmail.com">연락하기</a>
        </nav>
      </header>

      <section className="hero wrap" id="top">
        <div className="eyebrow"><span /> AVAILABLE FOR NEW PROJECTS</div>
        <h1>복잡한 문제를<br /><em>명확한 경험</em>으로.</h1>
        <p>안녕하세요, 풀스택 개발자 <strong>장은재</strong>입니다.<br />AI와 견고한 시스템을 연결해 실제로 쓰이는 제품을 만듭니다.</p>
        <div className="heroActions">
          <a className="button primary" href="#projects">프로젝트 보기 <span>↘</span></a>
          <a className="button ghost" href="mailto:ejjang2030@gmail.com">이메일 보내기</a>
        </div>
        <div className="heroVisual" aria-hidden="true"><div className="orbit orbitOne" /><div className="orbit orbitTwo" /><div className="core">EJ</div></div>
        <div className="scroll">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="section wrap about" id="about">
        <div className="sectionLabel">01 / ABOUT</div>
        <div>
          <h2>기술보다 먼저,<br />문제를 이해합니다.</h2>
          <div className="aboutGrid">
            <p>좋은 제품은 화려한 기술이 아니라 정확한 질문에서 시작한다고 믿습니다. 사용자 경험부터 시스템 구조까지 함께 바라보며 오래 쓰일 수 있는 해답을 설계합니다.</p>
            <div className="stats"><div><strong>4+</strong><span>Focus Areas</span></div><div><strong>∞</strong><span>Curiosity</span></div></div>
          </div>
        </div>
      </section>

      <section className="section projects wrap" id="projects">
        <div className="sectionHeading"><div className="sectionLabel">02 / SELECTED WORK</div><h2>선택한 프로젝트</h2></div>
        <div className="projectList">
          {projects.map((project) => (
            <a className="project" href={project.href} key={project.number}>
              <span className="projectNumber">{project.number}</span>
              <div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <span className="projectArrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section wrap skills" id="skills">
        <div><div className="sectionLabel">03 / CAPABILITIES</div><h2>아이디어를 제품으로<br />만드는 기술.</h2></div>
        <div className="skillList">
          {skills.map((skill, index) => <div className="skill" key={skill.group}><span>0{index + 1}</span><div><h3>{skill.group}</h3><p>{skill.items}</p></div></div>)}
        </div>
      </section>

      <section className="contact wrap">
        <span>HAVE A PROJECT IN MIND?</span>
        <h2>함께 멋진 것을<br /><em>만들어 볼까요?</em></h2>
        <a href="mailto:ejjang2030@gmail.com">ejjang2030@gmail.com <span>↗</span></a>
      </section>

      <footer className="wrap"><a className="logo" href="#top">EJ<span>.</span></a><p>© 2026 Eunjae Jang. Built with Next.js.</p><div><a href="#">GitHub</a><a href="#">LinkedIn</a></div></footer>
    </main>
  );
}
