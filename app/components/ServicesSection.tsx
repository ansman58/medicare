import React from "react";
import ServicesCard, { IServicesCard } from "./ServicesCard";
import PrimaryCareIcon from "../assets/icon/i1.png";
import EmergencyCasesIcon from "../assets/icon/i2.png";
import OnlineAppointmentIcon from "../assets/icon/i3.png";
import SectionHeaderTemplate from "./SectionHeaderTemplate";

const ServicesSection = () => {
  const serviceCards = [
    {
      icon: PrimaryCareIcon,
      alt: "Primary Care Icon",
      title: "Neurology Service",
      description:
        "Expert diagnosis and treatment for disorders of the nervous system, including the brain, spinal cord, and nerves.",
    },
    {
      icon: EmergencyCasesIcon,
      alt: "Emergency Cases Icon",
      title: "Dental Clinic",
      description:
        "Complete dental care ranging from routine cleanings to advanced cosmetic and restorative procedures.",
    },
    {
      icon: OnlineAppointmentIcon,
      alt: "Online Appointment Icon",
      title: "Plastic Surgery",
      description:
        "Reconstructive and cosmetic surgical procedures performed by board-certified surgeons to enhance your quality of life.",
    },
  ];
  return (
    <section className="py-[60px] px-pmobile tablet:px-plaptop mobile:px-ptablet">
      <SectionHeaderTemplate
        title="Awesome Health Service"
        description="We offer a wide range of specialized medical services to cater to your specific health needs. Our dedicated team is committed to delivering excellence in every aspect of your care."
      />
      <div className="bg-[var(--white)] flex flex-col gap-[30px]  tablet:grid tablet:grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] justify-center">
        {serviceCards.map((card: IServicesCard, index: number) => (
          <ServicesCard
            key={index}
            icon={card.icon}
            alt={card.alt}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
