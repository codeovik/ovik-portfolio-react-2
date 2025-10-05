import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import { Autoplay } from 'swiper/modules'
import AnimatedText from './AnimatedText'

// data
const partners = [
  { src: "/images/company-google.png", alt: "Google" },
  { src: "/images/company-nike.png", alt: "Nike" },
  { src: "/images/company-notion.png", alt: "Notion" },
  { src: "/images/company-openai.png", alt: "OpenAI" },
  { src: "/images/company-oppo.png", alt: "Oppo" },
  { src: "/images/company-shopify.png", alt: "Shopify" },
  { src: "/images/company-upwork.png", alt: "Upwork" },
  { src: "/images/company-varcel.png", alt: "Vercel" },
  { src: "/images/company-godot.png", alt: "Godot" },
  { src: "/images/company-dropbox.png", alt: "Dropbox" },
];

const infinitePartner = Array(10).fill(partners).flat();

export default function Partner() {
  return (
    <section className="dark:bg-[#030303] bg-white mt-30">
      {/* title */}
      <AnimatedText className="md:text-4xl text-xl lg:w-[800px] w-[80%] mx-auto lg:px-12">
        <span className="before:absolute before:aspect-square before:h-1 before:bg-black dark:before:bg-white relative pl-5 before:transform before:-translate-y-1/2 before:top-1/2 before:left-0 before:rounded-full text-base pr-20 bottom-2 opacity-80">
          Our Clients & Partners
        </span>
        Proudly collaborating with top brands and industry leaders to deliver high-quality solutions
      </AnimatedText>

      {/* logo slide */}
      <Swiper
        modules={[Autoplay]}
        watchSlidesProgress={true}
        spaceBetween={40}
        slidesPerView="auto"
        speed={2000}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mySwiper mt-12 !overflow-hidden px-7 lg:px-12 mx-auto max-w-[1600px] w-full selection:bg-transparent after:h-full after:w-20 md:after:w-50 after:bg-linear-to-r after:from-transparent after:to-white dark:after:to-[#030303] after:z-1 relative after:absolute after:top-0 after:right-0 before:absolute before:left-0 before:h-full md:before:w-50 before:w-20 before:bg-linear-to-r before:from-white dark:before:from-[#030303] before:to-transparent before:z-2"
      >
        {infinitePartner.map((partner, index) => (
          <SwiperSlide key={index} className="!w-max">
            <img
              src={partner.src}
              alt={partner.alt}
              className="dark:invert brightness-110 contrast-125 !w-auto md:!h-10 !h-8"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}