"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const rooms = [
  { title: "Webinar LandingPage", price: "75/night", previewLink: "https://webinar1-five.vercel.app/?mode=desktop" },
  { title: "Product LandingPage", price: "120/night", previewLink: "https://landing-page1-five-eta.vercel.app/?mode=desktop" },
  { title: "Sales LandingPage", price: "95/night", previewLink: "https://salespage1.vercel.app/?mode=desktop" },
  { title: "Click-through LandingPage", price: "150/night", previewLink: "https://clickthrough1.vercel.app/?mode=desktop" },
  { title: "Lead-generation LandingPage", price: "250/night", previewLink: "https://leadgeneration1.vercel.app/?mode=desktop" },
  { title: "Portal LandingPage", price: "210/night", previewLink: "https://portalpage1.vercel.app/?mode=desktop" }
];

export default function Rooms() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <section ref={ref} id="rooms" className="bg-gradient-to-t from-gray-900 to-black py-20 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-900 py-2 px-8"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Sanstore Landing Page
        </motion.h2>
        <motion.p 
          className="mt-1 text-lg text-gray-300 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Kualitas premium yang mungkin belum pernah Anda rasakan sebelumnya.
        </motion.p>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {rooms.map((room, index) => (
          <motion.div 
            key={index}
            className="relative group rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:border-yellow-400 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          >
            {/* Title di atas */}
            <div className="absolute top-3 left-3 bg-black/60 px-4 py-2 rounded-md text-white text-lg font-semibold backdrop-blur-sm shadow-lg">
              {room.title}
            </div>

            {/* Render iframe hanya di client */}
            <div className="relative">
              {isClient ? (
                <iframe 
                  src={room.previewLink} 
                  className="w-full h-72 border-none rounded-t-xl transition-all duration-500 group-hover:scale-105"
                ></iframe>
              ) : (
                <div className="w-full h-72 flex items-center justify-center bg-gray-700 text-gray-300">
                  Loading preview...
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
            </div>

            {/* Konten */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex justify-between items-center backdrop-blur-md bg-black/50">
              {/* Harga / Keterangan */}
              <h3 className="text-lg text-gray-300 line-clamp-1">{room.title}</h3>

              {/* Tombol "Lihat Detail" */}
              <motion.button 
                className="bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-semibold shadow-lg border-2 border-transparent transition-all duration-300 hover:border-yellow-300 hover:bg-yellow-500 hover:scale-105"
                whileHover={{ scale: 1.1 }}
                onClick={() => window.open(room.previewLink, "_blank")}
              >
                DEMO
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
