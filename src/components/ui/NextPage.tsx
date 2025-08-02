"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp } from "@/Animation";
import { FaArrowRight } from "react-icons/fa6";
const MotionLink = motion(Link);
interface Props {
  href: string;
}
const NextPage: React.FC<Props> = ({ href }) => {
  return (
    <MotionLink
      {...FadeUp}
      viewport={{ once: true, amount: 0.5, margin: "20px" }}
      whileInView={{ y: 0, x: 0, scale: 1, opacity: 1 }}
      whileHover={{ translateX: 5, scale: 1.05 }}
      whileTap={{ scale: 1 }}
      href={href}
      className="font-bold text-2xl bg-Green-1 px-2 w-fit flex items-center gap-2  "
    >
      {" "}
      NEXT <FaArrowRight size={20} />{" "}
    </MotionLink>
  );
};

export default NextPage;
