import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Chukwu Innocent | Full-Stack Developer",
  description:
    "Full-stack developer specializing in TypeScript, Node.js, Golang, PHP, and React. Building scalable backend systems with 4+ years of experience.",
  openGraph: {
    url: "centcodes.com",
    title: "Chukwu Innocent | Full-Stack Developer",
    description:
      "Full-stack developer specializing in TypeScript, Node.js, Golang, PHP, and React.",
    siteName: "CentCodes",
    images: [
      {
        url: "https://www.centcodes.com/image/chukwu-innocent.webp",
        alt: "Chukwu Innocent | Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chukwu Innocent | Full-Stack Developer",
    description:
      "Full-stack developer specializing in TypeScript, Node.js, Golang, PHP, and React.",
    creator: "CentCodes",
    creatorId: "1467726470533754880",
    images: ["https://www.centcodes.com/image/chukwu-innocent.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} scanlines`}>
        <Header />
        <main className="container mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
