import React from "react";
import BackgroundImage from "../assets/background/bg1.jpg";
const Contact = () => {
  return (
    <section
      className="pt-[80px] pb-[50px] bg-baseColor relative bg-center bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <article className="relative z-10 flex flex-col items-center p-[0.9375rem]">
        <h4 className="text-white text-[1.25rem] mb-[45px] font-[400]">
          Emergency hotline
        </h4>
        <h2 className="font-openSans text-[1.5625rem] mb-5 text-white tablet:text-[2.8125rem] laptop:text-[3.75rem]">
          (+01) - 256 567 550
        </h2>
        <p className="text-center text-white font-openSans">
          We provide 24/7 customer support. Please feel free to contact us for
          emergency case.
        </p>
      </article>
      <div className="absolute opacity-[0.7] bg-baseColor z-[3] top-0 bottom-0 w-full h-full"></div>
    </section>
  );
};

export default Contact;
