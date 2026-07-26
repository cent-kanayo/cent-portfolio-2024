"use client"
import CountUp from "react-countup"

const stats = [
  { num: "4", text: "Years of experience", plus: true },
  { num: "10", text: "Projects completed", plus: true },
  { num: "8", text: "Custom plugins completed" },
  { num: "3", text: "Custom themes completed" },
]

const Stats = () => {
  return (
    <div className="border border-foreground/30">
      <div className="border-b border-foreground/30 px-4 py-2 text-xs text-foreground/50 flex items-center gap-2">
        <span className="text-foreground">$</span>
        <span>cat ./stats</span>
        <span className="terminal-cursor" />
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex-1 flex gap-3 items-center justify-center xl:justify-start min-w-[120px]">
            <div className="flex items-baseline">
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-2xl xl:text-4xl font-bold text-foreground"
              />
              {stat.plus && (
                <span className="text-2xl xl:text-4xl font-bold text-foreground">
                  +
                </span>
              )}
            </div>
            <p
              className={`text-xs leading-snug text-foreground/60 ${
                stat.text.length < 15 ? "max-w-[80px]" : "max-w-[120px]"
              }`}
            >
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Stats
