"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import {motion} from "framer-motion"

export default function Home() {
    const downloadFile = (fileUrl, fileName) => {
      const link = document.createElement("a");
      link.href = fileUrl; // URL of the PDF file
      link.download = fileName || "download.pdf"; // Default filename if not provided
      link.click();
    };
  return (
   <motion.main initial={{opacity: 0}}
   animate={{
     opacity: 1,
     transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
   }} className="container">
    <section className="flex flex-col xl:flex-row items-center justify-between">
      <div className="text-center xl:text-left order-2 xl:order-none">
        <article className="mb-8">
        <span>Software Engineer</span>
        <h1 className="h1 mb-2">Hello, I&apos;m <br /><span className="text-accent">Chukwu Innocent</span></h1>
        <p className="text-sm max-w-[500px]">I am a full-stack developer with hands-on experience in building real world solutions. I create custom WordPress Plugins and Themes to help clients achieve their needs</p>
        </article>
        <article className="flex flex-col xl:flex-row items-center gap-8">
          <Button variant="outline" className="flex items-center gap-2 uppercase" onClick={() => downloadFile("http://www.centcodes.com/chukwu_innocent.pdf", "chukwu_innocent.pdf")}>
            <span>Download CV</span>
            <span>
              <FiDownload className="text-xl"/>
            </span>
          </Button>
        <div className="mb-8 xl:mb-0">
        <Socials 
          containerStyle="flex gap-8"
          iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
        </div>
        </article>
      </div>
      <div className="order-1 xl:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
    </section>
    <section className="mt-8">
      <Stats />
    </section>
   </motion.main>
  );
}
