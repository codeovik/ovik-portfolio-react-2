import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import AnimatedText from './AnimatedText'

// import all client images
import client1 from '/images/client-1.jpg'
import client2 from '/images/client-2.jpg'
import client3 from '/images/client-3.jpg'
import client4 from '/images/client-4.jpg'
import client5 from '/images/client-5.jpg'
import client6 from '/images/client-6.jpg'
import client7 from '/images/client-7.jpg'
import client8 from '/images/client-8.jpg'
import client9 from '/images/client-9.jpg'

// data
const testimonials = [
    {
        name: "Jonathan Miller",
        role: "Founder, NovaTech",
        image: client1,
        text: "The website Ovik created was beyond expectations. Clean design, smooth animations, and perfect responsiveness. He truly understood my vision and transformed it into something professional and engaging.",
    },
    {
        name: "Isabella Garcia",
        role: "Marketing Manager, BrightWave",
        image: client2,
        text: "Working with Ovik was a delight. He delivered on time and kept me updated. The site looks amazing on both desktop and mobile, which boosted my client engagement significantly.",
    },
    {
        name: "Ethan Williams",
        role: "Tech Entrepreneur, Cloudify",
        image: client3,
        text: "I have worked with several developers, but Ovik stands out. His professionalism, structured coding style, and attention to detail make him the perfect choice for long-term collaborations.",
    },
    {
        name: "Sophia Brown",
        role: "Content Creator, PixelHive",
        image: client4,
        text: "Ovik turned my rough ideas into a sleek website. His patience and creativity stood out. He ensured every detail matched my vision, making the final product highly impactful.",
    },
    {
        name: "Daniel Johnson",
        role: "Owner, TrendyMart",
        image: client5,
        text: "From start to finish, the experience was smooth. My e-commerce store now loads faster, looks professional, and attracts more buyers. Ovik's technical expertise truly made a difference.",
    },
    {
        name: "Olivia Martinez",
        role: "Consultant, StratEdge",
        image: client6,
        text: "Ovik is an excellent problem solver. His thoughtful suggestions improved my website's usability and made it much more appealing. Highly professional, communicative, and trustworthy in every way.",
    },
    {
        name: "M. Anderson",
        role: "Creative Director, Visionary Lab",
        image: client7,
        text: "Attention to detail is what makes Ovik stand out. Every section of my website feels polished and professional. He brought creativity and precision into the project beautifully.",
    },
    {
        name: "Emma Wilson",
        role: "Blogger, LifeLens",
        image: client8,
        text: "My blog now looks elegant and professional. The layout is responsive, user-friendly, and stylish. Ovik explained everything clearly, which made the process very smooth and stress-free.",
    },
    {
        name: "William Thomas",
        role: "App Developer, CodeNova",
        image: client9,
        text: "Ovik built a stylish portfolio website for me that perfectly showcases my apps. His design sense and technical execution gave my work a professional edge that I really needed.",
    },
];

const Review = () => {
    return (
        <section id="testimonial" className="bg-white dark:bg-[#030303] mt-30">
            <div className="px-7 lg:px-12 mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-5">
                {/* title */}
                <div className="text-content">
                    <AnimatedText className="md:text-7xl text-4xl text-center lg:text-left md:font-medium">
                        Happy Client Stories
                    </AnimatedText>
                    <p className="mt-3 text-sm md:text-base opacity-80">
                        Read testimonials that showcase client satisfaction, professional collaboration, and the impact of my digital solutions.
                    </p>
                </div>
                <div className="main-content overflow-hidden">
                    {/* swiper js intregation */}
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        loop={true}
                        spaceBetween={40}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectCards, Autoplay]}
                        className="testimonial-slide md:w-110 overflow-hidden md:h-90 w-[95%]"
                    >
                        {/* items fetch from array */}
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="rounded-2xl md:rounded-3xl p-3 md:p-4 space-y-5 bg-light dark:bg-dark">
                                <div className="flex gap-3">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="rounded-full aspect-square h-20 md:h-25"
                                    />
                                    <div className="flex justify-center flex-col">
                                        <h6 className="text-2xl md:text-4xl">{testimonial.name}</h6>
                                        <p className="text-sm md:text-xl">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p>{testimonial.text}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Review