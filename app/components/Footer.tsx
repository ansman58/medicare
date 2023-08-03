import React from "react";
import FooterLinks from "./FooterLinks";
import { FiArrowRight } from "react-icons/fi";
import { FcLike } from "react-icons/fc";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";
import { features, newsletter, quickLinks, resources, topProductsLinks } from "../data/footer";

const Footer = () => {

  const socialMedia = [
    <FaFacebookF key={"facebook icon"} className="relative hover:text-white" />,
    <FaTwitter key={"twitter icon"} className="hover:text-white" />,
    <FaDribbble key={"dribble icon"} className="hover:text-white" />,
    <FaLinkedinIn key={"linkedin icon"} className="hover:text-white" />,
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-pmobile tablet:px-plaptop mobile:px-ptablet">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] mb-[60px]">
        <FooterLinks
          options={topProductsLinks.options}
          title={topProductsLinks.title}
        />
        <FooterLinks options={quickLinks.options} title={quickLinks.title} />
        <FooterLinks options={features.options} title={features.title} />
        <FooterLinks options={resources.options} title={resources.title} />
        <article>
          <FooterLinks options={newsletter.options} title={resources.title} />
          <div className="flex ">
            <input
              type="email"
              placeholder="Your email address"
              className="h-[50px] px-[15px] border-[1px] border-solid w-[85%] border-border outline-none"
            />
            <button className="bg-baseColor h-[50px] flex justify-center items-center w-[15%] outline-none">
              <FiArrowRight className="text-white" />
            </button>
          </div>
        </article>
      </div>

      <article className="border-solid border-y-border border-t-[1px] py-[1.875rem] flex flex-col md:flex-row md:justify-between items-center gap-[1.875rem] ">
        <p className="">
          Copyright @{currentYear} All rights reserved | This template is made
          with
          {" "}<FcLike className="inline align-middle" /> by{" "}
          <Link className="inline-block" href={"#"}>
            Anslem
          </Link>
        </p>

        <div className="flex justify-center items-center gap-[5px] flex-wrap">
          {socialMedia.map((icon, index: number) => (
            <Link
              href="#"
              key={index}
              className="w-[30px] h-[30px] bg-heading flex justify-center items-center hover:bg-baseColor"
            >
              {icon}
            </Link>
          ))}
        </div>
      </article>
    </footer>
  );
};

export default Footer;
