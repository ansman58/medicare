import React from "react";
import FAQ, { IFAQ } from "./FAQ";
import Appointment from "./Appointment";

const FAQsSection = () => {
  const faqs = [
    {
      question: "God male gathering them it female which green cattle?",
      answer:
        "Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.",
    },
    {
      question: "God male gathering them it female which green cattle?",
      answer:
        "Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.",
    },
    {
      question: "God male gathering them it female which green cattle?",
      answer:
        "Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.",
    },
    {
      question: "God male gathering them it female which green cattle?",
      answer:
        "Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.",
    },
    {
      question: "God male gathering them it female which green cattle?",
      answer:
        "Great day without sixth a lesser beginning. Their thing abundantly air moving saw fruitful lesser god. Sea abundantly blessed life set. Land. Lights divided man in deep in open upon.",
    },
  ];

  return (
    <section className="px-pmobile mobile:px-plaptop gap-[20px]">
      <div className="p-[65px_35px] shadow-[3.517px_-8.285px_30px_0px_rgba(12,58,132,0.15)] z-20 md:flex  justify-between">
        <div className="">
          <h2 className="text-[1.5rem] mb-[35px]">Have Some Questions?</h2>
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
