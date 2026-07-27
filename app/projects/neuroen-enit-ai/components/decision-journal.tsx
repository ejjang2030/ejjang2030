import { DetailBlock, SectionLabel } from "./shared";

const logs = [
  [
    "01",
    "정답이 없는 데이터에서 무엇부터 학습시킬 것인가",
    "라벨을 기다리기보다 DeepCluster로 특징과 의사 라벨을 만들고 실루엣 점수를 함께 관찰했습니다.",
    "손실값만 낮아지는 것은 좋은 모델의 증거가 아니며 의료진이 해석할 관찰 지표가 필요했습니다.",
  ],
  [
    "02",
    "특징 붕괴를 다음 실험의 조건으로 바꾸기",
    "패치 학습, 이진화, 초기화와 자기 증류를 한 단계씩 분리해 적용했습니다.",
    "실패한 실험도 다음 가설의 기준선을 만드는 중요한 결과였습니다.",
  ],
  [
    "03",
    "성능보다 의료 데이터가 머물 장소를 먼저 정하기",
    "원본은 병원 내부 MinIO에 두고 외부는 중계 API로 허용된 범위만 조회하게 했습니다.",
    "보안은 마지막 기능이 아니라 서버 배치를 정하는 첫 조건이었습니다.",
  ],
  [
    "04",
    "이상적인 구성과 실제 네트워크 조건 사이에서 타협하기",
    "정제 데이터를 우선 옮겨 사용하면서 장기적으로 조회 전용 중계 경로를 발전시켰습니다.",
    "현재 가능한 방식과 후속 개선 지점을 명확히 분리하는 것이 중요했습니다.",
  ],
  [
    "05",
    "LLM을 어디에서 실행해야 지속 가능한가",
    "더 나은 메모리 환경의 Mac Mini로 LLM을 분리하고 필요한 정보만 전달했습니다.",
    "모델 선택만큼 실행 위치와 독립적으로 교체할 수 있는 경계가 중요했습니다.",
  ],
];

export function DecisionJournal() {
  return (
    <>
      <div className="grid grid-cols-[.75fr_1.25fr] gap-16 max-md:grid-cols-1 max-md:gap-5">
        <div>
          <SectionLabel>설계와 실험의 기록</SectionLabel>
          <h2 className="mt-5 text-[clamp(36px,5vw,64px)] font-black leading-[1.06] tracking-[-.05em]">
            결과보다 중요한
            <br />
            결정의 이유.
          </h2>
        </div>
        <p className="self-end text-base leading-8 text-muted">
          완성된 화면만으로는 어떤 문제를 만났고 왜 방향을 바꿨는지 드러나지
          않습니다. 실제 고민했던 선택과 배운 점을 정리했습니다.
        </p>
      </div>
      <div className="mt-14 border-t border-line">
        {logs.map(([number, title, decision, learning]) => (
          <article
            className="grid grid-cols-[70px_.8fr_1.2fr] gap-8 border-b border-line py-10 max-lg:grid-cols-[50px_1fr]"
            key={number}
          >
            <span className="font-mono text-sm font-bold text-accent">
              {number}
            </span>
            <h3 className="text-xl font-black leading-8">{title}</h3>
            <div className="space-y-5 max-lg:col-start-2">
              <DetailBlock title="제가 선택한 방향">{decision}</DetailBlock>
              <DetailBlock title="이 과정에서 배운 점" highlighted>
                {learning}
              </DetailBlock>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
