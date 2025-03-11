import React from "react";
import Button from "./Button";
import { MdLocalPhone } from "react-icons/md";
import { client } from "@/lib/client";

export default async function PhoneButton({ useIcon, useLabel }) {
  const contactQuery = '*[_type == "contactInfo"]';
  const contactData = await client.fetch(contactQuery);

  return (
    <div>
      <Button
        label={useLabel ? "Telefone" : null}
        icon={useIcon ? <MdLocalPhone size={36} /> : null}
        href={`tel:+${contactData[0].phoneNumber}`}
      />
    </div>
  );
}
