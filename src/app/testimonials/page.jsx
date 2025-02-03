// import { FaQuoteLeft, FaStar, FaUserMd, FaSmile, FaClinicMedical } from 'react-icons/fa';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       id: 1,
//       text: "Natural remedies that actually work! I feel healthier and more energetic than ever.",
//       author: { name: "David Lim" }
//     },
//     {
//       id: 2,
//       text: "The personalized approach made all the difference. My chronic migraines have reduced significantly.",
//       author: { name: "Sarah Johnson" }
//     },
//     {
//       id: 3,
//       text: "Safe for my children and effective. We've been using homeopathy for all family health needs.",
//       author: { name: "Priya Mehta" }
//     },
//     {
//       id: 4,
//       text: "Impressed by the professional consultation and long-term results. Truly holistic healing.",
//       author: { name: "Michael Chen" }
//     }
//   ];

//   const stats = [
//     { number: "95%", label: "Satisfaction Rate", icon: <FaSmile className="w-8 h-8 text-green-600" /> },
//     { number: "25+", label: "Years Experience", icon: <FaUserMd className="w-8 h-8 text-blue-600" /> },
//     { number: "50k", label: "Patients Treated", icon: <FaClinicMedical className="w-8 h-8 text-purple-600" /> }
//   ];

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Patient Experiences
//           </h2>
//           <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
//             Real Stories of Healing and Transformation
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <FaQuoteLeft className="w-6 h-6 text-gray-400 mb-4" />
//               <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
//               <div className="flex items-center">
//                 <div className="flex-1">
//                   <h3 className="font-semibold text-gray-900">{testimonial.author.name}</h3>
//                   <div className="flex mt-1 text-yellow-400">
//                     {[...Array(5)].map((_, i) => (
//                       <FaStar key={i} className="w-4 h-4" />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Statistics Section */}
//         <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
//           <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//             <FaClinicMedical className="mr-2 text-red-600" />
//             Verified Results
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
//                 <div className="flex justify-center mb-4">{stat.icon}</div>
//                 <div className="text-4xl font-bold text-gray-900">{stat.number}</div>
//                 <div className="text-gray-600 mt-2">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Success Stories */}
//         <div className="bg-blue-50 rounded-lg shadow-lg p-8">
//           <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
//             <FaSmile className="mr-2 text-blue-600" />
//             Success Highlights
//           </h3>
//           <div className="grid gap-8 md:grid-cols-2">
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h4 className="text-lg font-semibold text-gray-800 mb-3">Chronic Condition Management</h4>
//               <p className="text-gray-600">83% reported improved quality of life in arthritis patients</p>
//               <div className="mt-4 flex items-center text-green-600">
//                 <FaStar className="mr-1" />
//                 <FaStar className="mr-1" />
//                 <FaStar className="mr-1" />
//                 <FaStar className="mr-1" />
//                 <FaStar />
//                 <span className="ml-2 text-sm">4.9/5 average rating</span>
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h4 className="text-lg font-semibold text-gray-800 mb-3">Pediatric Care</h4>
//               <p className="text-gray-600">9/10 parents prefer homeopathy for childhood illnesses</p>
//               <div className="mt-4 flex items-center text-green-600">
//                 <FaStar className="mr-1" />
//                 <FaStar className="mr-1" />
//                 <FaStar className="mr-1" />
//                 <FaStar className="mr-1" />
//                 <FaStar />
//                 <span className="ml-2 text-sm">94% satisfaction rate</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 7000);

    return () => clearInterval(intervalRef.current);
  }, [nextSlide]);

  useEffect(() => {
    const handleMouseEnter = () => clearInterval(intervalRef.current);
    const handleMouseLeave = () => {
      intervalRef.current = setInterval(nextSlide, 7000);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [nextSlide]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    clearInterval(intervalRef.current);
  };

  return (
    <section
      ref={containerRef}
      className="py-16 px-4 bg-gradient-to-br from-blue-50 to-slate-100 relative"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Patients Say</h2>
        <p className="text-lg text-gray-600 mb-8">
          Hear from those who have experienced the healing power of homeopathy.
        </p>
      </div>
      <div className="relative max-w-2xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white shadow-lg rounded-xl p-6 text-center"
          >
            <FaQuoteLeft className="text-teal-500 text-3xl mx-auto mb-3" />
            <p className="text-gray-700 text-lg italic">{testimonials[activeIndex].feedback}</p>
            <div className="mt-4 flex justify-center">
              {[...Array(Math.floor(testimonials[activeIndex].rating))].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-lg" />
              ))}
              {testimonials[activeIndex].rating % 1 !== 0 && (
                <FaStar className="text-yellow-500 text-lg opacity-75" />
              )}
            </div>
            <div className="flex items-center justify-center mt-4">
              <Image
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].name}
                width={60}
                height={60}
                className="rounded-full border-2 border-teal-500 shadow-md"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mt-3">
              {testimonials[activeIndex].name}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center mt-6 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? "bg-teal-500" : "bg-gray-400 hover:bg-gray-500"
            }`}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md text-gray-700 hover:text-gray-900 transition"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white rounded-full shadow-md text-gray-700 hover:text-gray-900 transition"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

export default TestimonialCarousel;