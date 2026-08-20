import { Images } from "lucide-react";

import { GalleryGrid } from "@/components/sections/gallery/gallery-grid";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { site } from "@/data/site";

export function PreviousEditions() {
  return (
    <section className="relative bg-black py-24 md:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          icon={Images}
          eyebrow="Já rolou por aqui"
          title="Edições anteriores"
          description={`Um gostinho do que já rolou nas últimas edições do ${site.name}. Fotos e vídeos completos ficam salvos nos destaques do Instagram.`}
        />

        <GalleryGrid />
      </Container>
    </section>
  );
}
