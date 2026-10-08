import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Default social share image for every page
export const alt = "KeRaeva, the AI-powered healthcare workforce platform for Canada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/company/white-logo.svg"));
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#F3651B",
          color: "#FFFFFF",
        }}
      >
        <img src={logoSrc} width={507} height={85} alt="" />
        <div style={{ marginTop: 48, fontSize: 56, lineHeight: 1.15, maxWidth: 900 }}>
          Healthcare Workforce, Powered by Intelligence
        </div>
        <div style={{ marginTop: 24, fontSize: 30, opacity: 0.9, maxWidth: 950 }}>
          Hiring, AI interviews, urgent staffing, shifts and payments for healthcare in Canada.
        </div>
      </div>
    ),
    size
  );
}
