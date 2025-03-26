"use client";
import Image from "next/image";
import React from "react";

export const Gallery = ({ data }) => {
  return (
    <div id="portfolio" className="text-left px-4  md:px-28 py-10 bg-gray-100">
      <div className="">
        <div className="section-title mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Gallery</h2>
          <div
            className="w-20 h-1 my-2"
            style={{
              background: `linear-gradient(
        140deg,
        rgba(3, 94, 139, 0.93),
        rgba(0, 203, 169, 0.73),
        rgba(0, 225, 80, 0.04)
      ), linear-gradient(72deg, transparent, rgba(0, 225, 117, 0.64))`,
            }}
          />
          <p className="text-gray-600 mt-2">
            Explore Difwa’s journey of delivering pure, fresh water with quality
            and care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {data && data.length > 0 ? (
            data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="flex justify-center">
                {d.smallImage ? (
                  <Image
                    src={d.smallImage || "/img/placeholder.png"} // Use a fallback image
                    alt={d.title || "Gallery Image"}
                    width={310}
                    height={250}
                    className=" bg-cover"
                    unoptimized // Remove if using remote images
                  />
                ) : (
                  <p className="text-gray-500">Image not available</p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-500">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};
