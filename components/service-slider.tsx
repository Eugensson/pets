"use client";

import Image from "next/image";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { services } from "@/constants";

import "swiper/css";
import "swiper/css/navigation";

export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  btnText: string;
};

export const ServiceSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{ 768: { slidesPerView: 2 } }}
      className="serviceSlider min-h-[680px] w-[70vw]"
    >
      {services.map((service) => (
        <SwiperSlide
          key={service.id}
          className="border border-primary/20 bg-cream min-h-[580px] rounded-[66px] py-16 px-8"
        >
          <Image
            src={service.image}
            alt={`${service.title} image`}
            width={120}
            height={120}
            className="mb-8"
          />
          <p className="text-3xl font-medium mb-8">{service.title}</p>
          <p className="text-lg mb-8 line-clamp-4">{service.description}</p>
          <button className="btn btn-primary">{service.btnText}</button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
