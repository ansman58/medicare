import Image from "next/image";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ServicesSection from "./components/ServicesSection";

export default function Home() {
  return (
    <main>
      <FirstSection />
      <SecondSection />
      <ServicesSection />
    </main>
  );
}
