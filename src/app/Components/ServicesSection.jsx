"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// SSR disabled for OrbitingCardsScene
const OrbitingCardsScene = dynamic(() => import("./OrbitingCardsScene"), {
  ssr: false,
});

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="min-h-screen w-full bg-black flex flex-col justify-start items-center"
    >
      <h2 className="text-white text-3xl font-bold text-center pt-10 z-10">
        Services
      </h2>

      <div className="w-full h-[85vh] mt-4">
        <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
          <OrbitingCardsScene />
        </Suspense>
      </div>
    </section>
  );
}
