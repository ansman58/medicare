import React from "react";
import FooterLinks from "./FooterLinks";
import { FiArrowRight } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";

const Footer = () => {
  const topProductsLinks = {
    title: "Top Products",
    options: [
      "Managed Website",
      "Manage Reputation",
      "Power Tools",
      "Marketing Service",
    ],
  };

  const quickLinks = {
    title: "Quick Links",
    options: ["Jobs", "Brand Assets", "Investor Relations", "Terms of Service"],
  };

  const features = {
    title: "Features",
    options: ["Jobs", "Brand Assets", "Investor Relations", "Terms of Service"],
  };

  const resources = {
    title: "Resources",
    options: ["Guides", "Research", "Experts", "Agencies"],
  };

  const newsletter = {
    title: "Newsletter",
    options: ["You can trust us. we only send promo offers"],
  };

  const socialMedia = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaDribbble />,
    <FaLinkedinIn />,
  ];

  return (
    <footer className="laptop:flex laptop:justify-between">
      <div className="mobile:flex mobile:gap-[10%] laptop:flex laptop:justify-between">
        <FooterLinks
          options={topProductsLinks.options}
          title={topProductsLinks.title}
        />
        <FooterLinks options={quickLinks.options} title={quickLinks.title} />
      </div>

      <div className="mobile:flex mobile:gap-[10%] laptop:flex laptop:justify-between">
        <FooterLinks options={features.options} title={features.title} />
        <FooterLinks options={resources.options} title={resources.title} />
      </div>
      <article>
        <FooterLinks options={newsletter.options} title={resources.title} />
        <div className="flex ">
          <input
            type="email"
            placeholder="Your email address"
            className="h-[50px] px-[15px] border-[1px] border-solid w-[90%] border-border outline-none"
          />
          <button className="bg-baseColor h-[50px] flex justify-center items-center w-[10%]">
            <FiArrowRight className="text-white" />
          </button>
        </div>
      </article>

      <article>
        <p>
          Copyright ©2023 All rights reserved | This template is made with{" "}
          <FiHeart /> by <Link href={"#"}>Anslem</Link>
        </p>
        <div className="flex items-center gap-[5px]">
          {socialMedia.map((icon, index: number) => (
            <Link href="#" key={index} className="w-[30px] h-[30px] bg-heading flex justify-center items-center">
              {icon}
            </Link>
          ))}
        </div>
      </article>
    </footer>
  );
};

export default Footer;
