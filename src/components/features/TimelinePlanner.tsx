"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";

const tasks = [
  { phase: "12 months", task: "Choose date range and overall budget" },
  { phase: "9 months", task: "Shortlist venue, caterer, and photographer" },
  { phase: "6 months", task: "Finalize theme, palette, and guest experience" },
  { phase: "3 months", task: "Send invitations and confirm vendors" },
  { phase: "1 month", task: "Lock floor plan, timeline, and payment schedule" },
  { phase: "Event week", task: "Confirm run sheet, emergency contacts, and setup window" },
];

export function TimelinePlanner() {
  const [done, setDone] = useState<string[]>(["12 months", "9 months"]);

  const progress = useMemo(() => Math.round((done.length / tasks.length) * 100), [done]);

  return (
    <div className="rounded-[2rem] bg-foreground p-6 text-white shadow-[0_24px_70px_rgba(44,30,30,0.18)]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Timeline planner</p>
          <h3 className="mt-2 font-serif text-3xl font-semibold">Checklist workspace</h3>
        </div>
        <p className="font-serif text-4xl font-semibold">{progress}%</p>
      </div>

      <div className="mt-5 h-2 rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-spiced-orange via-coral-blush to-rose-flame transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="mt-6 grid gap-3">
        {tasks.map((item) => {
          const isDone = done.includes(item.phase);

          return (
            <button
              key={item.phase}
              type="button"
              onClick={() =>
                setDone((current) =>
                  isDone ? current.filter((phase) => phase !== item.phase) : [...current, item.phase],
                )
              }
              className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 text-left transition hover:bg-white/15"
            >
              {isDone ? (
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mint" aria-hidden="true" />
              ) : (
                <Circle className="mt-0.5 h-5 w-5 shrink-0 text-white/40" aria-hidden="true" />
              )}
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.18em] text-white/50">
                  {item.phase}
                </span>
                <span className="mt-1 block text-sm leading-6 text-white/80">{item.task}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
