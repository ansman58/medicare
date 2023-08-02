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
        "Land meat winged called subdue without a very light in all years sea appear Lesser bring fly first land set female best perform",
    },
    {
      icon: EmergencyCasesIcon,
      alt: "Emergency Cases Icon",
      title: "Dental Clinic",
      description:
        "Land meat winged called subdue without a very light in all years sea appear Lesser bring fly first land set female best perform",
    },
    {
      icon: OnlineAppointmentIcon,
      alt: "Online Appointment Icon",
      title: "Plastic Surgery",
      description:
        "Land meat winged called subdue without a very light in all years sea appear Lesser bring fly first land set female best perform",
    },
  ];
  return (
    <section className="py-[60px] px-pmobile tablet:px-plaptop mobile:px-ptablet">
      <SectionHeaderTemplate
        title="Awesome Health Service"
        description="Land meat winged called subdue without very light in all years sea
          appear midst forth image him third there set. Land meat winged called
          subdue without very light in all years sea appear"
      />
      <div className="bg-[var(--white)] flex flex-col gap-[30px]  tablet:grid tablet:grid-cols-[repeat(auto-fill,_minmax(304px,_1fr))] justify-center">
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
