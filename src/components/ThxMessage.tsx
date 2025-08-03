"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Animate, FadeLeft, FadeUp, opacity, ViewPort } from "@/Animation";
import NextPage from "./ui/NextPage";
const MotionImage = motion(Image);
const ThxMessage = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpened]);

  return (
    <section>
      <AnimatePresence>
        {isMenuOpened && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed top-0 left-0 w-full h-screen bg-black z-50"
              onClick={() => setIsMenuOpened(false)}
            />
            <motion.div
              {...Animate}
              {...FadeUp}
              className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 
             w-4/5 max-w-2xl p-6 bg-white border border-Green-1 
             rounded-2xl shadow-xl z-50 text-center"
            >
              <h1 className="text-3xl font-semibold text-Green-1 mb-2">
                We Still Work on Class’s
              </h1>
              <p className="text-gray-600">
                This section is under development. Stay tuned!
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <div className="relative !min-h-fit">
        <MotionImage
          {...opacity}
          {...ViewPort}
          src="/SDGs_board.jpg"
          alt="Image"
          width={1000}
          height={1000}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-60"
        />
        <motion.p {...FadeLeft} {...ViewPort}>
          The End? No…{" "}
          <span className="border-b border-black">Just the Beginning!</span>
        </motion.p>

        <div>
          <motion.h1
            {...FadeLeft}
            {...ViewPort}
            className="relative text-7xl font-semibold "
          >
            THANK <span className="text-Green-1"> YOU </span>
          </motion.h1>
          <motion.p
            {...FadeLeft}
            {...ViewPort}
            className="text-2xl ml-4 text-Green-1"
          >
            For Taking a Step Toward Saving the Planet!
          </motion.p>
        </div>

        <motion.div
          {...FadeUp}
          {...ViewPort}
          className="mt-10 text-2xl max-w-3xl"
        >
          You’ve just explored one of the most important global goals — SDG 13:
          Climate Action — and that’s no small thing! From real satellite data
          to real-world challenges, this website was designed to open your eyes,
          spark your curiosity, and remind you that even the smallest actions
          can have a big impact. So, If you want to explore more, just click{" "}
          <span
            onClick={() => setIsMenuOpened(true)}
            className="border-b border-black cursor-pointer"
          >
            Here
          </span>{" "}
          . or use the (Next) button. And rest assured, we are always here to
          support each other. So, if you have any questions or feedback, please
          feel free to contact us .
        </motion.div>
        <div className="h-20 flex justify-end items-center">
          <NextPage href="/resources" />
        </div>
      </div>
    </section>
  );
};

export default ThxMessage;
