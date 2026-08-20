import { GalleryImage } from "@/components/sections/gallery/gallery-image";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { galleryImages } from "@/data/gallery";

export function GalleryGrid() {
  return (
    <RevealGroup className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {galleryImages.map((image) => (
        <RevealItem key={image.alt}>
          <GalleryImage {...image} />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
