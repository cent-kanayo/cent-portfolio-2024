"use client";
import {BsArrowDownRight} from "react-icons/bs"
import {motion} from "framer-motion"
import Link from "next/link"
const services = [
  {
    num: "01",
    title: "Full-Stack Development",
    description: "I help business streamline and automate processes using cutting edge technologies while implementing industry best practices.",
    href: ""
  },
  {
    num: "02",
    title: "WordPress Development",
    description: "I design visually appealing and performant WordPress websites for clients. I also develop and customize custom WordPress themes to suit specific client neeeds.",
    href: ""
  },
  {
    num: "03",
    title: "Plugin Development",
    description: "With the help of custom plugins, I help clients transform a static website into an enterprise level wep app.",
    href: ""
  },
  {
    num: "04",
    title: "IT Admin Services",
    description: "I provide general IT administration functions, from setting up servers on Cpanel or Cloud platforms, domain regitrations and DNS configurations.",
    href: ""
  },
]
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {
          delay: 2.4, duration: 0.4, ease: "easeIn"
        }}}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((service, index) =>{
            return <div key={index} className="flex-1 flex-col justify-center gap-6 group"> 
              <article className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </article>
               <h2 className="h2 font-bold leading-none text-white group-hover:text-accent transition-all duration-500 my-2">{service.title}</h2>
               <p className="text-white/60">{service.description}</p>
               <div className="border-b border-white/20 w-full" />
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services