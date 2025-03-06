"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleSection from "@/components/mini";

export default function Main() {
  return (
    <div className="container-xl py-3">
      <main className="row p-auto">
        <div className="col-8 px-3">
          <div className="p-5 bg-orange-100 d-flex flex-row rounded-4">
            <div className="text-left my-auto">
              <TitleSection
                title="Ragam Kebaikan Bisa Ditunaikan"
                titleClass="h1 font-weight-bold py-3"
                description="Bazma siap menyambungkan kebaikan dengan para penerima manfaat agar mereka bisa berdaya."
                button="Selengkapnya"
                btnIcons="bi bi-arrow-right"
                btnClass="btn p-2 p-1 btn-success rounded-5"
              />
            </div>
            <TitleSection
              imagesrc="/human.png"
              imgClass="img-fluid"
              imgheight={800}
              imgwidth={844}
              imgalt="Logo Perusahaan"
            />
          </div>
        </div>
        <div className="bg-danger rounded-4 col-4">
          <div className="text-center mt-44">
            <TitleSection
              title="#Yuk Jadi Fundraiser"
              titleClass="text-white h3 font-weight-bold"
              description="Dapatkan peluang Pahala Jariyah dengan membagikan Campaign. Desain kami sediakan, anda tinggal sebarkan."
              desClass="text-white"
              button="Daftar Fundraiser"
              btnIcons="bi bi-arrow-right"
              btnClass="btn p-2 p-1 btn-primary rounded-5"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
