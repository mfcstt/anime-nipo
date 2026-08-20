import Image from "next/image";

import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import type { GalleryImage as GalleryImageType } from "@/types";

export function GalleryImage({ src, alt }: GalleryImageType) {
  if (!src) {
    return (
      <ImagePlaceholder
        label={alt}
        className="aspect-[4/5] rounded-2xl border border-white/10"
      />
    );
  }

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
    </div>
  );
}
