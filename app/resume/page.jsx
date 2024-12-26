"use client";
import {FaReact, FaJs, FaPhp, FaHtml5, FaCss3, FaNodeJs,} from "react-icons/fa"
import {SiNextdotjs, SiTailwindcss, SiJquery} from "react-icons/si"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
const experience = {
  icon: "", 
  title: "My experience",
  description: "I have spent the last 4 years dedicated to learning and building solutions to real world problems.",
  items: [
    {
      company: "TechWriteable",
      position: "Lead Wordpress developer",
      duration: "2023 - Present"
    },
    {
      company: "Silfrica",
      position: "Front-End developer",
      duration: "2022 - 2023"
    },
    {
      company: "Yoris Africa",
      position: "React Native developer",
      duration: "Volunteer"
    },
    {
      company: "Softnotch Technologies",
      position: "Full-stack developer",
      duration: "Contract",
    },
    {
      company: "Cyclobold Academy",
      position: "Intern software engineer",
      duration: "2022 - 2023"
    }
  ]
}
const education = {
  icon: "", 
  title: "My education",
  description: "Learning about science and technology has always been what I love to do.",
  items: [
    {
      institution: "University of Lagos",
      degree: "Quantity Surveying",
      duration: "2025"
    },
    {
      institution: "AWS Cloud Quest",
      degree: "Cloud Practitioner",
      duration: "2022"
    },
    {
      institution: "React Js Bootcamp",
      degree: "Front-end Development",
      duration: "2022"
    },
    {
      institution: "Web Development Bootcamp",
      degree: "Full-Stack Development",
      duration: "2021"
    },
    {
      institution: "Coursera",
      degree: "Google Data Analytics",
      duration: "2022"
    },
  ]
}
const skills = {
  title: "My skillsets",
  description: "I ensure to stay up to date with the latest trends in the industry and find ways to improve my skills.",
  skillSet: [
    {
      icon: <FaHtml5/>,
      name: "html 5"
    },
    {
      icon: <FaCss3/>,
      name: "css 3"
    },
    {
      icon: <FaJs/>,
      name: "javascript",
    },
    {
      icon: <FaNodeJs/>,
      name: "nodejs"
    },
    {
      icon: <FaPhp/>,
      name: "php"
    },
    {
      icon: <SiJquery/>,
      name: "jQuery"
    },
    {
      icon: <FaReact/>,
      name: "react.js"
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js"
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwindcss"
    },

  ]
}
const about = {
  title: "About me",
  description: "Curiosity is one of my basic traits. I love exploring ideas and learning new things. On my leisure time, I love working out.",
  info: [
    {
     fieldName: "Name",
     fieldValue: "Chukwu Innocent" 
    },
    {
      fieldName: "Phone",
      fieldValue: "(+234) 0906 545 7397" 
     },
     {
      fieldName: "Experience",
      fieldValue: "4+ years" 
     },
     {
      fieldName: "Email",
      fieldValue: "centkanayo@gmail.com" 
     },
     {
      fieldName: "Freelance",
      fieldValue: "Available" 
     },
  ]
}
const Resume = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[88px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left xl:gap-3">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 group gap-[30px]">
                    {experience.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <h3 className="text-accent text-[1.15rem] whitespace-nowrap max-w-[260px] min-h-[40px] text-center xl:text-left">{item.position}</h3>
                        <span>{item.duration}</span>
                        <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <span className="text-white/60">{item.company}</span>
                        </div>

                      </li>
                    })}
                  </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left xl:gap-3">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 group gap-[30px]">
                    {education.items.map((item, index) => {
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <h3 className="text-accent text-[1.15rem] whitespace-nowrap max-w-[260px] min-h-[40px] text-center xl:text-left">{item.degree}</h3>
                        <span>{item.duration}</span>
                        <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                        <span className="text-white/60">{item.institution}</span>
                        </div>

                      </li>
                    })}
                  </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" className="w-full">
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[24px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                {skills.skillSet.map((skill, index) => {
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[110px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[20px]">
            <h3 className="text-4xl font-bold">{about.title}</h3>
            <p className="text-white/60 max-w-[600px] mx-auto xl:mx-0">{about.description}</p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((item, index) => {
                return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                   <span className="text-white/60">{item.fieldName}</span>
                   <span className="text-xl">{item.fieldValue}</span>
                </li>
              })}
            </ul>
            </div>

          </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume