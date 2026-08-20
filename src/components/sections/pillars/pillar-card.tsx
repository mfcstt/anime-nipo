import type { PillarCard as PillarCardType } from "@/types";

export function PillarCard({ icon: Icon, title, description }: PillarCardType) {
  return (
    <div className="flex flex-1 flex-col items-center gap-8 rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-md">
      <span className="flex size-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary shadow-[inset_0_4px_16px_0_rgba(255,0,161,0.2)]">
        <Icon className="size-8" />
      </span>
      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
