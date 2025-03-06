"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleSection from "@/components/mini";

export default function Headers(props: any) {
  const [hover, setHover] = useState(false);
  return (
    <div className="sticky-top">
      <div className="bg-primary text-center p-2">
        <a href="#" className=" text-white text-decoration-none">
          <p>
            <b>Tunaikan Kewajiban Zakat.</b> Klik Disini untuk berzakat
          </p>
        </a>
      </div>

      <header className="border-bottom bg-slate-50">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 container-xl">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="place-content-center my-auto">
              <TitleSection
                imagesrc="/logo.png"
                imgClass="img-fluid"
                imgheight={100}
                imgwidth={100}
                imgalt="Logo Perusahaan"
              />
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link text-black hover:bg-sky-700 px-2">
                Beranda
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-black hover:bg-sky-700 px-2">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-black hover:bg-sky-700 px-2">
                Program Kebaikan
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-black hover:bg-sky-700 px-2">
                Zakat
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-black hover:bg-sky-700 px-2">
                Berita
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-black hover:bg-sky-700 px-2">
                Kontak
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <i className="bi bi-search"></i>
            <button type="button" className="btn btn-danger rounded-5">
              Login Donatur
            </button>
          </div>
        </div>
      </header>

      <div className="fixed bottom-10 right-10">
        <div
          className="relative flex items-center cursor-pointer group"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {hover && (
            <span className="absolute right-24 border-1 px-3 py-1 bg-white text-gray-700 text-md rounded-5 shadow-2xl transition-opacity duration-300">
              WhatsApp
            </span>
          )}
          <a
            href="#"
            className="flex items-center justify-center w-20 h-20 bg-green-500 rounded-full shadow-lg"
          >
            <svg
              className="w-12 h-12 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.528.8 4.873 2.163 6.85L4 28l7.385-2.044A11.938 11.938 0 0016 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.94 9.94 0 01-5.095-1.37l-.556-.335-4.198 1.16 1.12-4.045-.354-.558A9.939 9.939 0 016 15c0-5.523 4.477-10 10.001-10zm-2.624 5.25c-.179 0-.428.016-.65.307-.222.291-.854 1.041-.988 1.25-.133.208-.194.437-.062.729.133.292.605 1.052 1.25 1.854.884 1.115 1.576 1.465 1.792 1.583.216.118.479.116.662-.082.183-.198.762-.885.963-1.167.2-.281.41-.236.683-.14.273.096 1.74.819 2.04.968.3.15.5.22.55.344.05.125.05.729-.168 1.434-.217.704-1.276 1.38-1.773 1.667-.497.287-1.064.47-1.716.47s-1.637-.222-2.476-.833c-.84-.611-3.09-2.832-3.59-3.978-.5-1.145-.996-2.64-.637-3.458.36-.819 1.416-2.02 1.87-2.436.454-.416.996-.479 1.325-.479.329 0 .684-.03.845.56.16.59.547 1.436.595 1.542.05.106.083.23.016.377-.067.147-.244.416-.366.593z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
