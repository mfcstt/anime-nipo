import { Trophy } from "lucide-react";

import { ContestCard } from "@/components/sections/contests/contest-card";
import { Container } from "@/components/shared/container";
import { RevealGroup, RevealItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { contests } from "@/data/contests";

export function Contests() {
  return (
    <section id="concursos" className="relative border-y border-white/10 bg-black py-24 md:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading
          icon={Trophy}
          eyebrow="Mostre seu talento"
          title="Concursos"
          description="Duas disputas, um só palco: capriche na fantasia ou na coreografia e concorra ao título da edição."
        />

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {contests.map((contest) => (
            <RevealItem key={contest.title}>
              <ContestCard {...contest} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
