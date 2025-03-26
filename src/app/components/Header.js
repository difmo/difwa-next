"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Removed unused Link import
import img from "../../../public/logo.svg";
import app from "../../../public/app-store.webp";
import play from "../../../public/playstore.webp";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white md:px-24 mx-auto relative">
      <div className="container mx-auto flex items-center p-4 justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={img} alt="Logo" className="w-36" />
        </div>

        {/* Desktop Store Links */}
        <div className="hidden md:flex gap-4">
          <a href="https://your-link-for-app.com">
            <Image src={app} alt="App Store" className="h-10 w-40" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.difmo.difwa">
            <Image src={play} alt="Play Store" className="h-10 w-40" />
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col gap-4 p-4 z-50 transition-all duration-300">
          <a href="https://your-link-for-app.com">
            <Image src={app} alt="App Store" className="h-10 w-40" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.difmo.difwa">
            <Image src={play} alt="Play Store" className="h-10 w-40" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
