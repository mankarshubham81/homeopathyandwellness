import Image from 'next/image'
import React from 'react'

export default function AboutUs() {
  return (
    <section className="max-w-screen-lg mx-auto px-4 py-8">
      {/* Container for everything */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        
        {/* Left side: Green shape + Image */}
        <div className="relative mb-8 md:mb-0 md:mr-8">
          {/* The green shape with curved top-left and bottom-left corners */}
          <div className="bg-green-700 w-80 h-72 rounded-tl-[80px] relative">
            {/* Center the circular photo inside the shape */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* White circular background to highlight the image */}
              <div className="bg-white border-8 border-white w-46  rounded-t-full  flex items-center justify-center overflow-hidden shadow-lg mt-8 rounded-b-xl">
                <Image
                  src="/poonam-img.jpg"
                  alt="Profile of Dr. Poonam Kolkhede Verulkar"
                  width={200}
                  height={200}
                  className="object-cover rounded-b-sm shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Text content */}
        <div className="flex-1 ml-16 mt-6 text-balance ">
          {/* Heading in green */}
          <h2 className="text-green-700 text-xl font-semibold">About Us</h2>
          {/* Name */}
          <h1 className="text-2xl font-bold mt-3">
            Dr. Poonam Kolkhede Verulkar
          </h1>
          {/* Title / Position */}
          <p className="text-gray-700 mt-2">Director</p>
          {/* Degrees / Qualifications */}
          <p className="text-gray-600 mt-2">
            B.H.M.S ( Bachelor of Homeopathic Medicine and Surgery ), CCH, CGO
          </p>
          
          {/* Contact Button */}
          <button
            type="button"
            className="mt-4 inline-block px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>

      <section className="bg-lime-100 mt-12 py-12">
      <div className="max-w-7xl mx-auto ">
        {/* Three-column grid on medium+ screens, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* 1st Stat */}
          <div>
            <p className="text-4xl font-bold text-gray-900">20+</p>
            <p className="text-gray-700 mt-2">Years of Experience</p>
          </div>

          {/* 2nd Stat */}
          <div>
            <p className="text-4xl font-bold text-gray-900">5K+</p>
            <p className="text-gray-700 mt-2">Happy Patients</p>
          </div>

          {/* 3rd Stat */}
          <div>
            <p className="text-4xl font-bold text-gray-900">100+</p>
            <p className="text-gray-700 mt-2">Treatment Available</p>
          </div>
        </div>
      </div>
    </section>
    </section>
  )
}
