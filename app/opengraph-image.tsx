import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Flex & Flow — Stretch. Breathe. Release. Reset. A mindful stretch and mobility class with Christina Ribeiro.";

export default async function Image() {
  const photoData = await readFile(
    join(process.cwd(), "public/photos/christina-portrait.jpg")
  );
  const photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #fffaf7 0%, #fdf5f2 45%, #f8dddd 100%)",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* Left: photo of Christina, with soft right-edge fade and blush wash */}
        <div
          style={{
            width: 540,
            height: 630,
            display: "flex",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={photoSrc}
            width={540}
            height={630}
            style={{
              width: 540,
              height: 630,
              objectFit: "cover",
              objectPosition: "50% 22%",
            }}
            alt=""
          />
          {/* Soft right-edge fade into the panel background */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 540,
              height: 630,
              display: "flex",
              background:
                "linear-gradient(90deg, transparent 0%, transparent 58%, #fdf5f2 100%)",
            }}
          />
          {/* Subtle blush wash to integrate the photo into the brand palette */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 540,
              height: 630,
              display: "flex",
              background:
                "linear-gradient(180deg, rgba(248,221,221,0.16) 0%, rgba(239,191,192,0.30) 100%)",
            }}
          />
        </div>

        {/* Right: brand wordmark + 4-line tagline + descriptor */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 90px 60px 50px",
            color: "#252020",
          }}
        >
          {/* Eyebrow wordmark */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              color: "#df8f91",
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 52,
                height: 1,
                background: "#df8f91",
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: 20,
                letterSpacing: "7px",
                display: "flex",
              }}
            >
              FLEX &amp; FLOW
            </div>
          </div>

          {/* Tagline — four lines, alternating tones */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 38,
            }}
          >
            <div
              style={{ fontSize: 84, lineHeight: 1.0, color: "#df8f91", display: "flex" }}
            >
              Stretch.
            </div>
            <div
              style={{ fontSize: 84, lineHeight: 1.0, color: "#df8f91", display: "flex" }}
            >
              Breathe.
            </div>
            <div
              style={{ fontSize: 84, lineHeight: 1.0, color: "#8e3438", display: "flex" }}
            >
              Release.
            </div>
            <div
              style={{ fontSize: 84, lineHeight: 1.0, color: "#8e3438", display: "flex" }}
            >
              Reset.
            </div>
          </div>

          {/* Descriptor */}
          <div
            style={{
              fontSize: 26,
              color: "#6f5f5f",
              fontStyle: "italic",
              maxWidth: 520,
              display: "flex",
              lineHeight: 1.35,
            }}
          >
            A mindful stretch &amp; mobility class with Christina Ribeiro.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
