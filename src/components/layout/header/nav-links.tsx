"use client";

import { cn } from "@/lib/utils";
import { navLinks } from "@/data/nav";

type NavLinksProps = {
  className?: string;
  linkClassName?: string;
  onNavigate?: () => void;
};

export function NavLinks({ className, linkClassName, onNavigate }: NavLinksProps) {
  return (
    <nav className={cn("flex items-center", className)}>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={onNavigate}
          className={cn(
            "rounded-full px-3 py-3 text-sm font-medium text-white/80 transition-colors hover:text-white",
            linkClassName,
          )}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
