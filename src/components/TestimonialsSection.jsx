"use client";
import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// Sample testimonials data
const testimonialsData = [
  {
    id: 1,
    name: "Michael",
    role: "Patient",
    feedback:
      "Amazing team and amazing treatment from the best doctor in the world.",
    avatar: "/avatars/avatar-1.png",
  },
  {
    id: 2,
    name: "Sarah",
    role: "Patient",
    feedback:
      "The care I received was exceptional. Truly grateful for their support.",
    avatar: "/avatars/avatar-2.png",
  },
  {
    id: 3,
    name: "David",
    role: "Patient",
    feedback:
      "Professional and compassionate service. Highly recommend this team!",
    avatar: "/avatars/avatar-3.png",
  },
  {
    id: 4,
    name: "Emily",
    role: "Patient",
    feedback:
      "I felt like family here. The staff went above and beyond for me.",
    avatar: "/avatars/avatar-4.png",
  },
  {
    id: 5,
    name: "James",
    role: "Patient",
    feedback:
      "Top-notch medical care and a warm, welcoming environment. Thank you!",
    avatar: "/avatars/avatar-5.png",
  },
];

export default function TestimonialsSection() {
  const scrollRef = useRef(null);

  /**
   * Scroll the testimonial list left or right by one "view" (the container width).
   */
  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;

    // Calculate the next position
    const scrollAmount =
      direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;

    // Ensure we don't scroll beyond the container's bounds
    const maxScrollLeft = scrollWidth - clientWidth;
    const nextScrollLeft = Math.max(0, Math.min(scrollAmount, maxScrollLeft));

    scrollRef.current.scrollTo({
      left: nextScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-lime-100 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading, subheading, and controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          {/* Text Content */}
          <div className="max-w-xl mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              What Our Patients Say
            </h2>
            <p className="text-gray-600 mt-4">
              We treat our patients like family. Here’s what they have to say
              about our services.
            </p>
          </div>
          {/* Slider Controls */}
          {testimonialsData.length > 1 && (
            <div className="flex items-center space-x-4">
              <button
                type="button"
                aria-label="Scroll left"
                className="p-2 bg-white rounded-full shadow-md hover:bg-lime-200 transition-colors"
                onClick={() => handleScroll("left")}
              >
                <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
              </button>
              <button
                type="button"
                aria-label="Scroll right"
                className="p-2 bg-white rounded-full shadow-md hover:bg-lime-200 transition-colors"
                onClick={() => handleScroll("right")}
              >
                <ChevronRightIcon className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          )}
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="snap-center flex-shrink-0 w-72 sm:w-80 lg:w-96 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Quotation Icon */}
              <div className="text-lime-500 text-4xl mb-4">“</div>
              {/* Feedback */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.feedback}
              </p>
              {/* Footer: Avatar, Name, Role */}
              <div className="flex items-center space-x-4">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-lime-500"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-lime-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}