"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/client";

const formatPrice = (price) => {
  return price
    ? `R$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    : "Preço Indisponível";
};

const Watches = ({ watches }) => {
  const [selectedManufacturer, setSelectedManufacturer] = useState("All");

  // get unique manufacturers
  const manufacturers = [
    ...new Set(watches.map((watch) => watch.manufacturer)),
  ];

  // filter watches based on manufacturer
  const filteredWatches =
    selectedManufacturer === "All"
      ? watches
      : watches.filter((watch) => watch.manufacturer === selectedManufacturer);

  return (
    <div className="p-6 text-white">
      {/* Manufacturer buttons */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center mt-8">
        <button
          onClick={() => setSelectedManufacturer("All")}
          className={`text-lg px-2 pb-1 transition-colors duration-300 border-b-2 ${
            selectedManufacturer === "All"
              ? "border-white text-white"
              : "border-transparent hover:border-blue-400 hover:text-blue-400"
          }`}
        >
          All
        </button>

        {manufacturers.map((manufacturer) => (
          <button
            key={manufacturer}
            onClick={() => setSelectedManufacturer(manufacturer)}
            className={`text-lg px-2 pb-1 transition-colors duration-300 border-b-2 ${
              selectedManufacturer === manufacturer
                ? "border-white text-white"
                : "border-transparent hover:border-blue-400 hover:text-blue-400"
            }`}
          >
            {manufacturer}
          </button>
        ))}
      </div>

      {/* Watches grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredWatches.map((watch) => (
          <div
            key={watch._id}
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform duration-500 ease-in-out hover:scale-105"
          >
            <Link href={`./watch/${watch.slug.current}`}>
              <div className="relative overflow-hidden h-[400px] w-full">
                <Image
                  src={urlFor({
                    _type: "image",
                    asset: { _ref: watch?.image?.[0]?.asset?._ref },
                  }).url()}
                  alt={watch.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </div>
            </Link>
            {/* Watch name and price */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-75 p-3 text-center text-white">
              <h2 className="text-lg font-semibold">{watch.name}</h2>
              <p className="text-md">{formatPrice(watch.price)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
