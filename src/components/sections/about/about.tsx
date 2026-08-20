import { Sparkles } from "lucide-react";

import { AboutStat } from "@/components/sections/about/about-stat";
import { Container } from "@/components/shared/container";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import type { StatItem } from "@/types";

const stats: StatItem[] = [
  { value: 15, label: "edições desde 2010" },
  { value: 2, label: "dias de evento" },
  { value: 1100, suffix: "+", label: "pessoas por edição" },
];

export function About() {
  return (
    <section id="sobre" className="relative bg-black py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <SectionHeading
          icon={Sparkles}
          eyebrow="Sobre o evento"
          title="Cultura pop japonesa, do jeito bragantino"
          description="Organizado desde 2010 pelo Seinenkai da Associação Central Nipo Brasileira da Região Bragantina, o Anime Nipo reúne anime, mangá, música, gastronomia e tradição japonesa em dois dias de festa aberta pra toda a comunidade geek."
        />

        <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <RevealItem key={stat.label}>
              <AboutStat {...stat} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
