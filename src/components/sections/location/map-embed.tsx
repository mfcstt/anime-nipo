import { site } from "@/data/site";

export function MapEmbed() {
  const query = encodeURIComponent(site.location.mapsQuery);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 sm:aspect-video">
      <iframe
        title={`Mapa — ${site.location.venue}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 size-full grayscale invert-[0.92] contrast-[1.1]"
      />
    </div>
  );
}
