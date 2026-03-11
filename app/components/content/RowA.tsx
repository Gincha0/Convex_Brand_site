import Image from 'next/image'

/** Row A — case silhouette left, text right */

export function RowA() {
  return (
    <section id="specs" className="py-24">
      <div className="mx-auto w-full max-w-[1500px] xl:max-w-[1220px] lg:max-w-[1000px] px-6">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left — case silhouette A (600×424 viewport, ~4:3) */}
          <div className="w-full aspect-[600/424]">
            <Image
              src="/case-silhouette-a.svg"
              alt="CONVEX case — side view"
              width={600}
              height={424}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right — text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-semibold text-white">
              A different kind of compact
            </h2>
            <p className="text-2xl font-normal text-grey-light">
              Most cases waste space. A standard mid-tower is roughly half air —
              dead volume above the motherboard, empty columns beside the PSU,
              front panel bays nobody uses. That is the starting point.
            </p>
            <p className="text-2xl font-normal text-grey-light">
              CONVEX will fit Micro-ATX and Mini-ITX boards, full-length GPUs,
              and real cooling clearance into a chassis that takes up less desk
              than most cases that don&apos;t. The density is the point.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
