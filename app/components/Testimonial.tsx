"use client";

import React from "react";
import Image from "next/image";
import Avatar1 from "../assets/elements/tex2.jpg";
import Avatar2 from "../assets/elements/user1.png";
import Avatar3 from "../assets/elements/user2.png";
import BackgroundImage from "../assets/background/bg_2.png";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

type IAvatarInfo = { img: any; name: string; testimony: string };

const Testimonial = () => {
  const [currentImgIndex, setCurrentImgIndex] = React.useState(0);
  const avatars = [
    {
      img: Avatar1,
      name: "Dr. Suzanne Holroyd",
      testimony:
        "“ The staff at Medicare went above and beyond to ensure my comfort. The facilities are top-notch and the care I received was exceptional. I highly recommend them to anyone. ”",
    },
    {
      img: Avatar2,
      name: "Dr. Ken Johnson",
      testimony:
        "“ I was impressed by the professionalism and expertise of the doctors. They took the time to explain everything clearly and made me feel at ease throughout my treatment. ”",
    },
    {
      img: Avatar3,
      name: "Dr. John Doe",
      testimony:
        "“ Scheduling an appointment was seamless and the wait times were minimal. It's refreshing to see a healthcare provider that respects their patients' time and well-being. ”",
    },
  ];

  React.useEffect(() => {
    const handleNextImage = () => {
      if (currentImgIndex === avatars.length - 1) {
        setCurrentImgIndex(0);
      } else {
        setCurrentImgIndex(currentImgIndex + 1);
      }
    };

    const timer = setTimeout(handleNextImage, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentImgIndex]);

  return (
    <div
      className="bg-center bg-no-repeat bg-cover mt-[-335px] p-[460px_0_95px_0] bg-bg_one relative  px-pmobile mobile:px-plaptop flex justify-center z-0"
      style={{ backgroundImage: `url(${BackgroundImage.src})` }}
    >
      <AnimatePresence mode="wait">
        {avatars.map(
          (avatar: any, index: number) =>
            currentImgIndex === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center max-w-[540px] px-[0.9375rem] laptop:max-w-[800px]"
              >
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
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default Testimonial;
