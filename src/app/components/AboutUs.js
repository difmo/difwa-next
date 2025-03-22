"use client";

import Image from "next/image";
import image from  "../../../public/img/image.jpg"
export default function AboutUs() {
  return (
    <section className=" mx-auto px-4 py-10">
      {/* Layout container */}
      <div className="flex flex-col lg:flex-row  gap-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <Image
            src={image}
            alt="Difwa Water Service"
            className="w-full h-[600px]  rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-950">ABOUT US</h2>
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
