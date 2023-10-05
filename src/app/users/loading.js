import React from "react";
import loader from "../../../public/spinner_multicolor.svg";
import Image from "next/image";

const Loading = () => {
  return (
    <div>
      <Image src={loader} alt="" />
    </div>
  );
};

export default Loading;
