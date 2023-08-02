import React from "react";

interface ISectionHeaderTemplate {
  className?: string;
  title: string;
  description: string;
}
const SectionHeaderTemplate = (props: ISectionHeaderTemplate) => {
  return (
    <article className="justify-between tablet:flex gap-[1.875rem] mb-[3.125rem]">
      <h2 className="text-[1.5625rem] mobile:text-[2.25rem] whitespace-nowrap">
        {props.title.split(" ")[0]} <br />{" "}
        {props.title.split(" ").slice(1).join(" ")}
      </h2>
      <p className="basis-[65%]">{props.description}</p>
    </article>
  );
};

export default SectionHeaderTemplate;
