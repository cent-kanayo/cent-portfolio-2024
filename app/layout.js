import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/StairEffect";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrainsMono-sans",
  subsets: ["latin"],
  weight: ["100", "200" ,"300", "400", "500", "600", "700", "800"]
});



export const metadata = {
  title: "Chukwu Innocent | Software engineer, Health, Fitness, and Sports Writer",
  description: "Chukwu Innocent is an experienced software engineer with proficiency in enterprise software development. I build custom Wordpress plugins and themes that suits my clients needs.",
};

export default function RootLayout({ children }) {
  
  
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable}`}
      >
        <Header/>
        <StairEffect/>
        <PageTransition>
        {children}
        </PageTransition>
      </body>
    </html>
  );
}
