"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Animate, FadeLeft, FadeRight, FadeUp, ViewPort } from "@/Animation";
const MotionImage = motion(Image);

const Targets = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-4">
      <div className="w-full lg:w-[35%]">
        <motion.h1
          {...FadeLeft}
          {...ViewPort}
          className="relative text-5xl font-semibold mb-5  "
        >
          <motion.div className="absolute top-10 -left-2 lg:-left-8 h-14 w-80 bg-Green-1 -z-10" />
          Why is it important to learn about climate change?
        </motion.h1>
        <motion.p {...FadeLeft} {...ViewPort} className="text-lg">
          It is already occurring and is real: Students are growing up in a
          world where climate change is a current reality rather than a far-off
          future. It relates to daily life: Our everyday activities have an
          impact on the environment, from transportation and food choices to
          energy use at home. It gives pupils more power, young people who have
          a better understanding of climate change are better able to lead
          climate-friendly projects in their communities, advocate for improved
          policies, and make informed decisions. It fosters global
          responsibility, climate change transcends national boundaries. So, on
          a global level, learning about it promotes empathy, critical thinking,
          and teamwork.
        </motion.p>
      </div>
      <MotionImage
        {...FadeUp}
        {...Animate}
        src="/Save_earth.jpg"
        alt="Save earth"
        width={500}
        height={500}
        draggable={false}
        className="w-full h-80 lg:h-[650px] lg:w-[30%] object-cover"
      />
      <div className="w-full lg:w-[35%]">
        <motion.h1
          {...FadeRight}
          {...ViewPort}
          className="relative text-4xl font-semibold  w-full h-20 flex items-center justify-center mb-5 "
        >
          <motion.div
            animate={{
              width: "100%",
              height: "100%",
            }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="w-0 h-0 absolute top-2/4 left-2/4 -translate-2/4  bg-Green-1 -z-10"
          />
          “ SDG 13 Targets: .. ”
        </motion.h1>
        <ul className="space-y-5 text-xl">
          <motion.li {...FadeRight} {...ViewPort}>
            <span className="text-Green-1 text-2xl font-bold">1)</span>{" "}
            Strengthen resilience and adaptive capacity to climate-related
            hazards and natural disasters.
          </motion.li>
          <motion.li {...FadeRight} {...ViewPort}>
            <span className="text-Green-1 text-2xl font-bold">2)</span>{" "}
            Integrate climate change measures into national policies,
            strategies, and planning.
          </motion.li>
          <motion.li {...FadeRight} {...ViewPort}>
            <span className="text-Green-1 text-2xl font-bold">3)</span> Improve
            education, awareness, and capacity on climate change mitigation,
            adaptation, and early warning.
          </motion.li>
          <motion.li {...FadeRight} {...ViewPort}>
            <span className="text-Green-1 text-2xl font-bold">4)</span>{" "}
            Implement the commitment to mobilize $100 billion annually to
            support developing countries.
          </motion.li>
          <motion.li {...FadeRight} {...ViewPort}>
            <span className="text-Green-1 text-2xl font-bold">5)</span> Promote
            capacity-building and climate planning in least developed countries
            and small island states.
          </motion.li>
        </ul>
      </div>
    </section>
  );
};

export default Targets;
