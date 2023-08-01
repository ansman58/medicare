"use client";

import clsx from "clsx";
import React from "react";

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
    <article className={clsx({["pb-[25px]"]: !showAnswer},"pt-[25px] border-b-[var(--border)] border-b-solid border-b-[1px] cursor-pointer")}>
      <div className="flex items-center justify-between" onClick={onShowAnswer}>
        <p>{props.question}</p>
        <p>{showAnswer ? " &minus;" : "&#x2b;"}</p>
      </div>

      {showAnswer && (
        <p className="bg-bg_one leading-[27px] font-[300] p-[1.25rem] mt-[25px]">
          {props.answer}
        </p>
      )}
    </article>
  );
};

export default FAQ;
