"use client";

import { useState } from "react";
import {motion} from "framer-motion"
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";

import 'swiper/css';
import WorkSlideerBtn from "@/components/WorkSlideerBtn";


const projects = [
  {
    num: "01",
    category: "Wordpress",
    title: "project 1",
    description: 
    "A blogging platform that allows user registration, and a user dashboard. Users can publish post through the frontend with a custom post uploading plugin.",
    stack: [
      {
        name: "WordPress"
      },
      {
        name: "Php"
      },
      {
        name: "Html 5"
      },
      {
        name: "Css 3"
      },
    ],
    image: "/assets/projects/twlanding.png",
    live: "https://techwriteable.com",
  },
  {
    num: "02",
    category: "Front-End",
    title: "project 2",
    description: 
    "A CGPA calculator that allows users to calculate their grade point average (GPA) and their cummulative grade point average (CGPA).",
    stack: [
      {
        name: "Next.js"
      },
      {
        name: "TypeScript"
      },
      {
        name: "Html 5"
      },
      {
        name: "Tailwindcss"
      },
    ],
    image: "/assets/projects/cgpa.png",
    live: "https://my-gpa.netlify.app/",
    github: "https://github.com/cent-kanayo/cgpacalculator",
  },
  {
    num: "03",
    category: "Wordpress",
    title: "project 3",
    description: 
    "A responsive and search engine optimized website for an organization Centre for Sustainable Housing and Development",
    stack: [
      {
        name: "Wordpress"
      },
      {
        name: "Php"
      },
      {
        name: "Html 5"
      },
      {
        name: "Css 3"
      },
    ],
    image: "/assets/projects/chsd.png",
    live: "https://chsdunilag.org",
  },
  {
    num: "04",
    category: "Front-End",
    title: "project 4",
    description: 
    "A user friendly website for a start-up company Silfrica. From figma to React website.",
    stack: [
      {
        name: "React"
      },
      {
        name: "JavaScript"
      },
      {
        name: "Html 5"
      },
      {
        name: "Css 3"
      },
    ],
    image: "/assets/projects/Silfrica.png",
    live: "https://silfrica.com",
  },
  {
    num: "05",
    category: "Wordpress",
    title: "project 5",
    description: 
    "A simple and stunning website for a business Metronome-CS. Designed and built with gutenberg blocks.",
    stack: [
      {
        name: "Wordpress"
      },
      {
        name: "Php"
      },
      {
        name: "Html 5"
      },
      {
        name: "Css 3"
      },
    ],
    image: "/assets/projects/Metronome.png",
    live: "https://metronomeconsults.com",
  },
  {
    num: "06",
    category: "Front-End",
    title: "project 6",
    description: 
    "Github summary dashboard where users can register either with their email or with Oauth2.0. Displays user details using github API to fetch data",
    stack: [
      {
        name: "React"
      },
      {
        name: "JavaScript"
      },
      {
        name: "Html 5"
      },
      {
        name: "Css 3"
      },
    ],
    image: "/assets/projects/Github dashboard.png",
    live: "https://githubuser-dashboardv1.netlify.app/",
    github: "https://github.com/cent-kanayo/githubuser-dashboard"
  },
  {
    num: "07",
    category: "Wordpress",
    title: "project 7",
    description: 
    "An E-commerce website developed with Wordpress, woo-commerce, and paystack payment gateway.",
    stack: [
      {
        name: "Wordpress"
      },
      {
        name: "Php"
      },
      {
        name: "Html 5"
      },
      {
        name: "Css 3"
      },
    ],
    image: "/assets/projects/ecommerce.png",
    live: "https://community.techwriteable.com/courses",
  },
]
const Work = () => {
  const [projectsList, setProjectList] = useState(projects[0])
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    console.log(currentIndex);
    
    setProjectList(projects[currentIndex])
  }
  return (
    <motion.section 
    initial={{opacity: 0}}
    animate={
      {opacity: 1, transition: {
        delay: 2.4, duration: 0.4, ease: "easeIn"
      }}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <article className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-trans text-outline">
                  {projectsList.num}
              </div>
              <h2 className="h2 font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{projectsList.category} project</h2>
              <p className="text-white/60">{projectsList.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {projectsList.stack.map((item, index) => {
                  return <li key={index} className="text-accent text-xl whitespace-nowrap">
                      {item.name}
                      {index !== projectsList.stack.length - 1 && ","}
                  </li>
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex gap-4 ">
                <Link href={projectsList.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {projectsList.github && <Link href={projectsList.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <FaGithub className="text-white text-3xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View code</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>}
              </div>
            </article>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
            spaceBetween={30}
            slidesPerView={1}
            className="xl:h-[520px] mb-12 flex"
            onSlideChange={handleSlideChange}
            >
                {projects.map((project, index) => {
                  return <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full bg-black/20 z-10"></div>
                        <div className="relative w-full h-full">
                          <Image src={project.image} fill className="object-cover" alt={projectsList.description} />
                        </div>
                      </div>
                  </SwiperSlide>
                })}
                <WorkSlideerBtn 
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                btnStyle="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all duration-500"
                
                />
            </Swiper> 
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work