"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { mainLinks } from "@/Data/navigationLinks";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const PathName = usePathname();
  return (
    <div className="fixed top-0 left-0 w-full z-50  ">
      <nav className=" py-3 flex  gap-5 items-center px-10 justify-between max-w-5xl mx-auto md:h-16 bg-white ">
        <Link
          href="/"
          className="text-3xl font-semibold flex items-center gap-2"
        >
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

        <div className="hidden lg:flex space-x-5 text-lg md:text-2xl">
          {mainLinks.map((item, i) => (
            <Link href={item.href} key={i} className="">
              {item.title}
              {PathName === item.href && (
                <div className="w-full h-0.5 bg-Green-1" />
              )}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpened((prev) => !prev)}
          className="lg:hidden cursor-pointer"
        >
          <BiMenu size={50} />
        </button>
      </nav>
      <AnimatePresence>
        {isMenuOpened && (
          <motion.div
            initial={{ translateY: "-100%" }}
            animate={{ translateY: 0 }}
            exit={{ translateY: "-100%" }}
            className=" lg:hidden absolute top-20 left-0 w-full h-fit bg-white -z-10 flex flex-col p-2 "
          >
            {mainLinks.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setIsMenuOpened(false)}
                className={` ${
                  PathName === item.href && "bg-Green-1"
                }   p-2 text-2xl `}
              >
                {item.title}
                {PathName === item.href && (
                  <div className="w-full h-0.5 bg-Green-1 " />
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
