import Image from "next/image";

import type { Sponsor } from "@/types";

export function SponsorLogo({ name, logo }: Sponsor) {
  return (
    <div className="relative h-14 w-32 shrink-0 opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-16 sm:w-40">
      <Image src={logo} alt={name} fill className="object-contain" sizes="160px" />
    </div>
  );
}
