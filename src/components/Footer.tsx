"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { mainLinks } from "@/Data/navigationLinks";
const MotionLink = motion(Link);

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row items-center text-center md:text-start md:justify-between px-10 lg:px-20 gap-10 py-10 border-t border-Green-1 mt-10">
      <div className="max-w-72 space-y-5">
        <Link
          href="/"
          className="text-3xl font-semibold flex justify-center md:justify-start items-center gap-2 mb-2"
        >
          <Image
            src="/SDG logo.png"
            alt="Logo"
            width={50}
            height={50}
            draggable={false}
            className="w-10 h-10"
          />
          SDG’s Class
        </Link>
        <p className="ml-4">
          This website will be your guide for being Aware and Responsible for
          one of the main Challenges in the world today. Our mission is making
          you aware about the current threats facing Planet Earth using real
          satellite data
        </p>
        <p>© All Rights Reserved 2025</p>
      </div>
      <div>
        <h1 className="text-3xl mb-2 font-semibold">Quick Links</h1>
        <div className="flex flex-col gap-2 text-2xl ml-4">
          {mainLinks.map((item, i) => (
            <MotionLink
              whileHover={{ x: 10 }}
              key={i}
              href={item.href}
              className="flex items-center gap-2"
            >
              <item.icon size={20} />
              {item.title}
            </MotionLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
