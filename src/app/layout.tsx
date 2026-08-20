import type { Metadata } from "next";
import { DM_Sans, Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-button",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const siteUrl = "https://animenipo.com.br";
const title = "Anime Nipo 2026 — 15º Encontro de Cultura Pop Japonesa";
const description =
  "O maior evento de anime, mangá e cultura geek do interior de SP. 22 e 23 de agosto de 2026, em Bragança Paulista. Garanta seu ingresso.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Anime Nipo",
    "evento de anime Bragança Paulista",
    "cultura pop japonesa",
    "cosplay",
    "k-pop",
    "convenção de anime SP",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Anime Nipo",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${plusJakartaSans.variable} ${dmSans.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-body text-foreground">
        {children}
      </body>
    </html>
  );
}
