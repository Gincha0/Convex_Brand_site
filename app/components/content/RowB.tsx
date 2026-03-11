/** Row B — text left, SVG placeholder right */

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
              Designed in Riga, Latvia. The hexagon motif comes from the
              Latvian folk tradition — six-pointed geometry that recurs across
              centuries of textile and architectural work.
            </p>
            <p className="text-2xl font-normal text-grey-light">
              The aesthetic is sleeper: precise, undecorated, built to
              perform rather than to impress at a glance.
            </p>
          </div>

          {/* Right — SVG placeholder */}
          <div className="bg-accent w-full aspect-[4/3] flex items-center justify-center rounded">
            <span className="text-grey-light text-lg font-light">case-silhouette-b.svg</span>
          </div>
        </div>
      </div>
    </section>
  )
}
