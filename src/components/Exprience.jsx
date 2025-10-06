import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedText from './AnimatedText'
import ScrollReveal from 'scrollreveal'

// gsap plugin initialize
gsap.registerPlugin(ScrollTrigger)

// data
const experienceData = [
  {
    title: "Video editor",
    company: "Moon Light",
    description: "I am actively involved in creating user interfaces for mobile apps and websites.",
    period: "2015 - 2016"
  },
  {
    title: "Exclusive Officer",
    company: "Magi Vudi",
    description: "I am actively involved in creating user interfaces for mobile apps and websites.",
    period: "2018 - 2021"
  },
  {
    title: "Front end developer",
    company: "Code House",
    description: "I am actively involved in creating user interfaces for mobile apps and websites.",
    period: "2021 - 2023"
  },
  {
    title: "Video editor",
    company: "Moon Light",
    description: "I am actively involved in creating user interfaces for mobile apps and websites.",
    period: "2025 - now"
  }
];

const Experience = () => {
  useEffect(() => {
    // text scroll pin for desktop
    gsap.matchMedia().add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: "#experience .main-content",
        start: "top-=40 top",
        end: "bottom bottom",
        pin: "#experience .text-content",
        pinSpacing: false
      });
    });

    return () => {
      // Cleanup ScrollTrigger when component unmounts
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // scroll reveal items
  useEffect(() => {
    ScrollReveal().reveal(".exprience-items", {
      origin: 'bottom',
      distance: '70px',
      duration: 500,
      easing: 'ease-out',
      interval: 200,
      reset: true,
      once: false,
      opacity: 0,
    });
  }, []);

  return (
    <section
      id="experience"
      className="bg-white dark:bg-[#030303] mt-30"
    >
      <div className="px-7 lg:px-12 mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5">
        {/* title */}
        <div className="text-content h-max">
          <AnimatedText className="md:text-7xl text-4xl text-center lg:text-left md:font-medium">
            Work Experience Highlights
          </AnimatedText>
          <p className="mt-3 text-sm md:text-base opacity-80">
            With years of hands-on experience, I have collaborated with diverse clients and brands worldwide, building responsive, user-friendly, and scalable web solutions that combine creativity, performance, and modern technologies
          </p>
        </div>

        {/* fetch items from array */}
        <div className="main-content space-y-5">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className="exprience-items flex flex-col md:flex-row justify-between gap-2 dark:bg-dark dark:hover:bg-dark/70 bg-light hover:bg-light/70 rounded-2xl md:rounded-3xl transition-all p-5 md:p-10"
            >
              <div>
                <h4 className="text-3xl md:text-5xl font-medium">{item.title}</h4>
                <p className="md:mt-2 text-sm md:text-lg">
                  In the <span className="relative after:bg-black dark:after:bg-white after:w-full after:h-[1px] after:bottom-0 after:left-0 after:absolute">
                    {item.company}
                  </span> agency
                </p>
                <p className="mt-3 md:mt-6 text-sm md:text-lg">{item.description}</p>
              </div>
              <div>
                <p className="rounded-full w-max text-sm md:text-base whitespace-nowrap bg-black/10 dark:bg-white/10 px-4 py-1">
                  {item.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;