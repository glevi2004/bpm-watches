"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { urlFor } from "@/lib/client";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const formatPrice = (price) => {
  return price
    ? `R$ ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
    : "Preço Indisponível";
};

const WatchesCarousel = ({ watches }) => {
  return (
    <div className="flex flex-col justify-center items-center text-white">
      <div className="w-[85vw] flex justify-start mb-4">
        <Link href="/watches">
          <button className="w-36 rounded-md text-lg md:text-xl border py-2 px-4 border-white hover:bg-white hover:text-black transition-colors duration-500 ease-in-out">
            Watches
          </button>
        </Link>
      </div>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        style={{
          height: "550px",
          width: "85%",
        }}
      >
        {[watches][0].map((slide) => {
          return (
            <SwiperSlide key={slide.name}>
              <div className="relative rounded-lg">
                <Link href={`./watch/${slide.slug.current}`}>
                  <div className="relative overflow-hidden rounded-lg group">
                    <img
                      src={urlFor({
                        _type: "image",
                        asset: { _ref: slide?.image?.[0]?.asset?._ref },
                      })}
                      className="h-[480px] w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                      alt={slide.name}
                    />
                  </div>
                </Link>
                {/* Watch name and price */}
                <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-3 text-center text-white">
                  <h3 className="text-lg font-semibold">{slide.name}</h3>
                  <p className="text-md text-gray-300">
                    {formatPrice(slide.price)}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WatchesCarousel;
