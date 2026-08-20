import { Plus } from "lucide-react";

import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { FaqItem as FaqItemType } from "@/types";

type FaqItemProps = FaqItemType & { index: number; isOpen: boolean };

export function FaqItem({ index, question, answer, isOpen }: FaqItemProps) {
  return (
    <AccordionItem
      value={`faq-${index}`}
      className="rounded-2xl border border-white/10 bg-white/[0.01] px-6 backdrop-blur-sm not-last:border-b-white/10 sm:px-8"
    >
      <AccordionTrigger className="gap-4 py-6 hover:no-underline sm:py-8 [&_[data-slot=accordion-trigger-icon]]:hidden">
        <div className="flex flex-1 items-center gap-4 sm:gap-6">
          <span className="flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-4 py-4 font-heading text-lg font-bold text-accent-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-heading text-lg font-medium text-white sm:text-2xl">
            {question}
          </span>
        </div>
        <span
          className={cn(
            "flex size-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
            isOpen
              ? "rotate-45 border-primary/30 bg-primary/10 text-primary"
              : "border-white/10 bg-white/5 text-white",
          )}
        >
          <Plus className="size-5" />
        </span>
      </AccordionTrigger>
      <AccordionContent className="pb-6 sm:pb-8">
        <p className="pl-0 text-base leading-relaxed text-muted-foreground sm:pl-[76px]">
          {answer}
        </p>
      </AccordionContent>
    </AccordionItem>
  );
}
