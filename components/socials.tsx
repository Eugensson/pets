import Link from "next/link";

import { socials } from "@/constants";

export const Socials = () => {
  return (
    <div className="flex items-stretch justify-center lg:justify-start text-white">
      <p className="mr-6">Follow</p>
      <ul className="flex gap-x-4">
        {socials.map(({ icon: Icon, href, label }) => (
          <li key={label}>
            <Link
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Link to ${label}`}
            >
              <Icon />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
