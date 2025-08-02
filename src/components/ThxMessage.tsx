"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Animate, FadeDown, FadeLeft, FadeRight, FadeUp } from "@/Animation";
import NextPage from "./ui/NextPage";
const MotionImage = motion(Image);
const ThxMessage = () => {
  return (
    <section className="relative !min-h-fit">
      <MotionImage
        src="/SDGs_board.jpg"
        alt="Image"
        width={1000}
        height={1000}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-60"
      />
      <p>
        The End? No…{" "}
        <span className="border-b border-black">Just the Beginning!</span>
      </p>

      <div>
        <h1 className="relative text-7xl font-semibold ">
          THANK <span className="text-Green-1"> YOU </span>
        </h1>
        <p className="text-2xl ml-4 text-Green-1">
          For Taking a Step Toward Saving the Planet!
        </p>
      </div>

      <div className="mt-10 text-2xl max-w-3xl">
        You’ve just explored one of the most important global goals — SDG 13:
        Climate Action — and that’s no small thing! From real satellite data to
        real-world challenges, this website was designed to open your eyes,
        spark your curiosity, and remind you that even the smallest actions can
        have a big impact. So, If you want to explore more, just click . or use
        the "Next" button. And rest assured, we are always here to support each
        other. So, if you have any questions or feedback, please feel free to
        contact us .
      </div>
      <div className="h-20 flex justify-end items-center">
        <NextPage href="/resources"/>
      </div>
    </section>
  );
};

export default ThxMessage;
