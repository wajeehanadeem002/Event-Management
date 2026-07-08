import {
  Baby,
  Building2,
  CalendarDays,
  Camera,
  Cake,
  CheckCircle2,
  Gift,
  Heart,
  MapPin,
  MessageCircle,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  Users,
  Wallet,
  WandSparkles,
} from "lucide-react";
import type { IconKey } from "@/types";
import { cn } from "@/lib/utils";

const iconMap = {
  sparkles: Sparkles,
  heart: Heart,
  cake: Cake,
  gift: Gift,
  building: Building2,
  baby: Baby,
  calendar: CalendarDays,
  wallet: Wallet,
  map: MapPin,
  star: Star,
  users: Users,
  palette: Palette,
  camera: Camera,
  check: CheckCircle2,
  message: MessageCircle,
  wand: WandSparkles,
  timer: Timer,
  shield: ShieldCheck,
};

export function Icon({
  name,
  className,
}: {
  name: IconKey;
  className?: string;
}) {
  const LucideIcon = iconMap[name];

  return <LucideIcon className={cn("h-5 w-5", className)} aria-hidden="true" />;
}

export function IconBubble({
  name,
  className,
}: {
  name: IconKey;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/75 text-purple shadow-sm ring-1 ring-purple/10",
        className,
      )}
    >
      <Icon name={name} />
    </span>
  );
}
