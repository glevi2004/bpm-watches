import React from "react";
import Image from "next/image";
import Button from "./buttons/Button";
import WhatsappButton from "./buttons/WhatsappButton";
import InstaButton from "./buttons/InstaButton";
import EmailButton from "./buttons/EmailButton";
import PhoneButton from "./buttons/PhoneButton";

const Footer = () => {
  return (
    <footer className="h-[200px] bg-black flex flex-col justify-center items-center">
      <div className="-mt-8">
        <Image
          src="/assets/logo.svg"
          alt="Company Logo"
          width={256} // Matches `w-64` class
          height={0} // Automatically adjusts based on the image's aspect ratio
          className="ml-2"
        />
      </div>
      <ul
        className="flex gap-5 -mt-9 text-[#d3d3d3] transition:colors duration-500 ease-in-out"
        style={{ width: "12rem" }}
      >
        <WhatsappButton useIcon={true} />
        <InstaButton useIcon={true} />
        <EmailButton useIcon={true} />
        <PhoneButton useIcon={true} />
      </ul>
    </footer>
  );
};

export default Footer;
