import { MapPinned, Ticket } from "lucide-react";

import { TicketCard } from "@/components/sections/tickets/ticket-card";
import { Container } from "@/components/shared/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { ticketSellPoints, ticketTiers } from "@/data/tickets";

export function Tickets() {
  return (
    <section id="ingressos" className="relative border-y border-white/10 bg-black py-24 md:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          icon={Ticket}
          eyebrow="Garanta o seu"
          title="Ingressos"
          align="center"
        />

        <RevealGroup className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {ticketTiers.map((tier) => (
            <RevealItem key={tier.name}>
              <TicketCard {...tier} />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <MapPinned className="size-4 text-primary" />
            Pontos de venda física:
          </span>
          {ticketSellPoints.map((point, index) => (
            <span key={point}>
              {point}
              {index < ticketSellPoints.length - 1 ? "," : ""}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
