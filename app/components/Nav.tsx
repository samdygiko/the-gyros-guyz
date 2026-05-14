import Link from "next/link";
import OpenNowPill from "./OpenNowPill";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#kiosk", label: "The Kiosk" },
  { href: "#find", label: "Find us" },
];

export default function Nav() {
  return (
    <header className="w-full bg-cream relative z-10">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-4 md:py-5 flex items-center justify-between gap-3 md:gap-6">
        <Link
          href="/"
          aria-label="TheGyrosGuyz — home"
          className="font-display text-[1.3rem] md:text-[1.7rem] tracking-tight leading-none"
          style={{ color: "var(--bubblegum)" }}
        >
          TheGyrosGuyz
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-body" style={{ color: "var(--ink)" }}>
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:underline underline-offset-4">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <OpenNowPill />
        </div>
      </div>
    </header>
  );
}
