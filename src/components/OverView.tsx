"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeLeft, FadeUp, ViewPort } from "@/Animation";

const MotionImage = motion(Image);

const OverView = () => {
  return (
    <section className=" flex flex-col lg:flex-row gap-10 overflow-x-hidden">
      <div>
        <motion.h1
          {...FadeUp}
          {...ViewPort}
          className="relative text-6xl font-semibold lg:mb-20"
        >
          SDGs Overview
          <motion.div className="absolute top-10 -left-2 lg:-left-8 h-14 w-80 bg-Green-1 -z-10" />
        </motion.h1>
        <motion.div
          {...FadeLeft}
          {...ViewPort}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="relative p-4 rounded-2xl text-2xl"
        >
          <motion.div
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{
              width: "100%",
              height: "100%",
            }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="w-0 h-0 absolute top-2/4 left-2/4 -translate-2/4  bg-Green-1 -z-10"
          />
          The world had learned a lot. From centuries of progress came
          undeniable challenges: poverty, injustice, hunger, and a planet
          growing hotter and more unpredictable by the year. But rather than
          turning away from these problems, the global community decided to face
          them head-on—with a plan. That plan became the Sustainable Development
          Goals, or SDGs. The Sustainable Development Goals (SDGs), also known
          as the Global Goals, were adopted by the United Nations in 2015 as a
          universal call to action to..
          <ul>
            <li>-end poverty</li>
            <li>-protect the planet</li>
            <li>-ensure that all people enjoy peace and prosperity</li>
            <li>
              -ensuring access to clean water, quality education, and gender
              equality.
            </li>
          </ul>
        </motion.div>
      </div>
      <div>
        <MotionImage
          {...FadeLeft}
          {...ViewPort}
          src="/OverView_image.jpeg"
          alt="Image"
          width={1000}
          height={1000}
        />
        <motion.div
          {...FadeLeft}
          {...ViewPort}
          transition={{ duration: 0.2, delay: 0.2 }}
          className="relative p-4 rounded-2xl text-2xl"
        >
          <motion.div
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{
              width: "100%",
              height: "100%",
            }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="w-0 h-0 absolute top-2/4 left-2/4 -translate-2/4  bg-Green-1 -z-10"
          />
          It provides a shared blueprint for peace and prosperity for people and
          the planet by 2030. At its heart are the 17 Sustainable Development
          Goals, which are an urgent call for action by all countries -
          developed and developing - in a global partnership. They recognize
          that ending poverty and other deprivations must go hand-in-hand with
          strategies that improve health and education, reduce inequality, and
          spur economic growth – all while tackling climate change and working
          to preserve our oceans and forests.
        </motion.div>
      </div>
    </section>
  );
};

export default OverView;
