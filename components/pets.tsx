"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { pets } from "@/constants";

export type Pet = {
  id: string;
  category: string;
  name: string;
  image: string;
};

export const Pets = () => {
  const [petDetails, setPetDetails] = useState<Pet>(pets[0]);
  const [petIndex, setPetIndex] = useState<number>(0);

  const getPetDetails = (id: string) => {
    const pet = pets.find((pet) => pet.id === id);
    setPetDetails(pet as Pet);
  };

  return (
    <section className="bg-pets bg-center py-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="hidden xl:flex xl:w-1/3 xl:pl-40">
          <Image
            src="/assets/pets/badge.svg"
            width={230}
            height={227}
            alt="Pets badge"
          />
        </div>
        <div className="flex-1 flex flex-col lg:flex-row">
          <div className="lg:w-1/3 flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto lg:mx-0">
            <div className="text-center text-white">
              <p className="text-[32px] capitalize">{petDetails.category}</p>
              <p className="text-[17px] uppercase mb-1">({petDetails.name})</p>
              <Image
                src={petDetails.image}
                alt={`${petDetails.name} image`}
                width={150}
                height={150}
                className="mx-auto lg:mx-0 border-4 border-white rounded-full aspect-square object-cover object-center"
              />
            </div>
          </div>
          <div className="relative flex-1 flex items-center lg:w-3/5">
            <ul className="flex flex-wrap justify-center lg:justify-end lg:-mr-6 gap-4">
              {pets.map((pet) => (
                <li
                  onClick={() => {
                    getPetDetails(pet.id);
                    setPetIndex(pets.indexOf(pet));
                  }}
                  key={pet.id}
                  className="relative cursor-pointer"
                >
                  <div
                    className={cn(
                      "absolute w-full h-full rounded-full",
                      petIndex === pets.indexOf(pet)
                        ? "border-2 border-white"
                        : "bg-black/40"
                    )}
                  />
                  <Image
                    src={pet.image}
                    alt={`${pet.name} image`}
                    width={90}
                    height={90}
                    draggable={false}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
