import type { Metadata } from "next"
import { Geist, Geist_Mono, Newsreader } from "next/font/google"
import "../globals.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SiteBackground } from "@/components/layout/site-background"
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
})

import { getTranslations } from "next-intl/server"
import { getOgImagePath, siteConfig } from "@/lib/seo"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "Metadata" })

  const canonicalPath = locale === "en" ? "/" : `/${locale}`

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t("title"),
      template: `%s | ${t("titleShort")}`,
    },
    description: t("description"),
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: "/",
        "zh-TW": "/zh-TW",
        "x-default": "/",
      },
    },
    openGraph: {
      title: t("socialTitle"),
      description: t("socialDescription"),
      url: `${siteConfig.url}${canonicalPath === "/" ? "" : canonicalPath}`,
      siteName: t("titleShort"),
      locale: locale === "zh-TW" ? "zh_TW" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("socialTitle"),
      description: t("socialDescription"),
      images: [
        {
          url: getOgImagePath(locale),
          alt: "Kyle Wu portfolio",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

import { GoogleAnalytics } from "@next/third-parties/google"
import { notFound } from "next/navigation"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, setRequestLocale } from "next-intl/server"
import { routing } from "@/i18n/routing"

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  setRequestLocale(locale)

  // Ensure that the incoming `locale` is valid
  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound()
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground relative flex min-h-full flex-col">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <SiteBackground />
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
          {process.env.NEXT_PUBLIC_GA_ID && (
            <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
          )}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
