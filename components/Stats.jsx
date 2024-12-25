"use client";
import CountUp from "react-countup"

const stats = [
    {
        num: "4",
        text: "Years of experience",
        plus: true
    },
    {
        num: "10",
        text: "Projects completed",
        plus: true

    },
    {
        num: "8",
        text: "Custom plugins completed"
    },
    {
        num: "3",
        text: "Custom themes completed"
    },
]
const Stats = () => {
  return (
    <>
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((stat, index) =>{
                return <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                    <article className="flex">
                    <CountUp 
                    end={stat.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                    />
                    {stat.plus && <p className="text-4xl xl:text-6xl font-extrabold">+</p>}
                    </article>
                    <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{stat.text}</p>
                </div>
            })}
        </div>
    </>
  )
}

export default Stats