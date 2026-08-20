import Image from "next/image";

const organizers = [
  { name: "NIPO Bragança Paulista", logo: "/images/about/partner-logo-1.png" },
  { name: "Seinenkai Bragança Paulista", logo: "/images/about/partner-logo-2.png" },
];

export function OrganizerLogos() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs font-medium tracking-[-0.02em] text-muted-foreground uppercase">
        Uma realização
      </p>
      <div className="flex flex-wrap items-center gap-4">
        {organizers.map((organizer) => (
          <div
            key={organizer.name}
            className="flex h-16 w-32 items-center justify-center rounded-2xl bg-white p-3"
          >
            <Image
              src={organizer.logo}
              alt={organizer.name}
              width={140}
              height={80}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
