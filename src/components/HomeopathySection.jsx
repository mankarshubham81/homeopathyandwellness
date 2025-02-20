"use client";

import React from "react";
import Image from "next/image";

export default function HomeopathySection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Left: Image Collage */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="relative w-full h-36 sm:h-48 lg:h-52 rounded-xl overflow-hidden">
              <Image
                src="/poonam-img.jpg"
                alt="Homeopathy Image 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <div className="relative w-full h-36 sm:h-48 lg:h-52 rounded-xl overflow-hidden">
              <Image
                src="/poonam-img.jpg"
                alt="Homeopathy Image 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <div className="relative w-full h-36 sm:h-48 lg:h-52 rounded-xl overflow-hidden">
              <Image
                src="/poonam-img.jpg"
                // src="/images/homeopathy-3.jpg"
                alt="Homeopathy Image 3"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
            <div className="relative w-full h-36 sm:h-48 lg:h-52 rounded-xl overflow-hidden">
              <Image
                src="/poonam-img.jpg"
                alt="Homeopathy Image 4"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 200px"
              />
            </div>
          </div>

          {/* Right: Heading, Text, Button */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              What Is Homeopathy?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Homeopathy (Homeopathy) is a holistic method of treatment, based on
              the nature’s law “Like Cures Like”, discovered by a German scientist
              Dr. Samuel Hahnemann in 1796. He discovered that quinine bark, a
              conventional medicine for malaria, produced the same malarial
              fevers it could cure when it was taken by someone who was well.
              He experimented with other plants in the same way and realized
              that treating “like with like” was an effective way of stimulating
              the body to self-heal.
              <br />
              <br />
              These medicines are highly diluted and prepared from plants,
              metals, minerals etc. They stimulate the natural ability of our
              body to heal itself.
            </p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-green-700 transition-colors">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
