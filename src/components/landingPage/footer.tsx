"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleSection from "@/components/mini";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <div>
      <footer className="bg-white ">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Image
                src="/logo.png"
                alt="Bazma Logo"
                width={150}
                height={50}
                className="mb-4"
              />
              <p className="text-gray-600 text-md">
                Yayasan Bazma (Baituzzakah Amanah Manfaat Ummah) sebagai lembaga
                yang hadir dengan nilai-nilai semangat berbagi dengan mengelola
                dana Zakat, Infak/Sedekah, Wakaf dan dana sosial lainnya.
              </p>
              <div className="mt-4">
                <Link
                  href="https://instagram.com/bazmapertamina"
                  className="text-rose-500 hover:text-rose-600"
                >
                  <i className="bi bi-instagram text-2xl"></i>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Kerjasama</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/volunteer"
                    className="text-black text-decoration-none"
                  >
                    Gabung Volunteer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Tentang Kami</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-black text-decoration-none"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link
                    href="/program"
                    className="text-black text-decoration-none"
                  >
                    Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rekening"
                    className="text-black text-decoration-none"
                  >
                    Rekening ZISWAF
                  </Link>
                </li>
                <li>
                  <Link
                    href="/penyaluran"
                    className="text-black text-decoration-none"
                  >
                    Penyaluran Donasi
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/customer"
                    className="text-black text-decoration-none"
                  >
                    Customer Relationship
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kalkulator"
                    className="text-black text-decoration-none"
                  >
                    Kalkulator Zakat
                  </Link>
                </li>
                <li>
                  <Link
                    href="/campaign"
                    className="text-black text-decoration-none"
                  >
                    Campaign
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-black text-decoration-none">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 py-4 text-center bg-blue-800 text-white text-sm">
          <h5>Copyright © 2025 Bazma. All Right Reserved.</h5>
        </div>
      </footer>
    </div>
  );
}
