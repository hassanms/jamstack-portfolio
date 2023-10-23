import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-32  flex justify-center flex-col items-center space-y-10 p-7 lg:p-0">
      <div className="self-center">
        <Image
          className="cursor-pointer "
          src="/images/my-image.jpg"
          alt="My Image"
          width={150}
          height={100}
        />
      </div>
      <div className="text-xs  md:text-xl">
        © 2023.All rights reserved by Rainbow-Themes.
      </div>
    </div>
  );
};

export default Footer;
