import { useEffect, useRef } from "react";
import Typed from "typed.js";
import VanillaTilt from "vanilla-tilt";
import heroImage from "/images/hero.jpg"
import SocialMedia from "./SocialMedia";
import { ActionButton, LinkButton } from "./Button";
import OpenVideo from "./OpenVideo"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// gsap plugin initialize
gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
  // refs
  const typewriterRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttons = useRef(null);
  const skill = useRef(null);

  // typewriter effect
  useEffect(() => {
    const typed = new Typed(typewriterRef.current, {
      strings: ["Web Developer", "U/X Designer", "Video Editor"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "_",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // tilt effect
  useEffect(() => {
    if (imageRef.current) {
      VanillaTilt.init(imageRef.current, {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  useEffect(() => {
    document.fonts.ready.then(() => {
      // heading animation
      gsap.from(new SplitText(titleRef.current, {
        type: "chars",
      }).chars, {
        x: 70,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          toggleActions: "play reverse play reverse",
        },
      })
      // description animation
      gsap.from(new SplitText(descRef.current, {
        type: "words",
      }).words, {
        x: 20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        delay: 1,
        scrollTrigger: {
          trigger: descRef.current,
          toggleActions: "play reverse play reverse",
        },
      })
      // button animation
      gsap.set(buttons.current, { y: 50, opacity: 0 });
      gsap.to(buttons.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 2,
        scrollTrigger: {
          trigger: buttons.current,
          toggleActions: "play reverse play reverse",
        },
      });
      // skill animation
      gsap.set(skill.current, { y: 50, opacity: 0 });
      gsap.to(skill.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        delay: 0.5,
        scrollTrigger: {
          trigger: skill.current,
          toggleActions: "play reverse play reverse",
        },
      });
    });
  }, []);

  return (
    <header
      id="hero"
      className="px-7 lg:px-12 mx-auto max-w-[1600px] grid mt-5 grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 lg:gap-5 items-center"
    >
      {/* hero image */}
      <img
        ref={imageRef}
        src={heroImage}
        alt="hero image"
        className="rounded-2xl md:rounded-3xl"
      />

      <div className="flex flex-col gap-4 overflow-hidden">
        {/* name */}
        <h1
          className="md:text-7xl text-4xl font-medium space-x-2"
          ref={titleRef}
        >
          <span className="text-black/70 dark:text-white/70">Hi, I'm</span>
          <span>Ovik Biswas</span>
        </h1>

        {/* skill in typewriter effect */}
        <h2 className="md:text-5xl text-3xl" ref={skill}>
          <span className="text-black/70 dark:text-white/70">A skilled </span>
          <span ref={typewriterRef}></span>
        </h2>

        {/* description */}
        <p className="text-sm md:text-base opacity-80" ref={descRef}>
          A professional and skilled front-end developer specialized in React, Next.js, HTML, CSS, JavaScript, and TypeScript with several years of experience to create modern and responsive websites.
        </p>

        {/* social icons */}
        <SocialMedia />

        {/* button */}
        <div ref={buttons} className="gap-2 flex flex-col md:flex-row">
          <LinkButton href="#" primary={false}>Start A Project</LinkButton>

          <OpenVideo />
          <ActionButton onClick={() => openVideoModal("eUQ6yZLF_4I?si=gLSjhkUw3WG53or9")} primary={true/false}>Watch Intro</ActionButton>
        </div>

      </div>
    </header>
  );
};

export default Hero;