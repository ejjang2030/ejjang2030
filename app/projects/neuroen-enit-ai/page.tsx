import type { Metadata } from "next";
import Link from "next/link";
import { ProjectBackground } from "./components/project-background";
import { ProductFlow, ServiceScreens } from "./components/service-screens";
import { ModelEvolution } from "./components/model-evolution";
import { SystemEvolution } from "./components/system-evolution";
import { DecisionJournal } from "./components/decision-journal";
import { ProjectTableOfContents } from "./components/project-toc";
import { SectionLabel, contentWrap } from "./components/shared";

export const metadata: Metadata = {
  title: "뉴로엔 ENIT-AI | 장은재 포트폴리오",
  description:
    "qEEG 분류 모델, AI 리포트, 의료진용 웹 서비스와 보안 인프라를 구축한 ENIT-AI 프로젝트입니다.",
};

const responsibilities = [
  [
    "01",
    "qEEG 분류 모델 실험",
    "DeepCluster, 패치 기반 특징 추출, 이진화와 BOSS 자기 증류를 단계적으로 실험했습니다.",
  ],
  [
    "02",
    "AI 리포트 설계",
    "분류 결과에서 분석 문장, 요약 진단, 권고사항을 생성하는 Llama 3 흐름을 설계했습니다.",
  ],
  [
    "03",
    "의료진용 웹 서비스",
    "환자 정보 입력부터 전처리, 품질 검사, 분류와 PDF 리포트까지 하나의 흐름으로 구현했습니다.",
  ],
  [
    "04",
    "분산 시스템과 보안",
    "병원 내부 데이터와 외부 GPU 연산을 MinIO, 중계 API와 Cloudflare로 연결했습니다.",
  ],
];

function ProjectHero() {
  return (
    <section className="border-b border-line py-24 max-md:py-16">
      <div className={contentWrap}>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-bold text-accent">
            최근 프로젝트
          </span>
          <span className="rounded-full border border-line px-3 py-1.5 text-xs text-muted">
            2025.03 — 2025.05
          </span>
        </div>
        <SectionLabel className="mt-10">뉴로엔 × 이지브레인</SectionLabel>
        <h1 className="mt-5 max-w-5xl text-[clamp(48px,8vw,104px)] font-black leading-[.95] tracking-[-.065em]">
          qEEG 분석을
          <br />
          <span className="text-accent">의료 서비스로.</span>
        </h1>
        <p className="mt-10 max-w-3xl text-base leading-8 text-muted">
          라벨 없는 qEEG 데이터의 모델 실험부터 의료진이 사용하는 웹
          애플리케이션, 민감한 의료 데이터를 보호하는 분산 인프라까지 ENIT-AI의
          기반을 구축한 프로젝트입니다.
        </p>
        <div className="mt-12 grid grid-cols-4 border-y border-line max-md:grid-cols-2">
          {[
            ["기간", "2025.03 — 2025.05"],
            ["분야", "의료 AI · 풀스택"],
            ["조직", "뉴로엔 · 이지브레인"],
            ["형태", "초기 서비스 기반 구축"],
          ].map(([key, value]) => (
            <div
              className="border-r border-line px-5 py-6 last:border-r-0 max-md:border-b"
              key={key}
            >
              <span className="text-xs text-muted">{key}</span>
              <strong className="mt-2 block text-sm">{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectOverview() {
  return (
    <section id="overview" className="scroll-mt-20 border-t border-line py-24 max-md:py-16">
      <div className={contentWrap}>
        <SectionLabel>프로젝트 개요 / 01</SectionLabel>
        <div className="mt-6 grid grid-cols-1 gap-10">
          <h2 className="text-[clamp(34px,5vw,64px)] font-black leading-[1.05] tracking-[-.05em]">
            모델 하나가 아닌
            <br />
            전체 제품을 만들었습니다.
          </h2>
          <div className="max-w-4xl space-y-5 text-base leading-8 text-muted">
            <p>
              뉴로엔과 정신과 전문 병원 이지브레인이 함께 진행한 프로젝트로,
              의료진이 qEEG 이미지를 입력하고 전처리·품질 검사·AI 분류·분석
              리포트까지 확인할 수 있는 흐름을 구축했습니다.
            </p>
            <p>
              초기 4명(이지브레인 원장님, 뉴로엔대표님, 이사님, 저) 규모의
              팀에서 모델 실험, 웹 서비스, 데이터 보안과 서버 구성을 동시에
              진행했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Responsibilities() {
  return (
    <section id="responsibilities" className="scroll-mt-20 py-24 max-md:py-16">
      <div className={contentWrap}>
        <SectionLabel>담당 업무 / 03</SectionLabel>
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line max-md:grid-cols-1">
          {responsibilities.map(([number, title, description]) => (
            <article className="bg-background p-8" key={number}>
              <span className="font-mono text-sm text-accent">{number}</span>
              <h3 className="mt-5 text-xl font-black">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function NeuroenProjectPage() {
  return (
    <main className="project-detail">
      <header className="sticky top-0 z-40 border-b border-line bg-background/95 backdrop-blur-md">
        <div
          className={`${contentWrap} flex h-[74px] items-center justify-between`}
        >
          <Link href="/" className="text-sm font-bold">
            ← 포트폴리오로 돌아가기
          </Link>
        </div>
      </header>
      <ProjectHero />
      <ProjectTableOfContents />
      <section id="background" className="scroll-mt-20 py-24 max-md:py-16">
        <div className={contentWrap}>
          <ProjectBackground />
        </div>
      </section>
      <ProjectOverview />
      <section id="service-flow" className="scroll-mt-20 border-y border-line py-24 max-md:py-16">
        <div className={contentWrap}>
          <SectionLabel>서비스 흐름 / 02</SectionLabel>
          <h2 className="mt-5 mb-10 text-[clamp(32px,5vw,58px)] font-black tracking-[-.045em]">
            qEEG 입력부터 리포트까지
          </h2>
          <ProductFlow />
          <ServiceScreens />
        </div>
      </section>
      <Responsibilities />
      <section id="model-evolution" className="scroll-mt-20 border-y border-line py-24 max-md:py-16">
        <div className={contentWrap}>
          <ModelEvolution />
        </div>
      </section>
      <section id="system-evolution" className="scroll-mt-20 border-b border-line py-24 max-md:py-16">
        <div className={contentWrap}>
          <SystemEvolution />
        </div>
      </section>
      <section id="decisions" className="scroll-mt-20 py-24 max-md:py-16">
        <div className={contentWrap}>
          <DecisionJournal />
        </div>
      </section>
      <section className="border-t border-line py-24 text-center">
        <div className={contentWrap}>
          <SectionLabel>다음 프로젝트</SectionLabel>
          <h2 className="mt-5 text-[clamp(36px,6vw,72px)] font-black">
            다른 작업도 살펴보세요.
          </h2>
          <Link
            href="/#work"
            className="mt-10 inline-block bg-accent px-6 py-4 text-sm font-bold text-button-text"
          >
            프로젝트 목록으로 돌아가기 →
          </Link>
        </div>
      </section>
    </main>
  );
}
