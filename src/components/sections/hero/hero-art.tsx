"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function HeroArt() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/hero/moon-bg.png"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <motion.div
        className="absolute top-[8%] right-[6%] w-[46%] max-w-[420px] md:right-[8%] md:w-[38%]"
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
  );
}
