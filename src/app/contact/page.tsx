"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoSend } from "react-icons/io5";
export default function Page() {
  return (
    <section className="mt-20 ">
      <div className="space-y-5">
        <h1 className="text-5xl font-semibold">
          Contact Page where you can reach us via a form
        </h1>
        <p className="text-2xl text-neutral-600 ml-5">
          The climate may be changing fast, but so can we. So… thank you for
          being part of the change — and remember, the planet is counting on
          people like you.
        </p>
      </div>
      <form
        action=""
        className="space-y-5 my-5 p-8 border border-Green-1 rounded-2xl"
      >
        <h1 className="text-4xl font-semibold">Send Us a Message</h1>
        <div className="flex flex-col ">
          <label htmlFor="clientName" className="text-2xl">
            Full Name
          </label>
          <input
            type="text"
            placeholder="ali ahmed ibrahim belal"
            required
            className="p-1  text-xl rounded-xl outline-none border border-Green-1 focus:ring focus:ring-Green-1 duration-150"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="clientName" className="text-2xl">
            Email Address
          </label>
          <input
            type="text"
            placeholder="yourname@gmail.com"
            required
            className="p-1  text-xl rounded-xl outline-none border border-Green-1 focus:ring focus:ring-Green-1 duration-150"
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="clientName" className="text-2xl">
            Your Message
          </label>
          <textarea
            placeholder="hi i like the idea and the website <3"
            required
            className="p-1  text-xl rounded-xl outline-none border border-Green-1 focus:ring focus:ring-Green-1 duration-150"
          />
        </div>
        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 1, x: 0 }}
            className="bg-Green-1 px-4 py-2 rounded-2xl text-2xl flex items-center gap-2"
          >
            Send <IoSend size={25} />
          </motion.button>
        </div>
      </form>
    </section>
  );
}
