"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials({
  heading = "Our Testimonials",
  data = [],
}) {
  const sliderRef = useRef(null);
  const slideAmount = 300; // Adjust scroll distance

  // Scroll function to scroll the slider
  const scroll = (direction) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -slideAmount : slideAmount,
        behavior: "smooth",
      });
    }
  };

  // Loading state for the component
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading state for 0.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 500ms = 0.5 seconds

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <>
      <div className="bg-gray-100 py-8 px-4 md:px-20">
        <h2 className="text-left text-3xl font-bold mb-6">{heading}</h2>

        <div className="relative max-w-screen-2xl mx-auto overflow-hidden">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-md bg-orange-200 transition z-10"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-2 py-5"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="min-w-[300px] md:min-w-[350px] lg:min-w-[450px] bg-white rounded-lg shadow-md overflow-hidden"
                style={{ scrollSnapAlign: "start" }}
              >
                <img
                  src={item.src[0]} // Use the first image in the array
                  alt={item.title || "image"}
                  className="w-full h-60 bg-cover"
                  loading="lazy"
                />
                <div className="p-3 text-center">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-700 text-md mt-1">
                    {item.subtitle || item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 rounded-full shadow-md bg-orange-200 transition z-10"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
