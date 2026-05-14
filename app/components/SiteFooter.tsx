export default function SiteFooter() {
  return (
    <footer style={{ background: "var(--ink)", color: "var(--cream)" }}>
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
        <div className="md:col-span-5">
          <p
            className="font-display leading-none"
            style={{ color: "var(--bubblegum)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
          >
            TheGyrosGuyz
          </p>
          <p
            className="font-body italic text-xs md:text-sm mt-2"
            style={{ color: "rgba(255,247,236,0.7)" }}
          >
            Fresh, deluxe Greek cuisine with a spin.
          </p>
        </div>
        <div className="md:col-span-4 font-body text-sm leading-relaxed" style={{ color: "var(--cream)" }}>
          <p>Inside Hooch &amp; Candy</p>
          <p>82 Bedford Pl, Southampton</p>
          <p>SO15 2BX</p>
          <a
            href="https://www.instagram.com/thegyrosguyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm font-medium underline underline-offset-4"
            style={{ color: "var(--cream)" }}
          >
            Follow us on Instagram ↗
          </a>
        </div>
        <div className="md:col-span-3 md:text-right font-body text-xs tracking-wide" style={{ color: "rgba(255,247,236,0.55)" }}>
          <a
            href="https://dygiko.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:underline underline-offset-4"
          >
            Designed by Dygiko ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
