import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from './AnimatedText'
import ScrollReveal from 'scrollreveal'

// gsap initialize
gsap.registerPlugin(ScrollTrigger);

// data
const faqData = [
    {
        question: "How fast can you fix my bugs?",
        answer: "Most small bugs are fixed within 24 hours depending on complexity."
    },
    {
        question: "What technologies do you specialize in?",
        answer: "I specialize in React, Node.js, TypeScript, and modern web development technologies. I'm also experienced with database systems like MongoDB and PostgreSQL."
    },
    {
        question: "How do you handle project communication?",
        answer: "I maintain regular communication through your preferred channel (Slack, Email, or MS Teams) and provide daily updates on project progress."
    },
    {
        question: "What is your typical project timeline?",
        answer: "Project timelines vary based on scope and complexity. Small projects typically take 1-2 weeks, while larger projects can span 2-3 months. I'll provide a detailed timeline during our initial consultation."
    },
    {
        question: "Do you offer maintenance after project completion?",
        answer: "Yes, I offer ongoing maintenance and support packages. This includes bug fixes, security updates, and minor feature additions."
    },
    {
        question: "What is your development process?",
        answer: "I follow an agile methodology with regular sprints and deliverables. This includes planning, development, testing, and deployment phases with continuous feedback integration."
    }
];

const Faq = () => {
    // when click faq question
    const toggleAnswer = (e) => {
        // get the answer element
        const answer = e.currentTarget.nextElementSibling;
        // gat the icon element
        const icon = e.currentTarget.querySelector(".icon");

        // when faq answer visible, hide it
        if (answer.classList.contains("max-h-[200px]")) {
            answer.classList.remove("max-h-[200px]", "py-4"); // remove answer height
            icon.textContent = "+"; // add "+" icon by replacing "-"
            return;
        }

        // Hide all other answers
        document.querySelectorAll(".faq-answer").forEach((elem) => {
            elem.classList.remove("max-h-[200px]", "py-4"); // remove answer height
            elem.previousElementSibling.querySelector(".icon").textContent = "+"; // add "+" icon by replacing "-"
        });

        // Show clicked answer
        answer.classList.add("max-h-[200px]", "py-4"); // add answer height
        icon.textContent = "–"; // add "-" icon by replacing "+"
    };

    // items animation on scroll
    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
            ScrollTrigger.create({
                trigger: "#faq .main-content",
                start: "top-=40 top",
                end: "bottom bottom",
                pin: "#faq .text-content",
                pinSpacing: false
            });
        });
        return () => mm.revert();
    }, []);

    // scroll reveal
    useEffect(() => {
        ScrollReveal().reveal(".faq-item", {
            origin: 'bottom',
            distance: '100px',
            duration: 800,
            easing: 'ease-out',
            interval: 200,
            reset: true,
            once: false,
            opacity: 0,
        });
    }, []);

    return (
        <section id="faq" className="bg-white dark:bg-[#030303] mt-30">
            <div className="px-7 lg:px-12 mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-[2fr_3fr] md:gap-5 gap-3">
                <div className="text-content">
                    {/* title */}
                    <AnimatedText className="md:text-7xl text-4xl text-center lg:text-left md:font-medium">
                        The Most Asked Questions
                    </AnimatedText>
                    <p className="mt-3 text-sm md:text-base opacity-80">
                        Find answers to the most common questions about my services, projects, and workflow to help you understand my process better.
                    </p>
                </div>

                {/* items fetch from array */}
                <div className="main-content space-y-3">
                    {faqData.map((faq, index) => (
                        <div key={index} className="faq-item dark:hover:bg-dark/70 dark:bg-dark bg-light hover:bg-light/70 text-sm md:text-xl transition-all rounded-2xl md:rounded-3xl overflow-hidden">
                            <button
                                className="faq-question w-full flex justify-between items-center py-4 px-4 md:p-5 md:font-medium cursor-pointer"
                                onClick={toggleAnswer}
                            >
                                <span>{faq.question}</span>
                                <span className="icon">+</span>
                            </button>
                            <div className="faq-answer max-h-0 overflow-hidden px-4 transition-all text-black/70 dark:text-white/70">
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;