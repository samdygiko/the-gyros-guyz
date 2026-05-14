const items: { name: string; desc: string; price: string }[] = [
  {
    name: "Classic Gyros",
    desc: "Slow-spit pork or chicken, tomato, red onion, tzatziki, hand-cut chips, wrapped in warm pita.",
    price: "£8",
  },
  {
    name: "Halloumi Wrap",
    desc: "Grilled halloumi, salad, mint yoghurt, chilli oil — the late-night vegetarian default.",
    price: "£8",
  },
  {
    name: "Souvlaki Box",
    desc: "Two skewers, rice or chips, salad, pita on the side, tzatziki and a spicy red.",
    price: "£10",
  },
  {
    name: "Loaded Pita Fries",
    desc: "Crisp chips piled in pita, feta crumble, oregano, chilli, lemon. Built to share but rarely shared.",
    price: "£6",
  },
  {
    name: "Tzatziki Side",
    desc: "Properly thick. Garlic, cucumber, dill, olive oil. Eat with anything else on the board.",
    price: "£3",
  },
  {
    name: "Baklava Bite",
    desc: "One square. Honey, walnut, filo. Don't say you're getting two.",
    price: "£2",
  },
];

export default function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-heading" className="bg-cream border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-5 md:px-10 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6 mb-3 md:mb-4">
          <p
            id="menu-heading"
            className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] font-medium"
            style={{ color: "var(--cobalt)" }}
          >
            What we sling
          </p>
        </div>
        <p className="font-body text-xs md:text-sm mb-10 md:mb-14" style={{ color: "var(--ink)", opacity: 0.6 }}>
          Sample menu — final prices on the kiosk board.
        </p>

        <ul className="divide-y" style={{ borderColor: "var(--ink)" }}>
          {items.map((it) => (
            <li
              key={it.name}
              className="grid grid-cols-[1fr_auto] gap-x-4 md:gap-x-8 py-6 md:py-8 items-baseline border-t"
              style={{ borderColor: "rgba(22,20,34,0.12)" }}
            >
              <div className="min-w-0">
                <h3
                  className="font-display tracking-tight leading-[0.95]"
                  style={{
                    color: "var(--ink)",
                    fontSize: "clamp(1.75rem, 4vw, 3rem)",
                  }}
                >
                  {it.name}
                </h3>
                <p className="font-body text-sm md:text-base mt-3 max-w-2xl" style={{ color: "var(--ink)", opacity: 0.75 }}>
                  {it.desc}
                </p>
              </div>
              <span
                className="font-display leading-none whitespace-nowrap"
                style={{
                  color: "var(--cobalt)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                }}
              >
                {it.price}
              </span>
            </li>
          ))}
        </ul>

        <p className="font-body text-sm mt-10" style={{ color: "var(--ink)", opacity: 0.7 }}>
          Vegetarian options on every wrap. Ask the kiosk.
        </p>
      </div>
    </section>
  );
}
