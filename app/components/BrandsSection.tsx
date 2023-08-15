import React from "react";
import Brand1 from "../assets/brand/1.png";
import Brand2 from "../assets/brand/2.png";
import Brand3 from "../assets/brand/3.png";
import Brand4 from "../assets/brand/4.png";
import Brand5 from "../assets/brand/5.png";
import Image from "next/image";

const BrandsSection = () => {
  const brands = [Brand1, Brand2, Brand3, Brand4, Brand5, ];

  return (
    <section className="flex items-center justify-center gap-[1.875rem] relative py-[5rem] bg-bg_one mt-[5rem] overflow-x-hidden">
      {brands.map((brand, index) => (
        <Image
          key={index}
          src={brand}
          alt="brand"
          width={145}
          height={32}
          className="animate-slide tablet:animate-none "
        />
      ))}
    </section>
  );
};

export default BrandsSection;
