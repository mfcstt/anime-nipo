import { Mail } from "lucide-react";

import { FacebookIcon, InstagramIcon, ThreadsIcon } from "@/components/shared/social-icons";
import { site } from "@/data/site";

const socials = [
  { label: "Instagram", href: site.links.instagram, icon: InstagramIcon },
  { label: "Facebook", href: site.links.facebook, icon: FacebookIcon },
  { label: "Threads", href: site.links.threads, icon: ThreadsIcon },
  { label: "E-mail", href: site.links.email, icon: Mail },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socials.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noreferrer"
          aria-label={label}
          className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
        >
          <Icon className="size-5" />
        </a>
      ))}
    </div>
  );
}
