import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Odometer from 'odometer'
import 'odometer/themes/odometer-theme-minimal.css'
import AnimatedText from './AnimatedText'

// gsap plugin initialize
gsap.registerPlugin(ScrollTrigger)

// data
const achievementData = [
  { target: 95, suffix: '%', label: 'Success Rate' },
  { target: 800, suffix: '+', label: 'Satisfied Clients' },
  { target: 15, suffix: '+', label: 'Years Of Experience' }
]

export default function Achievements() {
  // refs
  const odometerRefs = useRef([])
  const odometerInstances = useRef([])

  React.useEffect(() => {
    odometerRefs.current.forEach((el, index) => {
      if (!el) return
      // Initialize odometer
      odometerInstances.current[index] = new Odometer({
        el,
        value: 0,
        duration: 2000,
        format: '(,ddd)'
      })
      // ScrollTrigger: animate on enter, reset on leave back
      ScrollTrigger.create({
        trigger: el,
        start: 'top 100%',
        end: 'bottom 0%',
        onEnter: () => {
          odometerInstances.current[index].update(achievementData[index].target)
        },
        onLeaveBack: () => {
          odometerInstances.current[index].update(0)
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
      odometerInstances.current = []
    }
  }, []);

  return (
    <section
      className="px-6 md:px-20 mt-30"
      id="achievements"
    >
      {/* title */}
      <AnimatedText className="md:text-4xl text-xl lg:w-[800px] w-[80%] mx-auto lg:px-12">
        <span className="before:absolute before:aspect-square before:h-1 before:bg-black dark:before:bg-white relative pl-5 before:transform before:-translate-y-1/2 before:top-1/2 before:left-0 before:rounded-full text-base pr-20 bottom-2 opacity-80">
          Our Achievements
        </span>
        Celebrating the journey so far with impactful numbers that define our success
      </AnimatedText>

      {/* fetch items from array */}
      <div className="grid md:grid-cols-3 gap-8 mt-5">
        {achievementData.map((item, index) => (
          <div
            key={index}
            className="bg-light dark:bg-dark hover:bg-light/70 dark:hover:bg-dark/70 transition-all rounded-2xl md:rounded-3xl flex flex-col p-10 items-center justify-center"
          >
            <p className="text-5xl md:text-7xl text-center flex items-center">
              <span ref={el => (odometerRefs.current[index] = el)}>0</span>
              <span className="ml-2">{item.suffix}</span>
            </p>
            <p className="text-2xl text-center mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}