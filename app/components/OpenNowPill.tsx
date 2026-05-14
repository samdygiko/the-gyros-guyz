"use client";

import { useEffect, useState } from "react";
import {
  computePillState,
  formatDurationShort,
  formatTimeShort,
  DAY_SHORT,
  type PillState,
} from "../lib/hours";

export default function OpenNowPill() {
  const [state, setState] = useState<PillState | null>(null);

  useEffect(() => {
    setState(computePillState());
    const id = setInterval(() => setState(computePillState()), 30_000);
    return () => clearInterval(id);
  }, []);

  // SSR / first-paint placeholder
  if (!state) {
    return (
      <span
        className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] md:text-xs font-body font-medium leading-none whitespace-nowrap"
        style={{ background: "var(--cream)", color: "var(--ink)", border: "1px solid var(--ink)" }}
      >
        Open hours →
      </span>
    );
  }

  if (state.status === "open") {
    const dur = formatDurationShort(state.minutesUntilClose);
    return (
      <span
        className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] md:text-xs font-body font-medium leading-none whitespace-nowrap"
        style={{ background: "var(--cobalt)", color: "var(--white)" }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--white)" }} aria-hidden />
        <span className="hidden md:inline">Open · closes in {dur}</span>
        <span className="md:hidden">Open · {dur}</span>
      </span>
    );
  }

  if (state.status === "closing-soon") {
    const dur = formatDurationShort(state.minutesUntilClose);
    return (
      <span
        className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] md:text-xs font-body font-medium leading-none whitespace-nowrap"
        style={{ background: "#e84c30", color: "var(--white)" }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--white)" }} aria-hidden />
        <span className="hidden md:inline">Closing soon · {dur}</span>
        <span className="md:hidden">Closing · {dur}</span>
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] md:text-xs font-body font-medium leading-none whitespace-nowrap"
      style={{ background: "var(--cream)", color: "var(--ink)", border: "1px solid var(--ink)" }}
    >
      Closed · opens {DAY_SHORT[state.nextOpenDay]} {formatTimeShort(state.nextOpenTime)}
    </span>
  );
}
