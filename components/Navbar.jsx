"use client";
import React, { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { ArrowSmallRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "How it works",
    path: "#howitworks",
  },
  {
    title: "Packages",
    path: "#packages",
  },
  {
    title: "Success stories",
    path: "#successstories",
  },
  {
    title: "About rapcult",
    path: "#about",
  },
  {
    title: "About rapcult",
    path: "",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 ">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8 bg-secondary">
        <Link href={"/"} className="text-3xl text-white font-bold">
          RAPCULT
        </Link>
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex itmes-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex itmes-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
              <button className="bg-primary p-3 uppercase text-white flex">
                join rapcult <ArrowSmallRightIcon className="w-6 h-6" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
