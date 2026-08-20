import type { ScheduleDay } from "@/types";

/**
 * Attractions and order are sourced from animenipo.com.br and @animenipo.
 * Exact minute-by-minute times are representative — confirm against the
 * official program closer to the event date.
 */
export const scheduleDays: ScheduleDay[] = [
  {
    id: "sabado",
    label: "Sábado",
    date: "22/08",
    items: [
      {
        time: "10:00",
        title: "Open Karaokê",
        description:
          "No nosso karaokê aberto, todo mundo pode subir ao palco e soltar a voz nos temas de anime que marcaram época.",
      },
      {
        time: "11:30",
        title: "Abertura Oficial",
        description: "Cerimônia de abertura da 15ª edição do Anime Nipo.",
      },
      {
        time: "11:40",
        title: "Escola de Língua Japonesa de Bragança Paulista",
        description: "Apresentação cultural dos alunos da escola de idiomas.",
      },
      {
        time: "12:35",
        title: "Dublador Gabriel Verta",
        description: "Bate-papo e apresentação com o dublador convidado.",
      },
      {
        time: "14:00",
        title: "Taiko Aozora Daiko",
        description: "Apresentação de tambores japoneses tradicionais.",
      },
      {
        time: "15:00",
        title: "Black Baby Metal Brasil",
        description: "Show da banda de kawaii metal.",
      },
      {
        time: "16:00",
        title: "K-pop Cover & Random Play Dance",
        description: "Apresentações de grupos de dança cover e random play dance.",
      },
      {
        time: "17:00",
        title: "Final do Concurso de K-pop",
        description: "Grande final da competição de K-pop da edição.",
      },
      {
        time: "17:45",
        title: "Dança de Matsuri",
        description: "Encerramento do primeiro dia com a tradicional dança de matsuri.",
      },
    ],
  },
  {
    id: "domingo",
    label: "Domingo",
    date: "23/08",
    items: [
      {
        time: "10:00",
        title: "Open Karaokê",
        description: "Mais um dia de karaokê aberto para soltar a voz nos temas favoritos.",
      },
      {
        time: "11:00",
        title: "Dança de Anime Songs",
        description: "Apresentação de dança coreografada com músicas de anime.",
      },
      {
        time: "12:00",
        title: "Nerd Chord",
        description: "Show da banda cover de temas nerd e anime.",
      },
      {
        time: "13:00",
        title: "Dubladora Jacque Souza",
        description: "Bate-papo e apresentação com a dubladora convidada.",
      },
      {
        time: "14:00",
        title: "Taiko Aozora Daiko",
        description: "Apresentação de tambores japoneses tradicionais.",
      },
      {
        time: "15:00",
        title: "Plus Ultra",
        description: "Show da banda de rock com temas de anime.",
      },
      {
        time: "16:30",
        title: "Final do Concurso de Cosplay",
        description: "Grande final da competição de cosplay da edição.",
      },
      {
        time: "17:45",
        title: "Dança de Matsuri",
        description: "Encerramento oficial do 15º Anime Nipo.",
      },
    ],
  },
];
