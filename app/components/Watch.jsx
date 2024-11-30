"use client";

import React from "react";
import { urlFor } from "@/lib/client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ContactButton from "./ContactButton";

// Helper function to format price
const formatPrice = (price) => {
  return price
    ? `R$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
    : "Preço Indisponível";
};

const Watch = ({ watch }) => {
  const section1Details = [
    { key: "price", label: "Preço" },
    { key: "condition", label: "Condição" },
  ];

  const section2Details = [
    { key: "manufacturer", label: "Fabricante" },
    { key: "referenceNumber", label: "Referência" },
    { key: "year", label: "Ano" },
    { key: "movement", label: "Movimento" },
    { key: "strapMaterial", label: "Material da Pulseira" },
    { key: "boxMaterial", label: "Material da Caixa" },
    { key: "boxSize", label: "Tamanho da Caixa" },
  ];

  return (
    <div className="text-white bg-[#1e1e1e]">
      {/* 1st section: Slider */}
      <div className="min-h-screen w-full flex items-center justify-center flex-wrap">
        <div className="mt-8 w-[90vw] flex justify-center flex-col max-w-[1100px] space-y-8">
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <div className="leading-loose flex-1">
              {/* Divider */}
              <div className="w-1/3 border-2 border-primary mb-4"></div>
              <h1 className="text-4xl md:text-5xl mb-6 font-semibold">
                {watch.name}
              </h1>

              {/* Details */}
              <div className="text-lg md:text-xl space-y-4">
                {section1Details.map(({ key, label }, index) => (
                  <p key={index} className="font-semibold">
                    {label === "Condição" ? `${label}: ` : null}
                    {}
                    <span className="font-normal text-gray-300">
                      {key === "price"
                        ? formatPrice(watch[key])
                        : watch[key] !== undefined && watch[key] !== null
                        ? watch[key]
                        : "Indisponível, entre em Contato."}
                    </span>
                  </p>
                ))}
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
              >
                {watch.image.map((slide) => (
                  <SwiperSlide key={slide._key}>
                    <img
                      src={urlFor({
                        _type: "image",
                        asset: { _ref: slide?.asset?._ref },
                      })}
                      className="w-full h-full object-cover"
                      alt="Watch Slide"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd section: Specifications */}
      <div className="w-full flex justify-center py-16 ">
        <div className="w-[90vw] max-w-[1100px] space-y-8">
          {/* Section Heading */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-2">Especificações</h2>
              <div className="w-1/2 border-2 border-primary"></div>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section2Details.map(({ key, label }, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-700 p-4 rounded-md shadow-md"
              >
                <p className="font-semibold">{label}</p>
                <p className="font-normal text-gray-300">
                  {key === "price"
                    ? formatPrice(watch[key])
                    : watch[key] !== undefined && watch[key] !== null
                    ? watch[key]
                    : "Indisponível"}
                </p>
              </div>
            ))}
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-8">
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
