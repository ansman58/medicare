import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ServicesSection from "./components/ServicesSection";
import AboutArea from "./components/AboutArea";
import DoctorsSection from "./components/DoctorsSection";
import FAQsSection from "./components/FAQsSection";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main>
      <FirstSection />
      <SecondSection />
      <ServicesSection />
      <AboutArea />
      <DoctorsSection />
      <FAQsSection />
      <Testimonial />
    </main>
  );
}
