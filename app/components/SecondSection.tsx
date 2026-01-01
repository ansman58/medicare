import React from "react";
import PrimaryCareIcon from "../assets/icon/i1.png";
import EmergencyCasesIcon from "../assets/icon/i2.png";
import OnlineAppointmentIcon from "../assets/icon/i3.png";
import FeaturesCard, { IFeaturesCard } from "./FeaturesCard";
import BackgroundImage from "../assets/banner/pattern_bg.jpg";
import { TfiHeartBroken } from "react-icons/tfi";
import { TfiLayers } from "react-icons/tfi";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const SecondSection = () => {
  const cards = [
    {
      alt: "Primary Care Icon",
      title: "Primary Care",
      description:
        "Comprehensive health services for your everyday needs, from check-ups to chronic disease management.",
    },
    {
      alt: "Emergency Cases Icon",
      title: "Emergency Cases",
      description:
        "24/7 emergency support with a dedicated team ready to handle critical situations with speed and care.",
    },
    {
      alt: "Online Appointment Icon",
      title: "Online Appointment",
      description:
        "Conveniently book your appointments online and access telehealth services from the comfort of your home.",
    },
  ];
  return (
    <section
      className="bg-[var(--baseColor)] gap-[30px] flex flex-col tablet:grid tablet:grid-cols-[repeat(auto-fit,_minmax(290px,_1fr))] justify-center py-[60px] px-pmobile tablet:px-plaptop mobile:px-ptablet bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      {cards.map((card: IFeaturesCard, index: number) => (
        <FeaturesCard
          key={index}
          alt={card.alt}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default SecondSection;
