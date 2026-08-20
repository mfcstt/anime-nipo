import { Ticket } from "lucide-react";

import { Container } from "@/components/shared/container";
import { PillButton } from "@/components/shared/pill-button";
import { Reveal } from "@/components/shared/reveal";
import { site } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(255,0,161,0.25),transparent)]" />

      <Container className="relative flex flex-col items-center gap-10 text-center">
        <Reveal className="flex flex-col items-center gap-10">
          <h2 className="font-heading text-4xl leading-[1.05] font-semibold text-balance text-white sm:text-6xl lg:text-7xl">
            Se você curte anime, o seu lugar é no {site.name}
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <PillButton href={site.links.tickets} external icon={Ticket}>
              Comprar ingressos
            </PillButton>
            <PillButton href={site.links.instagram} external variant="glass" icon={null}>
              Fale conosco
            </PillButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
