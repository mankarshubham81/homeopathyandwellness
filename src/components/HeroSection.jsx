"use client";

import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[90vh] flex"
      aria-label="Hero Section"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/herobg1.png" // Replace with your actual background image
          alt="Hero Background"
          fill
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Optional Overlay for better text contrast */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-20 -z-10" /> */}

      {/* Content Container */}
      <div className="relative z-10 container mx-auto md:mx-24 px-4 flex my-4 flex-col md:flex-row text-center md:justify-between gap-8 md:gap-4">
        
        {/* Left Side: Logo + Domain */}
        <div className="flex flex-col items-center md:items-start md:mt-4">
          {/* Replace with your actual logo image */}
          <Image 
            src="/homeopathyandwellnessLogo.jpg" 
            alt="Homeopathic Cure Logo"
            width={140} 
            height={70}
            className="mb-2 rounded-lg"
          />
          <p className="text-white font-semibold text-sm md:text-base">
            Homeopathyandwellness.com
          </p>
        </div>

        {/* Right Side: Headline, Subtext, CTA */}
        <div className="text-center items-center md:text-right md:mt-8  my-2 max-w-md">
          <h1 className="text-3xl md:text-5xl font-bold text-center items-center text-white mb-4">
            Get Expert Medical Consultation!
          </h1>
          <p className="text-white text-center items-center text-base md:text-lg mb-6">
            Our doctors provide expert medical advice and consultation.
            Get in touch with our team to discuss.
          </p>
          <div className="text-center items-center">
          <button className="bg-[#dbfbb3] font-semibold py-3 px-7 rounded-full shadow-md hover:bg-lime-600 transition-colors">
            Book Appointment
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}
