"use client";

import React from "react";
import Logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

type Menu = { title: string; link: string };

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menu = [
    { title: "home", link: "/" },
    { title: "about", link: "/about" },
    { title: "department", link: "/department" },
    { title: "doctors", link: "/doctors" },
    { title: "blog", link: "/blog" },
    { title: "contact", link: "/contact" },
  ];
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
        className="max-w-full"
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
      <div
        className="flex flex-col cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        <div
          className={clsx(
            {
              // ["rotate-[45deg] translate-y-[8px]"]: isMenuOpen,
              ["hidden"]: isMenuOpen,
            },
            "w-[30px] h-[3px] m-[6px_0] transition-transform "
          )}
        ></div>
        <div
          className={clsx(
            // { ["opacity-0"]: isMenuOpen },
            { ["rotate-[-45deg] origin-top"]: isMenuOpen },
            "w-[30px] h-[3px] bg-[red] m-[6px_0] transition-transform "
          )}
        ></div>
        <div
          className={clsx(
            {
              // ["rotate-[-45deg] translate-y-[-8px]"]: isMenuOpen,
              ["rotate-[45deg] origin-bottom translate-y-[30px] translate-x-[-11px]"]:
                isMenuOpen,
            },
            "w-[30px] h-[3px] bg-[red] m-[6px_0] transition-transform "
          )}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
