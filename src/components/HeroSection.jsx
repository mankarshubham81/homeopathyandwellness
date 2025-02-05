"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/herobg1.jpg"
          alt="Clinic Background"
          fill
          className="w-full h-full object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        {/* Transparent Background for Content */}
        <div className="bg-black/40 p-8 rounded-lg shadow-lg backdrop-blur-sm max-w-3xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            LITTLE INDIA TAMPINES
          </h1>
          {/* Tagline */}
          <p className="text-lg md:text-xl font-medium text-gray-300 mb-6 animate-fade-in-up delay-100">
            Your Path to Holistic Healing & Wellness
          </p>
          {/* Description */}
          <p className="text-base md:text-lg mb-8 animate-fade-in-up delay-200">
            At our Homeopathy Clinic, we focus on personalized treatments to restore balance and promote natural healing. Experience the power of holistic care tailored just for you.
          </p>
          {/* Key Features */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Personalized Treatments</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Holistic Healing Approach</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Natural Remedies</span>
            </div>
          </div>
          {/* Call-to-Actions */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
            <Link
              href="/book-appointment"
              className="bg-[#97b531] hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Book Appointment
            </Link>
            <Link
              href="/about"
              className="bg-transparent border border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;