import Image from "next/image";
import { Arrow, Card, SectionLabel } from "./shared";

export function ProjectBackground() {
  return (
    <>
      <div>
        <SectionLabel>프로젝트를 시작한 이유</SectionLabel>
        <h2 className="mt-5 text-[clamp(38px,5vw,68px)] font-black leading-[1.04] tracking-[-.05em]">
          왜 이 프로젝트가
          <br />
          필요했을까요?
        </h2>
        <div className="mt-10 max-w-4xl space-y-5 text-base leading-8 text-muted">
          <p>
            이지브레인은 증상명만으로 접근하기보다 개인마다 다른 뇌의 데이터와
            신경생리학적 검사 정보를 바탕으로 치료 전략을 세우는 eNIT 철학을
            갖고 있었습니다.
          </p>
          <p>
            체인 병원이 늘어나면서 각 지점의 의료진이 qEEG 자료를 더 편리하게
            입력하고, 같은 흐름으로 전처리와 분석 결과를 확인할 수 있는 도구가
            필요했습니다. 뉴로엔과 이지브레인은 이 진료 경험과 개발 역량을
            결합해 ENIT-AI 프로젝트를 시작했습니다.
          </p>
          <p>
            목표는 의사의 판단을 AI로 대체하는 것이 아니었습니다. 반복적인
            데이터 처리와 결과 정리를 시스템이 돕고, 의료진이 환자별 정보를
            검토해 진료 판단에 활용할 수 있는 일관된 업무 흐름을 만드는
            것이었습니다.
          </p>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-5 max-md:grid-cols-1">
        <Card className="p-8">
          <span className="font-mono text-sm font-bold text-accent">QEEG</span>
          <h3 className="mt-4 text-2xl font-black">qEEG란 무엇인가</h3>
          <p className="mt-5 text-sm leading-7 text-muted">
            qEEG(정량 뇌전도)는 두피에서 기록한 EEG 신호를 컴퓨터로 처리해
            주파수별 세기, 연결성 등의 수치나 뇌 지도 형태로 표현하는 분석
            방법입니다.
          </p>
          <div className="mt-6 rounded-lg border border-line bg-background p-5">
            <strong className="text-sm">해석할 때 중요하게 본 점</strong>
            <p className="mt-2 text-sm leading-7 text-muted">
              측정 상태, 약물, 잡음과 전처리 방식의 영향을 받을 수 있어 품질
              검사 단계를 두고 의료진이 원본 자료와 환자 정보를 함께 검토하도록
              설계했습니다.
            </p>
          </div>
        </Card>
        <Card className="p-8">
          <span className="font-mono text-sm font-bold text-accent">eNIT</span>
          <h3 className="mt-4 text-2xl font-black">eNIT가 지향하는 진료</h3>
          <p className="mt-5 text-sm leading-7 text-muted">
            eNIT는 Evidence-based Neurotransmitter-specific Integrated
            Treatment의 약자로, 개인의 뇌 데이터와 신경생리학적 검사 정보를 함께
            살펴 맞춤 치료 전략을 세우는 이지브레인의 접근 방식을 의미합니다.
          </p>
          <div className="mt-6 rounded-lg border border-line bg-background p-5">
            <strong className="text-sm">서비스로 옮겨야 했던 이유</strong>
            <p className="mt-2 text-sm leading-7 text-muted">
              원장님의 경험과 분석 방식을 체인 의료진이 동일한 순서로 활용할 수
              있도록 입력, 분석, 검토, 리포트의 제품 흐름으로 구조화했습니다.
            </p>
          </div>
        </Card>
      </div>

      <figure className="mt-5 grid grid-cols-[.9fr_1.1fr] overflow-hidden rounded-xl border border-line bg-surface max-md:grid-cols-1">
        <a
          href="/projects/neuroen/qeeg-sample.jpg"
          target="_blank"
          rel="noreferrer"
          className="grid place-items-center bg-white p-8"
        >
          <Image
            src="/projects/neuroen/qeeg-sample.jpg"
            width={488}
            height={409}
            alt="주파수별 상대 파워를 두피 지도 형태로 표현한 qEEG 샘플"
            className="h-auto w-full max-w-[540px]"
          />
        </a>
        <figcaption className="border-l border-line p-8 max-md:border-l-0 max-md:border-t">
          <SectionLabel>qEEG 샘플 읽기</SectionLabel>
          <h3 className="mt-4 text-2xl font-black">
            숫자 신호를 뇌 지도로 바꾸면
          </h3>
          <p className="mt-5 text-sm leading-7 text-muted">
            각 원은 머리를 위에서 내려다본 두피 지도입니다. 1Hz부터 20Hz까지 각
            주파수에서 측정된 상대 파워의 분포를 색으로 나타냅니다.
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-line bg-background p-4">
              <strong className="text-sm">지도를 보는 방법</strong>
              <p className="mt-2 text-sm leading-7 text-muted">
                지도 하나는 특정 주파수를 나타내며 여러 지도를 비교해 주파수에
                따른 두피 영역의 분포 차이를 살펴봅니다.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-background p-4">
              <strong className="text-sm">색상이 의미하는 것</strong>
              <p className="mt-2 text-sm leading-7 text-muted">
                색상은 각 눈금 안의 상대적 값을 구분합니다. 빨간색 자체가 질환을
                뜻하지 않으며 의료진이 원시 EEG와 임상 정보를 함께 검토해야
                합니다.
              </p>
            </div>
          </div>
        </figcaption>
      </figure>
      <p className="mt-3 text-xs text-muted">
        ※ 이 qEEG 샘플 이미지는 설명을 위해 Google 이미지 검색에서 가져온 참고
        자료입니다.
      </p>

      <div className="mt-6 grid grid-cols-[1fr_40px_1fr_40px_1fr] items-center gap-2 max-md:grid-cols-1">
        <Card className="p-5 text-center">
          <strong className="text-sm">개인별 qEEG·검사 정보</strong>
        </Card>
        <Arrow />
        <Card className="p-5 text-center">
          <strong className="text-sm">ENIT-AI 분석 흐름</strong>
        </Card>
        <Arrow />
        <Card className="p-5 text-center">
          <strong className="text-sm">의료진의 종합 판단</strong>
        </Card>
      </div>
    </>
  );
}
