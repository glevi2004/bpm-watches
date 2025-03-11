"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";
import { client } from "@/lib/client"; // ensure your client is imported correctly

export default function WhatsappButton({ useIcon, useLabel }) {
  const [phoneNumber, setPhoneNumber] = useState(null);

  useEffect(() => {
    async function fetchContactData() {
      try {
        const contactQuery = '*[_type == "contactInfo"]';
        const contactData = await client.fetch(contactQuery);
        // Use the phoneNumber from the first record (with a fallback)
        setPhoneNumber(contactData[0]?.phoneNumber || "554187521457");
      } catch (error) {
        console.error("Error fetching contact data:", error);
        setPhoneNumber("554187521457");
      }
    }
    fetchContactData();
  }, []);

  const handleWhatsAppClick = () => {
    // Make sure phoneNumber is loaded before handling the click
    if (!phoneNumber) return;
    const message = `Olá, `;
    const encodedMessage = encodeURIComponent(message);
    const isDesktop = typeof window !== "undefined" && window.innerWidth > 768;
    const whatsappUrl = isDesktop
      ? `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
      : `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <Button
        onClick={handleWhatsAppClick}
        label={useLabel ? "WhatsApp" : null}
        icon={useIcon ? <FaWhatsapp size={36} /> : null}
      />
    </div>
  );
}
