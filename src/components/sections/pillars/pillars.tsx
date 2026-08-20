import { Ticket, Users2 } from "lucide-react";

import { PillarCard } from "@/components/sections/pillars/pillar-card";
import { Container } from "@/components/shared/container";
import { PillButton } from "@/components/shared/pill-button";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { pillars } from "@/data/pillars";
import { site } from "@/data/site";

export function Pillars() {
  return (
    <section className="relative border-y border-white/10 bg-black py-24 md:py-32">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            icon={Users2}
            eyebrow="Faça parte da tribo"
            title="Por que não pode faltar"
            className="max-w-xl"
          />
          <PillButton href={site.links.tickets} external icon={Ticket}>
            Comprar ingressos
          </PillButton>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <RevealItem key={pillar.title} className="flex">
              <PillarCard {...pillar} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
