import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

export default function Home() {
  return (
   <main className="container">
    <section className="flex flex-col xl:flex-row items-center justify-between">
      <div className="flex-1 text-center xl:text-left">
        <article className="mb-8">
        <span>Softare Engineer</span>
        <h1 className="h1 mb-2">Hello, I&apos;m <br /><span className="text-accent">Chukwu Innocent</span></h1>
        <p className="text-sm">I am a full-stack developer with hands-on experience in building real world solutions. I create custom WordPress Plugins and Themes to help clients achieve their needs</p>
        </article>
        <article className="flex flex-col xl:flex-row items-center gap-8">
          <Button variant="outline" className="flex items-center gap-2 uppercase">
            <span>Download CV</span>
            <span>
              <FiDownload className="text-xl"/>
            </span>
          </Button>
        <div className="mb-8 xl:mb-0">
        <Socials 
          containerStyle="flex gap-6" 
          iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
          />
        </div>
        </article>
      </div>
      <div className="flex-1">Photo</div>
    </section>
   </main>
  );
}
