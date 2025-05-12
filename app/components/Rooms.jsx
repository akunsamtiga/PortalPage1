"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Data rooms
const rooms = [
  { title: "Webinar Page", previewLink: "https://webinar1-five.vercel.app/ ", thumbnail: "/images/w1.jpg" },
  { title: "Product Page", previewLink: "https://landing-page1-five-eta.vercel.app/ ", thumbnail: "/images/w2.jpg" },
  { title: "Sales Page", previewLink: "https://salespage1.vercel.app/ ", thumbnail: "/images/w3.jpg" },
  { title: "Click-through Page", previewLink: "https://clickthrough1.vercel.app/ ", thumbnail: "/images/w4.jpg" },
  { title: "Lead-generation Page", previewLink: "https://leadgeneration1.vercel.app/ ", thumbnail: "/images/w5.jpg" },
  { title: "Portal Page", previewLink: "https://portal-page1.vercel.app/ ", thumbnail: "/images/w6.jpg" },
  { title: "Webinar Page 2", previewLink: "https://webinar2.vercel.app/ ", thumbnail: "/images/w7.png" },
  { title: "Company Profile", previewLink: "https://company-profile1.vercel.app/ ", thumbnail: "/images/w8.png" },
];

// Variasi animasi untuk tiap card
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Rooms() {
  const controlsArray = rooms.map(() => useAnimation());
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScroll = (controls) => {
    const elements = document.querySelectorAll(".room-card");
    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && !hasAnimated) {
        controls[index].start("visible");
      }
    });
  };

  // Trigger awal saat komponen dimount
  useEffect(() => {
    const timer = setTimeout(() => {
      handleScroll(controlsArray);
      setHasAnimated(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Tambahkan event scroll untuk trigger satu kali
  useEffect(() => {
    if (hasAnimated) return;

    const onScroll = () => {
      handleScroll(controlsArray);
      window.removeEventListener("scroll", onScroll);
      setHasAnimated(true);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [controlsArray, hasAnimated]);

  return (
    <section className="bg-white text-white py-20 px-4 sm:px-6 lg:px-8 md:max-w-5xl xl:max-w-7xl mx-auto">
      {/* Terminal Indicator */}
      <div className="relative bottom-5 left-5 flex space-x-2 z-10">
        <span className="w-3 h-3 bg-red-500 rounded-full shadow-md"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full shadow-md"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full shadow-md"></span>
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left md:max-w-5xl xl:max-w-7xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-yellow-400 to-orange-800 pb-2">
          All Creative Works, Selected Projects.
        </h2>
        <p className="mt-4 text-yellow-500">I choose selected projects to show based on idea, visual, and execution.</p>
      </motion.div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {rooms.map((room, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate={controlsArray[index]}
            ref={(el) => {
              const element = el;
              if (element && !hasAnimated) {
                const observer = new IntersectionObserver(
                  (entries) => {
                    if (entries[0].isIntersecting && !hasAnimated) {
                      controlsArray[index].start("visible");
                      setHasAnimated(true);
                      observer.disconnect();
                    }
                  },
                  { rootMargin: "0px 0px -100px 0px" }
                );
                observer.observe(element);
              }
            }}
            className="room-card group relative aspect-video overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 cursor-pointer"
          >
            {/* Thumbnail Image */}
            <Image
              src={room.thumbnail}
              alt={room.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay Gradient untuk tombol */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            {/* Tombol Explore di dalam gambar */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-10">
              <Link
                href={room.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-black text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm hover:bg-emerald-500 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Explore
                <svg
                  className="w-5 h-5 rotate-45 group-hover:rotate-90 transition-transform duration-300"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}