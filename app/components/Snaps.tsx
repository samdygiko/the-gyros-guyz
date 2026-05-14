import Image from "next/image";

const tiles: {
  src: string;
  alt: string;
  caption: string;
  w: number;
  h: number;
  className: string;
}[] = [
  {
    src: "/images/real/GYROS GUYS 1.jpeg",
    alt: "A freshly built TheGyrosGuyz gyros wrap on greaseproof paper",
    caption: "The classic",
    w: 1600,
    h: 2000,
    className: "md:col-span-5 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    src: "/images/real/GYROS GUYS 2.jpeg",
    alt: "A grilled halloumi wrap stacked with salad and mint yoghurt at TheGyrosGuyz",
    caption: "Halloumi · the default",
    w: 1600,
    h: 2000,
    className: "md:col-span-3 aspect-[3/4]",
  },
  {
    src: "/images/real/GYROS GUYS 3.jpeg",
    alt: "Souvlaki skewers fresh off the grill at TheGyrosGuyz",
    caption: "Skewers · spit-grilled",
    w: 1600,
    h: 2000,
    className: "md:col-span-4 aspect-[4/5]",
  },
  {
    src: "/images/real/GYROS GUYS 4.jpeg",
    alt: "Warm pita being prepped on the grill at TheGyrosGuyz",
    caption: "Pita · warmed to order",
    w: 1600,
    h: 1067,
    className: "md:col-span-4 aspect-[16/10]",
  },
  {
    src: "/images/real/GYROS GUYS 5.png",
    alt: "The TheGyrosGuyz kiosk counter under warm light, late evening",
    caption: "The kiosk · late",
    w: 1600,
    h: 2000,
    className: "md:col-span-3 aspect-[3/4]",
  },
];

export default function Snaps() {
  return (
    <section aria-labelledby="snaps-heading" className="bg-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-24">
        <p
          id="snaps-heading"
          className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] font-medium mb-10 md:mb-14"
          style={{ color: "var(--cobalt)" }}
        >
          Snaps
        </p>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {tiles.map((t, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden bg-white ${t.className}`}
            >
              <Image
                src={t.src}
                alt={t.alt}
                width={t.w}
                height={t.h}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <figcaption
                className="absolute bottom-2 left-2 right-2 font-body text-[10px] uppercase tracking-[0.18em] px-2.5 py-1.5"
                style={{ background: "rgba(22,20,34,0.85)", color: "var(--cream)" }}
              >
                {t.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
