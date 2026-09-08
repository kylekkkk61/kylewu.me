import { act, cleanup, fireEvent, render } from "@testing-library/react"
import type { AnchorHTMLAttributes } from "react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { getProfile } from "@/data/profile"
import { SiteHeader } from "./site-header"

vi.mock("next-intl", () => ({
  useLocale: () => "en",
  useTranslations: () => (key: string) => key,
}))
vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: "dark", setTheme: vi.fn() }),
}))
vi.mock("@/i18n/routing", () => ({
  Link: (props: AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />,
  usePathname: () => "/",
  useRouter: () => ({ replace: vi.fn() }),
}))

let desktopChanged: () => void
let desktop: {
  matches: boolean
  addEventListener: ReturnType<typeof vi.fn>
  removeEventListener: ReturnType<typeof vi.fn>
}

beforeEach(() => {
  desktop = {
    matches: false,
    addEventListener: vi.fn((_type, fn) => {
      desktopChanged = fn
    }),
    removeEventListener: vi.fn(),
  }
  vi.stubGlobal("matchMedia", () => desktop)
  Object.defineProperty(HTMLDialogElement.prototype, "showModal", {
    configurable: true,
    value: vi.fn(function (this: HTMLDialogElement) {
      this.open = true
    }),
  })
  Object.defineProperty(HTMLDialogElement.prototype, "close", {
    configurable: true,
    value: vi.fn(function (this: HTMLDialogElement) {
      this.open = false
    }),
  })
})

afterEach(() => {
  cleanup()
  document.body.style.overflow = ""
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  Reflect.deleteProperty(HTMLDialogElement.prototype, "showModal")
  Reflect.deleteProperty(HTMLDialogElement.prototype, "close")
})

describe("mobile navigation lifecycle", () => {
  it("opens modally and restores the previous scroll setting on close", () => {
    document.body.style.overflow = "auto"
    const view = render(<SiteHeader profile={getProfile("en")} />)
    fireEvent.click(view.getByRole("button", { name: "OpenMenu" }))
    const dialog = view.getByRole("dialog") as HTMLDialogElement
    expect(dialog.showModal).toHaveBeenCalledOnce()
    expect(dialog.contains(document.activeElement)).toBe(true)
    expect(document.body.style.overflow).toBe("hidden")
    fireEvent.click(dialog.querySelector("button") as HTMLButtonElement)
    expect(dialog.open).toBe(false)
    expect(document.body.style.overflow).toBe("auto")
  })

  it("closes and releases scrolling when resized to desktop", () => {
    const view = render(<SiteHeader profile={getProfile("en")} />)
    fireEvent.click(view.getByRole("button", { name: "OpenMenu" }))
    const dialog = view.getByRole("dialog") as HTMLDialogElement
    act(() => {
      desktop.matches = true
      desktopChanged()
    })
    expect(dialog.open).toBe(false)
    expect(document.body.style.overflow).toBe("")
    expect(desktop.removeEventListener).toHaveBeenCalled()
  })
})
