"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { useWindowSize } from "./windowSize";

const links = [
  { url: "/", title: "Home" },
  { url: "/aboutMe", title: "AboutMe" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const size = useWindowSize();

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-12 md:h-16 fixed w-full self-center z-50 flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl bg-slate-800/30 backdrop-blur border bg-[rgb(15,36,110)]">

      <div className="flex justify-between w-full items-center">
        <div>TopTal</div>

        <button className="bg-green-500 p-2 rounded text-sm text-white">
          Hire a developer
        </button>

      </div>




      <div className="md:hidden">
        <button
          className="w-8 h-6 md:w-10 md:h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 md:w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 md:w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-8 md:w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen text-white flex flex-col items-center justify-center gap-8 text-4xl z-40 bg-slate-800/80 rounded-lg shadow-md backdrop-blur border border-slate-800/30 "
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                key={link.title}
                onClick={() => (setOpen(!open), console.log("clicked"))}
              >
                <Link
                  href={link.url}
                  style={{ fontFamily: "Poppins-Bold", fontWeight: "bolder" }}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}

          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;