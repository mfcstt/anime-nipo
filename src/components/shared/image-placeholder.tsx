import { Camera } from "lucide-react";

import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  label?: string;
  className?: string;
};

export function ImagePlaceholder({ label, className }: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-primary/15 via-black to-black p-6 text-center",
        className,
      )}
    >
      <Camera className="size-8 text-white/30" />
      {label ? <p className="text-xs font-medium text-white/40">{label}</p> : null}
    </div>
  );
}
