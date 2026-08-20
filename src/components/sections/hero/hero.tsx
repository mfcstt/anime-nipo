import { Calendar, MapPin, Sparkles } from "lucide-react";

import { HeroArt } from "@/components/sections/hero/hero-art";
import { Container } from "@/components/shared/container";
import { PillButton } from "@/components/shared/pill-button";
import { Reveal } from "@/components/shared/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-black pt-32 pb-24">
      <HeroArt />

      <Container className="relative">
        <Reveal className="flex max-w-xl flex-col gap-8">
          <div className="flex flex-col gap-4">
            <SectionBadge icon={Sparkles}>{site.edition}</SectionBadge>

            <h1 className="font-heading text-6xl leading-[1.05] font-semibold text-white sm:text-7xl lg:text-8xl">
              {site.dates.label.split(" ").slice(0, 3).join(" ")}
              <br />
              {site.dates.label.split(" ").slice(3).join(" ")}
            </h1>

            <p className="text-lg leading-relaxed tracking-[-0.02em] text-muted-foreground sm:text-xl">
              O Anime Nipo é o evento da galera sobre <strong className="font-bold text-white">anime</strong>,{" "}
              <strong className="font-bold text-white">mangá</strong> e outras temáticas{" "}
              <strong className="font-bold text-white">geek</strong>, realizado em Bragança
              Paulista – SP!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <PillButton href={site.links.tickets} external>
              Comprar ingressos
            </PillButton>
            <PillButton href="#programacao" variant="glass" icon={null}>
              Ver programação
            </PillButton>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" /> Bragança Paulista – SP
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="size-4 text-primary" /> {site.dates.hours}
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
