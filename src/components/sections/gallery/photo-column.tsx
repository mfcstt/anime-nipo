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
    <div className={cn("group h-full overflow-hidden", className)}>
      <div
        className={cn(
          "flex w-full flex-col gap-6",
          direction === "up" ? "animate-marquee-vertical-up" : "animate-marquee-vertical-down",
          "group-hover:[animation-play-state:paused]",
        )}
      >
        {track.map((image, index) => (
          <GalleryImage
            key={`${image.alt}-${index}`}
            {...image}
            className="aspect-[679/392] w-full shrink-0 rounded-l-3xl rounded-r-none border border-white/10"
          />
        ))}
      </div>
    </div>
  );
}
