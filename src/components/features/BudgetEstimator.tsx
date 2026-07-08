"use client";

import { useMemo, useState } from "react";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";

const eventMultipliers = {
  wedding: 165,
  birthday: 72,
  engagement: 94,
  baby: 58,
  anniversary: 86,
  corporate: 140,
};

export function BudgetEstimator() {
  const [eventType, setEventType] = useState<keyof typeof eventMultipliers>("wedding");
  const [guests, setGuests] = useState(120);
  const [decor, setDecor] = useState(3);
  const [food, setFood] = useState(3);
  const [photo, setPhoto] = useState(true);
  const [music, setMusic] = useState(true);

  const estimate = useMemo(() => {
    const base = guests * eventMultipliers[eventType];
    const decorCost = decor * guests * 18;
    const foodCost = food * guests * 24;
    const addOns = (photo ? 3200 : 0) + (music ? 1800 : 0);

    return Math.round(base + decorCost + foodCost + addOns);
  }, [decor, eventType, food, guests, music, photo]);

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-[0_24px_70px_rgba(109,63,209,0.14)] ring-1 ring-purple/10">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple">Budget estimator</p>
          <h3 className="mt-2 font-serif text-3xl font-semibold text-foreground">Live planning range</h3>
        </div>
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-purple/10 text-purple">
          <Wallet className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-6 grid gap-5">
        <label className="grid gap-2 text-sm font-bold text-foreground">
          Event type
          <select
            value={eventType}
            onChange={(event) => setEventType(event.target.value as keyof typeof eventMultipliers)}
            className="h-12 rounded-2xl border border-purple/10 bg-background px-4 text-sm outline-none ring-purple/20 focus:ring-4"
          >
            <option value="wedding">Wedding</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="baby">Baby shower</option>
            <option value="anniversary">Anniversary</option>
            <option value="corporate">Corporate event</option>
          </select>
        </label>

        <label className="grid gap-3 text-sm font-bold text-foreground">
          Guests: {guests}
          <input
            type="range"
            min="20"
            max="450"
            step="10"
            value={guests}
            onChange={(event) => setGuests(Number(event.target.value))}
            className="accent-purple"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-3 text-sm font-bold text-foreground">
            Decor level: {decor}
            <input
              type="range"
              min="1"
              max="5"
              value={decor}
              onChange={(event) => setDecor(Number(event.target.value))}
              className="accent-pink"
            />
          </label>
          <label className="grid gap-3 text-sm font-bold text-foreground">
            Dining level: {food}
            <input
              type="range"
              min="1"
              max="5"
              value={food}
              onChange={(event) => setFood(Number(event.target.value))}
              className="accent-gold"
            />
          </label>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="flex items-center gap-3 rounded-2xl bg-background p-4 text-sm font-bold text-foreground">
            <input
              type="checkbox"
              checked={photo}
              onChange={(event) => setPhoto(event.target.checked)}
              className="h-4 w-4 accent-purple"
            />
            Photography
          </label>
          <label className="flex items-center gap-3 rounded-2xl bg-background p-4 text-sm font-bold text-foreground">
            <input
              type="checkbox"
              checked={music}
              onChange={(event) => setMusic(event.target.checked)}
              className="h-4 w-4 accent-purple"
            />
            Music
          </label>
        </div>
      </div>

      <div className="mt-7 rounded-[1.5rem] bg-foreground p-5 text-white">
        <p className="text-sm text-white/60">Estimated event budget</p>
        <p className="mt-1 font-serif text-4xl font-semibold">{formatCurrency(estimate)}</p>
        <p className="mt-2 text-xs leading-6 text-white/60">
          Demo estimate for UX only. A production version can save scenarios per user.
        </p>
      </div>

      <Button className="mt-5 w-full">Save estimate</Button>
    </div>
  );
}
