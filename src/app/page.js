import Navbar from './Components/Navbar';
import HomeSection from './Components/HomeSection';
import AboutUsSection from './Components/AboutUsSection';
import ServicesSection from './Components/ServicesSection';
import GallerySection from './Components/Gallery';
import ContactForm from './Components/ContactForm';
import WhatsAppWidget from './Components/WhatsAppWidget';
import Footer from './Components/Footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection/>
        <AboutUsSection/>
        <ServicesSection/>
        <GallerySection/>
        <ContactForm/>
        <WhatsAppWidget/>
        <Footer/>

        {/* Your section components like <HomeSection />, <AboutSection />, etc. */}
      </main>
    </>
  );
}
