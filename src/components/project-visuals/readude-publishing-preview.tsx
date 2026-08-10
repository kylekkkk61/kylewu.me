import Image from "next/image"

export function ReadudePublishingPreview({
  eager = false,
}: {
  eager?: boolean
}) {
  return (
    <div className="relative flex h-full min-h-[240px] w-full items-center justify-center overflow-hidden p-5 sm:p-7">
      <Image
        src="/projects/readude-social-card.svg"
        alt="Modern Cryptography by Kyle Wu, published by Readude"
        width={1200}
        height={630}
        loading={eager ? "eager" : "lazy"}
        sizes="(min-width: 1024px) 45vw, 100vw"
        className="h-auto w-full rounded-lg border border-black/10 shadow-[0_18px_45px_rgba(49,32,112,0.16)] dark:border-white/10"
      />
    </div>
  )
}
