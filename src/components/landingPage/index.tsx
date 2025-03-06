// import Image from "next/image";
"use client";

import Headers from "@/components/landingPage/header";
import Main from "@/components/landingPage/mainhero";
import MainSection from "@/components/landingPage/herosection";
import Card from "@/components/landingPage/card";
import Comment from "@/components/landingPage/comment"
import Wrapper  from "@/components/landingPage/wrapper";
import Footer from "@/components/landingPage/footer"

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
      <Footer />
    </div>
  );
}
