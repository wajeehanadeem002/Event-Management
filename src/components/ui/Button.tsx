import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-foreground text-white shadow-[0_18px_45px_rgba(44,30,30,0.2)] hover:-translate-y-0.5 hover:bg-purple",
  secondary:
    "bg-white/80 text-foreground ring-1 ring-purple/20 hover:-translate-y-0.5 hover:bg-white",
  ghost: "bg-transparent text-foreground hover:bg-white/70",
};

const sizes = {
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-6 text-base",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  showArrow?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300",
        variants[variant],
        sizes[size],
        className,
      )}
    >
      <span>{children}</span>
      {showArrow ? <ArrowRight className="h-4 w-4" aria-hidden="true" /> : null}
    </Link>
  );
}

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-300 disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
