import React from "react";
import DoctorsCard, { IDoctorsCard } from "./DoctorsCard";
import Doctor1 from "../assets/team/1.jpg";
import Doctor2 from "../assets/team/2.jpg";
import Doctor3 from "../assets/team/3.jpg";
import SectionHeaderTemplate from "./SectionHeaderTemplate";
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

      <div className="flex flex-col gap-[30px] tablet:grid tablet:grid-cols-[repeat(auto-fill,_minmax(304px,_1fr))] justify-center">
        {cards.map((card: IDoctorsCard, index: number) => (
          <DoctorsCard
            key={index}
            imageSrc={card.imageSrc}
            alt={card.alt}
            name={card.name}
            specialty={card.specialty}
          />
        ))}
      </div>
    </section>
  );
};

export default DoctorsSection;
