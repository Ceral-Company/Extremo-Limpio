import React from "react";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices ";
import YourQuestions from "@/components/YourQuestions ";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <div>
        <NavBar />
        <Hero />
        <OurServices />
        <YourQuestions />
        <AboutUs />
    </div>
  );
}
