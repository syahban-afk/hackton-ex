"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleSection from "@/components/mini";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Bodhi",
    role: "Ketua TPQ Darul Ilmu",
    image: "/file.svg",
    rating: 5,
    comment:
      "Terima kasih atas bantuan Al-Quran yang diberikan oleh Aksi Kebaikan. Bantuan ini bermanfaat agar masyarakat disini bisa belajar Al-Quran.",
  },
  {
    id: 2,
    name: "Dian Sumatri",
    role: "Kepala Pusat Sumber Belajar",
    image: "/file.svg",
    rating: 5,
    comment:
      "Bantuan dana pembelian buku kotak ilmu ini adalah amanah yang harus kita sampaikan ke yang berhak. Semoga santunan tersebut senantiasa menjadi limpahan amal bagi para donatur-donatur dan mencurahkan keberkahan untuk anak-anak",
  },
  {
    id: 3,
    name: "Djumati Sipirunaung",
    role: "Ketua Yayasan Ar-Rahman BEO",
    image: "/file.svg",
    rating: 5,
    comment:
      "Bantuan Laptop dan Alat belajar ini sangat bermanfaat dalam menunjang proses belajar mengajar kami, madrasah yang berada di daerah terluar Indonesia.",
  },
  {
    id: 4,
    name: "Ahmad",
    role: "Pengurus Masjid Al-Ikhlas",
    image: "/file.svg",
    rating: 5,
    comment:
      "Alhamdulillah, bantuan untuk renovasi masjid sangat membantu kami dalam memperbaiki fasilitas ibadah untuk jamaah.",
  },
  {
    id: 5,
    name: "Sarah",
    role: "Guru Madrasah",
    image: "/file.svg",
    rating: 5,
    comment:
      "Program beasiswa untuk santri sangat membantu anak-anak yang kurang mampu untuk tetap bisa menuntut ilmu.",
  },
  {
    id: 6,
    name: "Rahmat",
    role: "Koordinator Program Tahfidz",
    image: "/file.svg",
    rating: 5,
    comment:
      "Program hafalan Al-Quran yang didukung oleh Bazma telah membantu banyak santri dalam menghafal Al-Quran dengan baik.",
  },
];

export default function Main() {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  // const nextPage = () => {
  //   setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  // };

  // const prevPage = () => {
  //   setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  // };

  const getCurrentTestimonials = () => {
    const start = currentPage * cardsPerPage;
    return testimonials.slice(start, start + cardsPerPage);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center py-5 mb-8">
        <h1 className="text-3xl font-bold mb-3">
          Apa kata mereka tentang Bazma?
        </h1>
        <h6 className="text-gray-600">
          Lebih dari 30 tahun, Bazma telah menebar manfaat bagi sesama
        </h6>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getCurrentTestimonials().map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              <TitleSection
                desClass="text-center text-gray-700 text-base mb-6 h-32 overflow-auto"
                description={testimonial.comment}
              />

              <div className="flex items-center justify-center">
                <Image
                  src={testimonial.image}
                  width={50}
                  height={50}
                  alt={testimonial.name}
                  className="rounded-full"
                />
                <div className="ml-3 text-left">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-2 rounded-full transition-all ${
                currentPage === index ? "w-8 bg-blue-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}