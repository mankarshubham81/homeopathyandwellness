import React from "react";


const Services = () => {
  return (
    <section 
      id="services"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Comprehensive Homeopathy Treatments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Holistic healing for both mind and body through natural homeopathic solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mind-Body Section */}
          <div className="bg-pink-50 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-pink-700 mb-4">
              Mind-Body Wellness
            </h3>
            <p className="text-gray-700 mb-4">
              Homeopathy effectively treats psychological and emotional conditions:
            </p>
            <ul className="columns-2 gap-x-6 text-gray-600">
              {[
                "Anxiety & Stress", "Depression", "Irritability", "Insecurity",
                "Phobias & Fears", "OCD", "Mood Swings", "Low Confidence",
                "Grief & Sadness", "Sleep Issues", "Panic Attacks", "Burnout"
              ].map((item, index) => (
                <li key={index} className="mb-2 flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Physical Health Section */}
          <div className="bg-green-50 rounded-xl p-6 md:p-8">
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Physical Conditions
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                { title: "Respiratory", items: ["Asthma", "Bronchitis", "Allergies"] },
                { title: "Digestive", items: ["IBS", "Acidity", "Ulcers"] },
                { title: "Musculoskeletal", items: ["Arthritis", "Back Pain", "Sciatica"] },
                { title: "Skin", items: ["Eczema", "Psoriasis", "Acne"] },
                { title: "Women's Health", items: ["PMS", "Menopause", "PCOS"] },
                { title: "Chronic", items: ["Diabetes", "Hypertension", "Migraines"] }
              ].map((category, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold text-green-800 mb-1">
                    {category.title}
                  </h4>
                  <ul className="text-gray-700">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 grid lg:grid-cols-3 gap-8 text-gray-700">
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Homeopathy in Singapore
            </h3>
            <p className="mb-2">
              Growing in popularity with proven results, homeopathy is widely recognized in:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Europe (Originated in Germany)</li>
              <li>Australia</li>
              <li>India (Since Colonial Era)</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-purple-800 mb-3">
              Treatment Approach
            </h3>
            <p>
              Based on the natural principle of <em>"Like Cures Like"</em> discovered by 
              Dr. Samuel Hahnemann (1796). Our highly diluted natural formulations:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Stimulate body's self-healing</li>
              <li>Address root causes</li>
              <li>Treat mind-body connection</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-yellow-800 mb-3">
              Treatment Scope
            </h3>
            <ul className="space-y-2">
              <li>✓ Both acute & chronic conditions</li>
              <li>✓ Safe for all ages</li>
              <li>✓ No side effects</li>
              <li>✓ Complementary therapy</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
