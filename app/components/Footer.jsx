import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="h-[200px] bg-black flex flex-col justify-center items-center">
      <div className="-mt-8">
        <img src="/assets/logo.svg" className="w-64 ml-2" />
      </div>
      <ul
        className="flex gap-6 -mt-10 text-[#d3d3d3] transition:colors duration-500 ease-in-out"
        style={{ width: "12rem" }}
      >
        <FaWhatsapp className="flex-1 hover:text-white" size={48} />
        <FaInstagram className="flex-1 hover:text-white" size={48} />
        <MdOutlineEmail className="flex-1 hover:text-white" size={48} />
        <MdLocalPhone className="flex-1 hover:text-white" size={48} />
      </ul>
    </footer>
  );
};

export default Footer;
