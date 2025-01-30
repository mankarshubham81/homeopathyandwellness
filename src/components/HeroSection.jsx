"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/banner-fallback.jpg" // Fallback image
        >
          <source src="/clinic-video.mp4" type="video/mp4" />
          <source src="/clinic-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          LITTLE INDIA TAMPINES
        </h1>
        <p className="text-lg md:text-xl mb-8 animate-fade-in-up delay-100">
          Holistic Homeopathy & Wellness Clinic
        </p>
        <Link
          href="#booking"
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 animate-fade-in-up delay-200"
        >
          Book Consultation
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;