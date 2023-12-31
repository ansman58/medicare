"use client";

import Image from "next/image";
import React from "react";
import { FiSmartphone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import Link from "next/link";
import SocialIcon from "./atoms/SocialIcon";
import clsx from "clsx";
import { motion } from "framer-motion";

export interface IDoctorsCard {
  imageSrc: any;
  alt: string;
  name: string;
  specialty: string;
  className?: string;
}

const DoctorsCard = (props: IDoctorsCard) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={clsx(
        props.className,
        "border-[1px] border-solid border-[var(--border)] flex flex-col items-center"
      )}
    >
      <Image
        src={props.imageSrc}
        alt={props.alt}
        className="w-full max-w-full mb-7"
      />
      <h2 className="text-[var(--title-color)] text-center text-[1.25rem] text-titleColor">
        {props.name}
      </h2>
      <p className="mb-[26px] text-center">{props.specialty}</p>
      <hr className="h-[1px] w-[80%] mx-auto bg-[var(--border)] mb-[18px]" />
      <address className="flex items-center justify-between w-[80%] mb-4">
        <Link href="#" className="flex items-center justify-between gap-[14px]">
          <FiSmartphone />
          <p className="text-sm font-openSans">+7 235 365 2365</p>
        </Link>
        <article className="flex items-center gap-[14px]">
          <SocialIcon icon={<FaFacebookF className="hover:text-baseColor" />} />
          <SocialIcon icon={<FaTwitter className="hover:text-baseColor" />} />
          <SocialIcon icon={<FaInstagram className="hover:text-baseColor" />} />
          <SocialIcon icon={<FaSkype className="hover:text-baseColor" />} />
        </article>
      </address>
    </motion.div>
  );
};

export default DoctorsCard;
