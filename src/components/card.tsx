"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleSection from "@/components/mini";
import { useState } from "react";


const categories = [
  {
    id: "all",
    name: "Semua",
    description: "Lihat semua campaign Aksi Kebaikan",
    icon: "🌟",
  },
  {
    id: "kewajiban",
    name: "Kewajiban",
    description: "Tunaikan kewajiban Zakat, Fidyah, dan Kafarat",
    icon: "🕌",
  },
  {
    id: "sedekah",
    name: "Sedekah",
    description: "Sedekah untuk Pendidikan kaum Dhuafa",
    icon: "🤲",
  },
  {
    id: "ramadan",
    name: "Ramadan",
    description: "Campaign Khusus Spesial Ramadan",
    icon: "🌙",
  },
];

const campaigns = [
  {
    id: 1,
    category: "kewajiban",
    title: "Zakat Penghasilan",
    desc: "Nisab 83 Gram Emas",
    action: "Hitung Zakat Disini",
  },
  {
    id: 2,
    category: "kewajiban",
    title: "Tunaikan Zakat Maal",
    desc: "Nishab 83 Gram Emas",
    action: "Tunaikan Disini",
  },
  {
    id: 3,
    category: "kewajiban",
    title: "Tunaikan Kewajiban Fidyah",
    desc: "Tunaikan Fidyah",
    action: "Rp30.000/Paket",
  },
  {
    id: 4,
    category: "sedekah",
    title: "Sedekah Al-Quran",
    desc: "Sedekah Al-Quran",
    action: "Tunaikan Disini",
  },
  {
    id: 5,
    category: "ramadan",
    title: "Makanan Berbuka Puasa",
    desc: "Paket makanan untuk berbuka",
    action: "Berbagi Disini",
  },
  {
    id: 6,
    category: "ramadan",
    title: "Parsel Lebaran untuk Masyarakat Dhuafa",
    desc: "Paket Bahagia",
    action: "Berbagi Sekarang",
  },
];

export default function Main(props: any) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCampaigns =
    activeTab === "all"
      ? campaigns
      : campaigns.filter((c) => c.category === activeTab);
  return (
    <div>
      <div className="text-center py-5">
        <h3>
          <b>Berbagai Pilihan Kebaikan</b>
        </h3>
        <p>
          Berani berbuat baik, karena kebaikan kebaikanmu hantarkan senyum dan
          <br />
          kebahagiaan kepada mereka.{" "}
          <span className="text-danger font-bold">
            Donasi Mudah mulai Rp10.000.
          </span>
        </p>
      </div>

      <div>
        <div className="container mx-auto p-6 flex">
          {/* Sidebar Tabs */}
          <div className="w-1/4 space-y-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`w-full flex items-center p-4 rounded-lg text-left transition ${
                  activeTab === cat.id
                    ? "bg-blue-600 text-white font-bold"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                <div>
                  <span className="block text-lg">{cat.name}</span>
                  <span className="block text-sm text-gray-500">
                    {cat.description}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Campaign Cards */}
          <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pl-6">
            {filteredCampaigns.map((camp) => (
              <div
                key={camp.id}
                className="bg-white shadow-md rounded-lg p-4 border"
              >
                <div className="text-blue-500 font-semibold">
                  {camp.category.charAt(0).toUpperCase() +
                    camp.category.slice(1)}
                </div>
                <h3 className="text-xl font-bold mt-1">{camp.title}</h3>
                <p className="text-gray-600">{camp.desc}</p>
                <button className="mt-3 text-red-500 font-semibold">
                  {camp.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
