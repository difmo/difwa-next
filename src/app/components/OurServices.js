"use client";
import {
  FaTruck,
  FaRecycle,
  FaHome,
  FaBuilding,
  FaStar,
  FaGift,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTruck size={40} />,
    title: "Hassle-Free Deliveries",
    description:
      "Get fresh water delivered on time, every time, with difwa's scheduled delivery service.",
  },
  {
    icon: <FaRecycle size={40} />,
    title: "Sustainable Bottle Recycling",
    description:
      "Help the environment by returning used bottles for difwa's eco-friendly recycling.",
  },
  {
    icon: <FaHome size={40} />,
    title: "Custom Bottle Sizes",
    description:
      "Choose from a variety of bottle sizes from difwa to meet your home or business needs.",
  },
  {
    icon: <FaBuilding size={40} />,
    title: "Bulk & Business Orders",
    description:
      "Special bulk delivery options from difwa for offices, events, and commercial use.",
  },
  {
    icon: <FaStar size={40} />,
    title: "Strict Quality Control",
    description:
      "Every bottle from difwa is checked for purity, safety, and hygiene standards.",
  },
  {
    icon: <FaGift size={40} />,
    title: "Exclusive Referral Rewards",
    description:
      "Invite friends and family to difwa to earn discounts and exciting rewards.",
  },
];

const OurServices = () => {
  return (
    <section
      className="py-12 px-4 md:px-28 text-white text-left"
      style={{
        background: `linear-gradient(
        140deg,
        rgba(3, 94, 139, 0.93),
        rgba(0, 203, 169, 0.73),
        rgba(0, 225, 80, 0.04)
      ), linear-gradient(72deg, transparent, rgba(0, 225, 117, 0.64))`,
      }}
    >
      <h2 className="text-xl font-semibold uppercase tracking-wider">
        Our Services
      </h2>
      <div
        className="w-16 h-1  my-2"
        style={{
          background: `linear-gradient(
        140deg,
        rgba(3, 94, 139, 0.93),
        rgba(0, 203, 169, 0.73),
        rgba(0, 225, 80, 0.04)
      ), linear-gradient(72deg, transparent, rgba(0, 225, 117, 0.64))`,
        }}
      />
      <p className="text-lg mt-2 mb-8">
        Providing pure, fresh water with reliable delivery, sustainability, and
        customer care with difwa.
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-opacity-20 flex flex-col items-center text-center"
          >
            <div className="bg-[#08080789] text-white p-10 rounded-full mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-bold">{service.title}</h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
