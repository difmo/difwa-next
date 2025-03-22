import React from "react";

export const Testimonials = (props) => {
  return (
    <div id="testimonials" className="py-12 px-20">
      <div className="container mx-auto px-4">
        <div className="section-title text-center mb-12">
          <h2 className="text-3xl font-bold">
            {props.title || "What our clients say"}
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
                >
                  <div className="flex">
                    <div className=" w-full h-full">
                      <img
                        src={d.img}
                        alt={d.name}
                        className="w-28  bg-cover rounded-full"
                      />
                    </div>
                    <div className="testimonial-content p-4">
                      <p className="text-gray-800 text-lg mb-4">{d.text}</p>
                      <div className="testimonial-meta text-gray-600 font-semibold">
                        {" "}
                        - {d.name}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "Loading testimonials..."}
        </div>
      </div>
    </div>
  );
};
