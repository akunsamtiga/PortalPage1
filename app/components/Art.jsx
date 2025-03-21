"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Data Fitur Landing Page
const fiturLandingPage = [
  { id: 1, title: "Desain Modern", description: "Tampilan profesional & menarik", image: "/images/web1.jpg" },
  { id: 2, title: "Optimasi Konversi", description: "Dirancang untuk meningkatkan penjualan", image: "/images/web2.jpg" },
  { id: 3, title: "Identitas Merek", description: "Cerminkan karakter unik bisnis Anda", image: "/images/web3.jpg" },
  { id: 4, title: "Performa Tinggi", description: "Muat cepat & responsif di semua perangkat", image: "/images/web4.jpg" },
  { id: 5, title: "Pengalaman Interaktif", description: "Meningkatkan keterlibatan pengunjung", image: "/images/web5.jpg" },
  { id: 6, title: "SEO Friendly", description: "Optimasi agar mudah ditemukan di Google", image: "/images/web6.jpg" },
  { id: 7, title: "Integrasi Mudah", description: "Mendukung berbagai layanan & API", image: "/images/web7.jpg" }
];

export default function LandingPage() {
  const { ref: sectionRef, inView: sectionInView } = useInView({ triggerOnce: true });

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + itemsPerPage < fiturLandingPage.length ? prevIndex + itemsPerPage : 0));
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - itemsPerPage >= 0 ? prevIndex - itemsPerPage : fiturLandingPage.length - itemsPerPage));
  };

  // State untuk efek scroll
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative bg-white text-gray-900">
      {/* Section dengan Shapes */}
      <section ref={sectionRef} className="relative text-center py-16 px-6 md:px-12 bg-gray-50 overflow-hidden min-h-screen">
        {/* Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            className="absolute top-32 left-[8%] w-72 h-72 bg-purple-700/30 blur-[50px] rounded-full"
            animate={{ y: scrollY * 0.15 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
          <motion.div
            className="absolute top-0 right-[12%] w-80 h-80 bg-blue-700/20 blur-[50px] rounded-full"
            animate={{ y: scrollY * 0.12 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
          />
        </div>

        {/* Konten */}
        <motion.h2
          className="text-xl md:text-5xl lg:text-6xl font-bold text-indigo-900 relative z-10 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Tingkatkan <span className="text-orange-500 italic">Bisnis Anda</span> dengan <span className="text-orange-500 italic">Landing Page</span> Berkualitas
        </motion.h2>
        <p className="mt-4 text-sm md:text-lg text-gray-600 md:max-w-xl lg:max-w-2xl mx-auto relative z-10">
          Dapatkan landing page yang cepat, menarik, dan dioptimalkan untuk meningkatkan konversi bisnis Anda.
        </p>
        <motion.a
          href="#fitur"
          className="mt-6 inline-block bg-orange-500 text-white px-4 py-2 text-base md:text-xl font-semibold rounded-md shadow-lg transition hover:scale-105 relative z-10"
          whileHover={{ scale: 1.1 }}
        >
          Mulai Sekarang
        </motion.a>

        {/* Grid Fitur dengan Pagination */}
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-900 mt-24 mb-2 relative z-10">Kenapa Harus Menggunakan Landing Page Kami?</h3>
        <p className="text-base md:text-lg text-gray-600 relative z-10">Dirancang untuk meningkatkan interaksi dan hasil maksimal.</p>

        <div className="flex justify-center gap-4 md:gap-6 py-8 relative z-10">
          {fiturLandingPage.slice(startIndex, startIndex + itemsPerPage).map((item) => (
            <motion.div
              key={item.id}
              className="w-72"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={item.image}
                className="w-full h-60 md:h-100 rounded-lg shadow-lg object-cover transition-transform hover:scale-105"
                alt={item.title}
              />
              <h4 className="mt-4 mb-1 text-lg font-semibold text-gray-900">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tombol Pagination dengan Ikon Baru */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-orange-400/70 text-white rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
          >
            <FaArrowLeft className="text-xl" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-orange-400 text-white rounded-full flex items-center justify-center shadow-lg transition hover:scale-110"
          >
            <FaArrowRight className="text-xl" />
          </button>
        </div>
      </section>
    </main>
  );
}
