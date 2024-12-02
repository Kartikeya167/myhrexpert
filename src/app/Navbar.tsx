"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#00053d] w-full">
      <div className="container mx-auto h-[72px] flex items-center justify-between px-6 md:px-20">
        {/* Logo and Company Name */}
        <div className="flex items-center gap-2">
          <div className="text-white text-2xl font-bold flex items-center">
            <svg viewBox="0 0 24 24" className="w-8 h-8 text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" />
              <path d="M2 12L12 17L22 12" />
            </svg>
            <span className="ml-2">
              BUSINESS<br />CONSULTING
            </span>
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Center Container for Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute md:static top-[72px] left-0 w-full bg-[#00053d] md:w-auto md:flex items-center gap-2 md:block z-50 overflow-y-auto max-h-[calc(100vh-72px)]`}
        >
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="px-3">
              <Link
                href="/"
                className="text-white block py-3 md:py-6 text-center hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4"
              >
                Home
              </Link>
            </div>

            <div className="px-3">
              <Link
                href="/services"
                className="text-white block py-3 md:py-6 text-center hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4"
              >
                Services
              </Link>
            </div>

            <div className="px-3">
              <Link
                href="/about"
                className="text-white block py-3 md:py-6 text-center hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4"
              >
                About
              </Link>
            </div>

            <div className="px-3">
              <Link
                href="/contact"
                className="text-white block py-3 md:py-6 text-center hover:underline hover:decoration-white hover:decoration-2 hover:underline-offset-4"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Get in touch button */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-yellow-400 hover:bg-yellow-400 hover:text-[#0B0B45] px-8 h-10 font-medium"
          >
            Get in touch
          </Button>
        </div>
      </div>

      {/* Responsive Button Placement */}
      {isMenuOpen && (
        <div className="md:hidden flex justify-center py-4 bg-[#00053d]">
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-yellow-400 hover:bg-yellow-400 hover:text-[#0B0B45] px-8 h-10 font-medium"
          >
            Get in touch
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
