import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import LightLogo from '/images/logo-light.png'
import DarkLogo from '/images/logo-dark.png'

export default function Navbar() {
    // refs
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuTimeLineRef = useRef();
    const menuContainerRef = useRef();
    const menuBarRef = useRef();
    const toggleMenuRef = useRef();
    const closeButtonRef = useRef();
    const menuListTitleRef = useRef();
    const menuListItemsRef = useRef([]);
    const menuContactTitleRef = useRef();
    const menuContactItemRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // timeline pause initial
            const tl = gsap.timeline({ paused: true });

            // menu background
            tl.to(menuContainerRef.current, {
                backdropFilter: "blur(10px)",
                duration: 0.3,
                onStart: () => {
                    menuContainerRef.current.classList.add("pointer-events-auto");
                    menuContainerRef.current.classList.remove("pointer-events-none");
                },
                onReverseComplete: () => {
                    menuContainerRef.current.classList.remove("pointer-events-auto");
                    menuContainerRef.current.classList.add("pointer-events-none");
                },
            });

            // menu bar
            tl.to(menuBarRef.current, {
                right: 0,
                duration: 0.2,
            }, "<");

            // toggle menu button top stick
            tl.to(toggleMenuRef.current.querySelectorAll("span")[0], {
                rotation: 45,
                top: "50%",
                transformOrigin: "50% 50%",
            }, "<");

            // toggle menu button bottom stick
            tl.to(toggleMenuRef.current.querySelectorAll("span")[1], {
                rotation: -45,
                top: "50%",
                transformOrigin: "50% 50%",
            }, "<");

            // close button
            tl.from(closeButtonRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.3,
            });
            tl.to(closeButtonRef.current, {
                y: -20,
                opacity: 1,
                duration: 0,
            });

            // menu list title
            tl.from(menuListTitleRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.3,
            });

            // menu list items
            tl.from(menuListItemsRef.current, {
                y: 30,
                stagger: 0.04,
                opacity: 0,
                duration: 0.3,
            });

            // menu contact title
            tl.from(menuContactTitleRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.3,
            });

            // menu contact items
            tl.from(menuContactItemRef.current, {
                opacity: 0,
                y: 30,
                stagger: 0.04,
                duration: 0.3,
            });

            menuTimeLineRef.current = tl;
        });

        return () => ctx.revert();
    }, []);

    // when click toggle menu button
    const handleMenuToggle = () => {
        const menuTimeLine = menuTimeLineRef.current;
        if (!menuTimeLine) return;

        // open menu
        if (!isMenuOpen) {
            menuTimeLine.play(); // play the timeline
            document.body.classList.add("overflow-y-hidden"); // disable body scroll
            if (window.innerWidth >= 1024) {
                window.lenis?.stop(); // stop lenis scroll on desktop
            }
            setIsMenuOpen(true); // update state
        }
        // close menu
        else {
            menuTimeLine.reverse(); // reverse the timeline
            document.body.classList.remove("overflow-y-hidden"); // enable body scroll
            if (window.innerWidth >= 1024) {
                window.lenis?.start(); // start lenis scroll on desktop
            }
            setIsMenuOpen(false); // update state
        }
    };

    // when click outside of menu bar
    const handleMenuContainerClick = () => {
        const menuTimeLine = menuTimeLineRef.current;
        if (!menuTimeLine || !isMenuOpen) return;

        menuTimeLine.reverse(); // reverse the timeline
        window.lenis?.start(); // start lenis scroll on desktop
        document.body.classList.remove("overflow-y-hidden"); // enable body scroll
        setIsMenuOpen(false); // update state
    };

    const [isDarkMode, setIsDarkMode] = useState(false);

    // check local storage and set initial theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const html = document.documentElement;
        if (savedTheme === "dark") {
            html.classList.add("dark");
            setIsDarkMode(true);
        } else {
            html.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, []);

    // when click to toggle theme button
    const handleThemeToggle = () => {
        const html = document.documentElement; // get <html> tag
        html.classList.toggle("dark"); // add or remove "dark" class in <html> tag
        const newIsDark = html.classList.contains("dark");
        setIsDarkMode(newIsDark);
        localStorage.setItem("theme", newIsDark ? "dark" : "light");
    };

    return (
        <nav className="flex justify-between px-10 md:px-20 py-5 top-0 left-0 w-full z-50">
            {/* logo */}
            <a href='/'>
                <img src={DarkLogo} alt="logo" className="h-9 md:h-12 cursor-pointer hidden dark:block" />
                <img src={LightLogo} alt="logo" className="h-9 md:h-12 cursor-pointer dark:hidden" />
            </a>

            {/* hamburger menu */}
            <button
                ref={toggleMenuRef}
                onClick={handleMenuToggle}
                className="h-9 md:h-12 aspect-square fixed right-10 md:right-20 z-50 dark:bg-white bg-black dark:hover:bg-white/70 hover:bg-black/70 transition-all rounded-full cursor-pointer"
            >
                <span className="h-0.5 md:h-0.5 w-[60%] bg-white dark:bg-black absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                <span className="h-0.5 md:h-0.5 w-[60%] bg-white dark:bg-black absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
            </button>

            {/* menu background */}
            <div
                ref={menuContainerRef}
                onClick={handleMenuContainerClick}
                className="fixed top-0 left-0 h-screen w-full backdrop-blur-0 pointer-events-none z-40"
            ></div>

            {/* menu bar */}
            <div
                ref={menuBarRef}
                className="fixed top-0 -right-full h-screen bg-white dark:bg-[#030303] min-[450px]:w-96 w-9/10 z-40 p-10 overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-blue-500/50 [&::-webkit-scrollbar-thumb]:rounded-full"
            >
                {/* dark mode toggle button */}
                <button
                    ref={closeButtonRef}
                    onClick={handleThemeToggle}
                    className="aspect-square rounded-full cursor-pointer transition-all bg-black hover:bg-black/70 dark:bg-white dark:hover:bg-white/70 h-9 md:h-12 p-3 flex items-center justify-center transform -translate-y-5"
                >
                    {/* dark icon */}
                    <svg className="fill-red-black -rotate-45 aspect-square hidden w-full dark:block scale-170 md:scale-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576C388.8 576 451.3 548.8 497.3 504.6C504.6 497.6 506.7 486.7 502.6 477.5C498.5 468.3 488.9 462.6 478.8 463.4C473.9 463.8 469 464 464 464C362.4 464 280 381.6 280 280C280 207.9 321.5 145.4 382.1 115.2C391.2 110.7 396.4 100.9 395.2 90.8C394 80.7 386.6 72.5 376.7 70.3C358.4 66.2 339.4 64 320 64z" /></svg>
                    {/* light icon */}
                    <svg className="dark:hidden fill-white aspect-square w-full scale-170 md:scale-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>
                </button>

                {/* menu lists */}
                <p ref={menuListTitleRef} className="before:absolute before:aspect-square before:h-1 before:bg-black dark:before:bg-white relative pl-5 before:transform before:-translate-y-1/2 before:top-1/2 before:left-0 before:rounded-full">Menu</p>
                <ul className="text-3xl space-y-3 font-medium group">
                    {['Home', 'Achievements', 'Colaborate', 'Exprience', 'Portfolio', 'Plan', 'Testimonial', 'Tech Stack', 'Contact', 'Faq'].map((item, index) => (
                        <li key={item} ref={el => menuListItemsRef.current[index] = el}>
                            <a href={`#${item.toLowerCase()}`} className="group-hover:opacity-50 hover:opacity-100 transition-all">{item}</a>
                        </li>
                    ))}
                </ul>
                <p ref={menuContactTitleRef} className="mt-6 before:absolute before:aspect-square before:h-1 before:bg-black dark:before:bg-white relative pl-5 before:transform before:-translate-y-1/2 before:top-1/2 before:left-0 before:rounded-full">Contact me</p>
                <div className="space-y-2 text-xl">
                    <p ref={el => menuContactItemRef.current[0] = el}>Email: <span className="text-black/70 dark:text-white/70">me@codeovik.com</span></p>
                    <p ref={el => menuContactItemRef.current[1] = el}>Phone: <span className="text-black/70 dark:text-white/70">+880123456789</span></p>
                    <p ref={el => menuContactItemRef.current[2] = el}>Contact: <span className="text-black/70 dark:text-white/70">37/22, Chackbazar, Faridpur, Bangladesh</span></p>
                </div>
            </div>
        </nav>
    )
}