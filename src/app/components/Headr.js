"use client";
import Image from "next/image";
import React from "react";
import img from "../../../public/img/glass.jpg";
const Headr = () => {
  return (
    <div className="flex flex-wrap justify-around px-20 py-4 bg-white">
      <div className="w-1/2">
        <Image src={img} className="w-12 h-12" />
      </div>
      <div className="flex w-1/2 ">
        <Image src={img} className="w-12 h-12" />
        <Image src={img} className="w-12 h-12" />
      </div>
    </div>
  );
};

export default Headr;
