"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Inter, Poppins } from 'next/font/google';

// Load font optimal
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500']
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['600', '700']
});

export default function IllustrationHero() {
  const testimonials = [
    { id: 1, image: '/images/t3.jpg', name: 'Budi Santoso', company: 'CV Maju Jaya' },
    { id: 2, image: '/images/t2.jpg', name: 'Anita Wijaya', company: 'Toko Anugerah' },
    { id: 3, image: '/images/t1.jpg', name: 'Dewi Lestari', company: 'UMKM Sejahtera' }
  ];

  return (
    <section className={`bg-gradient-to-b from-gray-50 to-white py-20 md:py-28 ${inter.variable} ${poppins.variable}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Judul utama */}
            <h1 className="font-sans text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tingkatkan <span className="text-blue-600">Bisnis Online</span> Anda dengan Website Profesional
            </h1>
            
            {/* Deskripsi */}
            <p className="font-sans text-base md:text-lg text-gray-600 mb-8 md:mb-10 max-w-lg leading-relaxed">
              Kami spesialis pembuatan website company profile, toko online, dan landing page yang menarik dengan harga terjangkau untuk UMKM dan perusahaan.
            </p>
            
            {/* Tombol CTA */}
            <div className="flex flex-wrap gap-3 md:gap-4 mb-12 md:mb-16">
              <button className={`px-6 md:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-sans font-semibold shadow-md hover:shadow-lg text-sm md:text-base`}>
                Konsultasi Gratis
              </button>
              <button className="px-6 md:px-8 py-3 flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-sans font-medium text-sm md:text-base">
                <span>Portfolio Kami</span>
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            
            {/* Testimoni dengan Gambar */}
            <div className="flex items-center gap-4 md:gap-6">
              <div className="flex -space-x-3">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="relative w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white shadow-sm">
                    <Image
                      src={testimonial.image}
                      alt={`Klien ${testimonial.name}`}
                      fill
                      className="object-cover rounded-full"
                      sizes="(max-width: 768px) 50px, 56px"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-full border border-gray-200/50 pointer-events-none"></div>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs md:text-sm text-gray-600 font-sans mb-1">
                  Dipercaya oleh 50+ pelanggan
                </p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs md:text-sm text-gray-500 ml-1">5.0</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ilustrasi 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/2] max-w-xl mx-auto">
              <Image
                src="/images/a5.webp"
                alt="Ilustrasi pembuatan website profesional"
                fill
                priority
                quality={90}
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}