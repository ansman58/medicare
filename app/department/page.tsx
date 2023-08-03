import React from "react";
import TopPageContent from "../components/TopPageContent";
import ServicesSection from "../components/ServicesSection";
import FAQsSection from "../components/FAQsSection";
import BrandsSection from "../components/BrandsSection";

const DepartmentPage = () => {
  return (
    <>
      <TopPageContent
        title="Department"
        description="Belding years moveth earth green behold wherein"
        pageLink="Department"
      />
      <ServicesSection />
      <FAQsSection />
      <BrandsSection />
    </>
  );
};

export default DepartmentPage;
