"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true });

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  
  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + itemsPerPage < fiturLandingPage.length ? prevIndex + itemsPerPage : 0));
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - itemsPerPage >= 0 ? prevIndex - itemsPerPage : fiturLandingPage.length - itemsPerPage));
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="text-center pt-22 pb-12 px-6 md:px-12">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold text-indigo-900"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Tingkatkan <span className="text-orange-500 italic">Bisnis Anda</span> dengan <span className="text-orange-500 italic">Landing Page</span> Berkualitas
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Dapatkan landing page yang cepat, menarik, dan dioptimalkan untuk meningkatkan konversi bisnis Anda.
        </p>
        <motion.a 
          href="#fitur" 
          className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 text-lg font-semibold rounded-md shadow-lg transition hover:scale-105"
          whileHover={{ scale: 1.1 }}
        >
          Mulai Sekarang
        </motion.a>
      </section>

      {/* Fitur Utama */}
      <section id="fitur" className="py-16 px-6 md:px-12 bg-white text-center">
        <h3 className="text-2xl font-bold text-indigo-900 mb-2">Kenapa Harus Menggunakan Landing Page Kami?</h3>
        <p className="text-gray-600">Dirancang untuk meningkatkan interaksi dan hasil maksimal.</p>

        {/* Grid fitur dengan Pagination */}
        <div className="flex justify-center gap-6 py-8">
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
                className="w-full h-100 rounded-lg shadow-lg object-cover transition-transform hover:scale-105" 
                alt={item.title} 
              />
              <h4 className="mt-4 mb-1 text-lg font-semibold text-gray-900">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tombol Navigasi Pagination */}
        <div className="flex justify-center mt-6 gap-4">
          <button onClick={prevSlide} className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition">
            <FaArrowLeft />
          </button>
          <button onClick={nextSlide} className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition">
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Tentang Kami */}
      <section id="tentang" ref={aboutRef} className="py-16 px-6 md:px-12 text-center bg-gray-100">
        <motion.h3 
          className="text-3xl font-bold text-indigo-900"
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          Dibangun untuk <span className="text-orange-500 italic">Sukses</span>
        </motion.h3>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Kami menciptakan landing page yang dirancang khusus untuk meningkatkan konversi. 
          Cocok untuk peluncuran produk, pengumpulan prospek, dan pemasaran digital. 
          Bergabunglah dengan kami dan raih kesuksesan lebih cepat!
        </p>
      </section>
    </main>
  );
}
