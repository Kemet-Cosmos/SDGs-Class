"use client";
import React from "react";
import Link from "next/link";
import { mainLinks } from "@/Data/navigationLinks";
import { usePathname } from "next/navigation";
import Image from "next/image";
const Navbar = () => {
  const PathName = usePathname();
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className=" py-3 flex flex-col md:flex-row gap-5 items-center md:justify-evenly lg:justify-between max-w-5xl mx-auto md:h-16 bg-white ">
        <Link href="/" className="text-3xl font-semibold flex items-center gap-2">
          <Image
            src="/SDG logo.png"
            alt="Logo"
            width={50}
            height={50}
            draggable={false}
            className="w-10 h-10"
          />
          SDG’s Class
        </Link>

        <div className="space-x-5 text-lg md:text-2xl flex">
          {mainLinks.map((item, i) => (
            <Link href={item.href} key={i} className="">
              {item.title}
              {PathName === item.href && (
                <div className="w-full h-0.5 bg-Green-1" />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
