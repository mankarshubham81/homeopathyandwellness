"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    feedback:
      "I had been struggling with chronic allergies for years. Dr. Poonam’s treatment brought significant relief, and I feel much healthier now!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Neha Verma",
    feedback:
      "Homeopathy has truly changed my life. My migraines have reduced drastically, and I no longer rely on painkillers!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Amit Patel",
    feedback:
      "I was skeptical at first, but homeopathy worked wonders for my skin issues. My confidence is back, and I feel great!",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section
      className="py-16 px-4 bg-gradient-to-br from-blue-50 to-slate-100 relative"
      tabIndex="0"
      role="region"
      aria-label="Testimonial Carousel"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Patients Say</h2>
        <p className="text-lg text-gray-600 mb-8">
          Hear from those who have experienced the healing power of homeopathy.
        </p>
      </div>

      {/* Navigation Buttons (Overlapping Content) */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2.5 left-8 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md text-gray-700 hover:text-gray-900 transition z-10"
        aria-label="Previous testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2.5 right-8 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md text-gray-700 hover:text-gray-900 transition z-10"
        aria-label="Next testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Carousel */}
      <Slider ref={sliderRef} {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-2">
            <div
              className={`bg-white shadow-lg rounded-xl p-6 text-center transition-transform hover:scale-105`}
            >
              <FaQuoteLeft className="text-teal-500 text-3xl mx-auto mb-3 animate-bounce-slow" />
              <p className="text-gray-700 text-lg italic">{testimonial.feedback}</p>
              <div className="mt-4 flex justify-center">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-lg" />
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <FaStar className="text-yellow-500 text-lg opacity-75" />
                )}
              </div>
              <div className="flex items-center justify-center mt-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-teal-500 shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-3">
                {testimonial.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialCarousel;