import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface IServicesCard {
  icon: any;
  alt: string;
  title: string;
  description: string;
}

const ServicesCard = (props: IServicesCard) => {
  return (
    <article className="p-[40px_35px] border-[1px] border-solid border-[var(--border)] bg-[var(--white)] flex flex-col items-center z-10">
      <div className="w-[72px] mb-[32px] rounded-full aspect-square bg-[var(--iconBg)] flex items-center justify-center">
        <Image
          src={props.icon}
          height={26}
          width={26}
          alt={props.alt}
          className=""
        />
      </div>
      <hr className="h-[3px] w-[80%] text-[var(--border)] mb-[20px]" />
      <h2 className="text-[20px] font-semibold mb-2">{props.title}</h2>
      <p className="mb-6 text-center">{props.description}</p>
      <Link href="#" className="font-[PlayFair]">
        Learn More
      </Link>
    </article>
  );
};

export default ServicesCard;
