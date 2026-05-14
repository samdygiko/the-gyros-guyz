import Image from "next/image";

const heroImages: { src: string; alt: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1561651823-34feb02250e4?w=800&q=80",
    alt: "A freshly built gyros wrap stacked with meat, tomato, red onion and tzatziki",
  },
  {
    src: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=800&q=80",
    alt: "Grilled souvlaki skewers fresh off the charcoal",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    alt: "Grilled halloumi served with fresh salad and herbs",
  },
];

export default function Hero() {
  return (
    <section
      aria-labelledby="brand-bomb"
      className="bg-cream"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 pt-10 md:pt-20 pb-14 md:pb-24 flex flex-col items-center text-center">
        <h1 id="brand-bomb" className="sr-only">
          The Gyros Guyz
        </h1>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {heroImages.map((img, i) => (
            <figure
              key={i}
              className="relative overflow-hidden rounded-2xl bg-white aspect-[3/4]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={1067}
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(22,20,34,0.18), rgba(22,20,34,0) 45%)",
                }}
              />
            </figure>
          ))}
        </div>

        <p
          className="font-body italic font-medium mt-6 md:mt-8 text-base md:text-lg"
          style={{ color: "var(--ink)", opacity: 0.6 }}
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
