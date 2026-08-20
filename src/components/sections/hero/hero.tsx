"use client";

import { useEffect, useRef } from "react";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HeroArt } from "@/components/sections/hero/hero-art";
import { Container } from "@/components/shared/container";
import { PillButton } from "@/components/shared/pill-button";
import { Reveal } from "@/components/shared/reveal";
import { SectionBadge } from "@/components/shared/section-badge";
import { site } from "@/data/site";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

/** Linear interpolation of `value` from the [inStart, inEnd] range into [0, 1], clamped. */
function fade(value: number, inStart: number, inEnd: number) {
  return gsap.utils.clamp(0, 1, (value - inStart) / (inEnd - inStart));
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pinned = pinnedRef.current;
    const video = videoRef.current;
    const art = artRef.current;
    const character = characterRef.current;
    const content = contentRef.current;
    const header = document.getElementById("site-header");
    if (!section || !pinned || !video || !art || !character || !content) return;

    let trigger: ScrollTrigger | null = null;
    let settled = false;

    // Restrictive embedded browsers (Instagram/Facebook/TikTok in-app
    // WebViews especially) can refuse to play video at all, even muted.
    // If that happens, bail out of the whole scroll-video effect and just
    // leave the normal static hero on screen — better than a stuck pin or
    // a black section.
    const fallbackToStaticHero = () => {
      if (settled) return;
      settled = true;
      trigger?.kill();
      gsap.set([content, art], { opacity: 1, pointerEvents: "auto" });
      gsap.set(video, { opacity: 0 });
      if (header) gsap.set(header, { opacity: 1, pointerEvents: "auto" });
    };

    const setupScrollVideo = () => {
      if (settled) return;

      // Where the video starts (the character's own spot) vs. where it
      // ends up (full screen), measured once so it can visually "grow
      // out" of the character illustration instead of just appearing
      // full-bleed.
      const startBox = character.getBoundingClientRect();

      trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=160%",
        pin: pinned,
        scrub: 0.3,
        onUpdate: (self) => {
          const p = self.progress;

          if (video.duration) {
            const target = p * video.duration;
            if (Math.abs(video.currentTime - target) > 0.03) {
              video.currentTime = target;
            }
          }

          // Hero copy/art fade out early and never come back — they're
          // fully handed off to the video by the time it takes over.
          const contentOpacity = 1 - fade(p, 0.06, 0.14);
          // Video fades in right after, holds full-screen, then fades out
          // right at the end as the section releases into Sponsors.
          const videoOpacity = fade(p, 0.06, 0.14) * (1 - fade(p, 0.9, 1));
          // Header hides with the hero copy but comes back at the very end,
          // since it's a persistent, site-wide element.
          const headerOpacity = contentOpacity + fade(p, 0.9, 1);
          // The video grows from the character's box to full-screen over a
          // slightly longer window than the opacity fade, so it visibly
          // "flies out" of where the illustration used to be.
          const grow = fade(p, 0.06, 0.35);
          const endBox = { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
          const top = gsap.utils.interpolate(startBox.top, endBox.top, grow);
          const left = gsap.utils.interpolate(startBox.left, endBox.left, grow);
          const width = gsap.utils.interpolate(startBox.width, endBox.width, grow);
          const height = gsap.utils.interpolate(startBox.height, endBox.height, grow);

          gsap.set(content, {
            opacity: contentOpacity,
            pointerEvents: contentOpacity > 0.5 ? "auto" : "none",
          });
          gsap.set(art, { opacity: contentOpacity });
          gsap.set(video, { opacity: videoOpacity, top, left, width, height });
          if (header) {
            gsap.set(header, {
              opacity: headerOpacity,
              pointerEvents: headerOpacity > 0.5 ? "auto" : "none",
            });
          }
        },
        onLeave: () => {
          gsap.to(window, {
            duration: 0.6,
            ease: "power2.inOut",
            scrollTo: "#sponsors",
          });
        },
      });
    };

    // iOS Safari (and even more so, in-app WebViews) mostly ignore
    // preload="auto" and won't actually fetch video data until playback
    // has genuinely started at least once. A muted play/pause is allowed
    // without a user gesture and "primes" the decoder — but if even that
    // gets rejected, treat it as this browser just not supporting the
    // effect and fall back gracefully.
    video.muted = true;
    video.defaultMuted = true;

    const onError = () => fallbackToStaticHero();
    video.addEventListener("error", onError);

    video.load();
    const playAttempt = video.play();
    if (playAttempt) {
      playAttempt
        .then(() => {
          requestAnimationFrame(() => video.pause());
          setupScrollVideo();
        })
        .catch(fallbackToStaticHero);
    } else {
      video.pause();
      setupScrollVideo();
    }

    return () => {
      settled = true;
      video.removeEventListener("error", onError);
      trigger?.kill();
    };
  }, []);

  return (
    <section id="top" ref={sectionRef} className="relative bg-black">
      <div ref={pinnedRef} className="h-screen overflow-hidden pt-32 pb-24">
        <HeroArt videoRef={videoRef} artRef={artRef} characterRef={characterRef} />

        <div ref={contentRef}>
          <Container className="relative z-10">
            <Reveal className="flex max-w-xl flex-col gap-8">
              <div className="flex flex-col gap-4">
                <SectionBadge icon={Sparkles}>{site.edition}</SectionBadge>

                <h1 className="font-heading text-6xl leading-[1.05] font-semibold text-white sm:text-7xl lg:text-8xl">
                  {site.dates.label.split(" ").slice(0, 3).join(" ")}
                  <br />
                  {site.dates.label.split(" ").slice(3).join(" ")}
                </h1>

                <p className="text-lg leading-relaxed tracking-[-0.02em] text-muted-foreground sm:text-xl">
                  O Anime Nipo é o evento da galera sobre{" "}
                  <strong className="font-bold text-white">anime</strong>,{" "}
                  <strong className="font-bold text-white">mangá</strong> e outras temáticas{" "}
                  <strong className="font-bold text-white">geek</strong>, realizado em Bragança
                  Paulista – SP!
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <PillButton href={site.links.tickets} external>
                  Comprar ingressos
                </PillButton>
                <PillButton href="#programacao" variant="glass" icon={null}>
                  Ver programação
                </PillButton>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-primary" /> Bragança Paulista – SP
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="size-4 text-primary" /> {site.dates.hours}
                </span>
              </div>
            </Reveal>
          </Container>
        </div>
      </div>
    </section>
  );
}
