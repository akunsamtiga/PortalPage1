"use client";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export default function Art2() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Contact Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-blue-600">Tim Kami</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami siap membantu Anda membuat website profesional untuk bisnis
            </p>
          </motion.div>
          {/* Contact Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* WhatsApp */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Respon cepat via chat</p>
              <a
                href="https://wa.me/6281234567890 "
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                aria-label="Hubungi via WhatsApp"
              >
                Chat Sekarang
              </a>
            </motion.div>
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FiPhone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telepon</h3>
              <p className="text-gray-600 mb-4">Konsultasi langsung via telepon</p>
              <a
                href="tel:+6281234567890"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                aria-label="Hubungi via Telepon"
              >
                Telepon Sekarang
              </a>
            </motion.div>
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FiMail className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 mb-4">Kirim detail kebutuhan Anda</p>
              <a
                href="mailto:hello@jasawebsite.com"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                aria-label="Kirim Email"
              >
                Email Kami
              </a>
            </motion.div>
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <FiMapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lokasi</h3>
              <p className="text-gray-600 mb-4">Kantor kami di Jakarta</p>
              <a
                href="https://maps.google.com "
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                aria-label="Lihat Lokasi"
              >
                Lihat Peta
              </a>
            </motion.div>
          </div>
        </div>
      </section>

{/* Business Hours - Clean with Vertical Stripe */}
<section className="py-4 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-5xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Vertical Stripe + Icon */}
        <div className="w-full md:w-16 bg-gradient-to-r from-gray-200 to-gray-100 flex-shrink-0 relative">
          {/* Optional: Centered icon in the middle of the stripe */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <FiClock className="w-6 h-6 text-gray-700" />
          </div>
        </div>

        {/* Right Side - Schedule List */}
        <div className="p-6 md:p-10 flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Jam Operasional</h3>
          <p className="text-gray-600 mb-6">Kami siap melayani Anda selama jam kerja.</p>
          <ul className="space-y-3">
            {[
              ["Senin - Jumat", "09:00 - 17:00"],
              ["Sabtu", "09:00 - 14:00"],
              ["Minggu", "Libur"],
            ].map(([day, time], idx) => (
              <li key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700">{day}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  time === 'Libur'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-green-100 text-green-700'
                }`}>
                  {time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </div>
</section>
    </main>
  );
}