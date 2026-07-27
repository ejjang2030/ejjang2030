import Image from "next/image";
import classNames from "classnames";
import { Card, DetailBlock, SectionLabel } from "./shared";

const screens = [
  {
    src: "/projects/neuroen/patient-input.jpg",
    width: 4014,
    height: 2473,
    title: "환자 정보와 qEEG 이미지 입력",
    summary:
      "환자 정보와 두 측정 상태의 qEEG 자료를 하나의 분석 작업으로 묶는 화면",
    purpose:
      "분석 전에 환자 식별 정보와 눈을 감은 상태·뜬 상태의 자료를 정확하게 연결합니다.",
    flow: "환자 식별번호, 나이와 성별을 확인하고 두 상태의 이미지를 각각 등록합니다.",
    consideration:
      "이미지가 서로 바뀌거나 다른 환자와 연결되지 않도록 입력 단계를 분명하게 나눴습니다.",
  },
  {
    src: "/projects/neuroen/process-steps.jpg",
    width: 4014,
    height: 2407,
    title: "qEEG 분석 진행 과정",
    summary: "주파수 분해부터 분류까지 현재 실행 단계를 확인하는 화면",
    purpose:
      "시간이 걸리는 AI 작업의 현재 위치와 완료 여부를 의료진에게 알려줍니다.",
    flow: "주파수 분해, 회색조 변환, 품질 검사와 패턴 분류가 순서대로 실행됩니다.",
    consideration:
      "전체 진행률과 단계별 상태를 함께 보여주어 실패 위치와 재확인 지점을 알 수 있게 했습니다.",
  },
  {
    src: "/projects/neuroen/processed-images.jpg",
    width: 4014,
    height: 3175,
    title: "전처리 이미지 확인",
    summary: "원본과 주파수 분해·회색조 결과를 비교하는 화면",
    purpose:
      "AI가 실제로 어떤 입력을 받았는지 의료진이 직접 확인할 수 있게 합니다.",
    flow: "눈을 감은 상태와 뜬 상태를 좌우로, 원본부터 변환 결과까지를 세로로 비교합니다.",
    consideration:
      "모델의 입력 과정을 숨기지 않아 전처리 오류나 품질 문제를 결과 확인 전에 찾도록 했습니다.",
  },
  {
    src: "/projects/neuroen/analysis-results.jpg",
    width: 4014,
    height: 6172,
    title: "AI 분석 결과",
    summary: "품질 검사와 분류 확률을 검토하고 PDF 리포트를 생성하는 화면",
    purpose:
      "분석 근거를 한곳에 모아 의료진이 리포트 생성 여부를 결정하도록 돕습니다.",
    flow: "잡음과 심각도를 확인한 뒤 상위 예측, 전체 확률과 유의 여부를 검토합니다.",
    consideration:
      "확률이 확정 진단처럼 보이지 않도록 품질 검사와 전체 결과를 함께 제공하고 최종 판단은 의료진에게 남겼습니다.",
  },
];

export function ProductFlow() {
  const steps = [
    "환자 정보·qEEG 입력",
    "주파수 분해·전처리",
    "품질 검사",
    "AI 패턴 분류",
    "LLM 분석 리포트",
    "PDF 결과 제공",
  ];
  return (
    <div className="grid grid-cols-6 gap-2 max-lg:grid-cols-3 max-md:grid-cols-2">
      {steps.map((step, index) => (
        <Card className="p-4" key={step}>
          <span className="font-mono text-xs text-accent">0{index + 1}</span>
          <p className="mt-4 text-sm font-bold leading-5">{step}</p>
        </Card>
      ))}
    </div>
  );
}

export function ServiceScreens() {
  return (
    <div className="mt-16">
      <div className="mb-8">
        <SectionLabel>실제 웹 서비스 화면</SectionLabel>
        <h3 className="mt-3 text-3xl font-black">ENIT-AI 사용 흐름</h3>
      </div>
      <div className="space-y-12">
        {screens.map((screen, index) => (
          <figure
            key={screen.src}
            className="grid grid-cols-[1.1fr_.9fr] overflow-hidden rounded-xl border border-line bg-surface max-lg:grid-cols-1"
          >
            <a
              href={screen.src}
              target="_blank"
              rel="noreferrer"
              className={classNames(
                "bg-white p-3",
                index % 2 === 1 && "order-2 max-lg:order-none",
              )}
            >
              <Image
                src={screen.src}
                width={screen.width}
                height={screen.height}
                alt={screen.title}
                className={classNames(
                  "h-[620px] w-full object-contain object-top max-lg:h-auto",
                  index === 3 && "object-cover",
                )}
                sizes="(max-width:1024px) 100vw, 650px"
              />
            </a>
            <figcaption className="flex flex-col justify-center border-l border-line p-9 max-lg:border-l-0 max-lg:border-t max-md:p-6">
              <span className="font-mono text-sm font-bold text-accent">
                화면 0{index + 1}
              </span>
              <h4 className="mt-4 text-2xl font-black">{screen.title}</h4>
              <p className="mt-3 text-sm leading-7 text-muted">
                {screen.summary}
              </p>
              <div className="mt-8 space-y-6">
                <DetailBlock title="화면의 목적">{screen.purpose}</DetailBlock>
                <DetailBlock title="사용 흐름">{screen.flow}</DetailBlock>
                <DetailBlock title="제가 설계하며 고려한 점" highlighted>
                  {screen.consideration}
                </DetailBlock>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
