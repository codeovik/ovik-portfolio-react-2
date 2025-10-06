import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react';
import LightLogo from '/images/logo-light.png'
import DarkLogo from '/images/logo-dark.png'
import SocialMedia from "../components/SocialMedia";

export default function Footer() {
  // scroll reveal footer element
  useEffect(() => {
    ScrollReveal().reveal(".footer-items", {
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

  // scroll reveal footer footer menu list items
  useEffect(() => {
    ScrollReveal().reveal(".footer-menu-items", {
      origin: 'bottom',
      distance: '70px',
      duration: 500,
      easing: 'ease-out',
      interval: 200,
      delay: 5,
      reset: true,
      once: false,
      opacity: 0,
    });
  }, []);
  return (
    <footer className='px-7 lg:px-12 mx-auto max-w-[1600px] mt-30'>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-5">
        <div className="flex flex-col gap-5">
          {/* logo */}
          <div className='footer-items w-full flex justify-center lg:justify-start'>
            <img src={DarkLogo} alt="logo" className="h-9 md:h-15 hidden dark:block" />
            <img src={LightLogo} alt="logo" className="h-9 md:h-15 dark:hidden" />
          </div>
          {/* email */}
          <div className="footer-items dark:bg-dark hover:bg-light/70 dark:hover:bg-dark/70 transition-all bg-light text-xl md:text-3xl md:p-10 p-6 rounded-2xl md:rounded-3xl">
            <p>me@codeovik.com</p>
          </div>
          {/* phone */}
          <div className="footer-items dark:bg-dark hover:bg-light/70 dark:hover:bg-dark/70 transition-all bg-light text-xl md:text-3xl md:p-10 p-6 rounded-2xl md:rounded-3xl">
            <p>+880123456789</p>
          </div>
          {/* address */}
          <div className="footer-items dark:bg-dark hover:bg-light/70 dark:hover:bg-dark/70 transition-all bg-light text-xl md:text-3xl md:p-10 p-6 rounded-2xl md:rounded-3xl">
            <p>Chackbazar, Faridpur, Bangladesh</p>
          </div>
          {/* social media from a component */}
          <SocialMedia />
        </div>
        {/* menu list */}
        <div className="footer-items bg-light dark:bg-dark hover:bg-light/70 dark:hover:bg-dark/70 transition-all p-5 md:p-10 rounded-2xl lg:rounded-3xl">
          <ul className="text-xl md:text-3xl space-y-2 md:space-y-4 font-medium group">
            {['Home', 'Achievements', 'Partner', 'Exprience', 'Portfolio', 'Pricing', 'Testimonial', 'Tech Stack', 'Contact', 'Faq'].map((item, index) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="footer-menu-items group-hover:opacity-50 hover:opacity-100 transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* copryright */}
      <p className="footer-items text-center text-sm mt-10 mb-5 opacity-70">
        © {new Date().getFullYear()} Codeovik. All rights reserved.
      </p>
    </footer>
  )
}
