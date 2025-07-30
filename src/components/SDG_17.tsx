"use client";
import React from "react";
import { motion } from "framer-motion";
import { Categories } from "@/Data/SDG_Categories";
import Image from "next/image";
import { FadeUp, ViewPort } from "@/Animation";
const MotionImage = motion(Image);

const SDGCategories = () => {
  return (
    <section className=" flex justify-center items-center lg:mt-20">
      <div className="flex justify-center items-center flex-wrap gap-6 mx-auto  ">
        {Categories.map((item, i) => (
          <MotionImage
            key={i}
            {...ViewPort}
            {...FadeUp}
            whileHover={{ scale: 1.02, translateY: -5 }}
            transition={{ duration: 0.4 }}
            src={item.src}
            alt={item.title}
            width={160}
            height={160}
            draggable={false}
            className="w-40 h-40 m-0 bg-green-500"
            loading="lazy"
          />
        ))}
        <MotionImage
          {...ViewPort}
          {...FadeUp}
          transition={{ duration: 0.4 }}
          src="/SDG_Categories/SDG_17.png"
          alt="SDG_17"
          width={500}
          height={500}
          draggable={false}
          className="w-80 h-40 mx-10  "
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default SDGCategories;
