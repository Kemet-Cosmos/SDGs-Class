"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Animate,
  FadeDown,
  FadeLeft,
  FadeRight,
  FadeUp,
  ViewPort,
} from "@/Animation";
const MotionImage = motion(Image);

const Targets = () => {
  return (
    <section className="flex flex-col lg:flex-row ">
      <div className="w-full lg:w-[30%]">
        <motion.h1
          {...FadeRight}
          {...ViewPort}
          className="relative text-5xl font-semibold mb-5  "
        >
          Why is it important to learn about climate change?
        </motion.h1>
        <p className="text-lg">
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
        </p>
      </div>
      <MotionImage
        initial={{ x: 100, opacity: 0 }}
        {...Animate}
        src="/Save_earth.jpg"
        alt="Save earth"
        width={500}
        height={500}
        draggable={false}
        className="w-full lg:w-[40%]"
      />
      <div className="w-full lg:w-[30%]">
        <motion.h1
          {...FadeRight}
          {...ViewPort}
          className="relative text-5xl font-semibold mb-5 lg:mb-10"
        >
          “ SDG 13 Targets: .. ”
        </motion.h1>
        <ul>
          <li>
            1) Strengthen resilience and adaptive capacity to climate-related
            hazards and natural disasters.
          </li>
          <li>
            2) Integrate climate change measures into national policies,
            strategies, and planning.
          </li>
          <li>
            3) Improve education, awareness, and capacity on climate change
            mitigation, adaptation, and early warning.
          </li>
          <li>
            4) Implement the commitment to mobilize $100 billion annually to
            support developing countries.
          </li>
          <li>
            5) Promote capacity-building and climate planning in least developed
            countries and small island states.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Targets;
