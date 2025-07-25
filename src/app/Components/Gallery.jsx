"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Just-Chill",
    description:
      "Just-Chill is a streaming platform inspired by Netflix. Built with React, Tailwind, and Firebase, it allows browsing trending content via TMDB API. Users can save content, view movie info, and autoplay trailers. Mobile responsive and modern UI designed.",
    screenshots: ["/assets/Netflix1.png", "/assets/Netflix2.png", "/assets/Netflix3.png"],
  },
  {
    title: "Instant-Pick",
    description:
      "Instant-Pick is a grocery inventory system that allows admins to manage stock in real-time. Users can order groceries, view order status live, and log in securely. Built with a dashboard showing analytics for sales and inventory monitoring.",
    screenshots: ["/assets/Insta1.png", "/assets/Insta2.png", "/assets/Insta3.png"],
  },
  {
    title: "Gym-Bro",
    description:
      "Gym-Bro is a responsive website for gym memberships. It features trainer profiles, workout plans, pricing tables, and testimonials. Built with Tailwind and JavaScript, it motivates users through clean UI and compelling CTA sections.",
    screenshots: ["/assets/Gym1.png", "/assets/Gym2.png", "/assets/Gym3.png"],
  },
];

export default function GallerySection() {
  const [index, setIndex] = useState(0);
  const [screenshotIndex, setScreenshotIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScreenshotIndex((prev) => (prev + 1) % projects[index].screenshots.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index]);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projects.length);
    setScreenshotIndex(0);
  };

  return (
    <section id="gallery"className="min-h-screen w-full bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background dotted pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] opacity-10 z-0" />

      {/* 🔥 Section Heading */}
      <h2 className="text-5xl font-extrabold mb-12 z-10 text-center">Our Projects</h2>

      {/* Animated project card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-5xl w-full bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-10 flex flex-col items-center gap-6"
        >
          <h3 className="text-4xl font-bold text-white">{projects[index].title}</h3>

          {/* Image carousel */}
          <div className="w-full h-[200px] flex items-center justify-center relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${screenshotIndex * 100}%)`,
                width: `${projects[index].screenshots.length * 100}%`,
              }}
            >
              {projects[index].screenshots.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="screenshot"
                  className="w-full h-[200px] object-cover rounded-xl mx-2"
                  style={{ flex: "0 0 100%" }}
                />
              ))}
            </div>
          </div>

          <p className="text-gray-300 text-md text-center max-w-3xl leading-relaxed">
            {projects[index].description}
          </p>

          <button
            onClick={handleNext}
            className="mt-4 px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 transition rounded-full"
          >
            Next Project →
          </button>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
