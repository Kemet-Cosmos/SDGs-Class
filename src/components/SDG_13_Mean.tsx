"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ViewPort, FadeLeft, FadeRight } from "@/Animation";
const MotionImage = motion(Image);

const SDG_13_Mean = () => {
  return (
    <section className="min-h-fit flex flex-col lg:flex-row gap-10 overflow-x-hidden ">
      <MotionImage
        {...FadeLeft}
        {...ViewPort}
        src="/Climate_change.svg"
        alt="SDG 13 climate Change"
        width={2000}
        height={2000}
        draggable={false}
        className="w-full h-fit lg:w-2/4"
      />
      <div className="w-full lg:w-2/4">
        <motion.h1
          {...FadeRight}
          {...ViewPort}
          className="relative text-5xl font-semibold mb-5 lg:mb-10"
        >
          <div className="absolute top-5 left-24 w-3/6 h-8 bg-Green-1 -z-10" />
          What is SDG 13 about?
        </motion.h1>
        <motion.div
          {...FadeRight}
          {...ViewPort}
          className="relative text-xl ml-10 mb-5 lg:ml-4"
        >
          <div className="absolute top-0 -left-10 w-8 h-8 rounded-full bg-Green-1 " />
          SDG 13 addresses one of the most significant threats to humanity in
          the contemporary world: climate change, as the past 10 years have been
          the warmest on record, and the Global sea level has risen over 10 cm
          (around 4 inches) since 1993, with the rate of rise doubling to about
          4.5 mm/year. So, it calls upon nations, communities, and individuals
          to take immediate action to curb greenhouse gas emissions, enhance
          resilience to climate-related catastrophes, and promote awareness
          about the necessity of sustainable lifestyles.
        </motion.div>

        <motion.div
          {...FadeRight}
          {...ViewPort}
          className="relative text-xl ml-10 lg:ml-4"
        >
          <div className="absolute top-0 -left-10 w-8 h-8 rounded-full bg-Green-1 " />
          Climate change is already impacting all parts of the world—with more
          severe weather, hotter temperatures, rising sea levels, melting
          glaciers, droughts, floods, and wildfires. All these transformations
          damage ecosystems, jeopardize food and water supplies, and make life
          more difficult for millions—particularly the most vulnerable.
        </motion.div>
      </div>
    </section>
  );
};

export default SDG_13_Mean;
