"use client";
import React, { useState } from "react";
import { BiSolidSend } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", { name, email, message });
  };

  return (
    <div className="h-screen p-4 md:px-40">
      <div className="my-20 pb-40 flex flex-col md:max-w-[1440px] mx-auto">
        <div className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">Contact</h1>
          <span>Get In Touch</span>
        </div>
        <div className="flex flex-col gap-20 lg:gap-0 lg:flex-row w-full max-w-[900px] mx-auto">
          <div className="flex-1 flex flex-col gap-4 lg:order-2 ml-20 mt-10">
            <div className="flex gap-10">
              <BsFillTelephoneFill size={24} />
              <h3 className="select-none">(415) 802 8751</h3>
            </div>
            <div className="flex gap-10">
              <MdEmail size={24} />
              <h3 className="select-none">sanixstudio@gmail.com</h3>
            </div>
            <div className="flex gap-10">
              <HiLocationMarker size={24} />
              <h3 className="select-none">San Francisco, Bay Area</h3>
            </div>
            <div className="flex gap-4 justify-center border-t border-slate-500 pt-5 max-w-[250px]">
              <BsLinkedin size={24} />
              <BsGithub size={24} />
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-1 flex-col gap-2 max-w-[560px]"
          >
            <label className="uppercase tracking-wider" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="your name"
              onChange={(event) => setName(event.target.value)}
              required
              className="w-full outline-none focus:bg-slate-700 px-4 py-3 border border-slate-600 mb-3 rounded-md bg-slate-800"
            />

            <label
              className="uppercase tracking-wider"
              htmlFor="your@email.com"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="your email"
              onChange={(event) => setEmail(event.target.value)}
              required
              className="w-full outline-none focus:bg-slate-700 px-4 py-3 border border-slate-600 mb-3 rounded-md bg-slate-800"
            />

            <label className="uppercase tracking-wider" htmlFor="message">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              placeholder="your message"
              onChange={(event) => setMessage(event.target.value)}
              required
              className="w-full outline-none focus:bg-slate-700 px-4 py-3 border border-slate-600 mb-3 min-h-[200px] rounded-md bg-slate-800"
            ></textarea>

            <button className="flex justify-center items-center rounded-md gap-3 p-3 mt-5 h-fit border border-slate-400 hover:border-slate-600 mb-3 outline-none hover:bg-slate-500 transition-all ease-out active:bg-slate-400 focus:bg-slate-500">
              <span>Send</span>
              <BiSolidSend size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
