"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/Button";

const inquirySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  eventType: z.string().min(1, "Choose an event type"),
  date: z.string().min(1, "Choose an event date"),
  guests: z.number().min(10, "Minimum 10 guests").max(1000, "Maximum 1000 guests"),
  budget: z.string().min(1, "Choose a budget range"),
  notes: z.string().min(10, "Share a few planning details"),
});

type InquiryValues = z.infer<typeof inquirySchema>;

export function BookingInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      eventType: "",
      budget: "",
      guests: 120,
    },
  });

  async function onSubmit(values: InquiryValues) {
    setSubmitError("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Unable to submit inquiry");
      }

      setSubmitted(true);
      reset();
    } catch {
      setSubmitError("Something went wrong while sending the demo inquiry. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[2rem] bg-white p-6 shadow-[0_24px_70px_rgba(140,3,28,0.12)] ring-1 ring-purple/10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <input {...register("name")} className="form-field" placeholder="Amina Khan" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} className="form-field" placeholder="amina@example.com" />
        </Field>
        <Field label="Event type" error={errors.eventType?.message}>
          <select {...register("eventType")} className="form-field">
            <option value="">Select type</option>
            <option>Wedding</option>
            <option>Birthday</option>
            <option>Engagement</option>
            <option>Baby shower</option>
            <option>Anniversary</option>
            <option>Corporate event</option>
          </select>
        </Field>
        <Field label="Preferred date" error={errors.date?.message}>
          <input {...register("date")} type="date" className="form-field" />
        </Field>
        <Field label="Guest count" error={errors.guests?.message}>
          <input {...register("guests", { valueAsNumber: true })} type="number" className="form-field" />
        </Field>
        <Field label="Budget range" error={errors.budget?.message}>
          <select {...register("budget")} className="form-field">
            <option value="">Select range</option>
            <option>$3k - $7k</option>
            <option>$8k - $15k</option>
            <option>$16k - $30k</option>
            <option>$30k+</option>
          </select>
        </Field>
      </div>

      <Field label="Planning notes" error={errors.notes?.message} className="mt-5">
        <textarea
          {...register("notes")}
          className="form-field min-h-32 resize-none py-4"
          placeholder="Tell us about the mood, city, vendors, or any details you already know."
        />
      </Field>

      <Button type="submit" className="mt-6 w-full" size="lg" disabled={isSubmitting}>
        <Send className="h-4 w-4" aria-hidden="true" />
        {isSubmitting ? "Sending..." : "Send inquiry"}
      </Button>

      {submitted ? (
        <p className="mt-4 rounded-2xl bg-mint/30 p-4 text-sm font-semibold text-foreground">
          Demo inquiry captured. In production this can call a Next.js API route or save to Neon.
        </p>
      ) : null}
      {submitError ? (
        <p className="mt-4 rounded-2xl bg-pink/10 p-4 text-sm font-semibold text-foreground">
          {submitError}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={`grid gap-2 text-sm font-bold text-foreground ${className ?? ""}`}>
      {label}
      {children}
      {error ? <span className="text-xs font-semibold text-pink">{error}</span> : null}
    </label>
  );
}
