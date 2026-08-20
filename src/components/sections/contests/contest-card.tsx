import { Check, Clock } from "lucide-react";

import type { ContestInfo } from "@/types";

export function ContestCard({ icon: Icon, title, description, details, deadline }: ContestInfo) {
  return (
    <div className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
      <span className="flex size-14 items-center justify-center rounded-full border border-primary/10 bg-primary/10 text-accent-foreground">
        <Icon className="size-6" />
      </span>

      <div className="flex flex-col gap-2">
        <h3 className="font-heading text-2xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>

      <ul className="flex flex-col gap-3">
        {details.map((detail) => (
          <li key={detail} className="flex items-start gap-3 text-sm text-white/80">
            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
            {detail}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-3 text-xs font-medium text-accent-foreground uppercase">
        <Clock className="size-4" />
        {deadline}
      </div>
    </div>
  );
}
