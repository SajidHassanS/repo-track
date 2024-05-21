"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Menu = ({ menu }: { menu: Menu[] }) => {
  const pathname = usePathname();
  const isActive = (path: string): string => {
    return pathname === path
      ? "bg-signature/20 text-signature"
      : "text-primary/75 hover:text-signature";
  };
  return (
    <div className="flex gap-4 h-8">
      {menu.map(({ name, path }) => (
        <Link
          key={path}
          href={path}
          className={`${isActive(
            path
          )} flex items-center font-semibold h-full px-2 transition-colors cursor-pointer rounded-lg`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
