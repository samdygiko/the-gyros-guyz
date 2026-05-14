export default function Hero() {
  return (
    <section
      aria-labelledby="brand-bomb"
      className="bg-cream"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 pt-10 md:pt-20 pb-14 md:pb-24 flex flex-col items-center text-center">
        <h1
          id="brand-bomb"
          className="font-display leading-[0.9] tracking-tight"
          style={{
            color: "var(--bubblegum)",
            fontSize: "clamp(4rem, 13vw, 11rem)",
          }}
        >
          TheGyrosGuyz
        </h1>
        <p
          className="font-body font-medium mt-6 md:mt-10 text-lg md:text-2xl"
          style={{ color: "var(--ink)" }}
        >
          Greek street food, inside Hooch &amp; Candy.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-8 md:mt-12">
          <span
            className="inline-flex items-center px-3 py-1.5 text-[11px] md:text-xs uppercase tracking-[0.15em] font-body font-medium"
            style={{ color: "var(--cobalt)", border: "1.5px solid var(--cobalt)" }}
          >
            82 Bedford Pl · Southampton
          </span>
          <span
            className="inline-flex items-center px-3 py-1.5 text-[11px] md:text-xs uppercase tracking-[0.15em] font-body font-medium"
            style={{ color: "var(--cobalt)", border: "1.5px solid var(--cobalt)" }}
          >
            Walk-up only · No reservations
          </span>
        </div>
      </div>
    </section>
  );
}
