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
        "An so vulgar to on points wanted rapture ous resolving continued household",
    },
    {
      alt: "Emergency Cases Icon",
      title: "Emergency Cases",
      description:
        "An so vulgar to on points wanted rapture ous resolving continued household",
    },
    {
      alt: "Online Appointment Icon",
      title: "Online Appointment",
      description:
        "An so vulgar to on points wanted rapture ous resolving continued household",
    },
  ];
  return (
    <section
      className="bg-[var(--baseColor)] gap-[30px] flex flex-col tablet:grid tablet:grid-cols-[repeat(auto-fill,_minmax(290px,_1fr))] justify-center py-[60px] px-pmobile tablet:px-plaptop mobile:px-ptablet bg-center bg-no-repeat bg-cover"
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
