"use client";

import { useState } from "react";
import { Menu, Ticket } from "lucide-react";

import { NavLinks } from "@/components/layout/header/nav-links";
import { PillButton } from "@/components/shared/pill-button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/data/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden">
        <Menu className="size-5" />
        <span className="sr-only">Abrir menu</span>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full border-l border-white/10 bg-black/95 p-6 backdrop-blur-xl sm:max-w-xs"
      >
        <SheetHeader className="p-0">
          <SheetTitle className="font-heading text-lg text-white">{site.name}</SheetTitle>
        </SheetHeader>
        <NavLinks
          className="flex-col items-start gap-1"
          linkClassName="w-full text-base"
          onNavigate={() => setOpen(false)}
        />
        <PillButton
          href={site.links.tickets}
          external
          icon={Ticket}
          className="mt-4 w-full"
          onClick={() => setOpen(false)}
        >
          Comprar ingressos
        </PillButton>
      </SheetContent>
    </Sheet>
  );
}
