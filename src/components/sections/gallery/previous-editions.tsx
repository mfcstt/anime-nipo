import { Film, Heart, Images, TrendingUp } from "lucide-react";

import { LegacyFeature } from "@/components/sections/gallery/legacy-feature";
import { PhotoColumn } from "@/components/sections/gallery/photo-column";
import { Container } from "@/components/shared/container";
import { PillButton } from "@/components/shared/pill-button";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { galleryImages } from "@/data/gallery";
import { site } from "@/data/site";

const legacyFeatures = [
  {
    icon: TrendingUp,
    title: "Uma tradição que só cresce",
    description: "De um encontro pequeno da comunidade a mais de 1.100 pessoas por edição.",
  },
  {
    icon: Heart,
    title: "Rostos que sempre voltam",
    description: "Uma galera que se reencontra todo agosto, edição após edição.",
  },
  {
    icon: Film,
    title: "Memórias em cada palco",
    description: "Shows, concursos e apresentações que ficam guardados pra sempre.",
  },
];

export function PreviousEditions() {
  return (
    <section className="relative bg-black py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
            <div className="flex flex-col gap-4">
              <SectionBadge icon={Images}>15 anos de história</SectionBadge>
              <h2 className="font-heading text-4xl leading-[1.05] font-semibold text-white sm:text-5xl">
                15 edições, uma só comunidade
              </h2>
              <p className="text-lg leading-relaxed tracking-[-0.02em] text-muted-foreground">
                Desde 2010, milhares de pessoas já viveram o {site.name}. Cada edição vira
                lembrança — e ajuda a construir a próxima.
              </p>
            </div>

            <div className="h-px w-full bg-white/10" />

            <RevealGroup className="flex flex-col gap-5">
              {legacyFeatures.map((feature) => (
                <RevealItem key={feature.title}>
                  <LegacyFeature {...feature} />
                </RevealItem>
              ))}
            </RevealGroup>

            <PillButton
              href={site.links.gallery14thEdition}
              external
              variant="glass"
              icon={null}
              className="w-fit"
            >
              Galeria completa · 14ª edição
            </PillButton>
          </Reveal>

          <Reveal delay={0.1} className="h-[420px] self-start sm:h-[480px] lg:h-[560px]">
            <PhotoColumn images={galleryImages} direction="up" className="h-full" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
