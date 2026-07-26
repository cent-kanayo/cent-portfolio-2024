"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowUpRight } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"

import "swiper/css"
import WorkSlideerBtn from "@/components/WorkSlideerBtn"

const projects = [
  {
    num: "01",
    category: "fullstack",
    title: "Landlord Beware",
    description:
      "Tenant evaluation and property management platform built with Node.js, Express, React, TypeScript, PostgreSQL.",
    stack: ["Node.js", "Express", "React", "TypeScript", "PostgreSQL"],
    image: "/assets/projects/twlanding.png",
    live: "https://landlordbeware.com",
  },
  {
    num: "02",
    category: "wordpress",
    title: "TechWriteable",
    description:
      "WordPress-based job board platform for creative professionals built with WordPress, PHP, jQuery, MySQL.",
    stack: ["WordPress", "PHP", "jQuery", "MySQL"],
    image: "/assets/projects/twlanding.png",
    live: "https://techwriteable.me",
  },
  {
    num: "03",
    category: "fullstack",
    title: "Future Design Collaborative",
    description:
      "Design industry platform connecting Nigerian designers to global opportunities through workshops and mentorship programs.",
    stack: ["React", "TypeScript", "Fastify", "Node.js", "PostgreSQL"],
    image: "/assets/projects/twlanding.png",
    live: "https://futuredesigncollaborative.com",
  },
  {
    num: "04",
    category: "wordpress",
    title: "Kripa Limited",
    description:
      "WordPress-based logistics and errand delivery platform built with WordPress, PHP, MySQL.",
    stack: ["WordPress", "PHP", "MySQL"],
    image: "/assets/projects/twlanding.png",
    live: "https://kripalimited.com",
  },
  {
    num: "05",
    category: "fullstack",
    title: "JoinSportMe",
    description:
      "Social platform for creating physical sports events, real-time chat, and networking built with React, TypeScript, Fastify, Node.js, PostgreSQL.",
    stack: ["React", "TypeScript", "Fastify", "Node.js", "PostgreSQL"],
    image: "/assets/projects/twlanding.png",
    live: "https://joinsportme.com",
  },
]

const Work = () => {
  const [projectsList, setProjectList] = useState(projects[0])
  const handleSlideChange = (swiper) => {
    setProjectList(projects[swiper.activeIndex])
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] py-8"
    >
      <div className="border border-foreground/30">
        <div className="border-b border-foreground/30 px-4 py-2 text-xs text-foreground/50 flex items-center gap-2">
          <span className="text-foreground">$</span>
          <span>ls ./projects/</span>
          <span className="terminal-cursor" />
        </div>

        <div className="flex flex-col xl:flex-row xl:gap-[30px] p-4 xl:p-6">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-4">
              <div className="text-6xl xl:text-7xl font-bold text-foreground/20">
                {projectsList.num}
              </div>
              <h2 className="text-xl xl:text-2xl font-bold text-foreground">
                {projectsList.title}
              </h2>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {projectsList.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projectsList.stack.map((item, index) => (
                  <span
                    key={index}
                    className="text-xs border border-foreground/30 px-2 py-0.5 text-foreground/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="border-t border-foreground/20 my-2" />
              <div className="flex gap-3">
                <Link href={projectsList.live}>
                  <span className="flex items-center gap-1 text-sm text-foreground hover:underline underline-offset-2">
                    <BsArrowUpRight /> live
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] mb-6 xl:mb-0">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[460px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[300px] xl:h-[420px] relative group flex justify-center items-center border border-foreground/20">
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.description}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSlideerBtn
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyle="border border-foreground text-foreground text-[18px] w-[40px] h-[40px] flex justify-center items-center hover:bg-foreground hover:text-primary transition-colors"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
