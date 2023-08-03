import React from "react";

const Appointment = () => {
  return (
    <div className="basis-[45%]">
      <h2 className="text-[1.5rem] mb-[35px] ">Make An Appointment</h2>
      <form>
        <article className="mb-[25px]">
          <label
            htmlFor="name"
            className="text-heading text-[1rem] font-playFair mb-[10px] block"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="h-[50px] px-[15px] border-[1px] border-solid w-full border-border outline-none"
          />
        </article>
        <article className="mb-[25px]">
          <label
            htmlFor="email"
            className="text-heading text-[1rem] font-playFair mb-[10px] block"
          >
            Email
          </label>
          <input
            type="email"
            id="name"
            placeholder="Your Email"
            className="h-[50px] px-[15px] border-[1px] border-solid w-full border-border outline-none"
          />
        </article>
        <article className="mb-[50px]">
          <label
            htmlFor="message"
            className="text-heading text-[1rem] font-playFair mb-[10px] block"
          >
            Message
          </label>
          <textarea
            defaultValue="Message"
            id="message"
            placeholder="Message"
            className="px-[15px] border-border border-[1px] w-full border-solid resize-none h-[150px]"
          />
        </article>
        <button className="bg-[var(--baseColor)] px-[10px] text-[var(--white)] font-[400] leading-[48px] border-[var(--baseColor)] border-solid border-[1px] rounded-none font-[PlayFair] mr-[10px] outline-none">
          Make An Appointment
        </button>
      </form>
    </div>
  );
};
export default Appointment;
