import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

export const Logo = ({
  className,
  isFooter,
}: {
  className?: string;
  isFooter?: boolean;
}) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-end gap-2",
        isFooter ? "text-orange" : "text-primary",
        className
      )}
    >
      <Image
        src={`${
          isFooter ? "/assets/footer/logo.svg" : "/assets/header/logo.svg"
        }`}
        width={50}
        height={50}
        alt="Logo dog footprint"
        className="object-cover aspect-square fill-inherit"
      />
      <p className={cn("font-semibold", isFooter ? "text-4xl" : "text-2xl")}>
        Pet-First
      </p>
    </Link>
  );
};
