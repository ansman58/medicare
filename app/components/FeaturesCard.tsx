import React from "react";
import Image from "next/image";

export interface IFeaturesCard {
  icon: any;
  alt: string;
  title: string;
  description: string;
}
const FeaturesCard = (props: IFeaturesCard) => {
  return (
    <article className="p-[30px_20px] bg-[var(--white)] flex flex-col items-center">
      <Image src={props.icon} height={26} width={26} alt={props.alt} />
      <h2 className="text-[1rem] font-semibold mb-2">{props.title}</h2>
      <p className="text-center">{props.description}</p>
    </article>
  );
};

export default FeaturesCard;
