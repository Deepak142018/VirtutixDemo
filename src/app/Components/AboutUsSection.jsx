"use client";
import { useState } from "react";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Career at Virtutix™",
    desc: "Join a team that thrives on innovation and impact. At Virtutix™, we offer dynamic career growth, mentorship, and the opportunity to work on cutting-edge technologies shaping the data-driven world.",
  },
  {
    id: 2,
    title: "Why Choose Us?",
    desc: "We’re not just a tech company — we’re your data transformation partner. With unmatched expertise in data analytics and a client-first approach, we deliver tailored, impactful solutions.",
  },
  {
    id: 3,
    title: "Global Standards",
    desc: "From India to the world — Virtutix™ adheres to international benchmarks in data security, quality, and innovation, ensuring reliability and future-ready solutions for your business.",
  },
];

export default function AboutUsSection() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  return (
    <section
      id="about"
      className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] py-16 px-4 sm:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            About Virtutix™
          </h2>
          <p className="text-lg sm:text-xl font-medium text-gray-700 mb-4">
            "Harnessing the power of data to drive innovation, empower businesses, and shape a smarter future."
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
            Virtutix™ is a renowned IT services company in India, pioneering in the realm of premier data technology. 
            We specialize in converting raw data into powerful business intelligence across industries such as AgriTech, Retail, Finance, Manufacturing, and E-Commerce. 
            Our mission is to provide tailor-made solutions in Data Science, Visualization, and Analytics, helping organizations improve efficiency, security, and data-driven decisions.
          </p>

          {/* Animated Card Section */}
          <div className="relative w-full h-60 mt-4">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`absolute transition-all duration-700 transform w-full ${
                  index === current
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-90 z-0"
                }`}
              >
                <div className="bg-white shadow-md rounded-lg p-6 h-full text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/assets/Carrers.jpg" // <-- replace with your image path
            alt="About Virtutix"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
