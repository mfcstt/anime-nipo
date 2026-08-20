import type { ScheduleItem as ScheduleItemType } from "@/types";

export function ScheduleItem({ time, title, description }: ScheduleItemType) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.01] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/20 hover:bg-primary/[0.03] sm:gap-6 sm:p-8">
      <span className="flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-3.5 font-button text-sm font-bold text-accent-foreground sm:px-4">
        {time}
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-lg font-medium text-white capitalize sm:text-2xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
