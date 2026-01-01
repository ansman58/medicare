"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionBackground from "../assets/banner/home-banner.jpg";

const FirstSection = () => {
  return (
    <section
      className="bg-center bg-no-repeat bg-cover min-h-[50rem] grid w-full px-pmobile tablet:px-plaptop mobile:px-ptablet"
      style={{ backgroundImage: `url(${SectionBackground.src})` }}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="my-auto mr-auto tablet:max-w-[70%] laptop:max-w-[50%]"
      >
        <h1 className="font-[play-font] text-[1.625rem] mb-[30px] font-[600] tablet:text-[2.25rem] laptop:text-[2.8125rem]">
          Making Health <br /> Care Better Together
        </h1>
        <p className="mb-[50px] text-[0.875rem]">
          We are dedicated to providing compassionate, high-quality care for you
          and your family. Our team of experienced professionals work together
          to ensure your well-being with state-of-the-art facilities and a
          patient-first approach.
        </p>

        <article className="flex items-center gap-[0.9375rem] flex-wrap">
          <button className="whitespace-nowrap bg-[var(--baseColor)] px-[10px] text-[var(--white)] font-[400] leading-[48px] border-[var(--baseColor)] border-solid border-[1px] rounded-none font-playFair outline-none hover:bg-white hover:text-baseColor transition-all duration-300">
            Make An Appointment
          </button>
          <button className="whitespace-nowrap px-[10px] text-[var(--heading)] font-[400] leading-[48px] border-[var(--baseColor)] border-solid border-[1px] rounded-none font-[PlayFair] outline-none hover:text-white hover:bg-baseColor transition-[all_300ms_linear]">
            View Department
          </button>
        </article>
      </motion.div>
    </section>
  );
};

export default FirstSection;
