import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Contact Doctor</h1>
          <p className="mt-2 text-sm text-gray-600">We are here to assist you. Please find our clinic details below.</p>
        </div>

        {/* Clinic Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Little India Location */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-900">Little India</h2>
            <p className="mt-2 text-gray-700">
              92 Serangoon Road, SG-217997
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Mon-Fri:</span> 05:30 PM – 08:30 PM
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Sat-Sun:</span> 11:30 AM – 05:00 PM
              </p>
            </div>
          </div>

          {/* Tampines Location */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-900">Tampines</h2>
            <p className="mt-2 text-gray-700">
              Block 730, Tampines Street 71, SG-520730
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Mon-Thu:</span> 10:30 AM – 01:30 PM
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
          <div className="mt-4 space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Phone:</span> +65-88933212
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Email:</span> dr.poonamsg@gmail.com
            </p>
            <p className="text-gray-700">
              <span className="font-medium">WhatsApp:</span>{' '}
              <a href="https://api.whatsapp.com/send?phone=6588933212&text=Hello%20Doctor,%20I%20would%20like%20to%20book%20appointment.%20Please%20suggest%20your%20suitable%20timing.%" className="text-blue-600 hover:underline">
                Click here to send a message
              </a>
            </p>
          </div>
        </div>

        {/* Additional Notes */}
        <div className="text-center text-sm text-gray-500">
          <p>We are closed on public holidays.</p>
          <p>All consultations are by appointment only.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;