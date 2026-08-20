"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";

import { FaqItem } from "@/components/sections/faq/faq-item";
import { Container } from "@/components/shared/container";
import { PillButton } from "@/components/shared/pill-button";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { site } from "@/data/site";

export function Faq() {
  const [openValue, setOpenValue] = useState<string[]>([]);

  return (
    <section id="faq" className="relative bg-black py-24 md:py-32">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            icon={HelpCircle}
            eyebrow="Tire sua dúvida"
            title="Perguntas frequentes"
            className="max-w-xl"
          />
          <PillButton href={site.links.instagram} external variant="glass" icon={null}>
            Fale conosco
          </PillButton>
        </div>

        <Reveal delay={0.1}>
          <Accordion
            value={openValue}
            onValueChange={(value) => setOpenValue(value as string[])}
            className="flex flex-col gap-4"
          >
            {faqItems.map((item, index) => (
              <FaqItem
                key={item.question}
                index={index}
                isOpen={openValue.includes(`faq-${index}`)}
                {...item}
              />
            ))}
          </Accordion>
        </Reveal>
      </Container>
    </section>
  );
}
