"use client";

import { useEffect, useState } from "react";
import { londonNow, WEEKLY_HOURS, DAY_NAMES, formatTimeShort } from "../lib/hours";

export default function TonightStrip() {
  const [copy, setCopy] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const { day } = londonNow();
      const sched = WEEKLY_HOURS[day];
      if (!sched) {
        setCopy("Closed tonight. Back tomorrow from 5pm.");
      } else {
        setCopy(`Tonight — ${DAY_NAMES[day]} · serving until ${formatTimeShort(sched.close)}`);
      }
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-label="Tonight at the kiosk"
      className="w-full"
      style={{ background: "var(--cobalt)", color: "var(--white)" }}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-5 md:py-6">
        <p
          className="font-body text-sm md:text-base uppercase tracking-[0.18em] font-medium text-center"
          style={{ color: "var(--white)" }}
        >
          {copy ?? "Tonight at the kiosk →"}
        </p>
      </div>
    </section>
  );
}
