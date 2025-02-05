import Head from 'next/head';

export default function BookAppointment() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex flex-col items-center justify-center py-1 px-1 sm:px-6 lg:px-2">
      <Head>
        <title>Book Appointment - Homeopathy Doctor</title>
        <meta name="description" content="Easily book an appointment with your homeopathy doctor." />
      </Head>

      <div className="max-w-lg w-full  bg-white p-1 rounded-2xl shadow-xl transition-transform transform hover:scale-105">

        {/* Embedded Google Form */}
        <div className="mt-4 overflow-hidden rounded-lg border border-gray-300 shadow-lg">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSf3soxJKQCkQqABe1pauweo9lufM0oXnM7GIpC1zFmgmlNnAg/viewform?usp=dialog"
            width="100%"
            height="900"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Book Appointment Form"
            className="rounded-lg"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
