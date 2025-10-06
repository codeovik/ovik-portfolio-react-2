import OpenVideo from "./OpenVideo"
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import AnimatedText from './AnimatedText'

// import all portfolio images
import aiImageGenerator from '/images/portfolio-ai-image-generator.jpg'
import fitnessApp from '/images/portfolio-fitness-app.jpg'
import carWebsite from '/images/portfolio-car.jpg'
import coffeeShop from '/images/portfolio-coffe-shop-website.jpg'
import treeHouse from '/images/portfolio-tree-house.jpg'

// gsap plugin initialize
gsap.registerPlugin(ScrollTrigger)

// data
const portfolioItems = [
  {
    title: "AI image generator website API development using Python",
    image: aiImageGenerator,
    videoKey: "tZIsF3JRDxI?si=OuKRWRJ-ECyM82zJ",
  },
  {
    title: "Fitness web app UI design and development",
    image: fitnessApp,
    videoKey: "we3vz5NispM?si=HS4MmqXsgfoB6cKB",
  },
  {
    title: "Car website landing page development",
    image: carWebsite,
    videoKey: "hu9KHE37Euc?si=A5ITX-W9fQs1eUoR",
  },
  {
    title: "Coffee shop website API problem fixed",
    image: coffeeShop,
    videoKey: "6ytQCyCVqDA?si=H06GKPhCalE5nwUF",
  },
  {
    title: "3D Tree house architecture design using Minimax",
    image: treeHouse,
    videoKey: "gx9m5qyDu0Y?si=tItCfltvX9prmolC",
  },
];

const Portfolio = () => {
  useEffect(() => {
    // text scroll pin for desktop
    gsap.matchMedia().add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: "#portfolio .main-content",
        start: "top-=40 top",
        end: "bottom bottom",
        pin: "#portfolio .text-content",
        pinSpacing: false
      });
    });

    // image parallax effect
    const articles = document.querySelectorAll("#portfolio article");
    articles.forEach(article => {
      const img = article.querySelector("img");
      const container = article.querySelector("div");

      gsap.to(img, {
        y: -(img.offsetHeight - container.offsetHeight),
        ease: "none",
        scrollTrigger: {
          trigger: article,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      id="portfolio"
      className="bg-white dark:bg-[#030303] mt-30"
    >
      <div className="px-7 lg:px-12 mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5">
        {/* title */}
        <div className="text-content h-max">
          <AnimatedText className="md:text-7xl text-4xl text-center lg:text-left md:font-medium">
            Innovative Work Showcase
          </AnimatedText>
          <p className="mt-3 text-sm md:text-base opacity-80">
            Showcasing my recent work and creative projects, demonstrating design skills, development expertise, and innovative solutions for real-world applications.
          </p>
        </div>

        {/* fetch items from array */}
        <OpenVideo />
        <div className="main-content space-y-8">
          {portfolioItems.map((item, index) => (
            <article
              key={index}
              onClick={() => openVideoModal(item.videoKey)}
              data-youtube-video-embed-key={item.videoKey}
            >
              <div className="relative overflow-hidden aspect-4/3 rounded-2xl md:rounded-3xl">
                <img
                  src={item.image}
                  alt=""
                  className="w-full aspect-square object-cover transform will-change-transform cursor-pointer"
                />
              </div>
              <a href="#" className="mx-3 md:mx-6 mt-2 block">
                <h4 className="text-xl md:text-3xl leading-7 md:leading-10 cursor-pointer inline bg-gradient-to-r from-current to-current bg-no-repeat bg-[length:0%_1px] bg-[position:0_90%] transition-[background-size] duration-600 ease-in-out hover:bg-[length:100%_1px]">
                  {item.title}
                </h4>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;