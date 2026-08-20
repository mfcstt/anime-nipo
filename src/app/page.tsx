import { CtaBanner } from "@/components/sections/cta/cta-banner";
import { About } from "@/components/sections/about/about";
import { Contests } from "@/components/sections/contests/contests";
import { Faq } from "@/components/sections/faq/faq";
import { PreviousEditions } from "@/components/sections/gallery/previous-editions";
import { Hero } from "@/components/sections/hero/hero";
import { Highlights } from "@/components/sections/highlights/highlights";
import { Location } from "@/components/sections/location/location";
import { Pillars } from "@/components/sections/pillars/pillars";
import { Schedule } from "@/components/sections/schedule/schedule";
import { SponsorsMarquee } from "@/components/sections/sponsors/sponsors-marquee";
import { Tickets } from "@/components/sections/tickets/tickets";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <SponsorsMarquee />
        <About />
        <Highlights />
        <Pillars />
        <Schedule />
        <Contests />
        <PreviousEditions />
        <Location />
        <Tickets />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
