"use client";
import { menu } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  const isActive = (path: string): string => {
    return (path === "/" ? pathname === path : pathname.includes(path))
      ? "bg-secondary text-mygreen "
      : "hover:text-mygreen";
  };

  return (
    <>
      <div className="w-68 h-screen sticky top-0 overflow-hidden bg-background  ">
        <div className="h-20 flex justify-center items-center  text-signature text-3xl  font-bold">
          Logo
        </div>
        <div className="h-full  flex flex-col gap-4 my-8">
          {menu.map(({ name, path, icon: Icon }) => (
            <Link
              key={path}
              href={path}
              className={`${isActive(
                path
              )} flex items-center gap-2 font-bold text-sm p-8 transition-colors cursor-pointer `}
            >
              <Icon size={20} />
              <p>{name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
