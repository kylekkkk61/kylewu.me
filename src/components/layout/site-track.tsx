"use client"
import * as React from "react"
import { cn } from "@/lib/utils"

const SECTIONS = ["hero", "work", "writing", "how-i-work", "about", "contact"]

const SECTION_THEMES: Record<
  string,
  { train: string; track: string; nodePast: string; nodeActive: string }
> = {
  hero: {
    train: "bg-track-train-default shadow-[var(--track-shadow)]",
    track: "bg-track-line-default",
    nodePast: "bg-track-line-default",
    nodeActive: "bg-track-train-default",
  },
  work: {
    train: "bg-track-train-default shadow-[var(--track-shadow)]",
    track: "bg-track-line-default",
    nodePast: "bg-track-line-default",
    nodeActive: "bg-track-train-default",
  },
  writing: {
    train: "bg-track-train-default shadow-[var(--track-shadow)]",
    track: "bg-track-line-default",
    nodePast: "bg-track-line-default",
    nodeActive: "bg-track-train-default",
  },
  "how-i-work": {
    train: "bg-track-train-teal shadow-[var(--track-shadow)]",
    track: "bg-track-line-teal",
    nodePast: "bg-track-line-teal",
    nodeActive: "bg-track-train-teal",
  },
  about: {
    train: "bg-track-train-plum shadow-[var(--track-shadow)]",
    track: "bg-track-line-plum",
    nodePast: "bg-track-line-plum",
    nodeActive: "bg-track-train-plum",
  },
  contact: {
    train: "bg-track-train-default shadow-[var(--track-shadow)]",
    track: "bg-track-line-default",
    nodePast: "bg-track-line-default",
    nodeActive: "bg-track-train-default",
  },
}

export function SiteTrack() {
  const [activeSection, setActiveSection] = React.useState<string>("hero")

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-20% 0px -40% 0px",
      },
    )

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const activeIndex = Math.max(0, SECTIONS.indexOf(activeSection))
  const currentTheme =
    SECTION_THEMES[SECTIONS[activeIndex]] || SECTION_THEMES.hero

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden w-full dark:mix-blend-plus-lighter mix-blend-normal md:block">
      <div
        className="absolute inset-y-0 flex w-2 flex-col items-center"
        style={{ left: "max(12px, calc(25vw - 308px))" }}
      >
        <div className="absolute top-40 bottom-60 flex w-full flex-col items-center">
          {/* The Track Line Background (Thicker, translucent glass) */}
          <div className="absolute -top-6 -bottom-6 left-1/2 w-[2px] -translate-x-1/2 bg-[#d8d3c5] dark:bg-[#232323]" />

          {/* The Filled Track Line (From top down to activeIndex) */}
          <div
            className={cn(
              "absolute -top-6 left-1/2 w-[2px] -translate-x-1/2 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
              currentTheme.track,
            )}
            style={{
              height: `calc(${activeIndex * (100 / (SECTIONS.length - 1))}% + 24px)`,
            }}
          />

          {/* Nodes Container */}
          <div className="relative flex h-full w-full flex-col justify-between">
            {SECTIONS.map((id, index) => {
              const isPast = index < activeIndex
              const isCurrent = index === activeIndex

              return (
                <div
                  key={id}
                  className="relative flex h-4 items-center justify-center"
                >
                  <div
                    className={cn(
                      "z-10 rounded-full transition-all duration-500",
                      isCurrent ? "h-3 w-3" : "h-[6px] w-[6px]",
                      !isPast && !isCurrent && "bg-[#d8d3c5] dark:bg-[#232323]",
                      isPast && currentTheme.nodePast,
                      isCurrent && currentTheme.nodeActive,
                    )}
                  />
                </div>
              )
            })}

            {/* The "Train" / Capsule */}
            <div
              className={cn(
                "absolute left-1/2 z-20 w-[4px] rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                currentTheme.train,
              )}
              style={{
                height: "48px",
                top: `calc(${activeIndex * (100 / (SECTIONS.length - 1))}% - 24px)`,
                transform: "translateX(-50%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
