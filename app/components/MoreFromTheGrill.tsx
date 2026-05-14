import Image from "next/image";

const photos: { n: number; ext: "jpeg" | "png"; alt: string; caption: string }[] = [
  { n: 7, ext: "jpeg", alt: "TheGyrosGuyz wrap fresh off the spit", caption: "Off the spit" },
  { n: 8, ext: "jpeg", alt: "Loaded gyros with hand-cut chips at TheGyrosGuyz", caption: "Loaded" },
  { n: 9, ext: "jpeg", alt: "TheGyrosGuyz souvlaki box plated up", caption: "Souvlaki box" },
  { n: 10, ext: "jpeg", alt: "Chilli oil dressed pita at TheGyrosGuyz", caption: "Chilli oil" },
  { n: 11, ext: "jpeg", alt: "TheGyrosGuyz tzatziki, fresh", caption: "Tzatziki" },
  { n: 12, ext: "jpeg", alt: "TheGyrosGuyz wrap close-up", caption: "Wrap, close" },
  { n: 13, ext: "jpeg", alt: "TheGyrosGuyz grill in action", caption: "On the grill" },
  { n: 14, ext: "jpeg", alt: "TheGyrosGuyz halloumi being grilled", caption: "Halloumi · grilling" },
  { n: 15, ext: "jpeg", alt: "TheGyrosGuyz fries with feta and oregano", caption: "Feta fries" },
  { n: 16, ext: "jpeg", alt: "Baklava bite at TheGyrosGuyz", caption: "Baklava" },
  { n: 17, ext: "jpeg", alt: "TheGyrosGuyz kiosk service window", caption: "Service window" },
  { n: 18, ext: "jpeg", alt: "TheGyrosGuyz wrap in hand", caption: "In hand" },
  { n: 19, ext: "jpeg", alt: "TheGyrosGuyz prep board with fresh salad", caption: "Fresh prep" },
  { n: 20, ext: "jpeg", alt: "TheGyrosGuyz late-night counter", caption: "Late counter" },
  { n: 21, ext: "jpeg", alt: "TheGyrosGuyz wrap with sauce drip", caption: "The drip" },
];

export default function MoreFromTheGrill() {
  return (
    <section aria-labelledby="more-heading" className="bg-white border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14 flex-wrap">
          <p
            id="more-heading"
            className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] font-medium"
            style={{ color: "var(--cobalt)" }}
          >
            More from the grill
          </p>
          <p className="font-body text-xs md:text-sm" style={{ color: "var(--ink)", opacity: 0.55 }}>
            Straight from the kiosk camera roll.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {photos.map((p) => (
            <figure
              key={p.n}
              className="relative overflow-hidden bg-cream aspect-square"
            >
              <Image
                src={`/images/real/GYROS GUYS ${p.n}.${p.ext}`}
                alt={p.alt}
                width={1200}
                height={1200}
                sizes="(max-width: 768px) 50vw, 20vw"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <figcaption
                className="absolute bottom-1.5 left-1.5 right-1.5 font-body text-[10px] uppercase tracking-[0.16em] px-2 py-1"
                style={{ background: "rgba(22,20,34,0.82)", color: "var(--cream)" }}
              >
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
