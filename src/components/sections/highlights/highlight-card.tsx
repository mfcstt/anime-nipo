import Image from "next/image";

import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { cn } from "@/lib/utils";
import type { HighlightCard as HighlightCardType } from "@/types";

type HighlightCardProps = HighlightCardType & { size?: "lg" | "sm" };

export function HighlightCard({
  icon: Icon,
  image,
  title,
  description,
  size = "sm",
}: HighlightCardProps) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-3xl border border-white/10">
      <div className={cn("relative w-full", size === "lg" ? "h-[320px] sm:h-[400px]" : "h-[260px] sm:h-[320px]")}>
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes={size === "lg" ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          />
        ) : (
          <ImagePlaceholder label={title} className="size-full" />
        )}
      </div>
      <div className="flex flex-col items-start gap-2 bg-white/5 px-6 py-8">
        <span className="flex items-center justify-center rounded-full border border-primary/10 bg-primary/10 p-3 text-accent-foreground">
          <Icon className="size-5" />
        </span>
        <h3 className="font-heading text-xl font-bold text-white sm:text-2xl">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
      </div>
    </div>
  );
}
