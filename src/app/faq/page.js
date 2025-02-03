"use client"
import { useState } from 'react';
import { FaQuestionCircle, FaClock, FaCapsules, FaUserMd, FaShieldAlt } from 'react-icons/fa';

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      title: "General Questions",
      icon: <FaQuestionCircle className="w-6 h-6 text-blue-600" />,
      items: [
        {
          question: "What conditions can homeopathy treat?",
          answer: "Homeopathy addresses acute and chronic conditions including allergies, respiratory issues, digestive disorders, skin conditions, stress-related problems, and chronic pain. It's effective for both physical and emotional health concerns."
        },
        {
          question: "How long does homeopathic treatment take?",
          answer: "Acute conditions may show improvement within hours/days. Chronic conditions typically require longer treatment (months) depending on case complexity and patient responsiveness."
        }
      ]
    },
    {
      title: "Treatment Process",
      icon: <FaClock className="w-6 h-6 text-green-600" />,
      items: [
        {
          question: "What happens in a homeopathic consultation?",
          answer: "Detailed 1-2 hour session examining physical symptoms, emotional state, lifestyle, and medical history. Includes analysis of symptom patterns and characteristic manifestations."
        },
        {
          question: "How are remedies selected?",
          answer: "Remedies chosen based on totality of symptoms through repertorization (symptom matching) and materia medica study. Selection considers unique symptom expressions and patient constitution."
        }
      ]
    }
  ];

  const safetyFAQ = [
    {
      question: "Are homeopathic remedies safe?",
      answer: "FDA-regulated substances with ultra-diluted active ingredients. Non-toxic, non-addictive, and safe for all ages including pregnant women and infants when properly prescribed."
    },
    {
      question: "Can I use with conventional medicine?",
      answer: "Homeopathy complements conventional treatments but should be coordinated with healthcare providers. No known drug interactions, but professional guidance recommended."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Homeopathy FAQs
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Answers to Common Questions About Homeopathic Treatment
          </p>
        </div>

        {/* Main FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="ml-3 text-2xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-gray-200 last:border-0 pb-4">
                    <button
                      className="flex justify-between items-center w-full text-left"
                      onClick={() => toggleFAQ(`${catIndex}-${itemIndex}`)}
                    >
                      <span className="text-lg font-medium text-gray-900">{item.question}</span>
                      <span className="ml-4 text-blue-600">
                        {openIndex === `${catIndex}-${itemIndex}` ? '-' : '+'}
                      </span>
                    </button>
                    {openIndex === `${catIndex}-${itemIndex}` && (
                      <p className="mt-2 text-gray-600">{item.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Safety & Compatibility */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaShieldAlt className="mr-2 text-red-600" />
            Safety & Compatibility
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {safetyFAQ.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.question}</h4>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Consultation Process */}
        <div className="bg-blue-50 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FaUserMd className="mr-2 text-purple-600" />
            Consultation Process
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-blue-600 mb-2"><FaClock className="w-8 h-8" /></div>
              <h4 className="font-semibold text-gray-800 mb-2">Duration</h4>
              <p className="text-gray-600">Initial consultation: 1-2 hours<br/>Follow-ups: 30-45 minutes</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-green-600 mb-2"><FaCapsules className="w-8 h-8" /></div>
              <h4 className="font-semibold text-gray-800 mb-2">Remedy Types</h4>
              <p className="text-gray-600">Pellets, Liquid Doses, Ointments, Tablets, Eye Drops</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-purple-600 mb-2"><FaUserMd className="w-8 h-8" /></div>
              <h4 className="font-semibold text-gray-800 mb-2">Follow-ups</h4>
              <p className="text-gray-600">Typically every 4-6 weeks for chronic cases</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="text-red-600 mb-2"><FaShieldAlt className="w-8 h-8" /></div>
              <h4 className="font-semibold text-gray-800 mb-2">Safety</h4>
              <p className="text-gray-600">Non-invasive, No side effects, Non-addictive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQComponent;