import { NextResponse } from "next/server";
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  eventType: z.string().min(1),
  date: z.string().min(1),
  guests: z.coerce.number().min(10).max(1000),
  budget: z.string().min(1),
  notes: z.string().min(10),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = bookingSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid booking payload" }, { status: 400 });
  }

  return NextResponse.json({
    ok: true,
    message: "Booking inquiry received",
    data: parsed.data,
  });
}
