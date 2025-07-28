"use client";
import React from "react";
import Link from "next/link";
import { mainLinks } from "@/Data/navigationLinks";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const PathName = usePathname();
  return (
    <div className="fixed top-0 left-0 w-full">
      <nav className=" pt-3 flex flex-col md:flex-row gap-5 items-center md:justify-evenly lg:justify-between max-w-5xl mx-auto h-16  ">
        <h1 className="text-xl font-semibold">SDG’s Class</h1>

        <div className="space-x-5 text-lg flex">
          {mainLinks.map((item, i) => (
            <Link href={item.href} key={i} className="">
              {item.title}
              {PathName === item.href && (
                <div className="w-full h-0.5 bg-red-500" />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
