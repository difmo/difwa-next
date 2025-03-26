"use client";
import React from "react";
import Features from "../Features";
import Image from "next/image";
import age from "../../../../public/difwa.png";
import app from "../../../../public/app-store.webp";
import play from "../../../../public/playstore.webp";
const Page = () => {
  return (
    <>
      <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-white px-4 md:px-28 py-18 lg:max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="text-left  md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-16">
            CRISP CLEAN WATER DELIVERED FRESH <br />{" "}
            <span className="text-blue-600">Right At Your Doorstep</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Order 10L, 15L, or 20L water cans through our app and get them
            delivered to your doorstep. Whether you're a customer or a vendor,
            our platform connects you seamlessly.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="https://your-link-for-app.com">
              <Image src={app} alt="App Image" className="h-14 w-40" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.difmo.difwa">
              <Image src={play} alt="Play Image" className="h-14 w-40" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src={age}
            alt="Water Delivery"
            className="max-w-full h-auto "
          />
        </div>
      </section>
      <Features />
    </>
  );
};

export default Page;
