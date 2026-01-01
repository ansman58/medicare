"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import LearnMoreLink from "./atoms/LearnMoreLink";

export interface IServicesCard {
  icon: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

const ServicesCard = (props: IServicesCard) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-[40px_35px] border-[1px] border-solid border-[var(--border)] bg-[var(--white)] flex flex-col items-center z-10 hover:shadow-xl transition-all duration-300 rounded-3xl"
    >
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
      <LearnMoreLink className="capitalize" />
    </motion.article>
  );
};

export default ServicesCard;
