import { Images } from "lucide-react";

import { GalleryGrid } from "@/components/sections/gallery/gallery-grid";
import { Container } from "@/components/shared/container";
import { PillButton } from "@/components/shared/pill-button";
import { SectionHeading } from "@/components/shared/section-heading";
import { site } from "@/data/site";

export function PreviousEditions() {
  return (
    <section className="relative bg-black py-24 md:py-32">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            icon={Images}
            eyebrow="Já rolou por aqui"
            title="Edições anteriores"
            description={`Um gostinho do que já rolou nas últimas edições do ${site.name}.`}
            className="max-w-xl"
          />
          <PillButton href={site.links.gallery14thEdition} external variant="glass" icon={null}>
            Galeria completa · 14ª edição
          </PillButton>
        </div>

        <GalleryGrid />
      </Container>
    </section>
  );
}
