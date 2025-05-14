"use client";

import { motion } from "framer-motion";
import { FiMessageSquare, FiFileText, FiCreditCard, FiCheckCircle, FiLayers } from "react-icons/fi";

export default function ModernOrderProcess() {
  const steps = [
    {
      id: 1,
      icon: <FiMessageSquare className="text-2xl" />,
      title: "Konsultasi Awal",
      description: "Diskusikan kebutuhan website Anda melalui WhatsApp atau email kami",
      duration: "Live",
      color: "text-blue-500"
    },
    {
      id: 2,
      icon: <FiFileText className="text-2xl" />,
      title: "Penawaran Harga",
      description: "Terima proposal detail dengan breakdown harga dan timeline pengerjaan dari kami",
      duration: "1-2 Jam",
      color: "text-purple-500"
    },
    {
      id: 3,
      icon: <FiCreditCard className="text-2xl" />,
      title: "Pembayaran DP",
      description: "Lakukan pembayaran 20% untuk memulai proyek",
      duration: "1 jam",
      color: "text-green-500"
    },
    {
      id: 4,
      icon: <FiLayers className="text-2xl" />,
      title: "Proses Development",
      description: "Tim kami mengerjakan website sesuai kesepakatan",
      duration: "1x24 Jam (standart)",
      color: "text-orange-500"
    },
    {
      id: 5,
      icon: <FiCheckCircle className="text-2xl" />,
      title: "Review & Revisi",
      description: "Anda memberikan feedback dan kami melakukan penyempurnaan",
      duration: "1-2 Jam",
      color: "text-yellow-500"
    },
    {
      id: 6,
      icon: <FiCreditCard className="text-2xl" />,
      title: "Pelunasan & Serah Terima",
      description: "Pembayaran sisa dan penyerahan akses lengkap",
      duration: "Live",
      color: "text-red-500"
    }
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proses Order <span className="text-blue-600">Mudah & Transparan</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Alur sederhana untuk mendapatkan website profesional sesuai kebutuhan bisnis Anda
          </p>
        </motion.div>

        {/* Steps - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors"
            >
              <div className={`w-12 h-12 rounded-full ${step.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {step.duration}
              </div>
              {step.id === 1 && (
                <a
                  href="https://wa.me/6281234567890"
                  className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                  aria-label="Mulai konsultasi via WhatsApp"
                >
                  Mulai Konsultasi
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-10"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Pertanyaan Umum</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "Berapa lama waktu pengerjaan website?",
                  answer: "Bervariasi tergantung kompleksitas proyek, untuk standartnya 1x24 jam web sudah selesai"
                },
                {
                  question: "Apa saja yang perlu disiapkan oleh calon client?",
                  answer: "bisa berupa konten teks, gambar produk, logo, atau informasi lainnya yang ingin ditampilkan di website"
                },
                {
                  question: "Apakah ada biaya tambahan?",
                  answer: "Hanya jika ada permintaan fitur di luar kontrak awal"
                },
                {
                  question: "Bagaimana sistem pembayarannya?",
                  answer: "DP 20% di awal, 80% setelah website selesai"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-sm">
                  <h4 className="font-medium text-gray-900 mb-2">{item.question}</h4>
                  <p className="text-gray-500">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}