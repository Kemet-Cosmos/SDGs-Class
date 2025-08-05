"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, ViewPort } from "@/Animation";
import NextPage from "@/components/ui/NextPage";

const MotionLink = motion(Link);

export default function Page() {
  const resources = [
    {
      title: "What’s the Hottest the Earth’s Ever Been?",
      src: "/resources/Climate.jpeg",
      href: "https://www.climate.gov/news-features/climate-qa/whats-hottest-earths-ever-been?utm_source=chatgpt.com",
      description:
        "Explore Earth's ancient temperature records and understand how today's warming compares to historical extremes.",
    },
    {
      title: "Greenland Ice Loss (2002–2021)",
      src: "/resources/Grace.jpg",
      href: "https://grace.jpl.nasa.gov/resources/30/greenland-ice-loss-2002-2021/?utm_source=chatgpt.com",
      description:
        "NASA’s GRACE satellite mission tracks dramatic ice loss in Greenland over nearly two decades, revealing the effects of climate change.",
    },
    {
      title: "Global Temperatures Over Time",
      src: "/resources/Global_Temperatures.jpeg",
      href: "https://earthobservatory.nasa.gov/world-of-change/global-temperatures?utm_source=chatgpt.com",
      description:
        "A look at how Earth’s surface temperature has changed over the last century and the role human activity plays.",
    },
    {
      title: "Carbon Dioxide: A Global Perspective (NASA SVS)",
      src: "/resources/Carbon_Dioxide.jpg",
      href: "https://svs.gsfc.nasa.gov/5450/?utm_source=chatgpt.com",
      description:
        "Visualize how CO₂ levels move across the globe using NASA's data-driven 3D simulations from satellites and models.",
    },
  ];

  return (
    <main className="space-y-20 lg:mt-20">
      <h1 className="text-2xl">
        Here you’ll find all the resources used to create this website, as well
        as videos that I’m sure you’ll love.
      </h1>
      <div className="grid md:grid-cols-2 gap-5 p-5 w-full  ">
        {resources.map((item, i) => (
          <MotionLink
            key={i}
            {...FadeUp}
            {...ViewPort}
            href={item.href}
            className="w-full rounded-xl overflow-hidden border-2 border-Green-1"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={1000}
              height={1000}
              className="w-full "
            />
            <div className="p-5 space-y-2">
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </MotionLink>
        ))}
      </div>
      <div className="h-20 flex justify-end items-center">
          <NextPage href="/contact" />
        </div>
    </main>
  );
}
