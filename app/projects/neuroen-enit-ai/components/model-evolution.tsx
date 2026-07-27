import Image from "next/image";
import classNames from "classnames";
import { DetailBlock, SectionLabel } from "./shared";

const stages = [
  {
    version: "모델 버전 1",
    title: "DeepCluster 기준선",
    image: ["/projects/neuroen/model-v1.jpeg", 1280, 875] as const,
    problem:
      "충분한 정답 라벨이 없어 일반적인 지도 학습부터 시작하기 어려웠습니다.",
    decision:
      "ResNet50 특징과 KMeans 의사 라벨을 이용하는 DeepCluster 구조를 적용했습니다.",
    result: "전체 흐름은 연결했지만 특징 붕괴와 과적합 경향이 나타났습니다.",
    next: "축소 과정에서 사라지는 qEEG의 작은 영역별 특징을 보존할 필요가 있었습니다.",
  },
  {
    version: "모델 버전 2",
    title: "패치 기반 특징 추출",
    image: ["/projects/neuroen/model-v2.jpeg", 1280, 857] as const,
    problem:
      "고해상도 이미지를 한 번에 축소하면 영역별 패턴이 사라질 수 있었습니다.",
    decision:
      "200×200 패치의 지역 특징과 전체 이미지의 전역 특징을 함께 학습했습니다.",
    result:
      "특징 표현과 군집 안정성이 일부 개선됐지만 초기 붕괴 가능성은 남았습니다.",
    next: "입력 잡음과 초기 가중치가 불안정을 키우는지 확인했습니다.",
  },
  {
    version: "모델 버전 3",
    title: "이진화와 초기화 안정화",
    image: ["/projects/neuroen/model-v3.jpeg", 1280, 897] as const,
    problem:
      "색상 범위, 잡음과 무작위 초기 가중치가 군집 중심을 흔들 수 있었습니다.",
    decision:
      "입력 이진화, 가중치 초기화, L2 정규화와 KMeans 반복 초기화를 적용했습니다.",
    result: "초기 붕괴 빈도가 줄고 실루엣 흐름이 안정됐습니다.",
    next: "복잡한 패턴을 위한 특징 추출기 앞단의 깊이를 보강했습니다.",
  },
  {
    version: "모델 버전 4",
    title: "5단계 전처리 합성곱 블록",
    image: ["/projects/neuroen/model-v4.jpeg", 1280, 1057] as const,
    problem:
      "기본 ResNet 앞단만으로 세부 구조를 단계적으로 학습하기 어려웠습니다.",
    decision: "5단계 합성곱 블록과 BatchNorm, ReLU, Dropout을 추가했습니다.",
    result:
      "초기 특징 붕괴가 줄고 의사 라벨의 신뢰도가 개선되는 방향을 확인했습니다.",
    next: "불확실한 의사 라벨의 오류를 반복하지 않을 안정적인 교사 모델이 필요했습니다.",
  },
  {
    version: "모델 버전 5",
    title: "BOSS 교사-학생 자기 증류",
    problem:
      "불확실한 표본과 장시간 학습 중 붕괴가 실험을 불안정하게 만들었습니다.",
    decision:
      "신뢰도 상위 70% 표본, 실루엣 기준 교사 갱신과 상태 복구 로직을 적용했습니다.",
    result:
      "70 에포크 이후 붕괴가 줄고 문제가 생겨도 이전 상태에서 실험을 이어갈 수 있었습니다.",
    next: "qEEG 전용 증강과 의료진이 해석할 수 있는 평가 기준을 후속 과제로 남겼습니다.",
  },
];

function BossDiagram() {
  return (
    <div className="flex h-[520px] flex-col items-center justify-center gap-3 p-8">
      {[
        "qEEG 입력",
        "학생 모델",
        "KMeans 군집",
        "신뢰도 상위 70%",
        "교사 모델 갱신",
      ].map((node, index) => (
        <div className="contents" key={node}>
          <div className="w-full max-w-xs rounded-lg border border-line bg-background p-4 text-center text-sm font-bold">
            {node}
          </div>
          {index < 4 && <span className="text-accent">↓</span>}
        </div>
      ))}
    </div>
  );
}

export function ModelEvolution() {
  return (
    <>
      <SectionLabel>모델 개발 과정 / 04</SectionLabel>
      <h2 className="mt-5 text-[clamp(36px,5vw,64px)] font-black leading-[1.06] tracking-[-.05em]">
        한 번에 완성하지 않고
        <br />
        문제를 따라 개선했습니다.
      </h2>
      <p className="mt-7 max-w-4xl text-base leading-8 text-muted">
        각 버전은 이전 실험에서 발견한 문제를 해결하기 위한 다음 가설이었습니다.
      </p>
      <div className="mt-12 space-y-12">
        {stages.map((stage, index) => (
          <article
            className="grid grid-cols-2 overflow-hidden rounded-xl border border-line bg-surface max-md:grid-cols-1"
            key={stage.version}
          >
            <div
              className={classNames(
                "bg-white p-4",
                index % 2 === 1 && "order-2 max-md:order-none",
              )}
            >
              {stage.image ? (
                <Image
                  src={stage.image[0]}
                  width={stage.image[1]}
                  height={stage.image[2]}
                  alt={`${stage.title} 구조`}
                  className="h-[560px] w-full object-contain max-md:h-auto"
                />
              ) : (
                <BossDiagram />
              )}
            </div>
            <div className="flex flex-col justify-center border-l border-line p-10 max-md:border-l-0 max-md:border-t max-md:p-6">
              <span className="font-mono text-sm font-bold text-accent">
                {stage.version}
              </span>
              <h3 className="mt-4 text-2xl font-black">{stage.title}</h3>
              <div className="mt-8 space-y-6">
                <DetailBlock title="당시 문제">{stage.problem}</DetailBlock>
                <DetailBlock title="제가 바꾼 점">{stage.decision}</DetailBlock>
                <DetailBlock title="확인한 결과">{stage.result}</DetailBlock>
                <DetailBlock title="다음 버전으로 이어진 이유" highlighted>
                  {stage.next}
                </DetailBlock>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
