"use client";

import clsx from "clsx";
import Link from "next/link";
import React from "react";

type Menu = { title: string; link: string };

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menu = [
    { title: "home", link: "/" },
    { title: "about", link: "/about" },
    { title: "department", link: "/department" },
    { title: "doctors", link: "/doctors" },
    { title: "blog", link: "/blog" },
    { title: "contact", link: "/contact" },
  ];
  return (
    <ul className={clsx({ ["hidden"]: !isMenuOpen })}>
      {menu.map((item: Menu, index: number) => (
        <li key={index} className="uppercase text-[14px] py-2">
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileNav;
