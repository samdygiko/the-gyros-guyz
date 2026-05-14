// TODO: confirm weekly opening hours with client — currently using sensible
// defaults based on Hooch & Candy late-night context. The GBP only showed the
// current day's closing time (10:30pm). Update once the client confirms.

export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0 = Sunday

export type DaySchedule = { open: string; close: string } | null; // "HH:MM" 24-hour, London time. null = closed.

export const WEEKLY_HOURS: Record<DayOfWeek, DaySchedule> = {
  0: { open: "17:00", close: "22:00" }, // Sunday
  1: null, // Monday — closed
  2: { open: "17:00", close: "22:30" }, // Tuesday
  3: { open: "17:00", close: "22:30" }, // Wednesday
  4: { open: "17:00", close: "22:30" }, // Thursday
  5: { open: "17:00", close: "23:30" }, // Friday
  6: { open: "17:00", close: "23:30" }, // Saturday
};

export const DAY_NAMES: Record<DayOfWeek, string> = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

export const DAY_SHORT: Record<DayOfWeek, string> = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

// Returns the current London time as { day, hh, mm } based on Intl,
// regardless of the visitor's local timezone.
export function londonNow(): { day: DayOfWeek; hh: number; mm: number } {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = fmt.formatToParts(new Date());
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hh = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const mm = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  const map: Record<string, DayOfWeek> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };
  return { day: map[weekday] ?? 0, hh: hh % 24, mm };
}

function toMinutes(time: string): number {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
}

export type PillState =
  | { status: "open"; minutesUntilClose: number; closesAt: string }
  | { status: "closing-soon"; minutesUntilClose: number; closesAt: string }
  | { status: "closed"; nextOpenDay: DayOfWeek; nextOpenTime: string };

export function computePillState(): PillState {
  const { day, hh, mm } = londonNow();
  const nowMin = hh * 60 + mm;
  const today = WEEKLY_HOURS[day];

  if (today) {
    const openMin = toMinutes(today.open);
    const closeMin = toMinutes(today.close);
    if (nowMin >= openMin && nowMin < closeMin) {
      const minutesUntilClose = closeMin - nowMin;
      if (minutesUntilClose <= 30) {
        return { status: "closing-soon", minutesUntilClose, closesAt: today.close };
      }
      return { status: "open", minutesUntilClose, closesAt: today.close };
    }
  }

  // Find next open day
  for (let i = 1; i <= 7; i++) {
    const next = ((day + i) % 7) as DayOfWeek;
    const sched = WEEKLY_HOURS[next];
    if (sched) {
      return { status: "closed", nextOpenDay: next, nextOpenTime: sched.open };
    }
  }
  // Fallback (shouldn't happen unless every day is closed)
  return { status: "closed", nextOpenDay: day, nextOpenTime: "17:00" };
}

export function formatTimeShort(time: string): string {
  // "17:00" -> "5pm", "22:30" -> "10:30pm"
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "pm" : "am";
  const hour12 = ((h + 11) % 12) + 1;
  if (m === 0) return `${hour12}${period}`;
  return `${hour12}:${String(m).padStart(2, "0")}${period}`;
}

export function formatDurationShort(minutes: number): string {
  if (minutes < 60) return `${minutes}m`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}
