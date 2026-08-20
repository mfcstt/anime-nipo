import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  icon,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <Reveal
      className={cn(
        "flex flex-col gap-3",
        isCenter && "items-center text-center",
        className,
      )}
    >
      <SectionBadge icon={icon}>{eyebrow}</SectionBadge>
      <h2 className="font-heading text-4xl leading-[1.1] font-semibold text-balance text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-2xl text-lg leading-relaxed tracking-[-0.02em] text-muted-foreground",
            isCenter && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
