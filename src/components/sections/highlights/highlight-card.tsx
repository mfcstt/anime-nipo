import type { HighlightCard as HighlightCardType } from "@/types";

export function HighlightCard({ icon: Icon, title, description }: HighlightCardType) {
  return (
    <div className="group flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-primary/[0.04]">
      <span className="flex size-12 items-center justify-center rounded-full border border-primary/10 bg-primary/10 text-accent-foreground transition-transform duration-300 group-hover:scale-110">
        <Icon className="size-5" />
      </span>
      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
