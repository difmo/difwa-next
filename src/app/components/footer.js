"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative">
      <footer className="bg-gray-900 text-white py-6 text-center flex flex-col items-center gap-2">
        <p>&copy; 2025 DIWFA. All Rights Reserved.</p>
        <Link href="/privacy-policy">
          <p className="text-blue-600 underline">Privacy Policy</p>
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
