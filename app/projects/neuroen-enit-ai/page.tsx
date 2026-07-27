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
  { src: "/projects/neuroen/patient-input.jpg", width: 4014, height: 2473, title: "환자 정보와 qEEG 이미지 입력", description: "환자 기본 정보와 눈을 감은 상태·뜬 상태의 qEEG 이미지를 입력하는 화면", purpose: "분석을 시작하기 전에 환자 식별 정보와 두 가지 측정 상태의 qEEG 자료를 한 작업 단위로 묶는 화면입니다.", flow: "의료진은 환자 식별번호, 나이와 성별을 확인한 뒤 눈을 감은 상태와 눈을 뜬 상태의 이미지를 각각 등록합니다. 샘플 데이터로 전체 흐름을 시험할 수도 있습니다.", consideration: "제가 가장 중요하게 본 것은 두 이미지가 서로 바뀌거나 다른 환자 정보와 연결되지 않도록 입력 단계를 명확히 나누는 것이었습니다. 민감한 정보가 분석 목적으로만 사용되고 안전하게 저장된다는 안내도 화면 안에서 확인할 수 있게 했습니다." },
  { src: "/projects/neuroen/process-steps.jpg", width: 4014, height: 2407, title: "qEEG 분석 진행 과정", description: "주파수 분해, 회색조 변환, 품질 검사와 분류 상태를 단계별로 확인하는 화면", purpose: "여러 AI 처리 작업을 하나의 대기 화면으로 숨기지 않고, 현재 어떤 단계가 실행 중인지 보여주는 화면입니다.", flow: "업로드가 끝나면 주파수 분해, 회색조 변환, 품질 검사, 패턴 분류가 순서대로 실행됩니다. 왼쪽에서는 전체 진행률을, 오른쪽에서는 각 단계의 상태를 확인합니다.", consideration: "모델 처리는 시간이 걸리고 중간 실패 가능성도 있으므로 의료진이 화면이 멈췄다고 느끼지 않게 해야 했습니다. 그래서 전체 진행률과 단계별 완료 상태를 동시에 보여주고, 문제가 생겼을 때 어느 단계부터 다시 확인해야 하는지 드러나도록 구성했습니다." },
  { src: "/projects/neuroen/processed-images.jpg", width: 4014, height: 3175, title: "전처리 이미지 확인", description: "원본, 주파수 분해 결과와 회색조 변환 결과를 비교하는 화면", purpose: "AI가 어떤 입력을 받았는지 의료진이 직접 확인할 수 있도록 원본과 중간 처리 결과를 나란히 보여주는 화면입니다.", flow: "눈을 감은 상태와 뜬 상태를 좌우로 비교하고, 원본 이미지에서 주파수 분해와 회색조 변환을 거치며 데이터가 어떻게 바뀌었는지 아래 방향으로 확인합니다.", consideration: "결과 숫자만 제공하면 전처리 오류나 이미지 품질 문제를 발견하기 어렵습니다. 저는 모델의 입력 과정을 숨기지 않고 시각적으로 확인할 수 있게 해, 잘못된 입력을 바탕으로 결과가 생성되는 위험을 줄이고자 했습니다." },
  { src: "/projects/neuroen/analysis-results.jpg", width: 4014, height: 6172, title: "AI 분석 결과", description: "품질 검사와 분류 확률, 세부 결과를 확인하고 PDF 리포트를 생성하는 화면", purpose: "품질 검사와 모델 분류 결과를 한곳에 모아 의료진이 분석 근거를 검토하고 리포트 생성 여부를 결정하는 화면입니다.", flow: "먼저 눈을 감은 상태와 뜬 상태의 잡음 여부와 심각도를 확인합니다. 이후 상위 예측, 전체 세부 확률과 유의 여부를 검토한 뒤 PDF를 내려받거나 분석 리포트를 생성합니다.", consideration: "확률이 높은 항목만 강조하면 결과가 확정 진단처럼 보일 수 있었습니다. 그래서 품질 검사, 상위 결과와 전체 결과를 함께 제공하고 수치를 비교할 수 있게 했습니다. 최종 해석과 리포트 사용 여부는 의료진이 환자 정보와 함께 판단하는 흐름을 유지했습니다." },
];

const systemDiagramImages = [
  { src: "/projects/neuroen/system-v1.jpeg", width: 1147, height: 767, title: "초기 시스템 구성", description: "병원 내부 Mac Mini에서 데이터베이스, 백엔드, 프론트엔드와 AI 모델을 함께 운영한 초기 구조", problem: "처음에는 빠르게 기능을 검증하는 것이 가장 중요했습니다. 별도의 인프라를 만들기보다 기존 Mac Mini 안에 데이터베이스, 웹 서비스와 AI 모델을 모두 두면 개발 속도를 높일 수 있다고 판단했습니다.", decision: "저는 구성 요소 사이의 거리를 줄여 qEEG 입력부터 분석까지 전체 흐름을 먼저 연결했습니다. 외부 공개보다 병원 내부에서 실제 사용 흐름을 검증하는 데 집중했습니다.", next: "한 서버에 모든 기능이 모이면서 연산 자원과 확장성의 한계가 명확해졌고, AI 연산과 의료 데이터 저장 위치를 분리할 필요가 생겼습니다." },
  { src: "/projects/neuroen/system-v2.jpeg", width: 965, height: 1280, title: "버전 2 시스템 구성", description: "GPU 서버로 웹과 AI 연산을 이전하고 병원 내부 Ubuntu 서버에 MinIO 저장소를 분리한 구조", problem: "모델 학습과 추론에는 더 강한 GPU가 필요했지만, 민감한 qEEG 원본을 외부 서버에 함께 보관하는 것은 적절하지 않았습니다.", decision: "제가 선택한 방향은 연산과 저장을 분리하는 것이었습니다. 웹 서비스와 AI 연산은 GPU 서버로 옮기고, 원본 데이터는 병원 내부 Ubuntu 서버의 MinIO에 보관하도록 설계했습니다.", next: "물리적으로 분리하는 것만으로는 충분하지 않았습니다. 외부 서비스가 내부 데이터를 어떤 경로와 권한으로 읽을지에 대한 보안 계층이 추가로 필요했습니다." },
  { src: "/projects/neuroen/system-v3.jpeg", width: 1261, height: 1280, title: "버전 3 시스템 구성", description: "Cloudflare, HTTPS와 중계 API를 추가하고 병원 내부에서 Llama 3를 검증한 구조", problem: "GPU 서버가 MinIO에 직접 접근하도록 열어두면 내부 데이터에 대한 권한 범위가 지나치게 넓어질 수 있었습니다. HTTP 연결과 서비스별 접근 경로도 정리해야 했습니다.", decision: "저는 Cloudflare와 HTTPS를 적용하고, MinIO 앞에 조회 범위를 제한하는 중계 API를 두는 방향을 고민했습니다. 동시에 Ubuntu 서버에서 Llama 3를 실행해 리포트 생성 가능성을 검증했습니다.", next: "보안 경로는 정리됐지만 Ubuntu 서버의 자원으로 더 큰 LLM을 안정적으로 운영하기는 어려웠습니다. LLM 실행 위치를 다시 검토해야 했습니다." },
  { src: "/projects/neuroen/system-v4.jpeg", width: 983, height: 1280, title: "버전 4 시스템 구성", description: "LLM을 Mac Mini로 분리하고 enit.ai와 in.enit.ai의 보안 연결 경로를 정리한 최종 구조", problem: "LLM은 충분한 메모리가 필요했고, 모델 학습을 위해 내부 qEEG 데이터를 대량으로 요청하면 네트워크 패킷이 급증할 가능성도 있었습니다.", decision: "저는 LLM을 메모리 여유가 있는 Mac Mini로 분리하고, 내부 서비스는 in.enit.ai, 외부 웹 서비스는 enit.ai로 경로를 구분했습니다. 필요한 데이터만 중계 API로 전달하는 원칙도 유지했습니다.", next: "최종적으로 의료 데이터의 경계, AI 연산, 웹 서비스와 LLM을 독립적으로 확장할 수 있는 기반을 만들었습니다. 대량 데이터 이동 최적화는 이후 단계의 과제로 남겼습니다." },
];

const modelStages = [
  { version: "모델 버전 1", title: "DeepCluster 기준선", src: "/projects/neuroen/model-v1.jpeg", width: 1280, height: 875, problem: "qEEG 데이터에 충분한 정답 라벨이 없어 일반적인 지도 학습부터 시작하기 어려웠습니다. 우선 데이터 자체에서 반복되는 패턴을 찾을 수 있는 기준선이 필요했습니다.", decision: "저는 ResNet50으로 특징을 추출하고 KMeans가 만든 의사 라벨로 다시 학습하는 DeepCluster 구조를 적용했습니다. 손실값과 함께 실루엣 점수를 관찰해 군집 분리 정도를 확인했습니다.", result: "전체 학습 흐름은 연결했지만 초기 구간에서 특징이 비슷해지는 붕괴와 과적합 경향이 나타났습니다.", next: "전체 이미지를 축소하면 고해상도 qEEG의 작은 영역별 특징이 사라질 수 있다고 보고, 지역 특징을 보존하는 방식을 고민했습니다." },
  { version: "모델 버전 2", title: "패치 기반 특징 추출", src: "/projects/neuroen/model-v2.jpeg", width: 1280, height: 857, problem: "2000×1000 크기의 qEEG 이미지를 한 번에 축소하면 주파수별·영역별 패턴이 충분히 표현되지 않을 가능성이 있었습니다.", decision: "이미지를 200×200 패치로 나누어 지역 특징을 학습하고, 전체 이미지의 전역 특징과 패치의 지역 특징을 함께 결합했습니다. 전역·지역 투영 헤드도 각각 분리했습니다.", result: "특징 벡터가 더 다양한 정보를 담기 시작했고 군집 안정성도 일부 개선됐지만, 학습 초반의 붕괴 가능성은 남아 있었습니다.", next: "모델 구조뿐 아니라 입력의 잡음과 초기 가중치가 학습 불안정을 키우는지 확인할 필요가 있었습니다." },
  { version: "모델 버전 3", title: "이진화와 초기화 안정화", src: "/projects/neuroen/model-v3.jpeg", width: 1280, height: 897, problem: "qEEG 이미지의 색상 범위와 잡음, 무작위 초기 가중치가 군집 중심을 계속 흔드는 원인일 수 있다고 판단했습니다.", decision: "저는 입력을 이진화해 핵심 형태를 강조하고, 합성곱 초기 가중치 범위를 조정했습니다. 특징을 L2 정규화하고 KMeans 초기화 반복 횟수도 늘렸습니다.", result: "초기 에포크에서 붕괴하는 빈도가 줄었고 실루엣 점수와 군집 품질이 이전보다 안정되는 흐름을 확인했습니다.", next: "입력 안정화만으로는 복잡한 qEEG 패턴을 충분히 표현하기 어려워, 특징 추출기 앞단의 깊이를 보강했습니다." },
  { version: "모델 버전 4", title: "5단계 전처리 합성곱 블록", src: "/projects/neuroen/model-v4.jpeg", width: 1280, height: 1057, problem: "기본 ResNet의 첫 합성곱 계층만으로는 qEEG의 세부 구조를 단계적으로 압축하고 학습하기에 표현력이 부족하다고 보았습니다.", decision: "ResNet 앞에 5단계 사용자 정의 합성곱 블록을 추가하고 BatchNorm, ReLU, Dropout을 조합했습니다. 해상도를 점진적으로 줄이며 특징을 전달하도록 설계했습니다.", result: "학습 초반 특징 붕괴가 크게 줄고 의사 라벨의 신뢰도와 군집 품질이 개선되는 방향을 확인했습니다.", next: "모델이 스스로 만든 의사 라벨의 오류를 그대로 다시 학습하는 문제를 줄이기 위해, 더 안정적인 교사 모델이 필요했습니다." },
  { version: "모델 버전 5", title: "BOSS 교사-학생 자기 증류", problem: "의사 라벨에는 불확실한 표본이 섞여 있고 학생 모델이 자신의 오류를 반복 학습할 가능성이 있었습니다. 긴 학습 중 붕괴가 발생하면 실험 전체를 다시 시작해야 하는 문제도 있었습니다.", decision: "저는 교사-학생 자기 증류를 적용하고 군집 중심에 가까운 상위 70% 표본만 학습에 사용했습니다. 실루엣 점수가 기준 이상일 때만 교사를 갱신하고, 상태 저장과 복구 로직을 추가했습니다.", result: "70 에포크 이후 붕괴가 줄고 실루엣 흐름이 안정됐으며, 문제가 생겨도 이전 상태로 돌아가 실험을 이어갈 수 있게 됐습니다.", next: "이후에는 qEEG 도메인에 적합한 증강 방식과 의료진이 해석할 수 있는 평가 기준을 더 정교하게 만드는 과제를 남겼습니다." },
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

function BossModelDiagram() {
  const nodes = ["qEEG 입력", "학생 모델", "KMeans 군집", "신뢰도 상위 70%", "교사 모델 갱신"];
  return <div className="flex h-[520px] flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_center,rgba(59,130,246,.12),transparent_55%)] p-8 max-md:h-auto">{nodes.map((node, index) => <div className="contents" key={node}><div className={classNames("w-full max-w-xs rounded-lg border p-4 text-center text-sm font-bold", index === 4 ? "border-accent bg-accent/10 text-accent" : "border-line bg-background")}>{node}</div>{index < nodes.length - 1 && <span className="text-xl text-accent">↓</span>}</div>)}<p className="mt-3 text-center text-xs leading-6 text-muted">실루엣 기준 충족 시 교사 갱신<br />붕괴 발생 시 이전 상태로 복구</p></div>;
}

function ModelEvolution() {
  return (
    <div>
      <div className="mb-12"><p className={label}>모델 개발 과정 / 04</p><h2 className="mt-5 text-[clamp(36px,5vw,64px)] font-black leading-[1.06] tracking-[-.05em]">한 번에 완성하지 않고<br />문제를 따라 개선했습니다.</h2><p className="mt-7 max-w-4xl text-base leading-8 text-muted">라벨이 부족한 qEEG 데이터에서 시작해 특징 붕괴와 표현력 부족을 하나씩 확인했습니다. 각 버전은 이전 실험에서 발견한 문제를 해결하기 위한 다음 가설이었습니다.</p></div>
      <div className="space-y-12">
        {modelStages.map((model, index) => (
          <article className={classNames(card, "grid grid-cols-2 overflow-hidden max-md:grid-cols-1")} key={model.version}>
            <div className={classNames("overflow-hidden bg-white p-4", index % 2 === 1 && "order-2 max-md:order-none")}>
              {model.src ? <a href={model.src} target="_blank" rel="noreferrer"><Image src={model.src} width={model.width} height={model.height} alt={`${model.title} 모델 구조와 고민을 직접 정리한 이미지`} className="h-[560px] w-full object-contain max-md:h-auto" sizes="(max-width: 768px) 100vw, 590px" /></a> : <BossModelDiagram />}
            </div>
            <div className="flex flex-col justify-center border-l border-line p-10 max-md:border-l-0 max-md:border-t max-md:p-6"><span className="font-mono text-sm font-bold text-accent">{model.version}</span><h3 className="mt-4 text-2xl font-black">{model.title}</h3><div className="mt-8 space-y-6"><div><strong className="text-sm text-accent">당시 문제</strong><p className="mt-2 text-sm leading-7 text-muted">{model.problem}</p></div><div><strong className="text-sm text-accent">제가 바꾼 점</strong><p className="mt-2 text-sm leading-7 text-muted">{model.decision}</p></div><div><strong className="text-sm text-accent">확인한 결과</strong><p className="mt-2 text-sm leading-7 text-muted">{model.result}</p></div><div className="rounded-lg border border-line bg-background p-5"><strong className="text-sm">다음 버전으로 이어진 이유</strong><p className="mt-2 text-sm leading-7 text-muted">{model.next}</p></div></div></div>
          </article>
        ))}
      </div>
    </div>
  );
}

function SystemDiagramGallery() {
  return (
    <div>
      <div className="mb-10 grid grid-cols-[.8fr_1.2fr] gap-12 max-md:grid-cols-1 max-md:gap-4"><div><p className={label}>시스템 발전 과정 / 04</p><h2 className="mt-5 text-[clamp(32px,5vw,58px)] font-black leading-[1.08] tracking-[-.045em]">고민하며 그린<br />시스템 구성도.</h2></div><p className="self-end text-base leading-8 text-muted">단일 내부 서버에서 시작해 의료 데이터 보관과 AI 연산을 분리하고, 보안 중계 계층과 전용 LLM 서버를 더해가는 과정에서 직접 작성한 구성도입니다.</p></div>
      <div className="space-y-12">
        {systemDiagramImages.map((diagram, index) => (
          <figure key={diagram.src} className={classNames(card, "grid grid-cols-2 overflow-hidden max-md:grid-cols-1")}>
            <a href={diagram.src} target="_blank" rel="noreferrer" className={classNames("group block overflow-hidden bg-white p-4", index % 2 === 1 && "order-2 max-md:order-none")}><Image src={diagram.src} width={diagram.width} height={diagram.height} alt={diagram.title} className="h-[620px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.01] max-md:h-auto" sizes="(max-width: 768px) 100vw, 590px" /></a>
            <figcaption className="flex flex-col justify-center border-l border-line p-10 max-md:border-l-0 max-md:border-t max-md:p-6"><div className="flex items-center justify-between"><span className="font-mono text-sm font-bold text-accent">0{index + 1}</span><span className="text-xs text-muted">원본 구성도 ↗</span></div><h3 className="mt-5 text-2xl font-black">{diagram.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{diagram.description}</p><div className="mt-8 space-y-6"><div><strong className="text-sm text-accent">당시 고민</strong><p className="mt-2 text-sm leading-7 text-muted">{diagram.problem}</p></div><div><strong className="text-sm text-accent">제가 선택한 방향</strong><p className="mt-2 text-sm leading-7 text-muted">{diagram.decision}</p></div><div className="rounded-lg border border-line bg-background p-5"><strong className="text-sm">다음 구성으로 이어진 이유</strong><p className="mt-2 text-sm leading-7 text-muted">{diagram.next}</p></div></div></figcaption>
          </figure>
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
              <div><strong className="text-xs text-accent">제가 선택한 방향</strong><p className="mt-2 text-sm leading-7 text-muted">{log.decision}</p></div>
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
      <div className="space-y-12">
        {serviceScreens.map((screen, index) => (
          <figure key={screen.src} className={classNames(card, "grid grid-cols-[1.1fr_.9fr] overflow-hidden max-lg:grid-cols-1")}>
            <a href={screen.src} target="_blank" rel="noreferrer" className={classNames("group block overflow-hidden bg-white p-3", index % 2 === 1 && "order-2 max-lg:order-none")}>
              <Image src={screen.src} width={screen.width} height={screen.height} alt={screen.title} className={classNames("h-[620px] w-full object-contain object-top transition-transform duration-500 group-hover:scale-[1.01] max-lg:h-auto", index === 3 && "object-cover")} sizes="(max-width: 1024px) 100vw, 650px" />
            </a>
            <figcaption className="flex flex-col justify-center border-l border-line p-9 max-lg:border-l-0 max-lg:border-t max-md:p-6"><span className="font-mono text-sm font-bold text-accent">화면 0{index + 1}</span><h4 className="mt-4 text-2xl font-black">{screen.title}</h4><p className="mt-3 text-sm leading-7 text-muted">{screen.description}</p><div className="mt-8 space-y-6"><div><strong className="text-sm text-accent">화면의 목적</strong><p className="mt-2 text-sm leading-7 text-muted">{screen.purpose}</p></div><div><strong className="text-sm text-accent">사용 흐름</strong><p className="mt-2 text-sm leading-7 text-muted">{screen.flow}</p></div><div className="rounded-lg border border-line bg-background p-5"><strong className="text-sm">제가 설계하며 고려한 점</strong><p className="mt-2 text-sm leading-7 text-muted">{screen.consideration}</p></div></div><p className="mt-6 text-xs text-muted">이미지를 누르면 원본 크기로 확인할 수 있습니다.</p></figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function ProjectBackground() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10">
        <div><p className={label}>프로젝트를 시작한 이유</p><h2 className="mt-5 text-[clamp(38px,5vw,68px)] font-black leading-[1.04] tracking-[-.05em]">왜 이 프로젝트가<br />필요했을까요?</h2></div>
        <div className="space-y-5 text-base leading-8 text-muted"><p>이지브레인은 증상명만으로 접근하기보다 개인마다 다른 뇌의 데이터와 신경생리학적 검사 정보를 바탕으로 치료 전략을 세우는 eNIT 철학을 갖고 있었습니다.</p><p>체인 병원이 늘어나면서 각 지점의 의료진이 qEEG 자료를 더 편리하게 입력하고, 같은 흐름으로 전처리와 분석 결과를 확인할 수 있는 도구가 필요했습니다. 뉴로엔과 이지브레인은 이 진료 경험과 개발 역량을 결합해 ENIT-AI 프로젝트를 시작했습니다.</p><p>목표는 의사의 판단을 AI로 대체하는 것이 아니었습니다. 반복적인 데이터 처리와 결과 정리를 시스템이 돕고, 의료진이 환자별 정보를 검토해 진료 판단에 활용할 수 있는 일관된 업무 흐름을 만드는 것이었습니다.</p></div>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-5 max-md:grid-cols-1">
        <article className={classNames(card, "p-8")}><span className="font-mono text-sm font-bold text-accent">QEEG</span><h3 className="mt-4 text-2xl font-black">qEEG란 무엇인가</h3><p className="mt-5 text-sm leading-7 text-muted">qEEG(정량 뇌전도)는 두피에서 기록한 EEG 신호를 컴퓨터로 처리해 주파수별 세기, 연결성 등의 수치나 뇌 지도 형태로 표현하는 분석 방법입니다. 많은 신호를 빠르게 살펴보고 특정 패턴을 검토하는 데 도움을 줍니다.</p><div className="mt-6 rounded-lg border border-line bg-background p-5"><strong className="text-sm">해석할 때 중요하게 본 점</strong><p className="mt-2 text-sm leading-7 text-muted">qEEG 결과는 측정 상태, 약물, 잡음과 전처리 방식의 영향을 받을 수 있습니다. 그래서 ENIT-AI에서도 품질 검사 단계를 두고, 결과를 의료진이 원본 자료와 환자 정보를 함께 보며 해석하는 보조 정보로 설계했습니다.</p></div></article>
        <article className={classNames(card, "p-8")}><span className="font-mono text-sm font-bold text-accent">eNIT</span><h3 className="mt-4 text-2xl font-black">eNIT가 지향하는 진료</h3><p className="mt-5 text-sm leading-7 text-muted">eNIT는 Evidence-based Neurotransmitter-specific Integrated Treatment의 약자로, 이 프로젝트에서는 증상과 진단명만이 아니라 개인의 뇌 데이터와 신경생리학적 검사 정보를 함께 살펴 맞춤 치료 전략을 세우는 이지브레인의 접근 방식을 의미합니다.</p><div className="mt-6 rounded-lg border border-line bg-background p-5"><strong className="text-sm">서비스로 옮겨야 했던 이유</strong><p className="mt-2 text-sm leading-7 text-muted">원장님의 경험과 분석 방식을 한 사람의 노하우로만 남기지 않고, 이지브레인 체인의 각 의료진이 동일한 순서로 자료를 확인할 수 있게 만드는 것이 필요했습니다. ENIT-AI는 그 과정을 입력, 분석, 검토, 리포트라는 제품 흐름으로 구조화했습니다.</p></div></article>
      </div>

      <figure className={classNames(card, "mt-5 grid grid-cols-[.9fr_1.1fr] overflow-hidden max-md:grid-cols-1")}>
        <a href="/projects/neuroen/qeeg-sample.jpg" target="_blank" rel="noreferrer" className="grid place-items-center bg-white p-8"><Image src="/projects/neuroen/qeeg-sample.jpg" width={488} height={409} alt="1Hz부터 20Hz까지 주파수별 상대 파워를 두피 지도 형태로 표현한 qEEG 샘플" className="h-auto w-full max-w-[540px]" /></a>
        <figcaption className="border-l border-line p-8 max-md:border-l-0 max-md:border-t"><p className={label}>qEEG 샘플 읽기</p><h3 className="mt-4 text-2xl font-black">숫자 신호를 뇌 지도로 바꾸면</h3><p className="mt-5 text-sm leading-7 text-muted">각 원은 머리를 위에서 내려다본 두피 지도입니다. 위쪽 돌출 부분은 코, 좌우는 귀 방향이며, 1Hz부터 20Hz까지 각 주파수에서 측정된 상대 파워의 분포를 색으로 나타냅니다.</p><div className="mt-6 space-y-4"><div className="rounded-lg border border-line bg-background p-4"><strong className="text-sm">가로·세로로 보는 방법</strong><p className="mt-2 text-sm leading-7 text-muted">지도 하나는 특정 주파수를 나타내고, 여러 지도를 나란히 보면 주파수에 따라 두피 영역의 분포가 어떻게 달라지는지 비교할 수 있습니다.</p></div><div className="rounded-lg border border-line bg-background p-4"><strong className="text-sm">색상이 의미하는 것</strong><p className="mt-2 text-sm leading-7 text-muted">각 지도 아래의 색상 눈금 안에서 상대적으로 낮은 값과 높은 값을 구분합니다. 빨간색 자체가 질환이나 이상을 뜻하는 것은 아니며, 측정 조건과 원시 EEG, 다른 임상 정보를 의료진이 함께 검토해야 합니다.</p></div></div><p className="mt-5 text-xs text-muted">이미지를 누르면 원본 크기로 확인할 수 있습니다.</p></figcaption>
      </figure>

      <p className="mt-3 text-xs text-muted">※ 이 qEEG 샘플 이미지는 설명을 위해 Google 이미지 검색에서 가져온 참고 자료입니다.</p>

      <div className="mt-5 grid grid-cols-[1fr_40px_1fr_40px_1fr] items-center gap-2 max-md:grid-cols-1">
        <div className={classNames(card, "p-5 text-center")}><span className="text-sm font-bold">개인별 qEEG·검사 정보</span><p className="mt-2 text-xs text-muted">사람마다 다른 신경생리 데이터</p></div><Arrow /><div className={classNames(card, "p-5 text-center")}><span className="text-sm font-bold">ENIT-AI 분석 흐름</span><p className="mt-2 text-xs text-muted">전처리·품질 검사·분류·리포트</p></div><Arrow /><div className={classNames(card, "p-5 text-center")}><span className="text-sm font-bold">의료진의 종합 판단</span><p className="mt-2 text-xs text-muted">환자 정보와 함께 검토</p></div>
      </div>

      <p className="mt-6 text-xs leading-6 text-muted">qEEG 설명 참고: <a className="underline underline-offset-4 hover:text-accent" href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11297817/" target="_blank" rel="noreferrer">I-PROTECT 신경 모니터링 정의</a>, <a className="underline underline-offset-4 hover:text-accent" href="https://pubmed.ncbi.nlm.nih.gov/3074969/" target="_blank" rel="noreferrer">주파수 분석과 뇌 지도 관련 검토 논문</a></p>
    </div>
  );
}

export default function NeuroenProjectPage() {
  return (
    <main className="project-detail">
      <header className="border-b border-line"><div className={classNames(wrap, "flex h-[74px] items-center justify-between")}><Link href="/" className="text-xs font-bold">← 포트폴리오로 돌아가기</Link><ThemeToggle /></div></header>

      <section className="border-b border-line py-24 max-md:py-16"><div className={wrap}><div className="flex flex-wrap gap-2"><span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-[9px] font-bold text-accent">최근 프로젝트</span><span className="rounded-full border border-line px-3 py-1.5 text-[9px] text-muted">2025.03 — 2025.05</span></div><p className={classNames(label, "mt-10")}>뉴로엔 × 이지브레인</p><h1 className="mt-5 max-w-5xl text-[clamp(48px,8vw,104px)] font-black leading-[.95] tracking-[-.065em]">qEEG 분석을<br /><span className="text-accent">의료 서비스로.</span></h1><p className="mt-10 max-w-2xl text-base leading-8 text-muted">라벨 없는 qEEG 데이터에서 의미 있는 패턴을 찾는 모델 실험부터 의료진이 실제로 사용할 수 있는 웹 애플리케이션, 민감한 의료 데이터를 보호하는 분산 인프라까지 ENIT-AI의 기반을 구축한 프로젝트입니다.</p><div className="mt-12 grid grid-cols-4 border-y border-line max-md:grid-cols-2">{[["기간", "2025.03 — 2025.05"], ["분야", "의료 AI · 풀스택"], ["조직", "뉴로엔 · 이지브레인"], ["형태", "초기 서비스 기반 구축"]].map(([key, value]) => <div className="border-r border-line px-5 py-6 last:border-r-0 max-md:border-b" key={key}><span className="text-[9px] text-muted">{key}</span><strong className="mt-2 block text-xs">{value}</strong></div>)}</div></div></section>

      <section className="py-24 max-md:py-16"><div className={wrap}><ProjectBackground /></div></section>

      <section className="border-t border-line py-24 max-md:py-16"><div className={wrap}><p className={label}>프로젝트 개요 / 01</p><div className="mt-6 grid grid-cols-1 gap-10"><h2 className="text-[clamp(34px,5vw,64px)] font-black leading-[1.05] tracking-[-.05em]">모델 하나가 아닌<br />전체 제품을 만들었습니다.</h2><div className="max-w-4xl space-y-5 text-sm leading-7 text-muted"><p>뉴로엔과 정신과 전문 병원 이지브레인이 함께 진행한 프로젝트로, 정신과 의료진이 qEEG 이미지를 입력하고 전처리·품질 검사·AI 분류·분석 리포트까지 확인할 수 있는 흐름을 구축했습니다.</p><p>초기 5명 규모의 팀에서 모델 실험, 웹 서비스, 데이터 보안과 서버 구성을 동시에 진행했으며 투자사 대상 개발 현황 발표가 가능한 수준의 서비스 기반을 완성했습니다.</p></div></div></div></section>

      <section className="border-y border-line py-24 max-md:py-16"><div className={wrap}><p className={label}>서비스 흐름 / 02</p><h2 className="mt-5 mb-10 text-[clamp(32px,5vw,58px)] font-black tracking-[-.045em]">qEEG 입력부터 리포트까지</h2><ProductFlow /><div className="mt-10"><InterfacePreview /></div><ServiceGallery /></div></section>

      <section className="py-24 max-md:py-16"><div className={wrap}><p className={label}>담당 업무 / 03</p><div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line max-md:grid-cols-1">{responsibilities.map(([number, title, description]) => <article className="bg-background p-8" key={number}><span className="font-mono text-[10px] text-accent">{number}</span><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-4 text-sm leading-7 text-muted">{description}</p></article>)}</div></div></section>

      <section className="border-y border-line py-24 max-md:py-16"><div className={wrap}><ModelEvolution /></div></section>

      <section className="border-b border-line py-24 max-md:py-16"><div className={wrap}><SystemDiagramGallery /></div></section>

      <section className="py-24 max-md:py-16"><div className={wrap}><DecisionJournal /></div></section>

      <section className="py-24 max-md:py-16"><div className={wrap}><div className="grid grid-cols-[.7fr_1.3fr] gap-16 max-md:grid-cols-1 max-md:gap-8"><div><p className={label}>기술적 시도 / 05</p><h2 className="mt-5 text-[clamp(32px,5vw,58px)] font-black leading-[1.08] tracking-[-.045em]">불안정한 학습을<br />계속 개선했습니다.</h2></div><div className="space-y-3">{[["초기 문제", "라벨 없는 데이터에서 손실과 실루엣 점수가 흔들리고 특징 붕괴가 발생했습니다."], ["표현력 개선", "고해상도 qEEG 이미지를 패치로 나누고 전체 특징과 지역 특징을 함께 학습했습니다."], ["학습 안정화", "이진화 전처리, 가중치 초기화, 5단계 합성곱 블록과 정규화를 적용했습니다."], ["자기 증류", "BOSS 방식의 교사-학생 구조, 신뢰도 필터링, 체크포인트 복구 로직으로 실험 지속성을 높였습니다."]].map(([title, text]) => <div className={classNames(card, "p-5")} key={title}><strong className="text-xs">{title}</strong><p className="mt-2 text-xs leading-6 text-muted">{text}</p></div>)}</div></div></div></section>

      <section className="border-t border-line"><div className={classNames(wrap, "py-24 text-center")}><p className={label}>다음 프로젝트</p><h2 className="mt-5 text-[clamp(36px,6vw,72px)] font-black tracking-[-.055em]">다른 작업도 살펴보세요.</h2><Link href="/#work" className="mt-10 inline-block bg-accent px-6 py-4 text-xs font-bold text-button-text">프로젝트 목록으로 돌아가기 →</Link></div></section>
    </main>
  );
}
