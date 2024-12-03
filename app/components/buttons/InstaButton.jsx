import React from "react";
import Button from "./Button";
import { FaInstagram } from "react-icons/fa";

const InstaButton = ({ useIcon, useLabel }) => {
  return (
    <Button
      label={useLabel ? "Instagram" : null}
      icon={useIcon ? <FaInstagram size={36} /> : null}
      href="https://www.instagram.com/bpm.watches/"
    />
  );
};

export default InstaButton;
