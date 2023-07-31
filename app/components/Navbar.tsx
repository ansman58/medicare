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
        "flex justify-between relative h-[4rem] px-15 py-[10px] items-center tablet:justify-between mx-auto md:max-w-[85%]"
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
          "absolute top-[4rem] py-[14px] tablet:static tablet:top-0 tablet:flex tablet:items-center tablet:gap-3"
        )}
      >
        {menu.map((item: Menu, index: number) => (
          <li key={index} className="uppercase text-[14px] py-2">
            <Link href={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div
        className="flex flex-col cursor-pointer tablet:hidden"
        onClick={toggleMenu}
      >
        <div
          className={clsx(
            {
              ["rotate-[-45deg] translate-y-[-5px] translate-x-[6px]"]:
                isMenuOpen,
            },
            "w-[30px] h-[3px] m-[6px_0] transition-transform "
          )}
        ></div>
        <div
          className={clsx(
            { ["opacity-0"]: isMenuOpen },
            "w-[30px] h-[3px] bg-[red]  m-[6px_0] transition-transform "
          )}
        ></div>
        <div
          className={clsx(
            {
              ["rotate-[45deg] translate-y-[5px] translate-x-[-6px]"]:
                isMenuOpen,
            },
            "w-[30px] h-[3px] bg-[red]  m-[6px_0] transition-transform "
          )}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
