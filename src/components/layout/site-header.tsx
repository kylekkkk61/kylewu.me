"use client"

import { Globe, Menu, Moon, Sun, X } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import * as React from "react"
import { buttonVariants } from "@/components/ui/button"
import { LogoIcon } from "@/components/ui/logo-icon"
import type { Profile } from "@/data/profile"
import { Link, usePathname, useRouter } from "@/i18n/routing"
import { cn } from "@/lib/utils"

export function SiteHeader({
  profile,
  languagePath,
}: {
  profile: Profile
  languagePath?: string
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const menuButtonRef = React.useRef<HTMLButtonElement>(null)
  const mobileMenuRef = React.useRef<HTMLDivElement>(null)
  const t = useTranslations("Navigation")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  const [isLanguagePending, startLanguageTransition] = React.useTransition()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent scrolling when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  React.useEffect(() => {
    if (!isMobileMenuOpen) return

    mobileMenuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== "Tab") return
      const links =
        mobileMenuRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]")
      if (!links?.length) return

      const firstLink = links[0]
      const lastLink = links[links.length - 1]
      if (event.shiftKey && document.activeElement === firstLink) {
        event.preventDefault()
        lastLink.focus()
      } else if (!event.shiftKey && document.activeElement === lastLink) {
        event.preventDefault()
        firstLink.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: "/#work", label: t("Work"), isActive: false },
    {
      href: "/writing",
      label: t("Writing"),
      isActive: pathname.startsWith("/writing"),
    },
    { href: "/#how-i-work", label: t("HowIWork"), isActive: false },
    { href: "/#about", label: t("Background"), isActive: false },
  ]

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "zh-TW" : "en"
    const hash = typeof window !== "undefined" ? window.location.hash : ""
    const nextPath = languagePath ?? pathname + hash
    startLanguageTransition(() => {
      router.replace(nextPath, { locale: nextLocale, scroll: false })
    })
  }

  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="relative z-50 flex items-center gap-2 font-semibold group"
            onClick={(e) => {
              setIsMobileMenuOpen(false)
              if (
                (typeof window !== "undefined" &&
                  window.location.pathname === "/") ||
                window.location.pathname === `/${locale}`
              ) {
                // Next-intl link handles prefix, but smooth scroll custom logic
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
                window.history.pushState(
                  null,
                  "",
                  locale === "en" ? "/" : `/${locale}`,
                )
              }
            }}
          >
            <LogoIcon className="h-7 w-7 text-foreground/90 transition-transform duration-200 group-hover:scale-105" />
            <div className="h-6 w-[1px] bg-border/60" />
            <span className="text-xl tracking-tight">{profile.name}</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="text-muted-foreground hidden items-center gap-8 text-sm font-medium md:flex lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.isActive ? "page" : undefined}
              className={cn(
                "hover:text-foreground transition-colors",
                link.isActive && "text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop & Mobile Actions */}
        <div className="relative z-50 flex items-center gap-4">
          {mounted ? (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={
                theme === "dark" ? t("SwitchToLight") : t("SwitchToDark")
              }
              className="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center transition-colors cursor-pointer"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          ) : (
            <div className="h-9 w-9" />
          )}

          <button
            type="button"
            onClick={toggleLanguage}
            disabled={isLanguagePending}
            aria-busy={isLanguagePending}
            aria-label={
              locale === "en" ? t("SwitchToChinese") : t("SwitchToEnglish")
            }
            className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm font-medium transition-[color,opacity] disabled:cursor-wait disabled:opacity-60"
          >
            <span className={cn(isLanguagePending && "animate-pulse")}>
              <Globe aria-hidden="true" size={16} />
            </span>
            <span className="hidden sm:inline">
              {locale === "en" ? "中文" : "EN"}
            </span>
          </button>

          <Link
            href="/#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "hidden sm:inline-flex",
            )}
          >
            {t("Contact")}
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            className="text-muted-foreground hover:text-foreground -mr-2 p-2 transition-colors md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? t("CloseMenu") : t("OpenMenu")}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label={t("NavigationMenu")}
          className="bg-background border-border/40 animate-fade-up absolute top-16 left-0 w-full border-b shadow-lg md:hidden"
        >
          <nav className="flex flex-col gap-6 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.isActive ? "page" : undefined}
                className={cn(
                  "text-foreground text-lg font-medium transition-colors dark:hover:text-white hover:text-foreground",
                  link.isActive && "text-primary",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="text-foreground text-lg font-medium transition-colors dark:hover:text-white hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("Contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
