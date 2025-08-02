"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeLeft, FadeUp, ViewPort } from "@/Animation";
const MotionImage = motion(Image);
const features = [
  {
    title: "1) Reduce energy use",
    features: [
      { li: "✓ Turn off lights and electronics when not in use." },
      { li: "✓ Use energy-efficient appliances." },
    ],
  },
  {
    title: "2)Make eco-friendly choices",
    features: [
      { li: "✓ Walk, bike, or carpool." },
      { li: "✓ Avoid single-use plastics" },
      { li: "✓ Reuse and recycle materials." },
    ],
  },
  {
    title: "3) Protect green spaces",
    features: [
      { li: "✓ Plant trees or start a school garden." },
      { li: "✓ Participate in clean-up campaigns." },
    ],
  },
  {
    title: "4) Raise awareness",
    features: [{ li: "✓ Create posters, videos, or social media campaigns." }],
  },
  {
    title: "5) Track your carbon footprint",
    features: [
      { li: "✓ Use online tools to measure your impact." },
      {
        li: "✓ Reflect on habits you can change to live more sustainablyHost a climate day.",
      },
    ],
  },
];
const LessonPlan = () => {
  return (
    <section className="h-fit">
      <div className="w-full flex justify-between gap-10  h-fit">
        <div className="w-full lg:w-9/12">
          <MotionImage
            {...FadeLeft}
            {...ViewPort}
            src="/Lesson.jpg"
            alt="green image"
            width={1000}
            height={1000}
            className="object-cover h-40"
          />
          <motion.h1
            {...FadeLeft}
            {...ViewPort}
            className="text-4xl font-semibold lg:text-5xl 2xl:text-6xl"
          >
            What can you do as a student <br />
            to support Climate Action?
          </motion.h1>
        </div>
        {features.slice(0, 1).map((item, i) => (
          <div key={i} className=" lg:w-3/12 hidden lg:inline">
            <Card Features={item.features} title={item.title} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-5 mt-8">
        {features.slice(0, 1).map((item, i) => (
          <div key={i} className="w-full md:w-fit lg:hidden">
            <Card Features={item.features} title={item.title} />
          </div>
        ))}
        {features.slice(1, 5).map((item, i) => (
          <Card key={i} Features={item.features} title={item.title} />
        ))}
      </div>
    </section>
  );
};

interface Props {
  title: string;
  Features: { li: string }[];
}

export const Card: React.FC<Props> = ({ title, Features }) => {
  return (
    <motion.div
      {...FadeUp}
      {...ViewPort}
      className="w-full md:max-w-72 p-5 min-h-44 md:h-72   border-2 border-Green-1 "
    >
      <h1 className="text-3xl mb-3 text-blue-900 font-bold">{title}</h1>
      <div>
        {Features.map((item, i) => (
          <p key={i}>{item.li}</p>
        ))}
      </div>
    </motion.div>
  );
};

export default LessonPlan;
