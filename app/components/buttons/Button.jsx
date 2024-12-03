"use client";

import React from "react";

const Button = ({ label, icon, onClick, href, className }) => {
  // If `href` is provided, render as an anchor tag, otherwise render as a button
  const Tag = href ? "a" : "button";

  return (
    <Tag
      onClick={onClick}
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="flex"
    >
      {/* Render the icon if it's provided */}
      {icon && <span className="hover:text-white">{icon}</span>}
      {/* Render the label if it's provided */}
      {label && (
        <span className="rounded-md text-sm md:text-lg border py-2 px-3 md:py-2 md:px-4 border-white hover:bg-white hover:text-black transition duration-500 ease-in-out">
          {label}
        </span>
      )}
    </Tag>
  );
};

export default Button;
