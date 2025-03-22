"use client";

import { FaTint, FaLeaf, FaBell, FaRocket } from "react-icons/fa";

const features = [
  {
    icon: <FaTint size={40} className="text-white" />,
    title: "Effortless Ordering",
    description:
      "Order fresh, clean water from Difwa in just a few taps with our easy-to-use app.",
  },
  {
    icon: <FaLeaf size={40} className="text-white" />,
    title: "Eco-Friendly Practices",
    description:
      "Our dedicated Difwa team is always ready to help with your orders and concerns.",
  },
  {
    icon: <FaBell size={40} className="text-white" />,
    title: "24/7 Customer Care",
    description:
      "Our dedicated team is always ready to help with your orders and concerns.",
  },
  {
    icon: <FaRocket size={40} className="text-white" />,
    title: "Speedy & Secure Delivery",
    description:
      "Get pure water delivered quickly and safely by Difwa, right to your doorstep.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-lg font-semibold text-gray-600">FEATURES</h2>
      <div className="w-16 h-1 bg-blue-500 mx-auto my-2" />
      <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
        Difwa ensures pure water delivery with reliability, sustainability, and
        quality service.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mt-4">
              {feature.title}
            </h3>
            <p className="text-gray-500 mt-2 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
