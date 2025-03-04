"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleSection from "@/components/mini";

export default function Headers(props: any) {
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
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <TitleSection
                imagesrc="/logo.png"
                imgClass="img-fluid"
                imgheight={90}
                imgwidth={90}
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
    </div>
  );
}
