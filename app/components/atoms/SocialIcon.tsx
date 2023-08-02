import Link from "next/link";
import React from "react";

interface ISocialIcon {
  className?: string;
  link?: string;
  icon: any;
}
const SocialIcon = (props: ISocialIcon) => {
  return <Link href={props.link ?? "#"}>
    {props.icon}
  </Link>;
};

export default SocialIcon;
