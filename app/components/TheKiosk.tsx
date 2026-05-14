import Image from "next/image";

export default function TheKiosk() {
  return (
    <section
      id="kiosk"
      aria-labelledby="kiosk-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
        <div className="md:col-span-5">
          <p
            id="kiosk-heading"
            className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] font-medium mb-4"
            style={{ color: "var(--cobalt)" }}
          >
            The Kiosk
          </p>
          <h2
            className="font-display leading-[0.95] tracking-tight mb-6"
            style={{
              color: "var(--ink)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            }}
          >
            A Greek kitchen at the back of the bar.
          </h2>
          <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: "var(--ink)", opacity: 0.78 }}>
            We trade out of a kiosk inside Hooch &amp; Candy on Bedford Place — slow-spit gyros, halloumi
            wraps and proper tzatziki for the bar crowd. No reservations, no online ordering. Walk in,
            grab a drink, eat at the bar.
          </p>
        </div>

        <figure className="md:col-span-7 relative overflow-hidden aspect-[4/3] md:aspect-[16/10] bg-cream">
          <Image
            src="/images/unsplash/bar-interior.jpg"
            alt="Hooch &amp; Candy bar interior with warm lighting and the kiosk counter at the back"
            width={2000}
            height={1500}
            sizes="(max-width: 768px) 100vw, 58vw"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <figcaption
            className="absolute bottom-3 left-3 right-3 font-body text-[10px] md:text-[11px] uppercase tracking-[0.18em] px-3 py-2"
            style={{ background: "rgba(22,20,34,0.85)", color: "var(--cream)" }}
          >
            Find us at the back of the bar.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
