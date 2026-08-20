import type { LucideIcon } from "lucide-react";

type LegacyFeatureProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function LegacyFeature({ icon: Icon, title, description }: LegacyFeatureProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="-skew-x-3 shrink-0">
        <div className="relative flex size-16 skew-x-3 items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[inset_0_4px_16px_0_rgba(255,0,161,0.2)]">
          <Icon className="size-6 text-primary" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <p className="font-heading text-lg font-bold text-white">{title}</p>
        <p className="text-sm leading-relaxed tracking-[-0.02em] text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
