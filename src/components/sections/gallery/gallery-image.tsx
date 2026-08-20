import Image from "next/image";
import { Camera } from "lucide-react";

import type { GalleryImage as GalleryImageType } from "@/types";

export function GalleryImage({ src, alt }: GalleryImageType) {
  if (!src) {
    return (
      <div className="relative flex aspect-[4/5] flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-primary/15 via-black to-black p-6 text-center">
        <Camera className="size-8 text-white/30" />
        <p className="text-xs font-medium text-white/40">{alt}</p>
      </div>
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
