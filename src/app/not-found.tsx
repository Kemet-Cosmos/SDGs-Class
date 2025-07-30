"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Animate, FadeLeft, FadeRight } from "@/Animation";
const MotionImage = motion(Image);
export default function Not_found() {
  const pathName = usePathname();
  return (
    <div className=" overflow-x-hidden lg:h-screen flex flex-col lg:flex-row justify-center items-center">
      <div className="flex flex-col justify-center items-center  w-full lg:w-2/4 h-full">
        <motion.h1
          {...FadeLeft}
          {...Animate}
          className=" text-9xl lg:text-[10vw]  "
        >
          404
        </motion.h1>
        <motion.p {...FadeLeft} {...Animate} className="text-2xl">
          We didn’t found{" "}
          <span className="text-Green-1 text-3xl font-semibold">
            {" "}
            {pathName.slice(1)}{" "}
          </span>{" "}
          page
        </motion.p>
      </div>
      <MotionImage
        {...FadeRight}
        {...Animate}
        src="/404.png"
        alt="404 image"
        width={1000}
        height={1000}
        className="w-full lg:w-2/4 max-w-xl l object-cover "
      />
    </div>
  );
}
