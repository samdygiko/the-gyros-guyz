import Image from "next/image";

export default function Hero() {
  return (
    <section
      aria-labelledby="brand-bomb"
      className="bg-cream"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 pt-10 md:pt-20 pb-14 md:pb-24 flex flex-col items-center text-center">
        <h1 id="brand-bomb" className="m-0">
          <Image
            src="/images/logo.webp"
            alt="The Gyros Guyz"
            width={180}
            height={180}
            priority
            className="mx-auto h-auto w-[180px] md:w-[220px]"
          />
        </h1>
        <p
          className="font-body italic font-medium mt-6 md:mt-10 text-lg md:text-2xl"
          style={{ color: "var(--ink)" }}
        >
          Fresh, deluxe Greek cuisine with a spin.
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

        <a
          href="https://www.google.com/maps/search/?api=1&query=Hooch+%26+Candy+82+Bedford+Pl+Southampton+SO15+2BX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 md:mt-8 text-sm md:text-[15px] font-body font-medium hover:underline underline-offset-4"
          style={{ color: "var(--ink)" }}
          aria-label="4.4 out of 5 stars from 117 Google reviews"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#F5B400" aria-hidden="true">
            <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7L12 17.5 5.7 21.2l1.7-7L2 9.5l7.1-.6L12 2z" />
          </svg>
          <span>
            <strong style={{ fontWeight: 600 }}>4.4</strong>
            <span style={{ opacity: 0.55 }}> · 117 reviews on Google ↗</span>
          </span>
        </a>
      </div>
    </section>
  );
}
