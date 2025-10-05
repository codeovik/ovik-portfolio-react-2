import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap'
import AnimatedText from './AnimatedText'
import ScrollReveal from 'scrollreveal';

// gsap initialize
gsap.registerPlugin(ScrollTrigger)

// data
const stackItems = [
    { name: 'React js', image: '/images/stack-react.png' },
    { name: 'Canva', image: '/images/stack-canva.png' },
    { name: 'Figma', image: '/images/stack-figma.png' },
    { name: 'Git', image: '/images/stack-git.png' },
    { name: 'GitHub', image: '/images/stack-github.png' },
    { name: 'HTML', image: '/images/stack-html.png' },
    { name: 'MongoDB', image: '/images/stack-mongodb.png' },
    { name: 'Next.js', image: '/images/stack-nextjs.png' },
    { name: 'Node.js', image: '/images/stack-nodejs.png' },
    { name: 'Tailwind CSS', image: '/images/stack-tailwindcss.png' }
];

const TechStack = () => {
    useEffect(() => {
        // text scroll pin for desktop
        gsap.matchMedia().add("(min-width: 1024px)", () => {
            ScrollTrigger.create({
                trigger: "#tech-stack .main-content",
                start: "top-=40 top",
                end: "bottom bottom",
                pin: "#tech-stack .text-content",
                pinSpacing: false
            });
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    // scroll reveal
    useEffect(() => {
        ScrollReveal().reveal(".stack-items", {
            origin: 'bottom',
            distance: '0px',
            duration: 800,
            easing: 'ease-out',
            interval: 200,
            reset: true,
            once: false,
            opacity: 0,
        });
    }, []);


    return (
        <section id="tech-stack" className="bg-white dark:bg-[#030303] mt-30">
            <div className="px-7 lg:px-12 mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5">
                {/* title */}
                <div className="text-content">
                    <AnimatedText className="md:text-7xl text-4xl text-center lg:text-left md:font-medium">
                        Modern Tech Expertise
                    </AnimatedText>
                    <p className="mt-3 text-sm md:text-base opacity-80">
                        A showcase of the tools, frameworks, and technologies I use to build modern, scalable, and high-performing web and mobile applications.
                    </p>
                </div>
                {/* item fetch from array */}
                <div className="main-content grid grid-cols-2 md:grid-cols-3 gap-4">
                    {stackItems.map((item, index) => (
                        <div
                            key={index}
                            className="stack-items p-9 md:p-10 bg-light hover:bg-light/70 dark:bg-dark dark:hover:bg-dark/70 transition-all rounded-2xl md:rounded-3xl space-y-3"
                        >
                            <img
                                src={item.image}
                                alt={item.name.toLowerCase()}
                                className="aspect-square w-full"
                            />
                            <p className="text-center text-xl">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;