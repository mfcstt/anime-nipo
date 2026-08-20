import { BookOpen, Guitar, MessagesSquare, Mic, Music4, PartyPopper, Sparkles } from "lucide-react";

import type { HighlightCard } from "@/types";

export const highlights: HighlightCard[] = [
  {
    icon: Mic,
    title: "Karaokê Aberto",
    description: "Suba ao palco e solte a voz nos temas de anime que marcaram época.",
  },
  {
    icon: Sparkles,
    title: "Concurso de Cosplay",
    description: "Capriche na fantasia e dispute o título de melhor cosplay da edição.",
  },
  {
    icon: Music4,
    title: "K-pop no palco",
    description: "Cover dance, random play dance e a final do concurso de K-pop.",
  },
  {
    icon: Guitar,
    title: "Bandas ao vivo",
    description: "Black Baby Metal, Nerd Chord e Plus Ultra sobem ao palco principal.",
  },
  {
    icon: MessagesSquare,
    title: "Dubladores convidados",
    description: "Bate-papo com Gabriel Verta e Jacque Souza, vozes que você conhece.",
  },
  {
    icon: BookOpen,
    title: "Cultura japonesa",
    description: "Escola de Língua Japonesa e apresentações de taiko tradicional.",
  },
  {
    icon: PartyPopper,
    title: "Dança de Matsuri",
    description: "O tradicional encerramento em grupo que fecha os dois dias de festa.",
  },
];
