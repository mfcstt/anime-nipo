import { StatCounter } from "@/components/shared/stat-counter";
import type { StatItem } from "@/types";

export function AboutStat({ value, suffix, label }: StatItem) {
  return (
    <div className="flex flex-col gap-1 border-l border-white/10 pl-4">
      <p className="font-heading text-4xl font-semibold text-white sm:text-5xl">
        <StatCounter value={value} suffix={suffix} />
      </p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
