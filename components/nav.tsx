import { cn } from "@/lib/utils";
import Link from "next/link";

export const Nav = ({ className }: { className?: string }) => {
  return (
    <nav>
      <ul
        className={cn(
          "flex items-center gap-x-4 lg:gap-x-12 text-lg",
          className
        )}
      >
        <li>
          <Link href="#">Services</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
