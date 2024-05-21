"use client";
import React from "react";
import { ThemeBtn } from "../../components/ThemeBtn";
import Admin from "../../components/Admin";
import { PiChatCircleText } from "react-icons/pi";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Input } from "@/components/ui/input"
import { FaSearch } from 'react-icons/fa';
const Navbar = () => {
  const pathname = usePathname();
  const isActive = (path: string): string => {
    return pathname == path ? "text-signature" : "";
  };
  return (   
    <div className="w-full h-20 sticky top-0 z-50 flex justify-between items-center bg-secondary px-4 ">
      <div className=" font-bold capitalize">
      <h1 className="text-3xl">Hi, Benjamin!</h1>
      <p>Congratulations . You got a great response today . </p>
      </div>
      <div className="relative w-full max-w-xs">
      <input
        type="text"
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Search..."
      />
      <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
        <FaSearch className="text-gray-400" />
      </div>
    </div>
      <div className=" flex justify-between items-center gap-4">
        <ThemeBtn />

        <Link href="/messages">
          <PiChatCircleText className={`${isActive("/messages")} h-[1.4rem] w-[1.4rem]`} />
        </Link>

        <Admin />
      </div>
    </div>
  );
};

export default Navbar;
