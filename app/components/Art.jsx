"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Data Fitur
const fiturLandingPage = [
  { id: 1, title: "Desain Modern", description: "Tampilan profesional & menarik", image: "/images/web1.webp" },
  { id: 2, title: "Optimasi Konversi", description: "Dirancang untuk meningkatkan penjualan", image: "/images/w8.webp" },
  { id: 3, title: "Identitas Merek", description: "Cerminkan karakter unik bisnis Anda", image: "/images/w9.webp" },
  { id: 4, title: "Performa Tinggi", description: "Muat cepat & responsif di semua perangkat", image: "/images/w10.webp" },
  { id: 5, title: "Pengalaman Interaktif", description: "Meningkatkan keterlibatan pengunjung", image: "/images/w11.webp" },
  { id: 6, title: "SEO Friendly", description: "Optimasi agar mudah ditemukan di Google", image: "/images/w12.webp" },
];

export default function LandingPage() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () =>
    setStartIndex((prev) => (prev + itemsPerPage < fiturLandingPage.length ? prev + itemsPerPage : 0));

  const prevSlide = () =>
    setStartIndex((prev) => (prev - itemsPerPage >= 0 ? prev - itemsPerPage : fiturLandingPage.length - itemsPerPage));

  return (
    <main className="relative bg-white text-gray-900 py-14 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Section dengan Shapes */}
      <section className="relative text-center py-16 px-4 sm:px-6 bg-white overflow-hidden">
        {/* Shapes Background - Optimized for performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
          <div className="absolute top-32 left-[8%] w-72 h-72 bg-purple-700/30 blur-[80px] rounded-full"></div>
          <div className="absolute top-100 right-[12%] w-80 h-80 bg-blue-700/20 blur-[70px] rounded-full"></div>
        </div>

        {/* Konten Utama */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 relative z-10 max-w-6xl mx-auto"
        >
          Tingkatkan <span className="text-indigo-500 italic">Bisnis Anda <br / ></span> dengan{" "}
          <span className="text-indigo-500 italic">Website</span> Berkualitas
        </motion.h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl lg:max-w-2xl mx-auto relative z-10">
          Dapatkan web yang cepat, clean, dan dioptimalkan untuk meningkatkan penjualan bisnis Anda.
        </p>
        <motion.a
          href="#fitur"
          className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 text-base sm:text-lg font-semibold rounded-md shadow-lg hover:bg-indigo-500 transition-colors relative z-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Mulai sekarang dengan landing page kami"
        >
          Mulai Sekarang
        </motion.a>

        {/* Kenapa Harus Kami? */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 mt-20 mb-4 relative z-10">
          Kenapa Harus Menggunakan Landing Page Kami?
        </h2>
        <p className="text-base sm:text-lg text-gray-600 relative z-10 max-w-2xl mx-auto">
          Dirancang untuk meningkatkan interaksi dan hasil maksimal.
        </p>

        {/* Grid Fitur */}
        <div className="flex justify-center gap-4 md:gap-6 xl:gap-8 py-8 relative z-10 flex-nowrap">
          {fiturLandingPage.slice(startIndex, startIndex + itemsPerPage).map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full sm:w-80 max-w-xs"
            >
              <div className="relative aspect-3/5 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.description}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  loading={item.id > 3 ? "lazy" : "eager"}
                  quality={85}
                />
              </div>
              <h3 className="mt-4 mb-1 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tombol Pagination */}
        <div className="mt-6 flex justify-center gap-4">
          <motion.button
            onClick={prevSlide}
            className="w-12 h-12 bg-blue-400/70 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label="Slide sebelumnya"
          >
            <FaArrowLeft className="text-xl" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500 transition-colors"
            whileTap={{ scale: 0.95 }}
            aria-label="Slide berikutnya"
          >
            <FaArrowRight className="text-xl" />
          </motion.button>
        </div>
      </section>
    </main>
  );
}