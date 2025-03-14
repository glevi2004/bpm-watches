"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNav = () => setNav(!nav);

  const controlNavbar = useCallback(() => {
    if (typeof window !== "undefined") {
      // always show navbar at the top of the page
      if (window.scrollY === 0) {
        setShowNavbar(true);
        // 10px trshhold before the navbar hides or shows
      } else if (window.scrollY < lastScrollY - 10) {
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY + 10) {
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <>
      {/* Navbar */}
      <div
        className={`${
          showNavbar
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } fixed w-full z-50 bg-black text-white transition-all duration-500 ease-in-out`}
      >
        <div className="flex items-center justify-between h-24 relative">
          {/* Logo */}
          <div className="ml-2 mr-20 z-[100]">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="Company Logo"
                width={192}
                height={0}
                className="ml-2"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-20 flex-1 text-lg md:text-xl text-[#d3d3d3] cursor-pointer">
            <li className="hover:text-white">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/about">Sobre</Link>
            </li>
            <li className="hover:text-white mr-5">
              <Link href="/watches">Produtos</Link>
            </li>
            <li className="hover:text-white">
              <Link href="/contact">Contato</Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div
            onClick={handleNav}
            className="mr-4 relative md:hidden cursor-pointer z-[100] w-10 h-10 flex items-center justify-center"
          >
            <HiOutlineMenuAlt1
              className={`absolute transition-transform duration-300 ease-in-out ${
                nav
                  ? "opacity-0 scale-50 rotate-90"
                  : "opacity-100 scale-100 rotate-0"
              }`}
              size={35}
            />
            <IoCloseOutline
              className={`absolute transition-transform duration-300 ease-in-out ${
                nav
                  ? "opacity-100 scale-100 rotate-0"
                  : "opacity-0 scale-50 rotate-90"
              }`}
              size={38}
            />
          </div>

          {/* Mobile Sidebar */}
          <div
            className={`fixed top-0 left-0 w-[60%] max-w-[400px] h-screen bg-black z-[50] transition-transform duration-300 ease-in-out ${
              nav ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <ul className="text-white mt-24 border-t border-primary">
              <Link href="/">
                <li
                  onClick={handleNav}
                  className="hover:border-white pl-8 p-4 border-b border-primary"
                >
                  HOME
                </li>
              </Link>
              <Link href="/about">
                <li
                  onClick={handleNav}
                  className="hover:border-white pl-8 p-4 border-b border-primary"
                >
                  SOBRE
                </li>
              </Link>
              <Link href="/contact">
                <li
                  onClick={handleNav}
                  className="hover:border-white pl-8 p-4 border-b border-primary"
                >
                  CONTATO
                </li>
              </Link>
              <Link href="/watches">
                <li
                  onClick={handleNav}
                  className="hover:border-white pl-8 p-4 border-b border-primary"
                >
                  PRODUTOS
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Add padding to the main content */}
      <div className="pt-24">{/* Add your main content here */}</div>
    </>
  );
};

export default Navbar;
