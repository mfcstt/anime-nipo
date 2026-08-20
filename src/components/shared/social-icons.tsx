import type { SVGProps } from "react";

/**
 * lucide-react dropped brand glyphs, so these three are hand-drawn to match
 * its 24x24 / stroke-width-2 conventions.
 */
function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <rect x={3} y={3} width={18} height={18} rx={5} />
      <circle cx={12} cy={12} r={4} />
      <circle cx={17.5} cy={6.5} r={0.75} fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M15 3h-2a5 5 0 0 0-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
    </IconBase>
  );
}

export function ThreadsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3c-4 0-6.5 2.5-6.5 7.5S8 21 12.5 21c3 0 5-1.4 5-4 0-2.3-1.8-3.4-4.3-3.6-2 0-3.4.7-3.4 2 0 1 .9 1.6 2.1 1.6 1.6 0 2.6-1 2.8-2.8.2-1.8-.6-4.4-3-5.4" />
    </IconBase>
  );
}
