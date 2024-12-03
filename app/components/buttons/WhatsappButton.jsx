"use client";

import React from "react";
import Button from "./Button";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = ({ useIcon, useLabel }) => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "19788105602";
    const message = `Olá, `;
    const encodedMessage = encodeURIComponent(message);

    // Check if user is on a desktop device and redirect accordingly
    const isDesktop = typeof window !== "undefined" && window.innerWidth > 768;

    const whatsappUrl = isDesktop
      ? `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}` // Force WhatsApp Web
      : `https://wa.me/${phoneNumber}?text=${encodedMessage}`; // Default for mobile

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
};

export default WhatsappButton;
