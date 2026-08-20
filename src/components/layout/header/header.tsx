"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ticket } from "lucide-react";

import { MobileMenu } from "@/components/layout/header/mobile-menu";
import { NavLinks } from "@/components/layout/header/nav-links";
import { Container } from "@/components/shared/container";
import { PillButton } from "@/components/shared/pill-button";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
        scrolled ? "border-white/10 bg-black/70 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <Link href="#top" className="flex items-center gap-2">
          <Image
            src="/images/hero/logo.png"
            alt={site.name}
            width={140}
            height={52}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <NavLinks className="hidden gap-1 lg:flex" />

        <div className="flex items-center gap-3">
          <PillButton
            href={site.links.tickets}
            external
            icon={Ticket}
            className="hidden px-5 py-3 text-xs lg:inline-flex"
          >
            Comprar ingressos
          </PillButton>
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
