import React from "react";
import TopPageContent from "../components/TopPageContent";
import AboutArea from "../components/AboutArea";
import FAQsSection from "../components/FAQsSection";
import Testimonial from "../components/Testimonial";
import BrandsSection from "../components/BrandsSection";

const AboutPage = () => {
  return (
    <>
      <TopPageContent
        title="About Us"
        description="Belding years moveth earth green behold wherein"
        pageLink="About Us"
      />
      <AboutArea className="mt-[0px]"/>
      <FAQsSection />
      <Testimonial />
      <BrandsSection />
    </>
  );
};

export default AboutPage;
