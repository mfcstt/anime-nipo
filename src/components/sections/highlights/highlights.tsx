import { PartyPopper } from "lucide-react";

import { HighlightCard } from "@/components/sections/highlights/highlight-card";
import { Container } from "@/components/shared/container";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { highlights } from "@/data/highlights";

export function Highlights() {
  return (
    <section className="relative bg-black py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          icon={PartyPopper}
          eyebrow="O que rola por lá"
          title="Atrações pra todo tipo de fã"
          align="center"
        />

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((highlight) => (
            <RevealItem key={highlight.title}>
              <HighlightCard {...highlight} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
