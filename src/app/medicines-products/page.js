import { FaCapsules, FaSeedling, FaClinicMedical, FaRegCheckCircle, FaFlask, FaShieldAlt } from 'react-icons/fa';

const MedicinesProducts = () => {
  const remedyTypes = [
    {
      title: "Single Remedies",
      icon: <FaSeedling className="w-8 h-8 text-green-600" />,
      description: "Individualized single-substance preparations for targeted treatment"
    },
    {
      title: "Complex Remedies",
      icon: <FaClinicMedical className="w-8 h-8 text-blue-600" />,
      description: "Combination formulas for specific symptom patterns and common conditions"
    },
    {
      title: "Mother Tinctures",
      icon: <FaFlask className="w-8 h-8 text-purple-600" />,
      description: "Undiluted plant/alcohol extracts used for herbal potency"
    },
    {
      title: "External Applications",
      icon: <FaCapsules className="w-8 h-8 text-red-600" />,
      description: "Ointments, oils, and creams for topical use"
    }
  ];

  const popularProducts = [
    {
      name: "Arnica Montana",
      use: "Trauma, Bruises, Muscle Pain",
      potency: "6CH, 30CH, 200CH"
    },
    {
      name: "Nux Vomica",
      use: "Digestive Issues, Stress",
      potency: "6X, 30CH, 200CH"
    },
    {
      name: "Allium Cepa",
      use: "Cold & Allergy Relief",
      potency: "6CH, 30CH, LM1"
    },
    {
      name: "Hypericum",
      use: "Nerve Pain, Injuries",
      potency: "6CH, 30CH, 1M"
    }
  ];

  const dosageForms = [
    { form: "Sugar Pellets", class: "text-green-600" },
    { form: "Liquid Dilutions", class: "text-blue-600" },
    { form: "Tablets", class: "text-purple-600" },
    { form: "Ointments", class: "text-red-600" },
    { form: "Eye/Ear Drops", class: "text-yellow-600" },
    { form: "Powders", class: "text-pink-600" }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Homeopathic Medicines & Products
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Safe, Natural, and Effective Healing Solutions
          </p>
        </div>

        {/* Remedy Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {remedyTypes.map((remedy, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {remedy.icon}
                <h3 className="ml-3 text-xl font-semibold text-gray-800">{remedy.title}</h3>
              </div>
              <p className="text-gray-600">{remedy.description}</p>
            </div>
          ))}
        </div>

        {/* Popular Products */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaCapsules className="mr-2 text-blue-600" />
            Commonly Used Remedies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularProducts.map((product, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 text-lg">{product.name}</h4>
                <p className="text-gray-600 mt-2">{product.use}</p>
                <div className="mt-3 bg-white px-3 py-1 rounded-full text-sm w-fit">
                  Potencies: {product.potency}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dosage Forms */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaFlask className="mr-2 text-purple-600" />
            Available Forms & Dosages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {dosageForms.map((form, index) => (
              <div key={index} className={`flex items-center ${form.class} font-medium`}>
                <FaRegCheckCircle className="mr-2" />
                {form.form}
              </div>
            ))}
          </div>
        </div>

        {/* Safety & Usage */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          <div className="bg-green-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FaShieldAlt className="mr-2 text-green-600" />
              Safe Usage Guidelines
            </h3>
            <ul className="list-disc pl-6 space-y-4 text-gray-700">
              <li>Store in cool, dry place away from strong odors</li>
              <li>Avoid touching remedies with hands - use cap</li>
              <li>Take 15 minutes before/after eating</li>
              <li>Consult practitioner for potency selection</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FaRegCheckCircle className="mr-2 text-blue-600" />
              Quality Standards
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center">
                <FaRegCheckCircle className="mr-2 text-blue-600" />
                FDA-regulated manufacturing
              </p>
              <p className="flex items-center">
                <FaRegCheckCircle className="mr-2 text-blue-600" />
                HPUS-compliant ingredients
              </p>
              <p className="flex items-center">
                <FaRegCheckCircle className="mr-2 text-blue-600" />
                Alcohol-free options available
              </p>
              <p className="flex items-center">
                <FaRegCheckCircle className="mr-2 text-blue-600" />
                Non-GMO & vegan formulations
              </p>
            </div>
          </div>
        </div>

        {/* Purchasing Guidelines */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaShieldAlt className="mr-2 text-red-600" />
            Purchasing Recommendations
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Avoid</h4>
              <ul className="list-disc pl-6 space-y-2 text-red-600">
                <li>Unlabeled mystery mixtures</li>
                <li>Products making disease claims</li>
                <li>Extreme dilution claims (beyond 200C)</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Look For</h4>
              <ul className="list-disc pl-6 space-y-2 text-green-600">
                <li>Registered homeopathic pharmacies</li>
                <li>Clear potency labeling</li>
                <li>Expiration dates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicinesProducts; 