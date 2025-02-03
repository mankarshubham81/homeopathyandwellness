import React from "react";

const GoogleMap = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Our Clinic Location
        </h2>

        {/* Address Section */}
        <div className="space-y-4 mb-8 text-center">
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            92 Serangoon Road, #02<br />
            Singapore 217997
          </p>
          <a
            href="https://www.google.com/maps/dir//%2302+92+Serangoon+Rd+Singapore+217997/@1.3067634,103.8520901,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31da19b895f6abbb:0x9317a36aa599bf0!2m2!1d103.8520901!2d1.3067634?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Get Directions →
          </a>
        </div>

        {/* Map Section */}
        <div className="flex flex-col items-center">
          <iframe
            title="Google Map Location"
            className="w-full h-[400px] md:h-[600px] rounded-2xl shadow-2xl border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-[1.02]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.424365224247!2d103.85209!3d1.3067634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19b895f6abbb%3A0x9317a36aa599bf0!2s92%20Serangoon%20Rd%2C%20%2302%2C%20Singapore%20217997!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="mt-4 text-sm text-gray-500">
            Click the map to interact or{" "}
            <a
              href="https://www.google.com/maps/dir//%2302+92+Serangoon+Rd+Singapore+217997/@1.3067634,103.8520901,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31da19b895f6abbb:0x9317a36aa599bf0!2m2!1d103.8520901!2d1.3067634?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoJLDEwMjExMjM0SAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
            >
              open in Google Maps
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoogleMap;