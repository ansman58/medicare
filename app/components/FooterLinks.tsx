import Link from "next/link";
import React from "react";

interface IFooterLinks {
  title: string;
  options: string[];
}
const FooterLinks = (props: IFooterLinks) => {
  return (
    <div className="pt-[60px]">
      <h2 className="mb-[15px] text-[1.5rem]">{props.title}</h2>
      <ul>
        {props.options.map((option: string, index: number) => (
          <li key={index} className="mb-2 list-none">
            <Link href="#" className="hover:text-baseColor">{option}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
