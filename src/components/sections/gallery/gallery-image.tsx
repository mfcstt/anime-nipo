import Image from "next/image";

import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { cn } from "@/lib/utils";
import type { GalleryImage as GalleryImageType } from "@/types";

type GalleryImageProps = GalleryImageType & { className?: string };

export function GalleryImage({ src, alt, className }: GalleryImageProps) {
  if (!src) {
    return <ImagePlaceholder label={alt} className={cn("aspect-[4/5]", className)} />;
  }

  return (
    <div className={cn("relative aspect-[4/5] overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
    </div>
  );
}
