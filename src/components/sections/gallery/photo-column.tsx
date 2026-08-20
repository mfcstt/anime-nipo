import { GalleryImage } from "@/components/sections/gallery/gallery-image";
import { cn } from "@/lib/utils";
import type { GalleryImage as GalleryImageType } from "@/types";

type PhotoColumnProps = {
  images: GalleryImageType[];
  direction?: "up" | "down";
  className?: string;
};

export function PhotoColumn({ images, direction = "up", className }: PhotoColumnProps) {
  const track = [...images, ...images];

  return (
    <div className={cn("group h-full overflow-hidden rounded-2xl border border-white/10", className)}>
      <div
        className={cn(
          "flex w-full flex-col gap-3",
          direction === "up" ? "animate-marquee-vertical-up" : "animate-marquee-vertical-down",
          "group-hover:[animation-play-state:paused]",
        )}
      >
        {track.map((image, index) => (
          <GalleryImage
            key={`${image.alt}-${index}`}
            {...image}
            className="aspect-[4/3] w-full shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
