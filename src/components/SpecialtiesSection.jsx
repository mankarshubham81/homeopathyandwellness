"use client";

import React from "react";
import { FaHeart, FaBrain, FaSmile, FaLungs, FaHandHoldingMedical, FaAllergies, FaEye, FaPaintBrush, FaMedkit } from "react-icons/fa";

const specialties = [
  {
    title: "Excessive anxiety",
    description: "Get consultation from our Dentistry team",
    icon: <FaSmile className="text-3xl text-green-700" />,
  },
  {
    title: "Depression",
    description: "Get consultation from our Neuro Surgery team",
    icon: <FaBrain className="text-3xl text-green-700" />,
  },
  {
    title: "Stress",
    description: "Get consultation from our Neuro Surgery team",
    icon: <FaHeart className="text-3xl text-green-700" />,
  },
  {
    title: "Asthma",
    description: "Get consultation from our Cardiology team",
    icon: <FaLungs className="text-3xl text-green-700" />,
  },
  {
    title: "Arthritis",
    description: "Get consultation from our Pharmacy team",
    icon: <FaHandHoldingMedical className="text-3xl text-green-700" />,
  },
  {
    title: "Allergy",
    description: "Get consultation from our Trained staff team",
    icon: <FaAllergies className="text-3xl text-green-700" />,
  },
  {
    title: "Conjunctivitis",
    description: "Get consultation from our DNA Mapping team",
    icon: <FaEye className="text-3xl text-green-700" />,
  },
  {
    title: "Pigmentation",
    description: "Get consultation from our Pharmacy team",
    icon: <FaPaintBrush className="text-3xl text-green-700" />,
  },
  {
    title: "Hair fall",
    description: "Get consultation from our Emergency Medical Aid team",
    icon: <FaMedkit className="text-3xl text-green-700" />,
  },
];

export default function SpecialtiesSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Specialty
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            We provide the world class services with the best medical team
          </p>
        </div>

        {/* Grid of Specialty Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {specialties.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-[#dbfbb3] hover:bg-lime-100 transition-colors rounded-xl p-6 shadow-sm"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-10 text-center">
          <button className="bg-[#24562B] text-white px-6 py-3 rounded-full font-semibold hover:bg-lime-600 transition-colors">
            Our Other Services
          </button>
        </div>
      </div>
    </section>
  );
}
