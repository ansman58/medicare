"use client";

import clsx from "clsx";
import React from "react";
import { HiMinus } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";

export interface IFAQ {
  question: string;
  answer: string;
}
const FAQ = (props: IFAQ) => {
  const [showAnswer, setShowAnswer] = React.useState(false);

  const onShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <article
      className={clsx(
        { ["pb-[25px]"]: !showAnswer },
        "pt-[25px] border-b-[var(--border)] border-b-solid border-b-[1px] cursor-pointer max-w-full"
      )}
    >
      <div className="flex items-center justify-between" onClick={onShowAnswer}>
        <p className="text-dynamicBack">{props.question}</p>
        {showAnswer ? <HiMinus className="hidden mobile:block"/> : <HiPlus className="hidden mobile:block"/>}
      </div>

      {showAnswer && (
        <p className=" transition-[max-height_0.3_ease] bg-bg_one leading-[27px] font-[300] p-[1.25rem] mt-[25px]">
          {props.answer}
        </p>
      )}
    </article>
  );
};

export default FAQ;
