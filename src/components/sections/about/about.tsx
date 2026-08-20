import Image from "next/image";
import { Sparkles } from "lucide-react";

import { AboutStat } from "@/components/sections/about/about-stat";
import { OrganizerLogos } from "@/components/sections/about/organizer-logos";
import { Container } from "@/components/shared/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { site } from "@/data/site";
import type { StatItem } from "@/types";

const stats: StatItem[] = [
  { value: 15, label: "edições desde 2010" },
  { value: 2, label: "dias de evento" },
  { value: 1100, suffix: "+", label: "pessoas por edição" },
];

export function About() {
  return (
    <section id="sobre" className="relative bg-black py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col gap-12">
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

          <Reveal delay={0.1}>
            <OrganizerLogos />
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10">
          <Image
            src="/images/about/team-photo.jpg"
            alt={`Equipe organizadora do ${site.name}`}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </Reveal>
      </Container>
    </section>
  );
}
