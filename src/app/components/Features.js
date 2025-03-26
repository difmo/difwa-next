"use client";

import { FaTint, FaLeaf, FaBell, FaRocket } from "react-icons/fa";

const features = [
  {
    icon: <FaTint size={40} className="text-white" />,
    title: "Effortless Ordering",
    description:
      "Order fresh, clean water from Difwa in just a few taps with our user-friendly app.",
  },
  {
    icon: <FaLeaf size={40} className="text-white" />,
    title: "Eco-Friendly Practices",
    description:
      "We promote sustainable water delivery practices, minimizing plastic usage wherever possible.",
  },
  {
    icon: <FaBell size={40} className="text-white" />,
    title: "24/7 Customer Care",
    description:
      "Our dedicated support team is always ready to assist you with orders, queries, or concerns.",
  },
  {
    icon: <FaRocket size={40} className="text-white" />,
    title: "Speedy & Secure Delivery",
    description:
      "Get pure water delivered quickly and safely to your doorstep with Difwa’s reliable service.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      className="py-12  px-3 text-center"
      style={{
        background: `linear-gradient(
          140deg,
          rgba(3, 94, 139, 0.93),
          rgba(0, 203, 169, 0.73),
          rgba(0, 225, 80, 0.04)
        ), 
        linear-gradient(72deg, transparent, rgba(0, 225, 117, 0.64))`,
      }}
    >
      <h2 className="text-lg text-left md:text-center font-semibold text-white">
        FEATURES
      </h2>
      <div
        className="w-16 h-1 md:mx-auto my-2  rounded-full"
        style={{
          background: `linear-gradient(
          140deg,
          rgba(3, 94, 139, 0.93),
          rgba(0, 203, 169, 0.73),
          rgba(0, 225, 80, 0.04)
        ), 
        linear-gradient(72deg, transparent, rgba(0, 225, 117, 0.64))`,
        }}
      />
      <p className="text-white text-lg max-w-2xl mx-auto mb-8">
        Difwa ensures pure water delivery with reliability, sustainability, and
        quality service right at your fingertips.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-cente  hover:scale-105 "
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#08080789]">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-50 mt-4">
              {feature.title}
            </h3>
            <p className="text-gray-50 mt-2 text-md">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
