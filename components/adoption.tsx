import Image from "next/image";

export const Adoption = () => {
  return (
    <section className="bg-adoption bg-cover bg-center bg-no-repeat min-h-[760px] py-8 flex">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-16">
        <div className="flex-1 mb-6 lg:mb-0">
          <Image
            src="/assets/adoption/img1.png"
            alt="Woman with dog"
            width={542}
            height={560}
          />
        </div>
        <div className="flex-1 max-w-md lg:max-w-none text-center lg:text-left text-cream">
          <h2 className="h2 mb-8">Making pet parenting easy for everyone</h2>
          <p className="mb-8 text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            nemo voluptate, velit a ut ullam perspiciatis voluptas explicabo
            voluptatum officiis iusto labore quasi earum dolorem adipisci cumque
            eum. Incidunt obcaecati adipisci dicta nesciunt fugiat consequuntur.
          </p>
          <ul className="mb-8 flex flex-col gap-y-4 lg:list-disc lg:pl-4 text-xl">
            <li className="capitalize">Adoption</li>
            <li className="capitalize">Rrozen row</li>
            <li className="capitalize">Next day delivery</li>
          </ul>
          <button className="btn btn-primary mx-auto lg:mx-0">Explore</button>
        </div>
      </div>
    </section>
  );
};
