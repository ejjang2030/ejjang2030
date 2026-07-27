import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import ThemeToggle from "../../components/theme-toggle";

export const metadata: Metadata = {
  title: "뉴로엔 ENIT-AI | 장은재 포트폴리오",
  description: "qEEG 분류 모델, AI 리포트, 의료진용 웹 서비스와 보안 인프라를 구축한 ENIT-AI 프로젝트입니다.",
};

const wrap = "mx-auto w-full max-w-[1180px] px-10 max-md:px-5";
const label = "text-[10px] font-bold tracking-[.2em] text-accent";
const card = "rounded-xl border border-line bg-surface";

const responsibilities = [
  ["01", "qEEG 분류 모델 실험", "DeepCluster, 패치 기반 특징 추출, 데이터 이진화와 5단계 합성곱 전처리, BOSS 방식의 교사-학생 자기 증류를 실험했습니다."],
  ["02", "AI 리포트 설계", "분류 결과를 기반으로 Llama 3가 분석 문장, 요약 진단, 권고사항과 주의사항을 생성하는 흐름을 설계했습니다."],
  ["03", "의료진용 웹 서비스", "환자 정보와 qEEG 이미지 입력, 전처리 진행 상태, 품질 검사, 분류 결과, PDF 리포트 생성을 하나의 흐름으로 구현했습니다."],
  ["04", "분산 시스템과 보안", "병원 내부망의 민감 데이터를 외부와 분리하고 MinIO, 중계 API, Cloudflare, GPU 서버를 연결하는 구조를 설계했습니다."],
];

const decisionLogs = [
  {
    number: "01",
    title: "정답이 없는 데이터에서 무엇부터 학습시킬 것인가",
    context: "초기 qEEG 데이터에는 바로 사용할 수 있는 라벨이 충분하지 않았습니다. 지도 학습만 기다리면 제품 검증 자체가 늦어질 수 있는 상황이었습니다.",
    decision: "먼저 DeepCluster로 특징을 만들고 KMeans의 의사 라벨을 이용해 학습하는 방향을 선택했습니다. 실루엣 점수를 함께 보면서 군집이 실제로 분리되는지 확인했습니다.",
    learning: "손실값만 낮아지는 것은 좋은 모델의 증거가 아니었습니다. 의료 도메인에서는 모델이 무엇을 기준으로 묶는지 전문가와 함께 해석할 수 있는 관찰 지표가 필요하다는 점을 배웠습니다.",
  },
  {
    number: "02",
    title: "특징 붕괴를 실패로 끝내지 않고 다음 실험의 조건으로 바꾸기",
    context: "초기 학습에서는 손실과 실루엣 점수가 크게 흔들리고 모든 특징이 비슷해지는 붕괴가 반복됐습니다.",
    decision: "고해상도 이미지를 패치로 나누어 전체·지역 특징을 함께 학습하고, 이진화 전처리와 가중치 초기화, 5단계 합성곱 블록을 차례로 적용했습니다. 이후 교사-학생 자기 증류, 신뢰도 상위 70% 표본 선택, 체크포인트 복구를 추가했습니다.",
    learning: "한 번에 복잡한 구조를 넣기보다 전처리, 표현 방식, 학습 안정화 장치를 하나씩 분리해 실험해야 원인을 설명할 수 있었습니다. 실패한 실험도 다음 실험의 기준선을 만드는 중요한 결과였습니다.",
  },
  {
    number: "03",
    title: "성능보다 먼저 의료 데이터가 머물 장소를 결정하기",
    context: "GPU 서버로 서비스를 옮기면 연산은 쉬워지지만 민감한 qEEG 원본이 외부 환경에 함께 놓이는 문제가 생겼습니다.",
    decision: "원본 의료 데이터는 병원 내부 Ubuntu 서버의 MinIO에 보관하고, 외부에서는 중계 API를 통해 허용된 범위만 조회하도록 설계했습니다. Presigned URL과 Cloudflare의 HTTPS 연결을 함께 고려했습니다.",
    learning: "의료 서비스의 아키텍처는 가장 빠른 구성이 아니라 데이터의 경계를 가장 명확히 설명할 수 있는 구성이어야 했습니다. 보안은 마지막에 붙이는 기능이 아니라 서버 배치를 결정하는 첫 조건이었습니다.",
  },
  {
    number: "04",
    title: "이상적인 구성과 실제 네트워크 조건 사이에서 타협하기",
    context: "GPU 서버가 병원 내부 MinIO의 데이터를 필요할 때마다 읽는 구조를 원했지만 공유기, Docker 네트워크, 대량 패킷과 물리적 환경의 제한이 있었습니다.",
    decision: "당장 가능한 범위에서는 정제된 데이터를 옮겨 사용하면서, 장기적으로 조회 전용 중계 API와 내부 서브도메인을 통해 필요한 데이터만 안전하게 요청하는 구조를 발전시켰습니다.",
    learning: "구성도에 선을 하나 긋는 것과 실제 네트워크를 연결하는 것은 전혀 다른 문제였습니다. 제약을 숨기기보다 현재 가능한 방식과 다음 개선 지점을 명확히 분리하는 것이 중요했습니다.",
  },
  {
    number: "05",
    title: "LLM을 어디에서 실행해야 지속 가능한가",
    context: "Ubuntu 서버에서 Llama 3를 검증했지만 하드웨어 자원과 의료 데이터 접근 범위를 함께 고려해야 했습니다.",
    decision: "더 나은 메모리 환경을 가진 Mac Mini로 LLM을 분리하고, 중계 API를 통해 분석에 필요한 정보만 전달하는 방향을 선택했습니다. 분류 모델과 LLM 리포트 생성도 독립된 단계로 유지했습니다.",
    learning: "모델 선택만큼 중요한 것은 모델이 실행되는 위치와 실패했을 때 다른 기능에 미치는 영향이었습니다. 독립적으로 교체하고 확장할 수 있는 경계가 제품 운영에 더 유리했습니다.",
  },
];

const serviceScreens = [
  { src: "/projects/neuroen/patient-input.jpg", width: 4014, height: 2473, title: "환자 정보와 qEEG 이미지 입력", description: "환자 기본 정보와 눈을 감은 상태·뜬 상태의 qEEG 이미지를 입력하는 화면" },
  { src: "/projects/neuroen/process-steps.jpg", width: 4014, height: 2407, title: "qEEG 분석 진행 과정", description: "주파수 분해, 회색조 변환, 품질 검사와 분류 상태를 단계별로 확인하는 화면" },
  { src: "/projects/neuroen/processed-images.jpg", width: 4014, height: 3175, title: "전처리 이미지 확인", description: "원본, 주파수 분해 결과와 회색조 변환 결과를 비교하는 화면" },
  { src: "/projects/neuroen/analysis-results.jpg", width: 4014, height: 6172, title: "AI 분석 결과", description: "품질 검사와 분류 확률, 세부 결과를 확인하고 PDF 리포트를 생성하는 화면" },
];

function Arrow({ direction = "right" }: { direction?: "right" | "down" }) {
  return <span className={classNames("font-mono text-lg text-accent", direction === "down" && "rotate-90")}>→</span>;
}

function Node({ title, subtitle, tone = "default" }: { title: string; subtitle?: string; tone?: "default" | "accent" | "secure" }) {
  return (
    <div className={classNames("rounded-lg border p-3 text-center", {
      "border-line bg-background": tone === "default",
      "border-accent/50 bg-accent/10": tone === "accent",
      "border-cyan-500/40 bg-cyan-500/10": tone === "secure",
    })}>
      <strong className="block text-xs">{title}</strong>{subtitle && <span className="mt-1 block text-[9px] leading-4 text-muted">{subtitle}</span>}
    </div>
  );
}

function ArchitectureDiagram() {
  return (
    <div className={classNames(card, "overflow-hidden p-6 max-md:p-4")}>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3"><div><p className={label}>최종 시스템 구성</p><h3 className="mt-2 text-2xl font-black">의료 데이터와 AI 연산을 분리한 구조</h3></div><div className="flex gap-3 text-[9px] text-muted"><span className="flex items-center gap-1"><i className="size-2 rounded-sm bg-cyan-500/40" />병원 내부망</span><span className="flex items-center gap-1"><i className="size-2 rounded-sm bg-accent/40" />외부 GPU 서버</span></div></div>

      <div className="grid grid-cols-[1fr_70px_1.1fr] items-stretch gap-3 max-lg:grid-cols-1">
        <section className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4">
          <div className="mb-4 flex items-center justify-between"><strong className="text-sm">병원 내부망</strong><span className="rounded-full border border-cyan-500/30 px-2 py-1 text-[8px] text-cyan-500">민감 데이터 보호 영역</span></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2 rounded-lg border border-line p-3"><p className="text-[9px] font-bold text-muted">Ubuntu 서버</p><Node title="의료 데이터 저장소" subtitle="qEEG 원본 데이터" /><div className="text-center text-accent">↕</div><Node title="MinIO" subtitle="암호화 객체 저장소" tone="secure" /><div className="text-center text-accent">↕</div><Node title="중계 API" subtitle="조회 범위 제한" tone="secure" /></div>
            <div className="flex flex-col justify-center gap-3 rounded-lg border border-line p-3"><p className="text-[9px] font-bold text-muted">Mac Mini</p><Node title="Llama 3" subtitle="qEEG 분석 리포트 생성" tone="secure" /><div className="text-center text-accent">↕</div><Node title="중계 API 연결" subtitle="필요한 데이터만 요청" /></div>
          </div>
        </section>

        <div className="flex flex-col items-center justify-center gap-2 max-lg:flex-row"><span className="rounded-full border border-line bg-background px-3 py-2 text-[9px] font-bold">Cloudflare</span><Arrow /><span className="text-center text-[8px] leading-4 text-muted">HTTPS<br />보안 연결</span></div>

        <section className="rounded-xl border border-accent/30 bg-accent/5 p-4">
          <div className="mb-4 flex items-center justify-between"><strong className="text-sm">GPU 서버 · IDC</strong><span className="rounded-full border border-accent/30 px-2 py-1 text-[8px] text-accent">외부 서비스 영역</span></div>
          <div className="grid grid-cols-[.8fr_30px_1fr] items-center gap-2 max-md:grid-cols-1">
            <div className="space-y-3 rounded-lg border border-line p-3"><p className="text-[9px] font-bold text-muted">웹 서비스 · Docker</p><Node title="React 프론트엔드" subtitle="의료진 사용자 화면" tone="accent" /><Node title="FastAPI 백엔드" subtitle="분석 작업과 데이터 흐름 제어" tone="accent" /><Node title="데이터베이스" subtitle="환자·분석 메타데이터" /></div>
            <div className="text-center"><Arrow /></div>
            <div className="space-y-3 rounded-lg border border-line p-3"><p className="text-[9px] font-bold text-muted">AI 서빙 · Docker</p><Node title="qEEG 분류 서버" subtitle="DeepCluster + BOSS" tone="accent" /><div className="grid grid-cols-3 gap-1">{["모델 1", "모델 2", "모델 3"].map((model) => <span key={model} className="rounded border border-line p-2 text-center text-[8px] text-muted">{model}</span>)}</div><Node title="GPU 연산" subtitle="모델 학습과 추론" /></div>
          </div>
          <div className="mt-3 flex items-center justify-center gap-3 rounded-lg border border-line bg-background p-3 text-[9px]"><span>의료진</span><Arrow /><span className="font-bold text-accent">enit.ai</span><Arrow /><span>Cloudflare</span><Arrow /><span>웹 서비스</span></div>
        </section>
      </div>
      <p className="mt-5 text-[10px] leading-5 text-muted">원본 qEEG 의료 데이터는 병원 내부망에 보관하고, 외부 GPU 서버는 중계 API를 통해 허용된 데이터만 조회하도록 설계했습니다. 두 서비스 경로는 Cloudflare를 통해 HTTPS로 보호됩니다.</p>
    </div>
  );
}

const evolutionStages = [
  { version: "초기 구성", summary: "병원 내부 Mac Mini 한 대에서 모든 기능을 실행", change: "내부망 전용 · AI 모델 파일 직접 참조", zones: [
    { name: "병원 내부 Mac Mini", tone: "secure", nodes: ["데이터베이스", "백엔드", "프론트엔드", "AI 모델"] },
    { name: "사용자", tone: "default", nodes: ["병원 내부 접속"] },
  ] },
  { version: "버전 2", summary: "웹과 AI 연산을 GPU 서버로 이전하고 의료 데이터를 분리", change: "GPU 서버 도입 · MinIO 내부 저장소 구축", zones: [
    { name: "병원 내부망", tone: "secure", nodes: ["Ubuntu 서버", "MinIO", "qEEG 데이터"] },
    { name: "GPU 서버", tone: "accent", nodes: ["React", "FastAPI", "AI 모델"] },
  ] },
  { version: "버전 3", summary: "Cloudflare와 중계 API로 외부·내부 연결을 보호", change: "HTTPS 적용 · 조회 전용 중계 · Llama 3 검증", zones: [
    { name: "병원 Ubuntu", tone: "secure", nodes: ["MinIO", "중계 API", "Llama 3"] },
    { name: "보안 연결", tone: "default", nodes: ["Cloudflare", "HTTPS"] },
    { name: "GPU 서버", tone: "accent", nodes: ["웹 서비스", "DB", "AI 서빙"] },
  ] },
  { version: "버전 4", summary: "LLM을 Mac Mini로 분리하고 두 서비스 경로를 정리", change: "LLM 성능 확장 · enit.ai / in.enit.ai 분리", zones: [
    { name: "병원 내부망", tone: "secure", nodes: ["MinIO", "중계 API", "Mac Mini LLM"] },
    { name: "Cloudflare", tone: "default", nodes: ["in.enit.ai", "enit.ai"] },
    { name: "GPU 서버", tone: "accent", nodes: ["프론트엔드", "백엔드·DB", "AI 모델 서버"] },
  ] },
] as const;

function ArchitectureEvolution() {
  return (
    <div>
      <div className="mb-10 grid grid-cols-[.8fr_1.2fr] gap-12 max-md:grid-cols-1 max-md:gap-4"><div><p className={label}>시스템 발전 과정 / 04</p><h2 className="mt-5 text-[clamp(32px,5vw,58px)] font-black leading-[1.08] tracking-[-.045em]">필요에 따라<br />구조를 진화시켰습니다.</h2></div><p className="self-end text-sm leading-7 text-muted">단일 내부 서버에서 시작해 의료 데이터 보관과 AI 연산을 분리하고, 보안 중계 계층과 전용 LLM 서버를 더하는 방향으로 발전했습니다.</p></div>
      <div className="relative grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-md:grid-cols-1">
        <div className="absolute left-[10%] right-[10%] top-5 h-px bg-line max-xl:hidden" aria-hidden="true" />
        {evolutionStages.map((stage, stageIndex) => (
          <article className={classNames(card, "relative overflow-hidden p-5")} key={stage.version}>
            <div className="relative z-10 flex items-center justify-between"><span className="grid size-10 place-items-center rounded-full border border-accent bg-background font-mono text-[10px] font-bold text-accent">0{stageIndex + 1}</span>{stageIndex < evolutionStages.length - 1 && <span className="text-accent max-xl:hidden">→</span>}</div>
            <h3 className="mt-5 text-lg font-black">{stage.version}</h3><p className="mt-2 min-h-12 text-xs leading-5 text-muted">{stage.summary}</p>
            <div className="mt-5 space-y-2 rounded-lg border border-line bg-background p-3">
              {stage.zones.map((zone, zoneIndex) => <div key={zone.name}><div className={classNames("rounded-md border p-2", { "border-cyan-500/30 bg-cyan-500/5": zone.tone === "secure", "border-accent/30 bg-accent/5": zone.tone === "accent", "border-line": zone.tone === "default" })}><p className="mb-2 text-[8px] font-bold text-muted">{zone.name}</p><div className="flex flex-wrap gap-1">{zone.nodes.map((node) => <span className="rounded border border-line bg-background px-2 py-1 text-[8px]" key={node}>{node}</span>)}</div></div>{zoneIndex < stage.zones.length - 1 && <div className="py-1 text-center text-xs text-accent">↓</div>}</div>)}
            </div>
            <p className="mt-4 border-t border-line pt-4 text-[9px] font-bold leading-4 text-accent">{stage.change}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function DecisionJournal() {
  return (
    <div>
      <div className="grid grid-cols-[.75fr_1.25fr] gap-16 max-md:grid-cols-1 max-md:gap-5"><div><p className={label}>설계와 실험의 기록 / 05</p><h2 className="mt-5 text-[clamp(36px,5vw,64px)] font-black leading-[1.06] tracking-[-.05em]">결과보다 중요한<br />결정의 이유.</h2></div><div className="self-end"><p className="text-base leading-8 text-muted">완성된 화면과 구성도만으로는 프로젝트에서 어떤 문제를 만났고 왜 방향을 바꿨는지 드러나지 않습니다. 아래에는 개발 과정에서 실제로 고민했던 선택과 그 선택을 통해 배운 점을 정리했습니다.</p></div></div>
      <div className="mt-14 border-t border-line">
        {decisionLogs.map((log) => (
          <article key={log.number} className="grid grid-cols-[70px_.75fr_1.25fr] gap-8 border-b border-line py-10 max-lg:grid-cols-[50px_1fr] max-md:gap-4">
            <span className="font-mono text-sm font-bold text-accent">{log.number}</span>
            <h3 className="text-xl font-black leading-8 max-lg:col-start-2">{log.title}</h3>
            <div className="space-y-5 max-lg:col-start-2">
              <div><strong className="text-xs text-accent">마주한 문제</strong><p className="mt-2 text-sm leading-7 text-muted">{log.context}</p></div>
              <div><strong className="text-xs text-accent">내가 선택한 방향</strong><p className="mt-2 text-sm leading-7 text-muted">{log.decision}</p></div>
              <div className="rounded-lg border border-line bg-surface p-5"><strong className="text-xs">이 과정에서 배운 점</strong><p className="mt-2 text-sm leading-7 text-muted">{log.learning}</p></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ProductFlow() {
  const steps = ["환자 정보·qEEG 입력", "주파수 분해·전처리", "품질 검사", "AI 패턴 분류", "LLM 분석 리포트", "PDF 결과 제공"];
  return <div className="grid grid-cols-6 gap-2 max-lg:grid-cols-3 max-md:grid-cols-2">{steps.map((step, index) => <div className="relative" key={step}><div className={classNames(card, "h-full p-4")}><span className="font-mono text-[9px] text-accent">0{index + 1}</span><p className="mt-4 text-xs font-bold leading-5">{step}</p></div>{index < steps.length - 1 && <span className="absolute -right-2 top-1/2 z-10 text-accent max-lg:hidden">→</span>}</div>)}</div>;
}

function InterfacePreview() {
  return <div className={classNames(card, "overflow-hidden")}><div className="flex h-10 items-center gap-2 border-b border-line px-4"><span className="size-2 rounded-full bg-red-400" /><span className="size-2 rounded-full bg-amber-400" /><span className="size-2 rounded-full bg-emerald-400" /><span className="ml-3 text-[9px] text-muted">ENIT-AI · 분석 진행 화면</span></div><div className="grid grid-cols-[190px_1fr] gap-4 p-5 max-md:grid-cols-1"><aside className="space-y-3"><div className="rounded-lg border border-line p-4"><p className="text-xs font-bold">환자 정보</p><div className="mt-3 grid grid-cols-2 gap-2 text-[9px] text-muted"><span>나이 · 29</span><span>성별 · 남</span></div></div><div className="rounded-lg border border-line p-4"><p className="text-xs font-bold">전체 진행률</p><div className="mt-3 h-1.5 rounded bg-line"><div className="h-full w-full rounded bg-accent" /></div><p className="mt-3 text-[9px] text-accent">4 / 4 완료</p></div></aside><div className="space-y-2">{["주파수 분해", "회색조 변환", "품질 검사", "패턴 분류"].map((step, index) => <div className="flex items-center gap-3 rounded-lg border border-line p-4" key={step}><span className="grid size-6 place-items-center rounded-full bg-accent/15 text-[9px] font-bold text-accent">{index + 1}</span><strong className="text-xs">{step}</strong><span className="ml-auto rounded-full bg-emerald-500/10 px-2 py-1 text-[8px] text-emerald-500">완료</span></div>)}</div></div></div>;
}

function ServiceGallery() {
  return (
    <div className="mt-16">
      <div className="mb-8 flex items-end justify-between gap-6 max-md:block"><div><p className={label}>실제 웹 서비스 화면</p><h3 className="mt-3 text-2xl font-black">ENIT-AI 사용 흐름</h3></div><p className="max-w-sm text-xs leading-6 text-muted max-md:mt-3">이미지를 누르면 원본 크기로 확인할 수 있습니다.</p></div>
      <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
        {serviceScreens.map((screen, index) => (
          <figure key={screen.src} className={classNames(card, "overflow-hidden", index === 3 && "col-span-2 max-md:col-span-1")}>
            <a href={screen.src} target="_blank" rel="noreferrer" className="group block overflow-hidden border-b border-line bg-white">
              <Image src={screen.src} width={screen.width} height={screen.height} alt={screen.title} className={classNames("h-auto w-full transition-transform duration-500 group-hover:scale-[1.01]", index === 3 && "max-h-[760px] object-cover object-top")} sizes={index === 3 ? "(max-width: 768px) 100vw, 1180px" : "(max-width: 768px) 100vw, 590px"} />
            </a>
            <figcaption className="p-5"><span className="font-mono text-[9px] text-accent">화면 0{index + 1}</span><h4 className="mt-2 text-sm font-bold">{screen.title}</h4><p className="mt-2 text-[11px] leading-5 text-muted">{screen.description}</p></figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function NeuroenProjectPage() {
  return (
    <main className="project-detail">
      <header className="border-b border-line"><div className={classNames(wrap, "flex h-[74px] items-center justify-between")}><Link href="/" className="text-xs font-bold">← 포트폴리오로 돌아가기</Link><ThemeToggle /></div></header>

      <section className="border-b border-line py-24 max-md:py-16"><div className={wrap}><div className="flex flex-wrap gap-2"><span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-[9px] font-bold text-accent">최근 프로젝트</span><span className="rounded-full border border-line px-3 py-1.5 text-[9px] text-muted">2025.03 — 2025.05</span></div><p className={classNames(label, "mt-10")}>뉴로엔 × 이지브레인</p><h1 className="mt-5 max-w-5xl text-[clamp(48px,8vw,104px)] font-black leading-[.95] tracking-[-.065em]">qEEG 분석을<br /><span className="text-accent">의료 서비스로.</span></h1><p className="mt-10 max-w-2xl text-base leading-8 text-muted">라벨 없는 qEEG 데이터에서 의미 있는 패턴을 찾는 모델 실험부터 의료진이 실제로 사용할 수 있는 웹 애플리케이션, 민감한 의료 데이터를 보호하는 분산 인프라까지 ENIT-AI의 기반을 구축한 프로젝트입니다.</p><div className="mt-12 grid grid-cols-4 border-y border-line max-md:grid-cols-2">{[["기간", "2025.03 — 2025.05"], ["분야", "의료 AI · 풀스택"], ["조직", "뉴로엔 · 이지브레인"], ["형태", "초기 서비스 기반 구축"]].map(([key, value]) => <div className="border-r border-line px-5 py-6 last:border-r-0 max-md:border-b" key={key}><span className="text-[9px] text-muted">{key}</span><strong className="mt-2 block text-xs">{value}</strong></div>)}</div></div></section>

      <section className="py-24 max-md:py-16"><div className={wrap}><p className={label}>프로젝트 개요 / 01</p><div className="mt-6 grid grid-cols-[.7fr_1.3fr] gap-16 max-md:grid-cols-1 max-md:gap-8"><h2 className="text-[clamp(34px,5vw,64px)] font-black leading-[1.05] tracking-[-.05em]">모델 하나가 아닌<br />전체 제품을 만들었습니다.</h2><div className="space-y-5 text-sm leading-7 text-muted"><p>뉴로엔과 정신과 전문 병원 이지브레인이 함께 진행한 프로젝트로, 정신과 의료진이 qEEG 이미지를 입력하고 전처리·품질 검사·AI 분류·분석 리포트까지 확인할 수 있는 흐름을 구축했습니다.</p><p>초기 5명 규모의 팀에서 모델 실험, 웹 서비스, 데이터 보안과 서버 구성을 동시에 진행했으며 투자사 대상 개발 현황 발표가 가능한 수준의 서비스 기반을 완성했습니다.</p></div></div></div></section>

      <section className="border-y border-line py-24 max-md:py-16"><div className={wrap}><p className={label}>서비스 흐름 / 02</p><h2 className="mt-5 mb-10 text-[clamp(32px,5vw,58px)] font-black tracking-[-.045em]">qEEG 입력부터 리포트까지</h2><ProductFlow /><div className="mt-10"><InterfacePreview /></div><ServiceGallery /></div></section>

      <section className="py-24 max-md:py-16"><div className={wrap}><p className={label}>담당 업무 / 03</p><div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line max-md:grid-cols-1">{responsibilities.map(([number, title, description]) => <article className="bg-background p-8" key={number}><span className="font-mono text-[10px] text-accent">{number}</span><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-4 text-sm leading-7 text-muted">{description}</p></article>)}</div></div></section>

      <section className="border-y border-line py-24 max-md:py-16"><div className={wrap}><ArchitectureEvolution /><div className="mt-20 border-t border-line pt-20"><ArchitectureDiagram /></div></div></section>

      <section className="py-24 max-md:py-16"><div className={wrap}><DecisionJournal /></div></section>

      <section className="py-24 max-md:py-16"><div className={wrap}><div className="grid grid-cols-[.7fr_1.3fr] gap-16 max-md:grid-cols-1 max-md:gap-8"><div><p className={label}>기술적 시도 / 05</p><h2 className="mt-5 text-[clamp(32px,5vw,58px)] font-black leading-[1.08] tracking-[-.045em]">불안정한 학습을<br />계속 개선했습니다.</h2></div><div className="space-y-3">{[["초기 문제", "라벨 없는 데이터에서 손실과 실루엣 점수가 흔들리고 특징 붕괴가 발생했습니다."], ["표현력 개선", "고해상도 qEEG 이미지를 패치로 나누고 전체 특징과 지역 특징을 함께 학습했습니다."], ["학습 안정화", "이진화 전처리, 가중치 초기화, 5단계 합성곱 블록과 정규화를 적용했습니다."], ["자기 증류", "BOSS 방식의 교사-학생 구조, 신뢰도 필터링, 체크포인트 복구 로직으로 실험 지속성을 높였습니다."]].map(([title, text]) => <div className={classNames(card, "p-5")} key={title}><strong className="text-xs">{title}</strong><p className="mt-2 text-xs leading-6 text-muted">{text}</p></div>)}</div></div></div></section>

      <section className="border-t border-line"><div className={classNames(wrap, "py-24 text-center")}><p className={label}>다음 프로젝트</p><h2 className="mt-5 text-[clamp(36px,6vw,72px)] font-black tracking-[-.055em]">다른 작업도 살펴보세요.</h2><Link href="/#work" className="mt-10 inline-block bg-accent px-6 py-4 text-xs font-bold text-button-text">프로젝트 목록으로 돌아가기 →</Link></div></section>
    </main>
  );
}
