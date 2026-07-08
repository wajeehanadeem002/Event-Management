import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-purple/10 bg-white/80 p-6 shadow-[0_20px_70px_rgba(109,63,209,0.11)] backdrop-blur",
        className,
      )}
    >
      {children}
    </div>
  );
}
