"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { ViewPort, FadeLeft, FadeRight, FadeUp } from "@/Animation";

const MotionImage = motion(Image);
const MotionLink = motion(Link);

const Imagine = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center gap-10">
      <div className="text-xl w-full lg:w-2/4 space-y-5">
        <motion.div
          {...ViewPort}
          {...FadeLeft}
          className="text-2xl font-medium"
        >
          🌍 Imagine waking up one day in a tent in a forest… and suddenly
          finding out that your compass is lost! How will you find your way back
          home? Or even… how will you take a single step at all?!
        </motion.div>
        <motion.div {...ViewPort} {...FadeLeft}>
          That’s what could happen to our planet if the SDGs disappear. Without
          a compass, we lose our path to survival.
        </motion.div>
        <motion.div {...ViewPort} {...FadeLeft}>
          At first, no one noticed the difference. The cities were still
          crowded, the factories still running, and the seas still swayed in
          calm. But something
          <Link href="/lesson">began to change…</Link>
        </motion.div>
        <motion.div {...ViewPort} {...FadeLeft}>
          The air grew heavier. <br />
          The rains fell harder. <br />
          And the seas swallowed the shores, step by step.
        </motion.div>
        <motion.div {...ViewPort} {...FadeLeft}>
          {" "}
          In the absence of a plan, each nation turned to itself. The poor were
          left behind the walls, schools shut their doors, and forests turned
          into deserts. <br />
          Even the songs of birds became just a memory.
        </motion.div>
      </div>
      <div className="text-2xl w-full lg:w-2/4">
        <motion.div {...FadeRight} {...ViewPort} className="mb-20">
          And after decades, humanity no longer wondered about the future… but
          about survival! The planet did not die, but it was no longer the home
          it once was.
        </motion.div>

        <motion.div {...FadeRight} {...ViewPort} className="relative">
          <p className="absolute top-0 left-0 px-2 font-semibold">
            The SDGs are not just goals… they are the compass that gives us one
            last chance before the fog swallows us whole.
          </p>
          <MotionImage
            src="/Watch.jpg"
            alt="Image"
            width={1000}
            height={1000}
          />
        </motion.div>
        <motion.div {...FadeUp} {...ViewPort} className="text-green-700">
          Let’s find out what the SDGs truly are!
        </motion.div>
        <MotionLink
          {...FadeRight}
          {...ViewPort}
          whileHover={{ translateX: 5, scale: 1.05 }}
          whileTap={{ scale: 1 }}
          href="/about"
          className="font-bold text-2xl bg-Green-1 px-2 w-fit flex items-center gap-2 ml-auto"
        >
          {" "}
          NEXT <FaArrowRight size={20} />{" "}
        </MotionLink>
      </div>
    </section>
  );
};

export default Imagine;
