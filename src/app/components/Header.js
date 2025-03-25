"use client";
import { useState } from "react";
import Image from "next/image";
import { Link, Menu, X } from "lucide-react"; // Icons for menu
import img from "../../../public/logo.svg";
import app from "../../../public/app-store.webp";
import play from "../../../public/playstore.webp";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center p-2 justify-between ">
        {/* Logo */}  
        <div className="flex items-center">
          <Image src={img} alt="Logo" className="w-36" />
        </div>
        <div className="flex gap-4">
          <a href="https://your-link-for-app.com">
            <Image src={app} alt="App Image" width={96} height={80} />
          </a>

          <a href="https://play.google.com/store/apps/details?id=com.difmo.difwa">
            <Image src={play} alt="Play Image" width={96} height={80} />
          </a>
        </div>
        {/* Hamburger Menu Button (for mobile) */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
