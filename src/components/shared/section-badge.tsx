import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
};

export function SectionBadge({ icon: Icon, children, className }: SectionBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex w-fit shrink-0 items-center gap-2 self-start rounded-full border border-primary/10 bg-primary/10 px-4 py-3 text-xs font-medium tracking-[-0.02em] text-accent-foreground uppercase backdrop-blur-[10px]",
        className,
      )}
    >
      <Icon className="size-4" />
      {children}
    </div>
  );
}
