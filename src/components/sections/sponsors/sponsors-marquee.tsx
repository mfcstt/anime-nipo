import { SponsorLogo } from "@/components/sections/sponsors/sponsor-logo";
import { sponsors } from "@/data/sponsors";

export function SponsorsMarquee() {
  const track = [...sponsors, ...sponsors];

  return (
    <section
      id="sponsors"
      className="relative border-y border-white/10 bg-white/[0.02] py-10 backdrop-blur-sm"
    >
      <div className="group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max shrink-0 animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
          {track.map((sponsor, index) => (
            <SponsorLogo key={`${sponsor.name}-${index}`} {...sponsor} />
          ))}
        </div>
      </div>
    </section>
  );
}
