import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const GoTop = () => {
  // refs
  const buttonRef = useRef(null);
  const progressRef = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis with the new package
    lenisRef.current = new Lenis({
      duration: 2.5, // scroll transition
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing graph
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Lenis scroll handler
    const handleScroll = ({ scroll }) => {
      const scrollTop = scroll; // scroll from top in pixel
      const docHeight = document.documentElement.scrollHeight - window.innerHeight; // page heigh in pixel
      
      // if there is progress element
      if (progressRef.current) {
        progressRef.current.style.height = `${(scrollTop / docHeight) * 100}%`; // set dynamic heigh to that
      }

      // if there is go top button
      if (buttonRef.current) {
        // when scroll passed 250px from top
        if (scrollTop > 250) {
          buttonRef.current.classList.remove("opacity-0", "translate-y-10", "pointer-events-none");
          buttonRef.current.classList.add("opacity-100", "translate-y-0", "pointer-events-auto");
        }
        // when sctoll inside 250px from top
        else {
          buttonRef.current.classList.add("opacity-0", "translate-y-10", "pointer-events-none");
          buttonRef.current.classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
        }
      }
    };

    // Connect Lenis to the scroll event
    lenisRef.current.on("scroll", handleScroll);

    // Create RAF animation loop
    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  const handleGoTop = () => {
    lenisRef.current?.scrollTo(0, {
      duration: 1.5,
      easing: (t) => t * (2 - t)
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleGoTop}
      className="dark:bg-light bg-dark dark:hover:bg-light/70 hover:bg-dark/70 fixed z-3 cursor-pointer transition-all flex items-end h-9 md:h-12 aspect-square bottom-5 right-10 md:right-20 rounded-full overflow-hidden gotop opacity-0 translate-y-10 pointer-events-none"
    >
      {/* scroll progress */}
      <span
        ref={progressRef}
        className="bg-primary/20 w-full"
        style={{ height: '0%' }}
      />
      {/* up svg icon */}
      <svg
        className="absolute scale-80 md:scale-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:fill-black fill-white transition-all"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        width="24px"
        viewBox="0 -960 960 960"
      >
        <path d="M440-80v-647L256-544l-56-56 280-280 280 280-56 57-184-184v647h-80Z" />
      </svg>
    </button>
  );
};

export default GoTop;