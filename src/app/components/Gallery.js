// import React from "react";

// export const Gallery = (props) => {
//   return (
//     <div id="portfolio" className="text-center py-10 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="section-title mb-8">
//           <h2 className="text-3xl font-bold text-gray-800">Gallery</h2>
//           <p className="text-gray-600 mt-2">
//             Explore Difwa’s journey of delivering pure, fresh water with quality
//             and care.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {props.data ? (
//             props.data.map((d, i) => (
//               <div key={`${d.title}-${i}`} className="flex justify-center">
//                 <Image
//                   title={d.title}
//                   largeImage={d.largeImage}
//                   smallImage={d.smallImage}
//                 />
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">Loading...</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

import Image from "next/image";
import React from "react";

export const Gallery = ({ data }) => {
  return (
    <div id="portfolio" className="text-center py-10 bg-gray-100">
      <div className="container mx-auto ">
        <div className="section-title mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Gallery</h2>
          <p className="text-gray-600 mt-2">
            Explore Difwa’s journey of delivering pure, fresh water with quality
            and care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 ">
          {data && data.length > 0 ? (
            data.map((d, i) => (
              <div key={`${d.title}-${i}`} className="flex justify-center">
                {d.smallImage ? (
                  <Image
                    src={d.smallImage || "/img/placeholder.png"} // Use a fallback image
                    alt={d.title || "Gallery Image"}
                    width={300}
                    height={200}
                    className=" shadow-md bg-cover"
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
