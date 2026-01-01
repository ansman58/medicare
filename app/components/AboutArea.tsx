"use client";

import React from "react";
import BackImage from "../assets/background/bg_1.png";
import TeamImage from "../assets/banner/about1.png";
import Image from "next/image";
import LearnMoreLink from "./atoms/LearnMoreLink";
import clsx from "clsx";
import { motion } from "framer-motion";

interface IAboutArea {
  className?: string;
}
const AboutArea = (props: IAboutArea) => {
  return (
    <section
      style={{ backgroundImage: `url(${BackImage.src})` }}
      className={clsx(
        props.className,
        " laptop:gap-[40px] laptop:flex laptop:justify-center bg-center bg-no-repeat bg-cover pt-[250px] pb-[110px] mt-[-180px] bg-bg_one relative px-pmobile tablet:px-plaptop mobile:px-ptablet"
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src={TeamImage}
          alt="Team image"
          className="desktop:absolute desktop:bottom-0 object-cover desktop:max-w-[48%] desktop:left-0 hidden tablet:block w-[100%] tablet:static mb-[1.875rem] desktop:mb-0 "
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="desktop:relative desktop:mr-0 desktop:ml-[50%]"
      >
        <h2 className="text-[36px] mb-[32px] leading-[46px]">
          We Are A Medical <br /> Center Of Excellence
        </h2>
        <p className="font-[400] text-[var(--baseColor)] leading-[25px] mb-[25px]">
          Medicare was founded with a mission to bring world-class healthcare to
          our community. We believe in treating every patient with dignity and
          respect.
        </p>
        <p className="text-[15px] leading-[26px] mb-[30px]">
          Our team consists of highly skilled specialists and dedicated nursing
          staff who are committed to providing the best possible outcomes. From
          preventative care to complex surgeries, we utilize the latest medical
          technologies and evidence-based practices to ensure your health is in
          good hands.
        </p>
        <LearnMoreLink />
      </motion.div>
    </section>
  );
};

export default AboutArea;
