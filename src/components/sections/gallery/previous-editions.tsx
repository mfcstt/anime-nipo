import { Film, Heart, Sparkles, TrendingUp } from "lucide-react";

import { AttendeeBadge } from "@/components/sections/gallery/attendee-badge";
import { LegacyFeature } from "@/components/sections/gallery/legacy-feature";
import { PhotoColumn } from "@/components/sections/gallery/photo-column";
import { PillButton } from "@/components/shared/pill-button";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/reveal";
import { galleryImages } from "@/data/gallery";
import { site } from "@/data/site";

const legacyFeatures = [
  {
    icon: TrendingUp,
    title: "Uma tradição que só cresce",
    description: "+1.100 pessoas por edição.",
  },
  {
    icon: Heart,
    title: "Rostos que sempre voltam",
    description: "Edição após edição, todo agosto.",
  },
  {
    icon: Film,
    title: "Memórias em cada palco",
    description: "Shows e concursos inesquecíveis.",
  },
  {
    icon: Sparkles,
    title: "Cultura em primeiro lugar",
    description: "Tradição japonesa e pop lado a lado.",
  },
];

export function PreviousEditions() {
  return (
    <section className="relative bg-black">
      <div className="grid grid-cols-1 lg:h-[950px] lg:grid-cols-2 lg:grid-rows-1">
        <Reveal className="flex h-full flex-col justify-center gap-8 bg-white/5 px-8 py-16 sm:px-12 lg:py-24 xl:pl-24">
          <div className="flex flex-col gap-3">
            <AttendeeBadge label="+1.100 pessoas" />
            <h2 className="font-heading text-4xl leading-[1.05] font-semibold text-white sm:text-5xl">
              15 edições, uma só comunidade
            </h2>
            <p className="text-lg leading-relaxed tracking-[-0.02em] text-muted-foreground">
              Desde 2010, milhares de pessoas já viveram o {site.name}.
            </p>
          </div>

          <div className="h-px w-full bg-white/10" />

          <RevealGroup className="flex flex-col gap-6">
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

        <Reveal delay={0.1} className="h-[420px] sm:h-[520px] lg:h-full">
          <PhotoColumn images={galleryImages} direction="up" className="h-full" />
        </Reveal>
      </div>
    </section>
  );
}
