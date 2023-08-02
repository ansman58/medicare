import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface ILearnMoreLink {
  className?: string;
}

const LearnMoreLink = (props: ILearnMoreLink) => {
  return (
    <Link
      href="#"
      className={clsx(
        props.className,
        "text-[15px] text-[var(--heading)] font-playFair letter-spacing-[1.5px] tracking-[1.5px] relative after:absolute after:left-0 after:w-[2.5rem] after:h-[0.125rem] after:bg-heading after:content-[''] after:bottom-[-0.5rem] after:hover:bg-baseColor after:hover:w-[100%] hover:text-baseColor"
      )}
    >
      learn more
    </Link>
  );
};

export default LearnMoreLink;
