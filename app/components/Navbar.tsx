"use client";

import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { menu } from "../data/navbar";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

type Menu = { title: string; link: string };

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={clsx(
        "fixed top-0 z-50 bg-white w-full flex justify-between h-[4rem] py-[10px] items-center px-pmobile tablet:px-plaptop mobile:px-ptablet  tablet:justify-between"
      )}
    >
      <Image
        src={Logo}
        alt="logo"
        height={43}
        width={178}
        className="max-w-full scale-[0.8]"
      />
      <ul
        className={clsx(
          { ["hidden"]: !isMenuOpen },
          "absolute bg-white left-0 right-0 top-[4rem] px-pmobile tablet:px-plaptop py-[14px] md:static md:top-0  md:flex md:items-center md:gap-3 z-40"
        )}
      >
        {menu.map((item: Menu, index: number) => (
          <li
            key={index}
            className="uppercase text-[14px] py-2 text-heading border-b-[1px] border-solid border-faintBorder md:border-b-0 md:py-0"
          >
            <Link href={item.link} className="hover:text-baseColor">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={toggleMenu} className="md:hidden">
        <HiMenu
          className={clsx({ ["hidden"]: isMenuOpen }, "text-baseColor text-[30px]")}
        />
        <HiOutlineX
          className={clsx({ ["hidden"]: !isMenuOpen }, "text-baseColor text-[30px]")}
        />
      </button>
    </nav>
  );
};

export default Navbar;
