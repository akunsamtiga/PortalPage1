"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FastAverageColor } from "fast-average-color";
import { MdPlayCircle } from "react-icons/md";

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
  },
  { 
    title: "Webinar Page 2", 
    previewLink: "https://webinar2.vercel.app/", 
    thumbnail: "/images/w7.png"
  },
  { 
    title: "Company Profile", 
    previewLink: "https://company-profile1.vercel.app/", 
    thumbnail: "/images/w8.png"
  }
];

export default function Rooms() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [colors, setColors] = useState({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const shapeVariants = {
    initial: { y: 0 },
    animate: { y: -scrollY * 0.3 }, // Shapes bergerak naik turun mengikuti scroll
  };

  return (
    <section ref={ref} id="rooms" className="bg-gradient-to-t from-gray-800 to-black py-20 text-white relative overflow-hidden px-4 md:px-6 lg:px-6">
      
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
          className="mt-1 text-base text-gray-100 px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Kualitas premium yang mungkin belum pernah Anda rasakan sebelumnya.
        </motion.p>
      </div>

      <div className="mt-16 grid grid-cols md:grid-cols-2 lg:grid-cols-3 space-y-10 md:space-y-0 gap-0 md:gap-4 lg:gap-5 max-w-6xl mx-auto p-3 md:p-4 lg:p-6 auto-rows-auto bg-gradient-to-t from-gray-900 to-white/10 rounded-xl">
        {rooms.map((room, index) => (
          <div key={index} className="group rounded-xl overflow-hidden shadow-xl transition-all duration-300"
          style={{ backgroundColor: colors[index] || "#222" }} // Warna dari gambar

          >
            
            {/* Gambar Screenshot */}
            <div className="relative cursor-pointer aspect-video" onClick={() => window.open(room.previewLink, "_blank")}>
              <img 
                src={room.thumbnail} 
                alt={`Preview of ${room.title}`} 
                className="w-full h-auto p-1 object-cover rounded-xl transition-all duration-300 hover:brightness-90"
              />
            </div>

            {/* Konten di bawah gambar (Judul & Tombol) */}
            <motion.div 
              className="flex justify-between items-center p-2 rounded-b-xl"
              style={{ backgroundColor: colors[index] || "#222" }} // Warna dari gambar
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              {/* Judul */}
              <h3 className="text-base text-white truncate bg-black/40 py-1 px-3 rounded-lg">{room.title}</h3>

              {/* Tombol DEMO */}
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold 
                          bg-gradient-to-l from-gray-600 to-gray-800 shadow-md hover:shadow-lg 
                          transition-colors duration-300"
                onClick={() => window.open(room.previewLink, "_blank")}
              >
                <MdPlayCircle className="text-xl text-white" />
                <span>DEMO</span>
              </button>
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  );
}
