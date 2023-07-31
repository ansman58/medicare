import React from "react";
import ServicesCard, { IServicesCard } from "./ServicesCard";
import PrimaryCareIcon from "../assets/icon/i1.png";
import EmergencyCasesIcon from "../assets/icon/i2.png";
import OnlineAppointmentIcon from "../assets/icon/i3.png";

const ServicesSection = () => {
  const serviceCards = [
    {
      icon: PrimaryCareIcon,
      alt: "Primary Care Icon",
      title: "Primary Care",
      description:
        "An so vulgar to on points wanted rapture ous resolving continued household",
    },
    {
      icon: EmergencyCasesIcon,
      alt: "Emergency Cases Icon",
      title: "Emergency Cases",
      description:
        "An so vulgar to on points wanted rapture ous resolving continued household",
    },
    {
      icon: OnlineAppointmentIcon,
      alt: "Online Appointment Icon",
      title: "Online Appointment",
      description:
        "An so vulgar to on points wanted rapture ous resolving continued household",
    },
  ];
  return (
    <section className="py-[60px]">
      <article>
        <h2 className="text-[1.5625rem]">
           Awesome <br /> Health Service
        </h2>
        <p>
          Land meat winged called subdue without very light in all years sea
          appear midst forth image him third there set. Land meat winged called
          subdue without very light in all years sea appear
        </p>
      </article>
      <div className="bg-[var(--white)] flex flex-col tablet:grid tablet:grid-cols-[repeat(auto-fill,_minmax(304px,_1fr))] justify-center">
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
