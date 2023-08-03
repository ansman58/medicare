import React from "react";
import TopPageContent from "../components/TopPageContent";
import { FaUserDoctor } from "react-icons/fa6";
import DoctorsSection from "../components/DoctorsSection";
import Contact from "../components/Contact";
import BrandsSection from "../components/BrandsSection";

const DoctorsPage = () => {
  return (
    <>
      <TopPageContent
        title="Doctors"
        description="Belding years moveth earth green behold wherein"
        pageLink="Doctors"
      />
      <DoctorsSection />
      <Contact />
      <BrandsSection />
    </>
  );
};

export default DoctorsPage;
