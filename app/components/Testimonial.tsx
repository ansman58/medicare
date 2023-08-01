"use client";

import React from "react";
import Image from "next/image";
import Avatar1 from "../assets/elements/tex2.jpg";
import Avatar2 from "../assets/elements/user1.png";
import Avatar3 from "../assets/elements/user2.png";
import BackgroundImage from "../assets/background/bg_2.png";
import clsx from "clsx";

type IAvatarInfo = { img: any; name: string; testimony: string };

const Testimonial = () => {
  const [currentImgIndex, setCurrentImgIndex] = React.useState(0);
  const avatars = [
    {
      img: Avatar1,
      name: "Dr. Suzanne Holroyd",
      testimony:
        "“ Saw kind fruitful itself in man. All in life good wherein beginning their he air That, the saw very years created for seed have without. Can't him fowl his can not ready for game”",
    },
    {
      img: Avatar2,
      name: "Dr. Ken Johnson",
      testimony:
        "“ Saw kind fruitful itself in man. All in life good wherein beginning their he air That, the saw very years created for seed have without. Can't him fowl his can not ready for game”",
    },
    {
      img: Avatar3,
      name: "Dr. John Doe",
      testimony:
        "“ Saw kind fruitful itself in man. All in life good wherein beginning their he air That, the saw very years created for seed have without. Can't him fowl his can not ready for game”",
    },
  ];

  React.useEffect(() => {
    setTimeout(() => {
      if (currentImgIndex === avatars.length - 1) {
        setCurrentImgIndex(0);
      } else if (currentImgIndex === 0) {
        setCurrentImgIndex(avatars.length - 1);
      } else {
        // setCurrentImgIndex(currentImgIndex++);
      }
    }, 5000);
  }, [currentImgIndex]);

  return (
    <div
      className="bg-center bg-no-repeat bg-cover mt-[-335px] p-[460px_0_95px_0] bg-bg_one relative  px-pmobile mobile:px-plaptop"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      {avatars.map((avatar: any, index: number) => (
        <div className={clsx({['hidden']: currentImgIndex !== index}, "flex flex-col items-center")}>
          <Image
            src={avatar?.img}
            alt="avatar"
            className="flex max-h-[100px] max-w-[100px] rounded-full aspect-square mb-[18px]"
          />
          <p className="text-[20px] italic mb-[45px] text-center">
            {avatar?.testimony}
          </p>
          <h4 className="text-[1.25rem] font-[400] text-center">
            - {avatar?.name} -
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
