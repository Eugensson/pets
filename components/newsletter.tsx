import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const Newsletter = () => {
  return (
    <section>
      <div className="h-[800px] flex flex-1 flex-col lg:flex-row lg:h-[324px]">
        <div className="h-full flex flex-1 flex-col items-center justify-center px-8 lg-px-0 bg-newsletterOrange bg-cover bg-center bg-no-repeat">
          <div>
            <h2 className="h2 capitalize mb-12">
              Subscribe & get pet
              <br />
              updatenews
            </h2>
            <div className="relative flex">
              <input
                type="text"
                placeholder="your@email.com"
                className="absolute w-full pr-12 bg-transparent border-b-2 outline-none text-white placeholder:text-white/70"
              />
              <HiOutlineArrowNarrowRight
                size={30}
                className="absolute right-0 top-0 text-white cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="h-full flex flex-1 justify-center items-end bg-newsletterYellow bg-cover bg-center bg-no-repeat">
          <Image
            src="/assets/newsletter/dog.png"
            alt="Dog image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};
