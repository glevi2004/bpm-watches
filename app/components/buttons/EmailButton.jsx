import React from "react";
import Button from "./Button";
import { MdOutlineEmail } from "react-icons/md";
import { client } from "@/lib/client";

export default async function EmailButton({ useIcon, useLabel }) {
  const emailQuery = '*[_type == "contactInfo"]';
  const emailData = await client.fetch(emailQuery);

  return (
    <div>
      <Button
        label={useLabel ? "E-mail" : null}
        icon={useIcon ? <MdOutlineEmail size={36} /> : null}
        href={`mailto:${emailData[0].email}?subject=Hello&body=Hi there!`}
      />
    </div>
  );
}
