import { PartyPopper } from "lucide-react";

import { HighlightCard } from "@/components/sections/highlights/highlight-card";
import { Container } from "@/components/shared/container";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { highlights } from "@/data/highlights";

export function Highlights() {
  const [featured, ...rest] = highlights;
  const [second, ...others] = rest;

  return (
    <section className="relative bg-black py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          icon={PartyPopper}
          eyebrow="O que rola por lá"
          title="Atrações pra todo tipo de fã"
          description="Do karaokê ao concurso de cosplay, tem atração pra todo mundo curtir os dois dias inteiros."
          align="center"
        />

        <div className="flex flex-col gap-6">
          <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[featured, second].map((highlight) => (
              <RevealItem key={highlight.title}>
                <HighlightCard {...highlight} size="lg" />
              </RevealItem>
            ))}
          </RevealGroup>

          <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((highlight) => (
              <RevealItem key={highlight.title}>
                <HighlightCard {...highlight} size="sm" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
