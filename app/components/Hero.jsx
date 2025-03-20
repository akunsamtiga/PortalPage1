"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1, y: 0 });
    }
  }, [inView, controls]);

  // Fungsi untuk smooth scroll ke section "rooms"
  const scrollToRooms = () => {
    const roomsSection = document.getElementById("rooms");
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn("Elemen dengan ID 'rooms' tidak ditemukan.");
    }
  };

  // Fungsi untuk smooth scroll ke section berikutnya (default: section setelah hero)
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      console.warn("Elemen dengan ID 'next-section' tidak ditemukan.");
    }
  };

  return (
    <section 
      ref={ref} 
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/images/hotel1.jpg')" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </motion.div>

      {/* Blur Shapes (Hanya di Client) */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full blur-3xl opacity-70"
              style={{
                width: `${100 + Math.random() * 20}px`,
                height: `${100 + Math.random() * 20}px`,
                background: [
                  "rgba(255, 215, 0, 0.7)",  // Gold
                  "rgba(75, 0, 130, 0.7)",   // Indigo
                  "rgba(30, 144, 255, 0.7)", // Dodger Blue
                  "rgba(255, 69, 0, 0.7)",   // Red-Orange
                ][Math.floor(Math.random() * 4)],
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 360],
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0],
              }}
              transition={{
                duration: 2.5 + Math.random() * 1.5, 
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Badge Sanstore */}
      <motion.button
        onClick={() => router.push("/")} // Navigasi ke halaman Home
        className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-5 py-2 text-lg font-bold rounded-full shadow-lg uppercase tracking-wide transition-all duration-300 hover:bg-yellow-500 hover:scale-110 active:scale-95"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Sanstore.com
      </motion.button>


      {/* Hero Content */}
      <motion.div 
        className="relative text-center max-w-2xl px-6"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.p 
          className="text-lg uppercase tracking-wide text-gold"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Performance & SEO
        </motion.p>

        <motion.h1 
          className="text-4xl md:text-6xl font-extrabold tracking-wide leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          SOLUSI LANDING PAGE PREMIUM UNTUK BISNIS
        </motion.h1>

        <motion.p 
          className="mt-3 text-lg text-gray-300 drop-shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Desain Eksklusif & Responsif di semua perangkat.
        </motion.p>

        {/* CTA Lihat Preview dengan Smooth Scroll */}
        <motion.button 
          onClick={scrollToRooms}
          className="mt-6 inline-block bg-gray-900 text-gray-100 px-4 py-2 text-lg rounded-md shadow-lg transition-transform duration-300 hover:bg-[#ffffff20] hover:scale-110 hover:text-white hover:duration-500 hover:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          Lihat Preview
        </motion.button>
      </motion.div>

      {/* Scroll Down Icon */}
      <motion.div 
        className="absolute bottom-15 left-1/2 transform -translate-x-1/2 cursor-pointer text-gray-300"
        onClick={scrollToNextSection}
        animate={{ y: [0, 10, 0] }} // Animasi naik-turun
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDownIcon className="w-10 h-10 text-gray-300 hover:text-white transition-colors duration-300" />
      </motion.div>
    </section>
  );
}
