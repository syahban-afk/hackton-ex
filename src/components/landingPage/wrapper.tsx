"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import TitleSection from "@/components/mini";

export default function Main() {
  return (
    <div className="container-xl">
      <div className="text-center rounded-5 shadow-2xl bg-gradient-to-b from-sky-700 to-green-700 min-h-76 place-content-center ">
        <TitleSection
          title="Gabung #JadiVolunteer"
          titleClass="h1 text-white m-4"
          description="Yuk bergabung dalam setiap program kebaikan Bazma"
          desClass="text-white h5 m-4"
          button="Daftar Volunteer"
          btnClass="text-white bg-rose-600 rounded-5 p-2 btn btn-danger"
        />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
