import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type PillButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "glass";
  icon?: LucideIcon | null;
  className?: string;
  external?: boolean;
};

const baseClasses =
  "group inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-6 py-4 font-button text-sm font-bold tracking-[-0.02em] transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0";

const variantClasses: Record<NonNullable<PillButtonProps["variant"]>, string> = {
  primary:
    "border border-white/10 bg-primary text-primary-foreground shadow-[inset_0_4px_24px_0_rgba(255,255,255,0.35),0_4px_24px_0_rgba(255,0,161,0.25)] hover:shadow-[inset_0_4px_24px_0_rgba(255,255,255,0.5),0_8px_32px_0_rgba(255,0,161,0.4)]",
  glass:
    "border border-white/10 bg-white/5 text-white shadow-[inset_0_4px_12px_0_rgba(255,255,255,0.15),0_4px_24px_0_rgba(255,226,219,0.1)] backdrop-blur-md hover:bg-white/10",
};

export function PillButton({
  children,
  href,
  onClick,
  variant = "primary",
  icon: Icon = ArrowUpRight,
  className,
  external = false,
}: PillButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {Icon ? (
        <Icon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      ) : null}
    </>
  );

  const classes = cn(baseClasses, variantClasses[variant], className);

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {content}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
