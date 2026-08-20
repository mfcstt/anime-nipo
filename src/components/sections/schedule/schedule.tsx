import { CalendarDays, Ticket } from "lucide-react";

import { DayTabs } from "@/components/sections/schedule/day-tabs";
import { Container } from "@/components/shared/container";
import { PillButton } from "@/components/shared/pill-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { site } from "@/data/site";

export function Schedule() {
  return (
    <section id="programacao" className="relative bg-black py-24 md:py-32">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading icon={CalendarDays} eyebrow="Evento" title="Programação" className="max-w-xl" />
          <PillButton href={site.links.tickets} external icon={Ticket}>
            Comprar ingressos
          </PillButton>
        </div>

        <DayTabs />
      </Container>
    </section>
  );
}
