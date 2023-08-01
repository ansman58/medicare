import Link from "next/link";
import React from "react";
import BackImage from "../assets/background/bg_1.png";
import TeamImage from "../assets/banner/about1.png";
import Image from "next/image";

const AboutArea = () => {
  return (
    <section
      style={{ backgroundImage: `url(${BackImage.src})` }}
      className="bg-center bg-no-repeat bg-cover pt-[250px] pb-[110px] mt-[-180px] bg-[var(--bg_one)] relative"
    >
      <Image
        src={TeamImage}
        alt="Team image"
        className=" w-1/2 absolute bottom-0 left-0 hidden tablet:block"
      />
      <div className="tablet:ml-[54%]">
        <h2 className="text-[36px] mb-[32px] leading-[46px]">
          Second Abundantly Move That Cattle <br /> Perform Appen Land
        </h2>
        <p className="font-[400] text-[var(--baseColor)] leading-[25px] mb-[25px]">
          Give their their without moving were stars called so divide female be
          moving night may fish him own male vreated great Give their their
          without moving were. Stars called so divide female moving night may
          fish him own male created great opportunity deal.
        </p>
        <p className="text-[15px] leading-[26px] mb-[30px]">
          Give their their without moving were stars called so divide female be
          moving night may fish him own male vreated great Give their their
          without moving were. Stars called so divide female moving night may
          fish him own male created great opportunity deal.
        </p>
        <Link
          href="#"
          className="leading-[] text-[15px] text-[var(--heading)] letter-spacing-[1.5px]"
        >
          learn more
        </Link>
      </div>
    </section>
  );
};

export default AboutArea;
