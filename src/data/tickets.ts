import type { TicketTier } from "@/types";

export const ticketTiers: TicketTier[] = [
  {
    name: "Antecipado",
    price: "R$10",
    description: "Ingresso meia entrada facilitada, válido para um dia à sua escolha.",
    featured: true,
  },
  {
    name: "No dia do evento",
    price: "R$20",
    description: "Ingresso inteira, comprado direto na entrada ou até o fim das vendas online.",
  },
];

export const ticketSellPoints = ["Pastelaria Hosokawa", "Banca do Roberto", "Papelândia"];
