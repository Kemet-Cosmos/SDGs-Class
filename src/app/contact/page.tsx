"use client";
import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { IoSend } from "react-icons/io5";
export default function Page() {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "e7029218-643e-46ed-80a6-d305482adde0",
        from: "SDGS class",
        name,
        email,
        Message,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setSuccess(true);
    }
  }

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
        onSubmit={handleSubmit}
        className="space-y-5 my-5 p-8 border border-Green-1 rounded-2xl"
      >
        <h1 className="text-4xl font-semibold">Send Us a Message</h1>
        <div className="flex flex-col ">
          <label htmlFor="clientName" className="text-2xl">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="hi i like the idea and the website <3"
            required
            className="p-1  text-xl rounded-xl outline-none border border-Green-1 focus:ring focus:ring-Green-1 duration-150"
          />
        </div>
        <div className="flex justify-end">
          <motion.button
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 1, x: 0 }}
            type="submit"
            className="bg-Green-1 px-4 py-2 rounded-2xl text-2xl flex items-center gap-2"
          >
            {success ? "sended Successfully" : `Send `}
            <IoSend size={25} />
          </motion.button>
        </div>
      </form>
    </section>
  );
}
