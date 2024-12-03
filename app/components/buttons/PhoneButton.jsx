import React from "react";
import Button from "./Button";
import { MdLocalPhone } from "react-icons/md";

const PhoneButton = ({ useIcon, useLabel }) => {
  return (
    <div>
      <Button
        label={useLabel ? "Telefone" : null}
        icon={useIcon ? <MdLocalPhone size={36} /> : null}
        href="tel:+19788105602"
      />
    </div>
  );
};

export default PhoneButton;
