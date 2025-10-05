import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SocialMedia() {
  const containerRef = useRef(null);

  // icon + url array
  const icons = [
    { icon: faGithub, url: "https://github.com/" },
    { icon: faTwitter, url: "https://twitter.com/" },
    { icon: faLinkedin, url: "https://linkedin.com/" },
    { icon: faFacebook, url: "https://facebook.com/" },
  ];

  useEffect(() => {
    const iconsElements = containerRef.current.querySelectorAll("a");

    gsap.set(iconsElements, { y: 50, opacity: 0 });

    gsap.to(iconsElements, {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.6,
      delay: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%", // ordhek giye trigger
        toggleActions: "play reverse play reverse",
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="flex gap-4">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="dark:bg-white/10 bg-black cursor-pointer rounded-full h-11 md:h-12 transition-colors aspect-square dark:hover:bg-white/20 hover:bg-black/20 flex justify-center items-center"
        >
          <FontAwesomeIcon icon={item.icon} className="text-lg md:text-xl" />
        </a>
      ))}
    </div>
  );
}
