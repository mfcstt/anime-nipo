import Image from "next/image";

const organizers = [
  { name: "NIPO Bragança Paulista", logo: "/images/about/partner-logo-1.png", width: 90 },
  { name: "Seinenkai Bragança Paulista", logo: "/images/about/partner-logo-2.png", width: 150 },
];

export function OrganizerLogos() {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="text-xs font-medium tracking-[-0.02em] text-white/70 uppercase">
        Uma realização
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {organizers.map((organizer) => (
          <Image
            key={organizer.name}
            src={organizer.logo}
            alt={organizer.name}
            width={organizer.width}
            height={60}
            className="h-10 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
