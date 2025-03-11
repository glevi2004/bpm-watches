"use client";

import React, { useState } from "react";
import { urlFor } from "@/lib/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import ContactButton from "./ContactButton";
import { IoCloseOutline } from "react-icons/io5";

// Helper function to format price
const formatPrice = (price) => {
  return price
    ? `R$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
    : "Preço Indisponível";
};

const Watch = ({ watch }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // For the top details, we want to always show price,
  // and condition only if it exists.
  const section1Details = [
    { key: "price", label: "Preço" },
    { key: "condition", label: "Condição" },
  ];

  // For specifications, all fields are optional.
  const section2Details = [
    { key: "manufacturer", label: "Fabricante" },
    { key: "referenceNumber", label: "Referência" },
    { key: "year", label: "Ano" },
    { key: "movement", label: "Movimento" },
    { key: "strapMaterial", label: "Material da Pulseira" },
    { key: "boxMaterial", label: "Material da Caixa" },
    { key: "boxSize", label: "Tamanho da Caixa" },
    { key: "boxThickness", label: "Expessura da Caixa" },
  ];

  // Open fullscreen slider and set the active slide index
  const handleImageClick = (index) => {
    setActiveIndex(index);
    setIsFullscreen(true);
  };

  // Close fullscreen slider
  const handleCloseFullscreen = () => {
    setIsFullscreen(false);
  };

  return (
    <div className="text-white bg-[#1e1e1e]">
      {/* 1st section: Regular Slider */}
      <div className="min-h-screen w-full flex items-center justify-center flex-wrap">
        <div className="mt-8 w-[90vw] flex justify-center flex-col max-w-[1100px] space-y-8">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="leading-loose flex-1">
              <div className="w-1/3 border-2 border-primary mb-4"></div>
              <h1 className="text-4xl md:text-5xl mb-6 font-semibold">
                {watch.name}
              </h1>
              <div className="text-lg md:text-xl space-y-4">
                {section1Details.map(({ key, label }, index) => {
                  // Always show price; for others, only if available.
                  if (
                    key !== "price" &&
                    (watch[key] === undefined || watch[key] === null)
                  ) {
                    return null;
                  }
                  return (
                    <p key={index} className="font-semibold">
                      {label}:{" "}
                      <span className="font-normal text-gray-300">
                        {key === "price" ? formatPrice(watch[key]) : watch[key]}
                      </span>
                    </p>
                  );
                })}
              </div>
              <div className="mt-8">
                <ContactButton watchInfo={watch} />
              </div>
            </div>
            {/* Slider */}
            <div className="relative w-full lg:w-[50%] h-[450px] rounded-md overflow-hidden shadow-lg">
              <Swiper
                initialSlide={0}
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-full"
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              >
                {watch.image.map((slide, index) => (
                  <SwiperSlide key={slide._key}>
                    <div
                      className="w-full h-full relative cursor-pointer"
                      onClick={() => handleImageClick(index)}
                    >
                      <Image
                        src={urlFor({
                          _type: "image",
                          asset: { _ref: slide?.asset?._ref },
                        }).url()}
                        alt={`Image of ${watch.name || "a watch"}`}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-md"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={handleCloseFullscreen}
            className="absolute top-4 right-4 z-50 cursor-pointer text-white text-5xl"
          >
            <IoCloseOutline />
          </button>
          <div className="w-full h-full">
            <Swiper
              initialSlide={activeIndex}
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="w-full h-full"
            >
              {watch.image.map((slide) => (
                <SwiperSlide key={slide._key}>
                  <div className="w-full h-full relative">
                    <Image
                      src={urlFor({
                        _type: "image",
                        asset: { _ref: slide?.asset?._ref },
                      }).url()}
                      alt={`Image of ${watch.name || "a watch"}`}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {/* 2nd section: Specifications */}
      <div className="w-full flex justify-center py-16">
        <div className="w-[90vw] max-w-[1100px] space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-2">Especificações</h2>
              <div className="w-1/2 border-2 border-primary"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section2Details.map(({ key, label }, index) => {
              // Skip rendering if the property is not provided.
              if (watch[key] === undefined || watch[key] === null) return null;
              return (
                <div
                  key={index}
                  className="flex items-center justify-between border-2 border-primary p-4 rounded-md shadow-md"
                >
                  <p className="font-semibold text-white">{label}</p>
                  <p className="font-normal text-gray-200">{watch[key]}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <ContactButton watchInfo={watch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
