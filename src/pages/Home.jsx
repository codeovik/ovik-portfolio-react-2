import Achivements from '../components/Achivements'
import Experience from '../components/Exprience'
import Hero from '../components/Hero'
import Partner from '../components/Partner'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import Review from '../components/Review'
import TechStack from '../components/TechStack'
import ContactForm from '../components/ContactForm'
import Faq from '../components/Faq'
import Navbar from '../components/Navbar'
import GoTop from '../components/GoTop'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <GoTop />
      <Navbar />
      <Hero />
      <Achivements />
      <Partner />
      <Experience />
      <Portfolio />
      <Pricing />
      <Review />
      <TechStack />
      <ContactForm />
      <Faq />
      <Footer />
    </>
  )
}