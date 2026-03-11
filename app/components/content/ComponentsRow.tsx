import Image from 'next/image'

/** Components Row — component silhouette left, text right (mirrors RowA layout) */

export function ComponentsRow() {
  return (
    <section id="components" className="py-24">
      <div className="mx-auto w-full max-w-[1500px] xl:max-w-[1220px] lg:max-w-[1000px] px-6">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left — component silhouette (1000×707 viewport, ~10:7) */}
          <div className="w-full aspect-[1000/707]">
            <Image
              src="/component-silhouette-a.svg"
              alt="CONVEX internal components"
              width={1000}
              height={707}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right — text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-semibold text-white">No restrictions</h2>
            <p className="text-2xl font-normal text-grey-light">
              The internal layout will be designed around the largest current-gen
              GPU sizes first, then everything else fit around that.
              Most compact cases do it the other way.
            </p>
            <p className="text-2xl font-normal text-grey-light">
              240mm liquid cooling will fit. Single or dual-slot GPUs at full
              length. You choose the hardware — the case won&apos;t choose for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
