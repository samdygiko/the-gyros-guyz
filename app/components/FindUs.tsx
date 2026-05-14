import { WEEKLY_HOURS, DAY_NAMES, formatTimeShort, type DayOfWeek } from "../lib/hours";

const dayOrder: DayOfWeek[] = [1, 2, 3, 4, 5, 6, 0];

const tags = ["Happy-hour food", "Doesn't accept reservations", "Vegetarian options"];

export default function FindUs() {
  return (
    <section id="find" aria-labelledby="find-heading" className="bg-white border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-16 md:py-24">
        <p
          id="find-heading"
          className="font-body text-[11px] md:text-xs uppercase tracking-[0.22em] font-medium mb-4"
          style={{ color: "var(--cobalt)" }}
        >
          Find us
        </p>
        <h2
          className="font-display leading-[0.95] tracking-tight mb-12 md:mb-16"
          style={{
            color: "var(--ink)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          }}
        >
          82 Bedford Pl, Southampton.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
          <div className="md:col-span-6">
            <p className="font-body text-[11px] uppercase tracking-[0.22em] font-medium mb-3" style={{ color: "var(--ink)", opacity: 0.55 }}>
              Where
            </p>
            <address className="not-italic font-body text-base md:text-lg leading-relaxed mb-6" style={{ color: "var(--ink)" }}>
              Located inside <span style={{ color: "var(--cobalt)" }}>Hooch &amp; Candy</span>
              <br />
              82 Bedford Pl
              <br />
              Southampton, SO15 2BX
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hooch%20%26%20Candy%2082%20Bedford%20Pl%20Southampton%20SO15%202BX"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm md:text-base underline underline-offset-4"
              style={{ color: "var(--cobalt)" }}
            >
              Open in Google Maps →
            </a>

            <div className="flex flex-wrap gap-2 mt-8">
              {tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] font-body font-medium"
                  style={{ color: "var(--cobalt)", border: "1.5px solid var(--cobalt)" }}
                >
                  {t}
                </span>
              ))}
            </div>

            <p className="font-body text-xs mt-8 max-w-md" style={{ color: "var(--ink)", opacity: 0.55 }}>
              {/* TODO: swap to the client's Instagram handle once they supply it */}
              Instagram coming soon.
            </p>
          </div>

          <div className="md:col-span-6 md:pl-10 md:border-l border-ink/15">
            <p className="font-body text-[11px] uppercase tracking-[0.22em] font-medium mb-6" style={{ color: "var(--ink)", opacity: 0.55 }}>
              Hours
            </p>
            <dl className="font-body text-base md:text-lg">
              {dayOrder.map((d) => {
                const sched = WEEKLY_HOURS[d];
                return (
                  <div
                    key={d}
                    className="grid grid-cols-2 py-3 border-b last:border-b-0"
                    style={{ borderColor: "rgba(22,20,34,0.12)" }}
                  >
                    <dt style={{ color: "var(--ink)" }}>{DAY_NAMES[d]}</dt>
                    <dd
                      className="tabular-nums"
                      style={{ color: sched ? "var(--ink)" : "rgba(22,20,34,0.45)" }}
                    >
                      {sched ? `${formatTimeShort(sched.open)} – ${formatTimeShort(sched.close)}` : "Closed"}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
