import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/(answer-02)/header";
import { HeaderData } from "@/components/(answer-02)/header.mock";
import { ThemeToggle } from "@/components/theme/theme";
import { ThemeProvider } from "@/provider/theme-provider";
import Container from "@/components/container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ascendion Frontend",
  description: "Ascendion Frontend Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar title={HeaderData.title} links={HeaderData.links} />
          <Container>{children}</Container>
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
