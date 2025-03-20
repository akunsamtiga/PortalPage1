"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FastAverageColor } from "fast-average-color";

const rooms = [
  { 
    title: "Webinar Page", 
    previewLink: "https://webinar1-five.vercel.app/", 
    thumbnail: "/images/w1.jpg"
  },
  { 
    title: "Product Page", 
    previewLink: "https://landing-page1-five-eta.vercel.app/", 
    thumbnail: "/images/w2.jpg"
  },
  { 
    title: "Sales Page", 
    previewLink: "https://salespage1.vercel.app/", 
    thumbnail: "/images/w3.jpg"
  },
  { 
    title: "Click-through Page", 
    previewLink: "https://clickthrough1.vercel.app/", 
    thumbnail: "/images/w4.jpg"
  },
  { 
    title: "Lead-generation Page", 
    previewLink: "https://leadgeneration1.vercel.app/", 
    thumbnail: "/images/w5.jpg"
  },
  { 
    title: "Portal Page", 
    previewLink: "https://portal-page1.vercel.app/", 
    thumbnail: "/images/w6.jpg"
  }
];

export default function Rooms() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [colors, setColors] = useState({});

  useEffect(() => {
    const fac = new FastAverageColor();
    const loadColors = async () => {
      const newColors = {};

      await Promise.all(
        rooms.map(async (room, index) => {
          try {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.src = room.thumbnail;
            
            await new Promise((resolve, reject) => {
              img.onload = () => resolve();
              img.onerror = () => reject();
            });

            const color = fac.getColor(img);
            newColors[index] = color.hex;
          } catch (error) {
            console.error("Error extracting color for:", room.title, error);
            newColors[index] = "#333"; // Default warna jika gagal
          }
        })
      );

      setColors(newColors);
    };

    loadColors();
  }, []);

  return (
    <section ref={ref} id="rooms" className="bg-gradient-to-t from-gray-900 to-black py-20 text-white relative">

      {/* Bulatan Terminal (seperti di IDE) */}
      <div className="absolute top-5 left-5 flex space-x-2">
        <span className="w-3 h-3 bg-red-500 rounded-full shadow-md"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full shadow-md"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full shadow-md"></span>
      </div>

      <div className="max-w-6xl mx-auto text-center relative">
        <motion.h2 
          className="text-4xl md:text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-yellow-800 py-2 px-8"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Sanstore Landing Page
        </motion.h2>
        <motion.p 
          className="mt-1 text-lg text-yellow-100 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Kualitas premium yang mungkin belum pernah Anda rasakan sebelumnya.
        </motion.p>
      </div>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 auto-rows-auto">
        {rooms.map((room, index) => (
          <div key={index} className="group rounded-xl overflow-hidden shadow-xl border transition-all duration-300"
          style={{ borderColor: colors[index] || "#222" }} // Warna dari gambar
          >
            
            {/* Gambar Screenshot */}
            <div className="relative cursor-pointer aspect-video" onClick={() => window.open(room.previewLink, "_blank")}>
              <img 
                src={room.thumbnail} 
                alt={`Preview of ${room.title}`} 
                className="w-full h-auto object-cover rounded-t-xl transition-all duration-300 hover:brightness-90"
              />
            </div>

            {/* Konten di bawah gambar (Judul & Tombol) */}
            <motion.div 
              className="flex justify-between items-center p-4 rounded-b-xl"
              style={{ backgroundColor: colors[index] || "#222" }} // Warna dari gambar
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              {/* Judul */}
              <h3 className="text-lg text-white truncate bg-yellow-700/50 py-1 px-3 rounded-lg">{room.title}</h3>

              {/* Tombol DEMO */}
              <motion.button 
                className="px-4 py-2 rounded-md text-white text-sm font-semibold shadow-lg border-2 bg-red-900/40 border-transparent transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.1 }}
                onClick={() => window.open(room.previewLink, "_blank")}
              >
                DEMO
              </motion.button>
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
}
