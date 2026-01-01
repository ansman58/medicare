import React from "react";
import DoctorsCard, { IDoctorsCard } from "./DoctorsCard";
import Doctor1 from "../assets/team/1.jpg";
import Doctor2 from "../assets/team/2.jpg";
import Doctor3 from "../assets/team/3.jpg";
import SectionHeaderTemplate from "./SectionHeaderTemplate";
import clsx from "clsx";
const DoctorsSection = () => {
  const cards = [
    {
      imageSrc: Doctor1,
      alt: "Dr. Sarah Smith's Image",
      name: "Dr. Sarah Smith",
      specialty: "Cardiologist",
    },
    {
      imageSrc: Doctor2,
      alt: "Dr. Brian Jones's Image",
      name: "Dr. Brian Jones",
      specialty: "Pediatrician",
    },
    {
      imageSrc: Doctor3,
      alt: "Dr. Michael Brown's Image",
      name: "Dr. Michael Brown",
      specialty: "Neurologist",
    },
  ];

  return (
    <section className="   py-[60px] px-pmobile tablet:px-plaptop mobile:px-ptablet">
      <SectionHeaderTemplate
        title="Medicare Experienced Doctors"
        description="Our team of specialized doctors are leaders in their fields, dedicated to providing you with the highest standard of medical care."
      />

      <div
        className={clsx(
          "flex flex-col gap-[30px] tablet:grid tablet:grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] justify-center"
        )}
      >
        {cards.map((card: IDoctorsCard, index: number) => (
          <DoctorsCard
            key={index}
            imageSrc={card.imageSrc}
            alt={card.alt}
            name={card.name}
            specialty={card.specialty}
          // className={clsx({
          //   [`opacity-100 translate-x-[0%] transition-transform duration-1000 ease-in-out`]: isVisible,
          //   ["opacity-0 translate-x-[100%]"]: !isVisible,
          // })}
          />
        ))}
      </div>
    </section>
  );
};

export default DoctorsSection;
