"use client"
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });
const HeroSection = dynamic(() => import("../components/HeroSection"));
const DoctorInfo = dynamic(() => import("../components/DoctorInfo"));
const Services = dynamic(() => import("../components/Services"));
const GoogleMap = dynamic(() => import("../components/GoogleMap.jsx"));
const Footer = dynamic(() => import("../components/Footer"));

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Announcement Banner */}
      {/* <div className="bg-green-600 text-white px-4 py-2 flex flex-col md:flex-row justify-between items-center text-center">
        <p className="text-sm md:text-base mb-2 md:mb-0">
          Please book appointment before arriving!
        </p>
        <Link
          href="#booking"
          className="bg-white text-green-600 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200 text-sm md:text-base"
        >
          Instant Appointment
        </Link>
      </div> */}

      <Navbar />
      <main>
        <HeroSection />
        <DoctorInfo />
        <Services />
        <GoogleMap />
      </main>
      <Footer />
    </div>
  );
}