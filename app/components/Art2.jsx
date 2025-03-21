"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Art2() {
  return (
    <main className="relative bg-white max-w-screen text-gray-900 py-20 px-6 md:px-12 overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center text-center">
        <div className="relative w-full max-w-5xl bg-gray-900 text-white px-4 py-16 rounded-[30px]">
          {/* Heading */}
          <h6 className="text-2xl md:text-5xl font-semibold">
            Landing Page yang Dibangun untuk Publik
          </h6>
          <p className="text-gray-300 mt-4 text-lg">
            Desain modern, responsif, dan siap meningkatkan penjualan Anda.
          </p>

          {/* Gambar PNG Timbul Keluar */}
          <motion.div
            className="absolute right-[0px] top-[-90px] md:right-[-220px] md:top-[-120px] w-[200px] md:w-[500px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="/images/we1.png"
              alt="Tampilan Landing Page"
              width={500}
              height={500}
              className="z-10 h-40 md:h-48 lg:w-55 w-60"
            />
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="relative mt-20 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {/* Left Image + Text */}
          <motion.div
            className="relative rounded-[30px] overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Image
              src="/images/we2.png"
              alt="Desain Elegan"
              width={500}
              height={300}
              className="w-full h-auto rounded-[30px] bg-blue-100"
            />
          </motion.div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold">
              <em>Desain Profesional</em> untuk Performa Maksimal
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Optimalkan strategi pemasaran Anda dengan landing page yang
              dirancang untuk meningkatkan konversi dan engagement.
            </p>
          </div>

          {/* Right Image + Text */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-2xl font-semibold text-left md:text-right">
              <em>SEO</em> & Terintegrasi Analytics
            </h2>
            <p className="mt-4 text-gray-600 text-lg text-left md:text-right">
              Nikmati kemudahan menganilisis lalu lintas data pengunjung
              anda di semua perangkat.
            </p>

          </div>
          <motion.div
            className="relative rounded-[30px] overflow-hidden shadow-lg order-1 md:order-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Image
              src="/images/we3.png"
              alt="Landing Page Responsif"
              width={500}
              height={300}
              className="w-full h-auto rounded-[30px] bg-green-100"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
