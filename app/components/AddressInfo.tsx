import React from "react";
import { IconType } from "react-icons";
import { BiEnvelope } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";

interface IAddressInfo {
  title: string;
  topAddress: string;
  bottomInfo: string;
}

const AddressInfo = (props: IAddressInfo) => {
  const icons: any = {
    home: <BiHome />,
    phone: <BiPhone />,
    email: <BiEnvelope />,
  };
  return (
    <address>
      <React.Fragment>{icons[props.title] || <BiHome />}</React.Fragment>
      <article>
        <h4>{props.topAddress}</h4>
        <p>{props.bottomInfo}</p>
      </article>
    </address>
  );
};

export default AddressInfo;
