"use client";

import type { RefObject } from "react";
import Image from "next/image";
import { motion } from "motion/react";

type HeroArtProps = {
  videoRef: RefObject<HTMLVideoElement | null>;
  artRef: RefObject<HTMLDivElement | null>;
  characterRef: RefObject<HTMLDivElement | null>;
};

export function HeroArt({ videoRef, artRef, characterRef }: HeroArtProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div ref={artRef} className="absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-[85%] opacity-40 [mask-image:linear-gradient(to_right,transparent,black_40%)] md:w-[70%] md:[mask-image:linear-gradient(to_right,transparent,black_35%)]">
          <Image
            src="/images/hero/moon-bg.png"
            alt=""
            fill
            priority
            className="object-cover object-[35%_30%]"
            sizes="70vw"
          />
        </div>

        <motion.div
          ref={characterRef}
          className="absolute top-[3%] right-[10%] w-[26%] max-w-[420px] sm:top-[8%] sm:right-[6%] sm:w-[46%] md:right-[8%] md:w-[38%]"
          initial={{ opacity: 0, y: 30, rotate: 22 }}
          animate={{ opacity: 1, y: [0, -14, 0], rotate: 22 }}
          transition={{
            opacity: { duration: 0.8, ease: "easeOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Image
            src="/images/hero/hero-character.png"
            alt="Personagem ilustrado do Anime Nipo"
            width={521}
            height={736}
            className="h-auto w-full object-contain"
            priority
          />
        </motion.div>

        <motion.div
          className="absolute top-[18%] left-[58%] w-[10%] max-w-[110px] md:left-[62%]"
          initial={{ opacity: 0, rotate: -15 }}
          animate={{ opacity: 1, y: [0, 10, 0], rotate: -15 }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3, ease: "easeOut" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
        >
          <Image
            src="/images/hero/chibi-mascot.png"
            alt=""
            width={200}
            height={188}
            className="h-auto w-full object-contain"
          />
        </motion.div>
      </div>

      <video
        ref={videoRef}
        src="/videos/fairy-flying.mp4"
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        className="fixed z-20 object-cover opacity-0"
      />
    </div>
  );
}
