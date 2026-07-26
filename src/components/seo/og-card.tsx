import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"
import { LogoIcon } from "@/components/ui/logo-icon"

export const ogImageSize = {
  width: 1200,
  height: 630,
}

type OgCardProps = {
  locale: string
  eyebrow: string
  title: string
  subtitle: string
  description?: string
  footer?: string
  accent?: string
}

const notoSansData = readFile(
  join(process.cwd(), "src/assets/fonts/NotoSansTC-Medium.otf"),
)
const geistData = readFile(
  join(process.cwd(), "src/assets/fonts/Geist-Latin.ttf"),
)
const newsreaderData = readFile(
  join(process.cwd(), "src/assets/fonts/Newsreader-Latin.ttf"),
)
const backgroundData = readFile(
  join(process.cwd(), "public/og/og-background.png"),
  "base64",
).then((data) => `data:image/png;base64,${data}`)

export async function createOgImage({
  locale,
  eyebrow,
  title,
  subtitle,
  description,
  footer = "Kyle Wu",
  accent = "#c4a56c",
}: OgCardProps) {
  const isEnglish = locale === "en"
  const [bodyFont, titleFont, background] = await Promise.all([
    isEnglish ? geistData : notoSansData,
    isEnglish ? newsreaderData : notoSansData,
    backgroundData,
  ])
  const bodyFontFamily = isEnglish ? "Geist" : "Noto Sans TC"
  const titleFontFamily = isEnglish ? "Newsreader" : "Noto Sans TC"

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0d0d0d",
        color: "#f0eadd",
        fontFamily: bodyFontFamily,
      }}
    >
      {/* biome-ignore lint/performance/noImgElement: ImageResponse renders local data URLs directly. */}
      <img
        alt=""
        src={background}
        width={ogImageSize.width}
        height={ogImageSize.height}
        style={{ position: "absolute", inset: 0 }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "linear-gradient(90deg, rgba(10,10,10,0.3), rgba(10,10,10,0.02))",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "58px 70px 52px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            color: accent,
          }}
        >
          <LogoIcon
            aria-hidden="true"
            decorative
            fill="currentColor"
            style={{ width: 54, height: 54 }}
          />
          <span
            style={{
              fontSize: 20,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </span>
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: 980,
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: title.length > 28 ? 64 : 78,
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              color: "#f3f2ee",
              fontFamily: titleFontFamily,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 31,
              lineHeight: 1.35,
              color: "#c9c5bb",
            }}
          >
            {subtitle}
          </div>
          {description && (
            <div
              style={{
                display: "flex",
                fontSize: 21,
                lineHeight: 1.4,
                color: accent,
              }}
            >
              {description}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(240,234,221,0.18)",
            paddingTop: 20,
            color: "#a9a69f",
            fontSize: 18,
          }}
        >
          <span>{footer}</span>
          <span>kylewu.me</span>
        </div>
      </div>
    </div>,
    {
      ...ogImageSize,
      fonts: isEnglish
        ? [
            {
              name: "Geist",
              data: bodyFont,
              style: "normal",
              weight: 500,
            },
            {
              name: "Newsreader",
              data: titleFont,
              style: "normal",
              weight: 500,
            },
          ]
        : [
            {
              name: "Noto Sans TC",
              data: bodyFont,
              style: "normal",
              weight: 500,
            },
          ],
    },
  )
}
