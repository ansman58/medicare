import Link from "next/link";
import React from "react";
import BackgroundImage from "../assets/banner/banner-2.jpg";
import { route } from "../routes";

interface ITopPageContent {
  title: string;
  description: string;
  pageLink: string;
}
const TopPageContent = (props: ITopPageContent) => {
  return (
    <section
      className="bg-center bg-no-repeat bg-cover px-pmobile mobile:px-ptablet tablet:px-plaptop min-h-[300px] flex items-center"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <div className="w-full my-auto mobile:justify-between tems-center mobile:flex ">
        <article>
          <h1 className="text-[2rem] mb-[20px] md:text-[2.5rem] text-black">
            {props.title}
          </h1>
          <p className="text-[0.9375rem] text-squant mb-4">
            {props.description}
          </p>
        </article>
        <p className="text-black">
          <Link href={route.home} className="inline">
            Home
          </Link>
         {" "} /{" "}
          <Link href="#" className="inline">
            {props.pageLink}
          </Link>{" "}
        </p>
      </div>
    </section>
  );
};

export default TopPageContent;
