import React from "react";
import Image from "next/image";

const DoctorInfo = () => {
  return (
    <section 
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-labelledby="doctor-info-heading"
      role="region"
    >
      <div className="max-w-4xl mx-auto">
        <h2 
          id="doctor-info-heading"
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8"
        >
          Your Family Homeopathy Specialist
        </h2>
        
        <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-md">
            <Image
              src="https://homeopathyandwellness.com/wp-content/uploads/2022/07/kaTBc5qE1ReWkb6-oDdLsMhR0TtCJ1olPcCCLo1l-8JHObozsHLbo1qnLhw4TuBGgb8IGpZw1280-768x1382.jpg"
              alt="Dr. Poonam Kolkhede Verulkar, Director of Homeopathy and Wellness Clinic"
              width={400}
              height={550}
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 200px"
            />
          </div>

          <div className="space-y-4 text-gray-700">
            <h3 className="text-2xl font-semibold text-pink-700">
              Dr. Poonam Kolkhede Verulkar
            </h3>
            
            <ul className="space-y-2">
              <li className="flex items-baseline">
                <span className="w-24 flex-shrink-0 font-medium">Position:</span>
                <span>Director, Homeopathy and Wellness Clinic</span>
              </li>
              <li className="flex items-baseline">
                <span className="w-24 flex-shrink-0 font-medium">Qualification:</span>
                <span>B.H.M.S (Bachelor of Homeopathic Medicine and Surgery)</span>
              </li>
              <li className="flex items-baseline">
                <span className="w-24 flex-shrink-0 font-medium">Contact:</span>
                <a 
                  href="tel:+6588933212"
                  className="text-blue-600 hover:text-blue-800 transition-colors underline"
                  aria-label="Call Dr. Poonam Kolkhede Verulkar"
                >
                  +65-88933212
                </a>
              </li>
              <li className="flex items-baseline">
                <span className="w-24 flex-shrink-0 font-medium">Email:</span>
                <a
                  href="mailto:dr.poonamsg@gmail.com"
                  className="text-blue-600 hover:text-blue-800 transition-colors underline break-all"
                  aria-label="Email Dr. Poonam Kolkhede Verulkar"
                >
                  dr.poonamsg@gmail.com
                </a>
              </li>
            </ul>

            <div className="pt-4 mt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                15+ years experience in holistic homeopathic treatments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorInfo;