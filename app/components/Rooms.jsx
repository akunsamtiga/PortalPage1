"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const projects = [
  { 
    title: "Tasty Corner", 
    thumbnail: "/images/l1.jpg",
    link: "https://leadgeneration1.vercel.app/",
    category: "Landing Page",
    description: "Nikmati setiap gigitan penuh rasa dan kenikmatan.",
    year: "2025"
  },
  { 
    title: "Rasa Nusantara", 
    thumbnail: "/images/l2.jpg",
    link: "https://lead-generation2.vercel.app/",
    category: "Landing Page",
    description: "Menghadirkan kelezatan kuliner tradisional Indonesia dengan sentuhan modern.",
    year: "2025"
  },
    { 
    title: "CitraRasa Digital", 
    thumbnail: "/images/l3.jpg",
    link: "https://lead-generation3.vercel.app/",
    category: "Landing Page",
    description: "Transformasikan bisnis kuliner Anda dengan solusi digital inovatif untuk meningkatkan daya tarik dan penjualan secara online.",
    year: "2025"
  },
  { 
    title: "LuxeElectro", 
    thumbnail: "/images/s1.jpg",
    link: "https://salespage1.vercel.app/",
    category: "Landing Page",
    description: "Bawa kemewahan ke dalam kehidupan sehari-hari dengan pilihan elektronik terbaik.",
    year: "2025"
  },
    { 
    title: "Modewear", 
    thumbnail: "/images/s2.jpg",
    link: "https://sales-page2.vercel.app/",
    category: "Landing Page",
    description: "Desain futuristik dengan pattern celestial dan cutting avant-garde.",
    year: "2025"
  },
  { 
    title: "Woodora", 
    thumbnail: "/images/s3.jpg",
    link: "https://sales-page3.vercel.app/",
    category: "Landing Page",
    description: "Kursi elegan bergaya minimalis dengan material kayu jati solid. Nyaman, tahan lama, dan cocok untuk segala gaya interior.",
    year: "2025"
  },
    { 
    title: "Zychrome", 
    thumbnail: "/images/w1.jpg",
    link: "https://webinar1-five.vercel.app/",
    category: "Landing Page",
    description: "Optimalkan kekuasaan skill kamu melalui webinar interaktif dan inspiratif dari para ahli terbaik.",
    year: "2025"
  },
  { 
    title: "Lumicast", 
    thumbnail: "/images/w2.jpg",
    link: "https://webinar2.vercel.app/",
    category: "Landing Page",
    description: "Menerangi pikiran, memperluas wawasan—webinar eksklusif untuk masa depanmu.",
    year: "2025"
  },
    { 
    title: "NextTalks", 
    thumbnail: "/images/w3.jpg",
    link: "https://webinar3.vercel.app/",
    category: "Landing Page",
    description: "Temukan ide-ide besar dan pembicara inspiratif dalam satu platform webinar profesional.",
    year: "2025"
  },
  { 
    title: "Elevinar", 
    thumbnail: "/images/w4.jpg",
    link: "https://webinar4.vercel.app/",
    category: "Landing Page",
    description: "Tingkatkan wawasanmu melalui webinar interaktif dan inspiratif dari para ahli terbaik.",
    year: "2025"
  },
    { 
    title: "Skywings", 
    thumbnail: "/images/p1.jpg",
    link: "https://landing-page1-five-eta.vercel.app/",
    category: "Landing Page",
    description: "Solusi penerbangan modern yang menghubungkan Anda dengan pengalaman terbang yang cepat, aman, dan nyaman.",
    year: "2025"
  },
  { 
    title: "Bribu", 
    thumbnail: "/images/p2.jpg",
    link: "https://productpage2.vercel.app/",
    category: "Landing Page",
    description: "Temukan desainer berbakat dan dapatkan desain profesional melalui kontes desain di Bribu.",
    year: "2025"
  },
  { 
    title: "Blog Edukasi", 
    thumbnail: "/images/w10.webp",
    link: "#",
    category: "E-Commerce",
    description: "Website blog dengan sistem manajemen konten dan tata letak yang optimal",
    year: "2020"
  },
  { 
    title: "Aplikasi Donasi", 
    thumbnail: "/images/w11.webp",
    link: "#",
    category: "Portfolio",
    description: "Platform penggalangan dana dengan integrasi pembayaran aman",
    year: "2020"
  },
  { 
    title: "Website Sekolah", 
    thumbnail: "/images/w12.webp",
    link: "#",
    category: "Portfolio",
    description: "Website informasi sekolah dengan fitur pendaftaran online dan portal siswa",
    year: "2020"
  },
    { 
    title: "Website Sekolah", 
    thumbnail: "/images/w12.webp",
    link: "#",
    category: "Portfolio",
    description: "Website informasi sekolah dengan fitur pendaftaran online dan portal siswa",
    year: "2020"
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function Portfolio() {
  const [visibleItems, setVisibleItems] = useState(6);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Semua");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 6, filteredProjects.length));
  };

  // Get all unique categories
  const allCategories = ["Semua", ...new Set(projects.map(project => project.category))];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === "Semua" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl"
      aria-label="Portofolio karya kami"
    >
      {/* Header Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-50 text-blue-600 rounded-full mb-4">
          Karya Terpilih
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Beberapa Karya <br className="hidden sm:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            Terbaik
          </span>
          {" "}Kami 
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Koleksi solusi digital berkualitas tinggi yang telah membantu berbagai bisnis berkembang
        </p>
      </motion.header>

      {/* Category Filters - Now Functional */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveFilter(category);
              setVisibleItems(6); // Reset visible items when filter changes
            }}
            className={`px-4 py-2 text-sm rounded-full border transition-colors ${
              activeFilter === category
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-400 hover:bg-gray-50 text-gray-500"
            }`}
            aria-label={`Filter by ${category}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.slice(0, visibleItems).map((project, index) => (
          <motion.article
            key={`${project.title}-${index}`}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg"
            aria-labelledby={`project-${index}-title`}
          >
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              aria-label={`Lihat proyek ${project.title}`}
            >
              <div className="relative aspect-[16/9] bg-gray-50">
                <Image
                  src={project.thumbnail}
                  alt={`Tampilan proyek ${project.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <div className="p-5 bg-white">
                <div className="flex justify-between items-start mb-2">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-50 text-blue-600 rounded">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-500">{project.year}</span>
                </div>
                
                <h2 
                  id={`project-${index}-title`}
                  className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors"
                >
                  {project.title}
                </h2>
                
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-blue-600 text-sm font-medium group-hover:underline">
                    Lihat detail
                    <svg className="ml-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </motion.article>
        ))}
      </div>

      {/* Load More Button - Only shows if there are more items to show */}
      {visibleItems < filteredProjects.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <button 
            onClick={loadMore}
            className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors inline-flex items-center gap-2"
            aria-label="Muat lebih banyak proyek"
          >
            Tampilkan Lebih Banyak
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </motion.div>
      )}

      {/* Empty State when no projects match filter */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">Tidak ada proyek yang ditemukan untuk kategori ini</p>
        </div>
      )}
    </section>
  );
}