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
  title: "Chukwu Innocent | Software engineer | Fitness and Sports Writer",
  description: "Chukwu Innocent is an experienced software engineer with proficiency in enterprise software development. I build custom Wordpress plugins and themes that suits my clients needs.",
  openGraph:{
    url: "centcodes.com",
    title: "Chukwu Innocent | Software engineer | Fitness and Sports Writer",
    description: "Chukwu Innocent is an experienced software engineer with proficiency in enterprise software development. I build custom Wordpress plugins and themes that suits my clients needs.",
    siteName: "CentCodes",
    images: [
      {
        url: "https://www.centcodes.com/image/chukwu-innocent.webp",
        alt: "Chukwu Innocent | Software engineer | Fitness and Sports Writer"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Chukwu Innocent | Software engineer | Fitness and Sports Writer",
    description: "Chukwu Innocent is an experienced software engineer with proficiency in enterprise software development. I build custom Wordpress plugins and themes that suits my clients needs.",
    creator: 'CentCodes',
    creatorId: '1467726470533754880',
    images: ['https://www.centcodes.com/image/chukwu-innocent.webp'], // Must be an absolute URL
  },
}

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
