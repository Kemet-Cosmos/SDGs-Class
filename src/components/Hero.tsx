"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Animate, FadeDown, FadeLeft, FadeRight, FadeUp } from "@/Animation";

const MotionImage = motion(Image);
const Hero = () => {
  return (
    <section className="  lg:flex items-center gap-10">
      <div className="w-full lg:w-2/4">
        <div className="h-60 w-80 relative flex justify-end items-center bg -red-500">
          <motion.h1
            {...FadeUp}
            {...Animate}
            className="text-8xl font-semibold"
          >
            SDGs <br />
            <span className="ml-8">Class</span>
          </motion.h1>
          <MotionImage
            initial={{ x: 100, opacity: 0 }}
            {...Animate}
            src="/SDG logo.png"
            alt="logo"
            width={500}
            height={500}
            draggable={false}
            className="absolute top-0 left-0 w-52 h-52 -z-10"
          />
        </div>
        <motion.div
          {...FadeLeft}
          {...Animate}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="relative p-4 rounded-2xl text-2xl"
        >
          <motion.div
            animate={{
              width: "100%",
              height: "100%",
            }}
            transition={{duration:0.2}}
            className="absolute top-2/4 left-2/4 -translate-2/4  bg-Green-1 -z-10"
          />
          This website will be your guide for being Aware and Responsible for
          one of the main Challenges in the world today. Our mission is making
          you aware about the current threats facing Planet Earth using real
          satellite data, learn about SDG 13: Climate Action, and help humanity
          create a plan to save our only home.{" "}
        </motion.div>
      </div>

      <div className="w-full lg:w-2/4 flex flex-col justify-center items-center gap-5 ">
        <MotionImage
          {...FadeRight}
          {...Animate}
          transition={{ delay: 0.4 }}
          src="/teacher_class.webp"
          alt="teacher in class image "
          width={1000}
          height={1000}
          className=""
        />
        <motion.h1
          {...FadeDown}
          {...Animate}
          transition={{ delay: 0.5 }}
          className="text-Green-1 text-2xl font-semibold"
        >
          Let’s Teach the future Together
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
