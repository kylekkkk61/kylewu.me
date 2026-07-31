import { SiGithub } from "@icons-pack/react-simple-icons"
import { IconBrandLinkedinFilled, IconMailFilled } from "@tabler/icons-react"
import { useTranslations } from "next-intl"
import { links } from "@/data/links"
import type { Profile } from "@/data/profile"
import { Link } from "@/i18n/routing"

export function SiteFooter({ profile }: { profile: Profile }) {
  const t = useTranslations("Footer")
  return (
    <footer className="bg-background border-border/40 text-muted-foreground relative z-50 border-t py-8 text-sm">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start">
          <div className="flex max-w-md flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center md:justify-start md:text-left">
            <p>
              © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
              {profile.name}
            </p>
            <Link
              href="/privacy"
              className="hover:text-foreground underline-offset-4 transition-colors hover:underline"
            >
              {t("Privacy")}
            </Link>
            <Link
              href="/licensing"
              className="hover:text-foreground underline-offset-4 transition-colors hover:underline"
            >
              {t("Licensing")}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <SiGithub className="h-5 w-5" />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedinFilled className="h-5 w-5" />
            </a>
            <a
              href={links.email}
              className="hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <IconMailFilled className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
