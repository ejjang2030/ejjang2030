import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { introContent } from "./content/intro";

export const alt = "장은재 AI 제품 개발자 포트폴리오 첫 화면";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const profileBuffer = await readFile(join(process.cwd(), "public", "profile.jpg"));
  const profileSrc = `data:image/jpeg;base64,${profileBuffer.toString("base64")}`;
  const fontBuffer = await readFile(
    join(process.cwd(), "app", "fonts", "NanumGothic.ttf"),
  );
  const fontData = fontBuffer.buffer.slice(
    fontBuffer.byteOffset,
    fontBuffer.byteOffset + fontBuffer.byteLength,
  ) as ArrayBuffer;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f8fafc",
          color: "#0f172a",
          border: "1px solid #d7e0ea",
        }}
      >
        <div
          style={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px",
            borderRight: "1px solid #d7e0ea",
          }}
        >
          <div style={{ display: "flex", color: "#2563eb", fontSize: 20, fontWeight: 700 }}>
            {introContent.eyebrow}
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 24, fontSize: 66, fontWeight: 900, lineHeight: 1.08, letterSpacing: "-3px" }}>
            <span>{introContent.greeting}</span>
            <span style={{ color: "#2563eb" }}>{introContent.highlightedRole}</span>
            <span>{introContent.nameLine}</span>
          </div>
          <div style={{ display: "flex", marginTop: 30, maxWidth: 520, color: "#64748b", fontSize: 22, lineHeight: 1.55 }}>
            {introContent.description.join(" ")}
          </div>
        </div>

        <div
          style={{
            width: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px",
            background: "#081322",
            backgroundImage: "radial-gradient(circle at 75% 20%, #1d4ed866, transparent 38%)",
          }}
        >
          <div style={{ width: "100%", display: "flex", flexDirection: "column", padding: 28, borderRadius: 22, border: "1px solid #67e8f955", background: "#0b1423f2", color: "#cbd5e1" }}>
            <div style={{ display: "flex", gap: 8, paddingBottom: 20, borderBottom: "1px solid #334155" }}>
              <span style={{ width: 9, height: 9, borderRadius: 99, background: "#f87171" }} />
              <span style={{ width: 9, height: 9, borderRadius: 99, background: "#fcd34d" }} />
              <span style={{ width: 9, height: 9, borderRadius: 99, background: "#34d399" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 18, padding: "24px 0", borderBottom: "1px solid #334155" }}>
              <img src={profileSrc} width={72} height={72} alt="" style={{ borderRadius: 14, objectFit: "cover", objectPosition: "top" }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <strong style={{ color: "white", fontSize: 22 }}>{introContent.profile.name}</strong>
                <span style={{ marginTop: 5, color: "#94a3b8", fontSize: 16 }}>{introContent.profile.role}</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", paddingTop: 24, fontFamily: "monospace", fontSize: 17, lineHeight: 1.7 }}>
              <span><b style={{ color: "#c4b5fd" }}>const</b> 개발자 = &#123;</span>
              <span style={{ paddingLeft: 20 }}>집중 분야: <b style={{ color: "#67e8f9" }}>&quot;{introContent.profile.focus}&quot;</b>,</span>
              <span style={{ paddingLeft: 20 }}>연결: {introContent.profile.connects.join(" · ")}</span>
              <span>&#125;</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Nanum Gothic",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
