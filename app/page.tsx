import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ServicesSection from "./components/ServicesSection";
import AboutArea from "./components/AboutArea";
import DoctorsSection from "./components/DoctorsSection";
import FAQsSection from "./components/FAQsSection";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import BrandsSection from "./components/BrandsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ServicesSection />
      <AboutArea />
      <DoctorsSection />
      <FAQsSection />
      <Testimonial />
      <Contact />
      <BrandsSection />
      <Footer />
    </>
  );
}
