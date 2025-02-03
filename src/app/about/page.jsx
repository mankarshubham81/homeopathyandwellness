import React from "react";
import Image from "next/image";
import { FaStethoscope, FaAward, FaPhone, FaEnvelope } from "react-icons/fa";

const DoctorInfo = () => {
  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50"
      aria-labelledby="doctor-info-heading"
      role="region"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 
            id="doctor-info-heading"
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-800">
              Your Trusted Homeopathy Specialist
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-2">
            Combining Traditional Wisdom with Modern Healthcare Practices
          </p>
        </header>

        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300">
          {/* Doctor Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-200 rounded-xl transform rotate-1 -z-10" />
            <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://homeopathyandwellness.com/wp-content/uploads/2022/07/kaTBc5qE1ReWkb6-oDdLsMhR0TtCJ1olPcCCLo1l-8JHObozsHLbo1qnLhw4TuBGgb8IGpZw1280-768x1382.jpg"
                alt="Dr. Poonam Kolkhede Verulkar, Director of Homeopathy and Wellness Clinic"
                width={400}
                height={550}
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                priority
                sizes="(max-width: 768px) 100vw, 280px"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjU1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjBmMGYwIi8+PC9zdmc+"
              />
            </div>
          </div>

          {/* Doctor Information */}
          <div className="space-y-6 text-gray-700">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Dr. Poonam Kolkhede Verulkar</h3>
              <p className="text-lg text-teal-700 font-medium flex items-center gap-2">
                <FaStethoscope className="text-teal-600" />
                Director, Homeopathy and Wellness Clinic
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <FaAward className="text-xl text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Qualifications</h4>
                  <p className="text-gray-600">B.H.M.S (Bachelor of Homeopathic Medicine and Surgery)<br />Certified Wellness Practitioner (CWP)</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <FaPhone className="text-xl text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Contact</h4>
                  <a 
                    href="tel:+6588933212"
                    className="text-blue-700 hover:text-blue-900 transition-colors inline-flex items-center gap-2"
                    aria-label="Call Dr. Poonam Kolkhede Verulkar"
                  >
                    +65-88933212
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <FaEnvelope className="text-xl text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <a
                    href="mailto:dr.poonamsg@gmail.com"
                    className="text-blue-700 hover:text-blue-900 transition-colors break-all inline-flex items-center gap-2"
                    aria-label="Email Dr. Poonam Kolkhede Verulkar"
                  >
                    dr.poonamsg@gmail.com
                  </a>
                </div>
              </li>
            </ul>

            <div className="bg-teal-50 rounded-lg p-4 mt-6 border border-teal-100 flex items-center gap-3">
              <div className="bg-teal-600 text-white p-2 rounded-lg">
                <FaAward className="text-2xl" />
              </div>
              <div>
                <p className="font-semibold text-teal-800">15+ Years Experience</p>
                <p className="text-sm text-teal-700">In holistic homeopathic treatments and patient care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorInfo;
