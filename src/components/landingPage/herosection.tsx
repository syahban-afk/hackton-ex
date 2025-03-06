"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleSection from "@/components/mini";

export default function Main() {
  return (
    <div className="bg-teal-50">
      <div className="container-xl py-5">
        <div className="row">
          <div className="col-4">
            <div className="text-left">
              <TitleSection
                title="Kami Siap Melayani"
                titleClass="text-black h3"
                description="Bersama kami, berdonasi jadi lebih mudah, menyenangkan, dan penuh arti untuk mereka yang membutuhkan. Pilih salah satu layanan yang Sahabat Baik perlukan yuk."
              />
            </div>
          </div>

          <div className="col-8 d-flex flex-row justify-content-evenly">
            <div className="outline outline-offset-1 outline-1 outline-gray-200 rounded-4 text-center max-w-56">
              <TitleSection
                imagesrc="/Kalkulator.png"
                imgClass="img-fluid mx-auto my-5"
                imgheight={100}
                imgwidth={100}
                imgalt="logos"
              />
              <TitleSection
                title="Kalkulator Zakat"
                titleClass="text-black h6"
                description="Hitung kewajiban zakat, cukup masukkan nilai dan lihat hasilnya"
              />
            </div>

            <div className="outline outline-offset-1 outline-1 outline-gray-200 rounded-4 text-center max-w-56">
              <TitleSection
                imagesrc="/konfirmasi.png"
                imgClass="img-fluid mx-auto my-5"
                imgheight={100}
                imgwidth={100}
                imgalt="logos"
              />
              <TitleSection
                title="Konfirmasi Donasi"
                titleClass="text-black h6"
                description="Sudah Transfer? Yuk konfirmasi donasi Sahabat Baik agar tercatat"
              />
            </div>

            <div className="outline outline-offset-1 outline-1 outline-gray-200 rounded-4 text-center max-w-56">
              <TitleSection
                imagesrc="/jemput.png"
                imgClass="img-fluid mx-auto my-5"
                imgheight={100}
                imgwidth={100}
                imgalt="logos"
              />
              <TitleSection
                title="Jemput ZISWAF"
                titleClass="text-black h6"
                description="Tidak perlu kemana-mana, ZISWAF Sahabat Kami Jemput. Mudah bukan?"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
