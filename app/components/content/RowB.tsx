import Image from 'next/image'

/** Row B — text left, case silhouette right */

export function RowB() {
  return (
    <section className="py-24">
      <div className="mx-auto w-full max-w-[1500px] xl:max-w-[1220px] lg:max-w-[1000px] px-6">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left — text */}
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-semibold text-white">
              Where it comes from
            </h2>
            <p className="text-2xl font-normal text-grey-light">
              Designed in Riga. Latvian folk ornament is built on sharp angles
              and precise geometry — patterns that repeat with near-mathematical
              regularity across textiles and carved wood going back centuries.
              Nothing curved, nothing soft.
            </p>
            <p className="text-2xl font-normal text-grey-light">
              That same precision will be in the case. Flat panels, exact edges,
              every radius intentional. Sleek without being minimal. Geometric
              without being cold. The kind of thing that will feel right the
              moment you pick it up.
            </p>
          </div>

          {/* Right — case silhouette B (600×424 viewport, ~4:3) */}
          <div className="w-full aspect-[600/424]">
            <Image
              src="/case-silhouette-b.svg"
              alt="CONVEX case — front view"
              width={600}
              height={424}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
