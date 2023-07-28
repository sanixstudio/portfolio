"use client";
import React, { useState, useRef } from "react";
import { BiSolidSend } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
import { Footer, Navbar } from "@/components";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const Contact = () => {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      (result) => {
        console.log(result.text);
        toast.success("Email sent successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      },
      (error) => {
        console.log(error.text);
        toast.error("Error sending email!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="h-screen p-4 md:px-40">
        <div className="my-20 mb-0 md:mb-40 pb-40 flex flex-col md:max-w-[1440px] mx-auto">
          <motion.div
            initial={{ x: "300%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold uppercase">
              Contact
            </h1>
            <span>Get In Touch</span>
          </motion.div>
          <div className="flex flex-col gap-20 lg:gap-0 lg:flex-row w-full max-w-[900px] mx-auto">
            <motion.div
              initial={{ x: "300%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex flex-col gap-4 lg:order-2 mx-auto md:ml-20 mt-10"
            >
              {/* <div className="flex gap-10">
                <BsFillTelephoneFill size={24} />
                <h3 className="select-none">(415) 802 8751</h3>
              </div>
              <div className="flex gap-10">
                <MdEmail size={24} />
                <h3 className="select-none">sanixstudio@gmail.com</h3>
              </div> */}
              <div className="flex gap-5">
                <HiLocationMarker size={24} />
                <h3 className="select-none">San Francisco, Bay Area</h3>
              </div>
              <div className="flex gap-4 justify-center border-t border-slate-500 pt-5 max-w-[250px]">
                <Link
                  href={"https://www.linkedin.com/in/sanixstudio/"}
                  target="_blank"
                >
                  <BsLinkedin size={24} />
                </Link>
                <Link
                  href={"https://www.github.com/sanixstudio"}
                  target="_blank"
                >
                  <BsGithub size={24} />
                </Link>
              </div>
            </motion.div>
            <motion.form
              initial={{ x: "-300%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="flex flex-1 flex-col gap-2 max-w-[560px] mx-auto w-full"
              ref={formRef}
            >
              <label className="uppercase tracking-wider" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                name="name"
                placeholder="your name"
                onChange={(event) => setName(event.target.value)}
                required
                className="w-full bg-transparent outline-none focus:bg-slate-900 px-4 py-3 border border-slate-600 mb-3 rounded-md "
              />

              <label className="uppercase tracking-wider" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                name="email"
                placeholder="your email"
                onChange={(event) => setEmail(event.target.value)}
                required
                className="w-full bg-transparent outline-none focus:bg-slate-900 px-4 py-3 border border-slate-600 mb-3 rounded-md "
              />

              <label className="uppercase tracking-wider" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                name="message"
                placeholder="your message"
                onChange={(event) => setMessage(event.target.value)}
                required
                className="w-full bg-transparent outline-none focus:bg-slate-900 px-4 py-3 border border-slate-600 mb-3 min-h-[200px] rounded-md "
              ></textarea>

              <button className="flex justify-center items-center rounded-md gap-3 p-3 mt-5 h-fit border border-slate-400 hover:border-slate-600 mb-3 outline-none hover:bg-slate-500 transition-all ease-out active:bg-slate-400 focus:bg-slate-500">
                <span>Send</span>
                <BiSolidSend size={24} />
              </button>
            </motion.form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
