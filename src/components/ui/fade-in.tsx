"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
  amount?: number
  once?: boolean
}

export function FadeIn({
  children,
  className,
  delay = 0,
  amount = 0.1,
  once = true,
  ...props
}: FadeInProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof window.IntersectionObserver !== "function"
    ) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(el)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold: amount,
        // Trigger slightly before it comes fully into view
        rootMargin: "0px 0px -50px 0px",
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [amount, once])

  return (
    <div
      ref={ref}
      className={cn(
        "motion-reduce:animate-none",
        isVisible && "animate-fade-up",
        className,
      )}
      style={{
        animationDelay: `${delay}ms`,
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  )
}
