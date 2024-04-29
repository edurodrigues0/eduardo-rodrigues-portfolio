import "./globals.css";

import { Poppins } from "next/font/google";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Eduardo Rodrigues",
  icons: "./favicon.png",
  description: "Eduardo Rodrigues Dev Portifolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.className} bg-background text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
