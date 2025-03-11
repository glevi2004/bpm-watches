import React from "react";
import Button from "./Button";
import { FaInstagram } from "react-icons/fa";
import { client } from "@/lib/client";

export default async function InstaButton({ useIcon, useLabel }) {
  const contactQuery = '*[_type == "contactInfo"]';
  const contactData = await client.fetch(contactQuery);

  return (
    <Button
      label={useLabel ? "Instagram" : null}
      icon={useIcon ? <FaInstagram size={36} /> : null}
      href={contactData[0].intagramLink}
    />
  );
}
