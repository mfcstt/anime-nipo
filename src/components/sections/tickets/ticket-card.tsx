import { Ticket } from "lucide-react";

import { PillButton } from "@/components/shared/pill-button";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";
import type { TicketTier } from "@/types";

export function TicketCard({ name, price, description, featured }: TicketTier) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-6 rounded-3xl border p-8 backdrop-blur-md",
        featured
          ? "border-primary/30 bg-primary/[0.06] shadow-[0_8px_40px_0_rgba(255,0,161,0.15)]"
          : "border-white/10 bg-white/5",
      )}
    >
      <div className="flex items-center justify-between">
        <span className="font-heading text-lg font-semibold text-white">{name}</span>
        {featured ? (
          <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-accent-foreground uppercase">
            Melhor opção
          </span>
        ) : null}
      </div>

      <p className="font-heading text-5xl font-semibold text-white">{price}</p>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

      <PillButton
        href={site.links.tickets}
        external
        icon={Ticket}
        variant={featured ? "primary" : "glass"}
        className="mt-auto w-full"
      >
        Garantir ingresso
      </PillButton>
    </div>
  );
}
