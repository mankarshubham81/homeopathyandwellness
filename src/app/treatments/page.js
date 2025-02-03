import { FaLeaf, FaFlask, FaMedkit, FaUserMd, FaRegClock, FaShieldAlt } from 'react-icons/fa';
// import { MedalIcon } from "lucide-react";

const TreatmentMethods = () => {
  const methods = [
    {
      title: "Law of Similars",
      icon: <FaLeaf className="w-8 h-8 text-green-600" />,
      description: "Homeopathy treats patients with highly diluted substances that would cause similar symptoms in healthy people, following the principle 'like cures like'."
    },
    {
      title: "Potentization Process",
      icon: <FaFlask className="w-8 h-8 text-blue-600" />,
      description: "Unique serial dilution and succussion (vigorous shaking) process that enhances medicinal properties while eliminating toxicity."
    },
    {
      title: "Individualized Treatment",
      icon: <FaUserMd className="w-8 h-8 text-purple-600" />,
      description: "Personalized remedies based on complete physical, emotional, and mental symptom profile rather than disease diagnosis alone."
    },
    {
      title: "Remedy Forms",
      icon: <FaMedkit className="w-8 h-8 text-red-600" />,
      description: "Available in multiple forms including sugar pellets, liquid doses, tablets, ointments, and drops for various administration methods."
    }
  ];

  const dilutionScales = [
    { scale: "Centesimal (CH)", ratio: "1:100" },
    { scale: "Decimal (X/D)", ratio: "1:10" },
    { scale: "LM/Q Potencies", ratio: "1:50,000" },
    { scale: "Mother Tincture", ratio: "Undiluted" }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Homeopathic Treatment Methods
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Comprehensive Approaches to Natural Healing
          </p>
        </div>

        {/* Main Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {methods.map((method, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {method.icon}
                <h3 className="ml-3 text-xl font-semibold text-gray-800">{method.title}</h3>
              </div>
              <p className="text-gray-600">{method.description}</p>
            </div>
          ))}
        </div>

        {/* Dilution Methods Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaRegClock className="mr-2 text-orange-600" />
            Potency Scales & Dilution Methods
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dilutionScales.map((scale, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 text-lg">{scale.scale}</h4>
                <p className="text-gray-600 mt-2">Dilution Ratio: {scale.ratio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Methods */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaShieldAlt className="mr-2 text-blue-600" />
            Application Techniques
          </h3>
          <div className="space-y-6">
            <div className="border-l-4 border-green-600 pl-4">
              <h4 className="text-xl font-semibold text-gray-800">Oral Administration</h4>
              <p className="text-gray-600 mt-2">
                Most common method using sweet pills, liquid doses, or powders placed under the tongue
              </p>
            </div>
            <div className="border-l-4 border-purple-600 pl-4">
              <h4 className="text-xl font-semibold text-gray-800">Topical Application</h4>
              <p className="text-gray-600 mt-2">
                Ointments, creams, and compresses for skin conditions and localized issues
              </p>
            </div>
          </div>
        </div>

        {/* Safety & Consultation */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaShieldAlt className="mr-2 text-blue-600" />
            Safety & Professional Consultation
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Safety Aspects</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Non-toxic and non-addictive</li>
                <li>Safe for all ages including infants</li>
                <li>No known drug interactions</li>
                <li>Complementary to conventional medicine</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Consultation Process</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Detailed case history (1-2 hours)</li>
                <li>Analysis of mental, emotional, and physical symptoms</li>
                <li>Individualized remedy selection</li>
                <li>Follow-up monitoring and adjustment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentMethods;