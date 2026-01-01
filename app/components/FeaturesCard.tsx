"use client";

import React from "react";
import { motion } from "framer-motion";
import { TfiHeartBroken } from "react-icons/tfi";
import { TfiLayers } from "react-icons/tfi";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export interface IFeaturesCard {
  alt: string;
  title: string;
  description: string;
}
const FeaturesCard = (props: IFeaturesCard) => {
  const sortIcons = (title: string) => {
    const lookup: any = {
      "Primary Care": (
        <TfiLayers className="w-[26px] h-[26px] text-baseColor mb-3" />
      ),
      "Emergency Cases": (
        <TfiHeartBroken className="w-[26px] h-[26px] text-baseColor mb-3" />
      ),
      "Online Appointment": (
        <TfiHeadphoneAlt className="w-[26px] h-[26px] text-baseColor mb-3" />
      ),
    };

    return lookup[title] || lookup["Primary Care"];
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-[30px_20px] bg-[var(--white)] flex flex-col items-center hover:shadow-lg transition-all duration-300 rounded-2xl border border-transparent hover:border-border"
    >
      {sortIcons(props.title)}
      <h2 className="text-[1rem] font-semibold mb-2">{props.title}</h2>
      <p className="text-center">{props.description}</p>
    </motion.article>
  );
};

export default FeaturesCard;
