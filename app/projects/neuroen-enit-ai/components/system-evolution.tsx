import Image from "next/image";
import classNames from "classnames";
import { DetailBlock, SectionLabel } from "./shared";

const systems = [
  {
    image: ["/projects/neuroen/system-v1.jpeg", 1147, 767] as const,
    title: "초기 시스템 구성",
    summary: "병원 내부 Mac Mini에서 전체 기능을 운영",
    problem: "빠르게 기능을 검증하는 것이 우선이었습니다.",
    decision:
      "저는 한 서버에서 qEEG 입력부터 분석까지 전체 흐름을 먼저 연결했습니다.",
    next: "연산 자원과 확장성의 한계로 AI 연산과 데이터 저장을 분리해야 했습니다.",
  },
  {
    image: ["/projects/neuroen/system-v2.jpeg", 965, 1280] as const,
    title: "버전 2 시스템 구성",
    summary: "GPU 서버와 병원 내부 MinIO를 분리",
    problem: "강한 GPU가 필요했지만 의료 원본을 외부 서버에 둘 수 없었습니다.",
    decision:
      "웹·AI 연산은 GPU 서버로, 원본 데이터는 내부 MinIO로 분리했습니다.",
    next: "외부 서비스가 내부 데이터를 읽는 권한과 경로를 제한해야 했습니다.",
  },
  {
    image: ["/projects/neuroen/system-v3.jpeg", 1261, 1280] as const,
    title: "버전 3 시스템 구성",
    summary: "Cloudflare, HTTPS와 중계 API 추가",
    problem: "GPU 서버의 직접 MinIO 접근은 권한 범위가 지나치게 넓었습니다.",
    decision:
      "Cloudflare와 HTTPS를 적용하고 조회 범위를 제한하는 중계 API를 두었습니다.",
    next: "Ubuntu 자원으로 더 큰 LLM을 운영하기 어려워 실행 위치를 재검토했습니다.",
  },
  {
    image: ["/projects/neuroen/system-v4.jpeg", 983, 1280] as const,
    title: "버전 4 시스템 구성",
    summary: "LLM 분리와 서비스 경로 정리",
    problem:
      "LLM 메모리와 대량 qEEG 이동에 따른 네트워크 부하를 함께 고려해야 했습니다.",
    decision: "LLM을 Mac Mini로 분리하고 내부·외부 도메인 경로를 구분했습니다.",
    next: "각 영역을 독립적으로 확장할 기반을 만들고 대량 데이터 이동 최적화를 후속 과제로 남겼습니다.",
  },
];

export function SystemEvolution() {
  return (
    <>
      <SectionLabel>시스템 발전 과정 / 05</SectionLabel>
      <h2 className="mt-5 text-[clamp(36px,5vw,64px)] font-black leading-[1.06] tracking-[-.05em]">
        고민하며 그린
        <br />
        시스템 구성도.
      </h2>
      <div className="mt-12 space-y-12">
        {systems.map((system, index) => (
          <figure
            className="grid grid-cols-2 overflow-hidden rounded-xl border border-line bg-surface max-md:grid-cols-1"
            key={system.title}
          >
            <a
              href={system.image[0]}
              target="_blank"
              rel="noreferrer"
              className={classNames(
                "bg-white p-4",
                index % 2 === 1 && "order-2 max-md:order-none",
              )}
            >
              <Image
                src={system.image[0]}
                width={system.image[1]}
                height={system.image[2]}
                alt={system.title}
                className="h-[620px] w-full object-contain max-md:h-auto"
              />
            </a>
            <figcaption className="flex flex-col justify-center border-l border-line p-10 max-md:border-l-0 max-md:border-t max-md:p-6">
              <span className="font-mono text-sm font-bold text-accent">
                0{index + 1}
              </span>
              <h3 className="mt-4 text-2xl font-black">{system.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">
                {system.summary}
              </p>
              <div className="mt-8 space-y-6">
                <DetailBlock title="당시 고민">{system.problem}</DetailBlock>
                <DetailBlock title="제가 선택한 방향">
                  {system.decision}
                </DetailBlock>
                <DetailBlock title="다음 구성으로 이어진 이유" highlighted>
                  {system.next}
                </DetailBlock>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
