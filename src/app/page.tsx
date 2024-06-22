import Features from "@/components/shared/Features";
import Header from "@/components/shared/Header";
import LandingPage from "@/components/shared/LandingPage";
import Image from "next/image";
import React from "react";

export default async function Home() {
  return (
    <React.Fragment>
      <Header />
      <LandingPage />
      <Features />
    </React.Fragment>
  );
}
