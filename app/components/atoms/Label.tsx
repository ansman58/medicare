import React from "react";


interface ILabel {
    for: string;
    name: string;
}
const Label = (props: ILabel) => {
  return (
    <label
      htmlFor={props.for}
      className="text-heading text-[1rem] font-playFair mb-[10px] block"
    >{props.name}</label>
  );
};

export default Label;
