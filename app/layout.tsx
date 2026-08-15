import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { createElement as h } from "react";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import { SITE_URL, SITE_NAME } from "../lib/seo";

const playfair = Playfair_Display({
      subsets: ["latin"],
      variable: "--font-display",
      weight: ["400", "500", "600", "700"],
});

const inter = Inter({
      subsets: ["latin"],
      variable: "--font-body",
      weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
      metadataBase: new URL(SITE_URL),
      title: {
          default: SITE_NAME,
              template: `%s | ${SITE_NAME}`,
      },
      description: "PLACEHOLDER A REMPLACER",
      openGraph: {
              siteName: SITE_NAME,
              type: "website",
      },
      robots: {
              index: true,
              follow: true,
      },
};

export default function RootLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      return h(
              "html",
          { lang: "fr", className: `${playfair.variable} ${inter.variable}` },
              h("body", null, children, h(WhatsAppButton, null))
            );
}
