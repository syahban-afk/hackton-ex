"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";

export default function Title(props: any) {
  const imageSrc = props.imagesrc ;
  const imgWidth = props.imgwidth || 100; // Ganti 100 dengan default yang sesuai
  const imgHeight = props.imgheight || 100;

  return (
    <div>
      <p className={props.titleClass}>{props.title}</p>
      <p className={props.desClass}>{props.description}</p>
      <div className={props.btnClass}>
        {props.button}
        <i className={props.btnIcons}></i>
      </div>
      {imageSrc && (
        <Image
          src={imageSrc}
          width={imgWidth}
          height={imgHeight}
          className={props.imgClass}
          alt={props.imgalt || "Default Image"}
        />
      )}
    </div>
  );
}
