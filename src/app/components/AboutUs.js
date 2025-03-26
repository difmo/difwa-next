"use client";

import Image from "next/image";
import image from "../../../public/img/image.jpg";
export default function AboutUs() {
  return (
    <section className=" mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-4 text-gray-950">ABOUT US</h2>
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
      {/* Layout container */}
      <div className="flex flex-col lg:flex-row  gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src={image}
            alt="Difwa Water Service"
            className="w-full h-80 md:h-[600px]  "
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <p className="text-gray-600 mb-6">
            Difwa is a smart water delivery platform designed to bridge the gap
            between users and verified water vendors. We ensure timely, safe,
            and affordable drinking water deliveries to homes, offices, and
            businesses with a seamless ordering experience.
          </p>

          {/* Why Choose Us Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Quick and easy ordering",
              "Affordable pricing",
              "Verified and trusted vendors",
              "Timely delivery guaranteed",
              "Real-time order tracking",
              "Multiple payment options",
              "Eco-friendly packaging",
              "24/7 customer support",
            ].map((item, index) => (
              <div key={index} className="flex  gap-2">
                <span className="text-blue-500">✔</span>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
