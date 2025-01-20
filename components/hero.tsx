import Image from "next/image";

import { Header } from "@/components/header";
import pretitleImage from "@/public/assets/hero/pretitle-img.svg";

export const Hero = () => {
  return (
    <section className="min-h-[400px] lg:min-h-[805px] bg-cream bg-cover bg-no-repeat lg:bg-hero ">
      <Header />
      <div className="container mx-auto flex justify-start items-center min-h-[400px] lg:h-[805px]">
        <div className="lg:max-w-[650px] mx-auto lg:mx-0 text-center lg:text-left">
          <div className="hidden xl:flex mb-6 ml-5">
            <Image
              src={pretitleImage}
              alt="Pretitle arrow image"
              className="w-full h-auto"
            />
          </div>
          <h1 className="mb-10 text-4xl sm:text-5xl lg:text-8xl font-bold uppercase -tracking-[0.05em]">
            A pet first <br />
            <span className="text-orange font-normal">approach to</span> <br />
            wellness
          </h1>
          <button className="btn btn-orange mx-auto lg:mx-0">Learn more</button>
        </div>
      </div>
    </section>
  );
};
