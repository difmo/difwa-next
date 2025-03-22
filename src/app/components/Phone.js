import Image from "next/image";
import React from "react";
import img from "../../../public/img/phone.svg";
const Phone = () => {
  return (
    <div>
      <section className="container mx-auto px-4 py-10 text-center">
        {/* Title & Description */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Mobile App</h2>
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
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <a href="#" className="w-40 sm:w-48">
            <Image src={img} alt="Download on App Store" className="w-full" />
          </a>
          <a href="#" className="w-40 sm:w-48">
            <Image src={img} alt="Download on Google Play" className="w-full" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Phone;
