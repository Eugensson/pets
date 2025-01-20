import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

export const Footer = () => {
  return (
    <footer className="min-h-[200px] flex items-center py-t bg-footer bg-cover bg-no-repeat bg-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex-1 flex flex-col gap-y-2">
            <Logo
              isFooter
              className="flex-1 flex justify-center lg:justify-start text-4xl text-center lg:text-left mb-8"
            />
            <p className="text-sm text-white/60">
              Copyright © 2025 Pet-First. All rights reserved.
            </p>
          </div>

          <div className="flex-1">
            <Nav className="mb-8 flex flex-col lg:flex-row lg:gap-x-4 gap-y-6 text-base font-semibold text-white" />
            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};
