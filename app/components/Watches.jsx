"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/lib/client";
import {
  IoChevronDown,
  IoChevronUp,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

const formatPrice = (price) => {
  return price
    ? `R$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    : "Preço Indisponível";
};

const Watches = ({ watches }) => {
  const [selectedManufacturer, setSelectedManufacturer] = useState("All");
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const watchesPerPage = 20;

  // Compute manufacturer counts and sort them descending by count
  const manufacturerCounts = useMemo(() => {
    return watches.reduce((acc, watch) => {
      const m = watch.manufacturer;
      if (m) {
        acc[m] = (acc[m] || 0) + 1;
      }
      return acc;
    }, {});
  }, [watches]);

  const sortedManufacturers = useMemo(() => {
    return Object.keys(manufacturerCounts).sort(
      (a, b) => manufacturerCounts[b] - manufacturerCounts[a]
    );
  }, [manufacturerCounts]);

  // For desktop: Top 5 manufacturers and remaining ones
  const top5Manufacturers = sortedManufacturers.slice(0, 5);
  const remainingManufacturers = sortedManufacturers.slice(5);

  // Filter watches based on the selected manufacturer.
  // When "All" is selected, all watches are returned—including sold ones.
  const filteredWatches =
    selectedManufacturer === "All"
      ? watches
      : watches.filter((watch) => watch.manufacturer === selectedManufacturer);

  // Pagination calculations
  const totalPages = Math.ceil(filteredWatches.length / watchesPerPage);
  const indexOfLastWatch = currentPage * watchesPerPage;
  const indexOfFirstWatch = indexOfLastWatch - watchesPerPage;
  const currentWatches = filteredWatches.slice(
    indexOfFirstWatch,
    indexOfLastWatch
  );

  return (
    <div className="p-6 text-white min-h-[70vh]">
      {/* Desktop View: Brand Links */}
      <div className="hidden md:flex items-center gap-4 mb-6 justify-center mt-8">
        <button
          onClick={() => {
            setSelectedManufacturer("All");
            setShowAllBrands(false);
            setCurrentPage(1);
          }}
          className={`text-lg px-2 pb-1 transition-colors duration-300 border-b-2 ${
            selectedManufacturer === "All"
              ? "border-white text-white"
              : "border-transparent hover:border-blue-400 hover:text-blue-400"
          }`}
        >
          Todas
        </button>
        {top5Manufacturers.map((manufacturer) => (
          <button
            key={manufacturer}
            onClick={() => {
              setSelectedManufacturer(manufacturer);
              setShowAllBrands(false);
              setCurrentPage(1);
            }}
            className={`text-lg px-2 pb-1 transition-colors duration-300 border-b-2 ${
              selectedManufacturer === manufacturer
                ? "border-white text-white"
                : "border-transparent hover:border-blue-400 hover:text-blue-400"
            }`}
          >
            {manufacturer}
          </button>
        ))}
        <div className="relative">
          <button
            onClick={() => setShowAllBrands((prev) => !prev)}
            className="text-lg flex items-center gap-1 px-2 pb-1 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-400 hover:text-blue-400"
          >
            Mais Marcas {showAllBrands ? <IoChevronUp /> : <IoChevronDown />}
          </button>
          {showAllBrands && (
            <div className="absolute top-full right-0 mt-2 bg-gray-800 p-2 rounded shadow-lg z-10 w-full">
              {remainingManufacturers.length > 0 ? (
                remainingManufacturers.map((manufacturer) => (
                  <button
                    key={manufacturer}
                    onClick={() => {
                      setSelectedManufacturer(manufacturer);
                      setShowAllBrands(false);
                      setCurrentPage(1);
                    }}
                    className={`block text-left w-full text-lg px-2 py-1 transition-colors duration-300 ${
                      selectedManufacturer === manufacturer
                        ? "text-white"
                        : "text-gray-300 hover:text-blue-400"
                    }`}
                  >
                    {manufacturer}
                  </button>
                ))
              ) : (
                <span className="text-gray-300 text-md">Nenhuma</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile View: Brand Links */}
      <div className="md:hidden relative flex w-full items-center justify-end gap-4 mb-6 mt-8">
        <button
          onClick={() => setShowAllBrands((prev) => !prev)}
          className="text-lg flex items-center gap-1 px-2 pb-1 transition-colors duration-300 border-b-2 border-transparent hover:border-blue-400 hover:text-blue-400"
        >
          Filtrar Marcas {showAllBrands ? <IoChevronUp /> : <IoChevronDown />}
        </button>
        {showAllBrands && (
          <div className="absolute right-0 top-full mt-2 bg-gray-800 p-2 rounded shadow-lg z-10">
            <button
              onClick={() => {
                setSelectedManufacturer("All");
                setShowAllBrands(false);
                setCurrentPage(1);
              }}
              className={`block text-left w-full text-lg px-2 py-1 transition-colors duration-300 ${
                selectedManufacturer === "All"
                  ? "text-white"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              Todas
            </button>
            {sortedManufacturers.map((manufacturer) => (
              <button
                key={manufacturer}
                onClick={() => {
                  setSelectedManufacturer(manufacturer);
                  setShowAllBrands(false);
                  setCurrentPage(1);
                }}
                className={`block text-left w-full text-lg px-2 py-1 transition-colors duration-300 ${
                  selectedManufacturer === manufacturer
                    ? "text-white"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {manufacturer}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Watches Grid */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentWatches.map((watch) => (
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
                    className={`${
                      watch.sold ? "opacity-40" : ""
                    } transition-transform duration-500 ease-in-out hover:scale-110`}
                  />
                  {watch.sold && (
                    <div className="absolute top-2 right-2 bg-black text-white text-md px-4 py-1 rounded-full">
                      Vendido
                    </div>
                  )}
                </div>
              </Link>
              <div className="absolute bottom-0 w-full bg-black bg-opacity-75 p-3 text-center text-white">
                <h2 className="text-lg font-semibold">{watch.name}</h2>
                <p className="text-md">{formatPrice(watch.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-20">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 border rounded disabled:opacity-50 flex items-center justify-center"
            title="Previous"
          >
            <IoChevronBackOutline size={24} />
          </button>
          {Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`p-2 border rounded ${
                  page === currentPage
                    ? "bg-gray-200 text-[#1e1e1e]"
                    : "text-white"
                }`}
              >
                {page}
              </button>
            );
          })}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-2 border rounded disabled:opacity-50 flex items-center justify-center"
            title="Next"
          >
            <IoChevronForwardOutline size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Watches;
