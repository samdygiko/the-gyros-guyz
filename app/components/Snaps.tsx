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
    src: "/images/unsplash/gyros-wrap.jpg",
    alt: "Classic gyros wrap on greaseproof paper",
    caption: "The classic",
    w: 2000,
    h: 2096,
    className: "md:col-span-5 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    src: "/images/unsplash/halloumi-wrap.jpg",
    alt: "Halloumi wrap with salad and mint yoghurt",
    caption: "Halloumi · the default",
    w: 2000,
    h: 2417,
    className: "md:col-span-3 aspect-[3/4]",
  },
  {
    src: "/images/unsplash/souvlaki.jpg",
    alt: "Souvlaki skewers fresh off the grill",
    caption: "Skewers · spit-grilled",
    w: 2000,
    h: 3011,
    className: "md:col-span-4 aspect-[4/5]",
  },
  {
    src: "/images/unsplash/pita-grill.jpg",
    alt: "Warm pita on the grill",
    caption: "Pita · warmed to order",
    w: 2000,
    h: 1222,
    className: "md:col-span-4 aspect-[16/10]",
  },
  {
    src: "/images/unsplash/counter.jpg",
    alt: "Late-night kiosk counter under warm light",
    caption: "The kiosk · late",
    w: 2000,
    h: 1500,
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
