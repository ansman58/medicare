import React from "react";
import SectionBackground from "../assets/banner/home-banner.jpg";

const FirstSection = () => {
  return (
    <section
      className="bg-center bg-no-repeat bg-cover min-h-[600px] grid w-full px-pmobile mobile:px-plaptop"
      style={{ backgroundImage: `url(${SectionBackground.src})` }}
    >
      <div className="my-auto mr-auto max-w-[50%]">
        <h1 className="font-[play-font] text-[26px] mb-[30px] font-[600]">
          Making Health <br /> Care Better Together
        </h1>
        <p className="mb-[50px]">
          Also you dry creeping beast multiply fourth abundantly our itsel signs
          bring our. Won form living. Whose dry you seasons divide given
          gathering great in whose you'll greater let livein form beast sinthete
          better together these place absolute right.
        </p>

        <article>
          <button className="bg-[var(--baseColor)] px-[10px] text-[var(--white)] font-[400] leading-[48px] border-[var(--baseColor)] border-solid border-[1px] rounded-none font-[PlayFair] mr-[10px] outline-none">
            Make An Appointment
          </button>
          <button className="px-[10px] text-[var(--heading)] font-[400] leading-[48px] border-[var(--baseColor)] border-solid border-[1px] rounded-none font-[PlayFair] outline-none">
            View Department
          </button>
        </article>
      </div>
    </section>
  );
};

export default FirstSection;
