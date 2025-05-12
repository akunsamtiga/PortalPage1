"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Hanya render blur shapes di sisi klien
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Scroll ke section rooms
  const scrollToRooms = () => {
    const roomsSection = document.getElementById("rooms");
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden md:max-w-5xl xl:max-w-7xl mx-auto">
      {/* Background Image dengan Overlay */}
      <div className="absolute inset-[-10] bg-cover bg-center blur-sm" style={{ backgroundImage: "url('/images/bg1.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-t from-white to-black/50"></div>
      </div>

      {/* Tombol Navigasi Home */}
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-1/2 -translate-x-1/2 bg-yellow-50 text-black px-4 py-1.5 md:px-5 md:py-2 text-sm md:text-lg font-thin rounded-full shadow-lg uppercase tracking-wide hover:bg-yellow-500 active:scale-95 transition-all duration-300 z-10"
      >
        Sanzystore.com
      </button>

      {/* Konten Utama Hero */}
      <div className="relative text-center px-4 max-w-4xl mx-auto z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-200 via-yellow-200 to-orange-400 pb-2">
          Solusi Cepat Bangun Website Premium Untuk Bisnis
        </h1>
        <p className="mt-3 text-white text-sm sm:text-base md:text-lg max-w-xl mx-auto">
          Desain Eksklusif & Responsif di semua perangkat.
        </p>

        {/* Tombol CTA */}
        <button
          onClick={scrollToRooms}
          className="mt-6 inline-block bg-yellow-50 text-black px-5 py-2.5 text-sm md:text-base lg:text-lg font-bold rounded-md shadow-lg hover:bg-white hover:text-black transition-colors duration-300 z-10"
        >
          Lihat Preview
        </button>
      </div>

      {/* Icon Scroll Down */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-gray-800 animate-bounce"
        onClick={scrollToRooms}
      >
        <ChevronDownIcon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600 hover:text-yellow-400 transition-colors duration-300" />
      </div>
    </section>
  );
}