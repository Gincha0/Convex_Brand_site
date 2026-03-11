/** Components Row — GPU × 3 + CPU cooler × 2 with SVG placeholders */

const GPU_ITEMS = [
  { label: 'RTX 5090', slot: 'gpu-card-a.svg' },
  { label: 'RTX 5080', slot: 'gpu-card-b.svg' },
  { label: 'RTX 5070', slot: 'gpu-card-c.svg' },
] as const

const COOLER_ITEMS = [
  { label: 'Low-profile cooler A', slot: 'cpu-cooler-a.svg' },
  { label: 'Low-profile cooler B', slot: 'cpu-cooler-b.svg' },
] as const

function SvgPlaceholder({
  slot,
  aspect,
}: {
  slot: string
  aspect: string
}) {
  return (
    <div
      className={`bg-accent w-full ${aspect} flex items-center justify-center rounded`}
    >
      <span className="text-grey-light text-lg font-light text-center px-2">{slot}</span>
    </div>
  )
}

export function ComponentsRow() {
  return (
    <section id="components" className="py-24">
      <div className="mx-auto w-full max-w-[1500px] xl:max-w-[1220px] lg:max-w-[1000px] px-6">
        {/* Heading */}
        <h2 className="text-5xl font-semibold text-white mb-6">No restrictions</h2>
        <p className="text-2xl font-normal text-grey-light mb-12 max-w-2xl">
          Full RTX 5080 and 5090 clearance. Full-size GPU support. A cooling-first
          internal layout that doesn&apos;t ask you to choose between thermals and aesthetics.
        </p>

        {/* GPU row */}
        <div className="flex gap-6 justify-center flex-wrap mb-6">
          {GPU_ITEMS.map(({ label, slot }) => (
            <div key={slot} className="flex flex-col gap-3 items-center w-40">
              <SvgPlaceholder slot={slot} aspect="aspect-[2/3]" />
              <span className="text-lg font-light text-grey-light">{label}</span>
            </div>
          ))}

          {COOLER_ITEMS.map(({ label, slot }) => (
            <div key={slot} className="flex flex-col gap-3 items-center w-52">
              <SvgPlaceholder slot={slot} aspect="aspect-[3/2]" />
              <span className="text-lg font-light text-grey-light">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
