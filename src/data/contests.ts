import { Music4, Sparkles } from "lucide-react";

import type { ContestInfo } from "@/types";

export const contests: ContestInfo[] = [
  {
    icon: Sparkles,
    image: "/images/contests/cosplay.jpg",
    title: "Concurso de Cosplay",
    description:
      "Capriche na fantasia e suba ao palco pra disputar o título de melhor cosplay da edição.",
    details: [
      "Categoria Kids (até 13 anos) e categoria Livre (14+)",
      "Check-in obrigatório até às 15h no dia do evento",
      "Grande final ao vivo no domingo (23/08)",
    ],
    deadline: "Check-in até 15h de 23/08",
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdQP_YLgEa6Oo_PpGmXobTGwX59DfE_3m-xHdvPlAbcaFOtuA/viewform",
  },
  {
    icon: Music4,
    image: "/images/contests/kpop.jpg",
    title: "Concurso de K-pop",
    description: "Mostre sua sincronia e faça seu grupo brilhar no palco principal do evento.",
    details: [
      "Categorias cover dance e random play dance",
      "Inscrições abertas até às 15h do dia do evento",
      "Grande final ao vivo no sábado (22/08)",
    ],
    deadline: "Inscrições até 15h de 22/08",
  },
];
