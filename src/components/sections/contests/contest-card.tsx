import Image from "next/image";
import { Check, Clock, ClipboardList } from "lucide-react";

import { PillButton } from "@/components/shared/pill-button";
import type { ContestInfo } from "@/types";

export function ContestCard({
  icon: Icon,
  image,
  title,
  description,
  details,
  deadline,
  registrationUrl,
}: ContestInfo) {
  return (
    <div className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
        <span className="absolute bottom-4 left-4 flex size-12 items-center justify-center rounded-full border border-white/10 bg-black/40 text-accent-foreground backdrop-blur-md">
          <Icon className="size-5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-6 px-5 pb-5">
        <div className="flex flex-col gap-2">
          <h3 className="font-heading text-2xl font-semibold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>

        <ul className="flex flex-col gap-3">
          {details.map((detail) => (
            <li key={detail} className="flex items-start gap-3 text-sm text-white/80">
              <Check className="mt-0.5 size-4 shrink-0 text-primary" />
              {detail}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3">
          {registrationUrl ? (
            <PillButton href={registrationUrl} external icon={ClipboardList} className="w-full">
              Inscreva-se
            </PillButton>
          ) : null}
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-3 text-xs font-medium text-accent-foreground uppercase">
            <Clock className="size-4" />
            {deadline}
          </div>
        </div>
      </div>
    </div>
  );
}
