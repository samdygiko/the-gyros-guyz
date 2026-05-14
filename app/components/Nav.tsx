import Link from "next/link";
import Image from "next/image";
import OpenNowPill from "./OpenNowPill";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#kiosk", label: "The Kiosk" },
  { href: "#find", label: "Find us" },
];

export default function Nav() {
  return (
    <header className="w-full bg-cream relative z-10">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-3 md:py-4 flex items-center justify-between gap-3 md:gap-6">
        <Link
          href="/"
          aria-label="The Gyros Guyz — home"
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo.webp"
            alt="The Gyros Guyz"
            width={70}
            height={70}
            priority
            className="h-[56px] md:h-[70px] w-auto"
          />
          <span
            className="hidden sm:inline font-body italic text-[11px] md:text-xs tracking-wide max-w-[180px] leading-snug"
            style={{ color: "var(--cobalt)", opacity: 0.85 }}
          >
            Fresh, deluxe Greek cuisine with a spin.
          </span>
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
