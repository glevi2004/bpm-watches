import React from "react";
import Button from "./Button";
import { MdOutlineEmail } from "react-icons/md";

const EmailButton = ({ useIcon, useLabel }) => {
  return (
    <div>
      <Button
        label={useLabel ? "E-mail" : null}
        icon={useIcon ? <MdOutlineEmail size={36} /> : null}
        href="mailto:leviramosgabriel2021@gmail.com?subject=Hello&body=Hi there!"
      />
    </div>
  );
};

export default EmailButton;
