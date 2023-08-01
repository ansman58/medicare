import Image from "next/image";
import React from "react";

export interface IDoctorsCard {
  imageSrc: any;
  alt: string;
  name: string;
  specialty: string;
}

const DoctorsCard = (props: IDoctorsCard) => {
  return (
    <div className="border-[1px] border-solid border-[var(--border)] flex flex-col items-center m-[30px]">
      <Image src={props.imageSrc} alt={props.alt} className="max-w-full w-full" />
      <h2 className="text-[var(--title-color)] text-center ">{props.name}</h2>
      <p className="mb-[26px] text-center">{props.specialty}</p>
      <hr className="h-[1px] w-[80%] mx-auto bg-[var(--border)] mb-[18px]" />
      <article></article>
    </div>
  );
};

export default DoctorsCard;
