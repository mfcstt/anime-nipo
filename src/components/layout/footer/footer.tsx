import Image from "next/image";

import { OrganizerLogos } from "@/components/layout/footer/organizer-logos";
import { SocialLinks } from "@/components/layout/footer/social-links";
import { Container } from "@/components/shared/container";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden rounded-t-[48px] bg-primary py-16 text-white sm:rounded-t-[80px] md:py-20">
      <Container className="flex flex-col gap-14">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <nav className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-white/90 transition-colors hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <SocialLinks />
        </div>

        <div className="h-px w-full bg-white/20" />

        <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4">
          <Image
            src="/images/hero/logo.png"
            alt={site.name}
            width={1000}
            height={250}
            className="h-auto w-full object-contain"
          />
          <OrganizerLogos />
        </div>

        <div className="h-px w-full bg-white/20" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/80 sm:flex-row">
          <p>{site.location.address}</p>
          <p>
            Copyright © {year} {site.name}. Todos os direitos reservados.
          </p>
          <a href={site.links.email} className="hover:text-white">
            {site.contactEmail}
          </a>
        </div>
      </Container>
    </footer>
  );
}
