// import Image from "next/image";
"use client";

import Headers from "@/components/header";
import Main from "@/components/mainhero";
import MainSection from "@/components/herosection";
import Card from "@/components/card";
import Comment from "@/components/comment"
import Wrapper  from "@/components/wrapper";

export default function Home() {
  return (
    <div>
      <Headers />
      <div className="bg-stone-100">
        <Main />
      </div>
      <MainSection />
      <Card />
      <Comment />
      <Wrapper />
    </div>
  );
}
