import { Clock, MapPin, Navigation } from "lucide-react";

import { MapEmbed } from "@/components/sections/location/map-embed";
import { Container } from "@/components/shared/container";
import { PillButton } from "@/components/shared/pill-button";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { site } from "@/data/site";

export function Location() {
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    site.location.mapsQuery,
  )}`;

  return (
    <section className="relative bg-black py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <SectionHeading icon={MapPin} eyebrow="Como chegar" title="Onde vai ser" />

          <Reveal delay={0.1} className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-heading font-semibold text-white">{site.location.venue}</p>
                <p className="text-sm text-muted-foreground">{site.location.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <p className="font-heading font-semibold text-white">
                  {site.dates.label}
                </p>
                <p className="text-sm text-muted-foreground">Das {site.dates.hours}, nos dois dias.</p>
              </div>
            </div>
          </Reveal>

          <PillButton href={directionsHref} external icon={Navigation} className="w-fit">
            Traçar rota
          </PillButton>
        </div>

        <Reveal delay={0.15}>
          <MapEmbed />
        </Reveal>
      </Container>
    </section>
  );
}
