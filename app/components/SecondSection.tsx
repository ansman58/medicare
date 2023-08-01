import React from "react";
import PrimaryCareIcon from "../assets/icon/i1.png";
import EmergencyCasesIcon from "../assets/icon/i2.png";
import OnlineAppointmentIcon from "../assets/icon/i3.png";
import FeaturesCard, { IFeaturesCard } from "./FeaturesCard";

const SecondSection = () => {
  const cards = [
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
    <section className="bg-[var(--baseColor)] gap-[30px] flex flex-col tablet:grid tablet:grid-cols-[repeat(auto-fill,_minmax(304px,_1fr))] justify-center py-[60px] px-pmobile mobile:px-plaptop">
      {cards.map((card: IFeaturesCard, index: number) => (
        <FeaturesCard
          key={index}
          icon={card.icon}
          alt={card.alt}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default SecondSection;
