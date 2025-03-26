import Image from "next/image";
import React from "react";
import img from "../../../public/img/phone.svg";
import app from "../../../public/app-store.webp";
import play from "../../../public/playstore.webp";
const Phone = () => {
  return (
    <div>
      <section className="container mx-auto px-4 py-10 text-center">
        {/* Title & Description */}
        <h2 className="text-3xl font-bold text-left md:text-center text-gray-900 mb-4">
          Mobile App
        </h2>
        <div
          className="w-16 h-1 md:mx-auto my-2"
          style={{
            background: `linear-gradient(
        140deg,
        rgba(3, 94, 139, 0.93),
        rgba(0, 203, 169, 0.73),
        rgba(0, 225, 80, 0.04)
      ), linear-gradient(72deg, transparent, rgba(0, 225, 117, 0.64))`,
          }}
        />
        <p className="text-gray-600 text-lg mb-6">
          Experience seamless water delivery service with our mobile app
        </p>

        {/* App Image */}
        <div className="flex justify-center">
          <Image
            src={img}
            alt="Mobile App Preview"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row justify-around items-center gap-4 mt-6">
          <a href="#" className="w-40 sm:w-48">
            <Image src={app} alt="Download on App Store" className="w-full" />
          </a>
          <a href="#" className="w-40 sm:w-48">
            <Image
              src={play}
              alt="Download on Google Play"
              className="w-full"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Phone;
