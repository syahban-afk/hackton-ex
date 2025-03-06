"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleSection from "@/components/mini";
import { useState } from "react";

const categories = [
  {
    id: "all",
    name: "Semua",
    description: "Lihat semua campaign Aksi Kebaikan",
    icon: "/semua.webp",
  },
  {
    id: "kewajiban",
    name: "Kewajiban",
    description: "Tunaikan kewajiban Zakat, Fidyah, dan Kafarat disini",
    icon: "/zakat.webp",
  },
  {
    id: "sedekah",
    name: "Sedekah",
    description: "Sedekah untuk Pendidikan kaum Dhuafa",
    icon: "/sedekah.webp",
  },
  {
    id: "ramadan",
    name: "Ramadan",
    description: "Campaign Khusus Spesial Ramadan",
    icon: "/ramadhan.webp",
  },
];

const campaigns = [
  {
    id: 1,
    category: "kewajiban",
    title: "Zakat Penghasilan",
    desc: "Nisab 83 Gram Emas",
    action: "Hitung Zakat Disini",
    image: "/Bazma.png",
  },
  {
    id: 2,
    category: "kewajiban",
    title: "Tunaikan Zakat Maal",
    desc: "Nishab 83 Gram Emas",
    action: "Tunaikan Disini",
    image: "/Bazma.png",
  },
  {
    id: 3,
    category: "kewajiban",
    title: "Tunaikan Kewajiban Fidyah",
    desc: "Tunaikan Fidyah",
    action: "Rp30.000/Paket",
    image: "/Bazma.png",
  },
  {
    id: 4,
    category: "sedekah",
    title: "Sedekah Al-Quran",
    desc: "Sedekah Al-Quran",
    action: "Tunaikan Disini",
    image: "/Bazma.png",
  },
  {
    id: 5,
    category: "ramadan",
    title: "Makanan Berbuka Puasa",
    desc: "Paket makanan untuk berbuka",
    action: "Berbagi Disini",
    image: "/Bazma.png",
  },
  {
    id: 6,
    category: "ramadan",
    title: "Parsel Lebaran untuk Masyarakat Dhuafa",
    desc: "Paket Bahagia",
    action: "Berbagi Sekarang",
    image: "/Bazma.png",
  },
];

export default function Main() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCampaigns =
    activeTab === "all"
      ? campaigns
      : campaigns.filter((c) => c.category === activeTab);

  return (
    <div className="container mx-auto">
      <div className="text-center py-5">
        <h1 className="font-bold mb-3">
          <b>Berbagai Pilihan Kebaikan</b>
        </h1>
        <p className="text-gray-600 h6">
          Berani berbuat baik, karena kebaikan kebaikanmu hantarkan senyum dan
          kebahagiaan
          <br />
          kepada mereka.{" "}
          <span className="text-red-500 font-semibold">
            Donasi Mudah mulai Rp10.000.
          </span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-4">
        <div className="md:w-1/4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`w-full  mb-3 p-4 rounded-lg flex items-center rounded-4 ${
                activeTab === cat.id
                  ? "bg-blue-600 text-white"
                  : "bg-white border hover:bg-gray-50"
              }`}
            >
              <div className="text-left">
                <div className="font-semibold h4">{cat.name}</div>
                <div className="text-md opacity-75 ">{cat.description}</div>
              </div>
              <TitleSection
                imagesrc={cat.icon}
                imgwidth={50}
                imgheight={50}
                imgClass="img-fluid img-thumbnail stroke-cyan-500 rounded-5 mb-5 overflow-visible"
                imgalt={cat.icon}
              />
            </button>
          ))}
        </div>

        <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCampaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white rounded-lg overflow-visible shadow max-h-90"
            >
              <TitleSection
                imagesrc={campaign.image}
                imgwidth={400}
                imgheight={200}
                imgClass="img-fluid mb-2"
                imgalt={campaign.title}
              />
              <TitleSection
                titleClass="text-blue-600 text-sm p-4 pb-0"
                title={
                  campaign.category.charAt(0).toUpperCase() +
                  campaign.category.slice(1)
                }
                desClass="font-bold text-xl px-4"
                description={campaign.title}
                button={campaign.action}
                btnClass="px-4 pb-4 text-red-500 hover:text-red-600 font-semibold"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
