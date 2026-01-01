import React from "react";
import FAQ, { IFAQ } from "./FAQ";
import Appointment from "./Appointment";
import { faqs } from "../data/FAQs";

const FAQsSection = () => {


  return (
    <section className="px-pmobile mobile:px-plaptop gap-[20px]">
      <div className="p-[65px_35px] shadow-[3.517px_-8.285px_30px_0px_rgba(12,58,132,0.15)] md:flex md:justify-between md:gap-8 z-[11] relative bg-white ">
        <div className="flex-1 basis-[45%] mb-[30px] md:mb-0">
          <h2 className="text-[1.5rem] mb-[35px] text-left">Have Some Questions?</h2>
          {faqs.map((faq: IFAQ, index: number) => (
            <FAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <Appointment />
      </div>
    </section>
  );
};

export default FAQsSection;
