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
      alt: "Dr. John Doe's Image",
      name: "Dr. John Doe",
      specialty: "Cardiologist",
    },
    {
      imageSrc: Doctor2,
      alt: "Dr Blian Judge's Image",
      name: "Dr Blian Judge",
      specialty: "Paediatrician",
    },
    {
      imageSrc: Doctor3,
      alt: "Dr John Doe's Image",
      name: "Dr John Doe",
      specialty: "Neurologist",
    },
  ];

  return (
    <section className="   py-[60px] px-pmobile tablet:px-plaptop mobile:px-ptablet">
      <SectionHeaderTemplate
        title="Medcare Experience Doctors"
        description="Land meat winged called subdue without very light in all years sea
          appear midst forth image him third there set. Land meat winged called
          subdue without very light in all years sea appear"
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
