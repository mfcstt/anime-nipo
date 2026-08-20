import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type HeroFloatingBadgeProps = {
  icon: LucideIcon;
  label: string;
  className?: string;
};

export function HeroFloatingBadge({ icon: Icon, label, className }: HeroFloatingBadgeProps) {
  return (
    <div
      className={cn(
        "hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-[0_4px_24px_0_rgba(255,255,255,0.12)] backdrop-blur-md md:flex",
        className,
      )}
    >
      <span className="flex size-11 items-center justify-center rounded-full bg-white text-black">
        <Icon className="size-5" />
      </span>
      <p className="font-heading text-sm font-semibold tracking-[-0.02em] text-accent-foreground">
        {label}
      </p>
    </div>
  );
}
