"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FadeLeft, FadeRight, Animate } from "@/Animation";
const MotionImage = motion(Image);

const ClimateChange = () => {
  return (
    <section className="min-h-fit flex flex-col lg:flex-row gap-10 mt-20 ">
      <div className="w-full lg:w-2/4 pl-7 space-y-5">
        <motion.div {...FadeLeft} {...Animate}  className="relative text-lg">
          <div className="absolute top-0 -left-10 w-8 h-8 rounded-full bg-Green-1 " />
          While NASA’s instruments have been quietly watching, they have noticed
          Earth is running a fever. Since the late 19th century, the planet’s
          average surface temperature has risen by about{" "}
          <span className="font-semibold"> 1.2°C (2.2°F) </span>, which is a
          rapid change in geological terms. What is the cause for that? Human
          activities like burning fossil fuels, cutting forests, and industrial
          pollution have released vast amounts of greenhouse gases into the
          atmosphere, trapping heat like a thick blanket.
        </motion.div>
        <motion.h1 {...FadeLeft} {...Animate} transition={{delay:0.2}} className="font-semibold">
          But that's just the beginning of the story.
        </motion.h1>
        <motion.div {...FadeLeft} {...Animate} transition={{delay:0.3}}>
          As the planet heats up, Greenland is losing over{" "}
          <span className="font-semibold"> 279 billion tons </span> of ice every
          year. Down south, Antarctica is shedding{" "}
          <span className="font-semibold"> 148 billion tons </span>
          annually. Imagine losing so much ice that sea levels begin to
          rise—over{" "}
          <span className="font-semibold">
            {" "}
            20 centimeters (8 inches){" "}
          </span>{" "}
          since 1880, and accelerating faster than ever in the past 20 years.
        </motion.div>

        <motion.div {...FadeLeft} {...Animate} transition={{delay:0.4}} className="relative">
          <div className="absolute top-0 -left-10 w-8 h-8 rounded-full bg-Green-1 " />
          And with that, the oceans swell and push against coastlines. Storms
          become fiercer. Droughts stretch longer. Crops fail. Forests burn.
          People flee.
        </motion.div>

        <motion.div {...FadeLeft} {...Animate} transition={{delay:0.5}}>
          This isn’t science fiction. It’s happening right now. And that’s why
          the world came together to establish the{" "}
          <span className="font-semibold">
            {" "}
            Sustainable Development Goals (SDGs){" "}
          </span>{" "}
          in 2015, 17 missions for a better future. Among them is{" "}
          <span className="font-semibold"> Goal 13: Climate Action</span>—an
          urgent call for humanity to respond to Earth’s distress signals.
        </motion.div>
      </div>
      <div className="w-full lg:w-2/4">
        <MotionImage
          {...FadeRight}
          {...Animate}
          transition={{delay:0.6}}
          src="/Earth.jpg"
          alt="Earth image"
          width={2000}
          height={2000}
          draggable={false}
          className="w-full "
        />
        <motion.h2
          {...FadeRight}
          {...Animate}
          transition={{delay:0.7}}
          className="text-5xl font-medium"
        >
          So in this lesson, we’ll become part of that mission, exploring and
          going deep with Goal 13:{" "}
          <div className="relative w-fit">
            <div className="absolute left-5 top-5  w-full h-8 bg-Green-1 -z-10 " />
            Climate Action.
          </div>
        </motion.h2>
      </div>
    </section>
  );
};

export default ClimateChange;
