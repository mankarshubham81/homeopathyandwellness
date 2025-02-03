"use client";
import React from 'react';

const HomeopathySection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                The Science of Homeopathy
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8">
                A holistic approach to healing that stimulates the body's natural defenses.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Homeopathic remedies"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Historical Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Historical Roots</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Developed in 1796 by German physician Dr. Samuel Hahnemann, homeopathy emerged as a response to the harsh medical practices of the time. Hahnemann's revolutionary approach was based on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>The Law of Similars:</strong> "Like cures like" — a substance causing symptoms in healthy individuals can treat similar symptoms in sick persons.</li>
                <li><strong>The Principle of Minimum Dose:</strong> Remedies are diluted to minimize toxicity while enhancing therapeutic effects.</li>
                <li><strong>Individualized Treatment:</strong> Tailored to the patient's unique physical, emotional, and mental characteristics.</li>
              </ul>
              <p>
                By 1900, there were 22 homeopathic colleges and 15,000 practitioners in America, marking its widespread adoption.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Historical homeopathy tools"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Fundamental Principles */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Core Principles of Homeopathy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Law of Similars</h3>
              <p className="text-gray-600">
                "Like Cures Like" — A substance causing symptoms in healthy individuals can treat similar symptoms in sick persons when specially prepared.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Minimum Dose</h3>
              <p className="text-gray-600">
                Remedies are prepared through serial dilution and succussion (vigorous shaking), enhancing therapeutic effects while reducing toxicity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Individualization</h3>
              <p className="text-gray-600">
                Treatment is tailored to the patient's unique physical, emotional, and mental characteristics rather than just disease symptoms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Practice */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Modern homeopathy consultation"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contemporary Homeopathy</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Today, homeopathy is practiced in over 80 countries and recognized by the World Health Organization (WHO) as the second-largest therapeutic system globally.
              </p>
              <p>
                Modern developments include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Advanced Potency Preparation:</strong> Improved techniques for creating highly effective remedies.</li>
                <li><strong>Integration with Conventional Medicine:</strong> Used alongside modern treatments for enhanced results.</li>
                <li><strong>Evidence-Based Research:</strong> Growing body of scientific studies supporting its efficacy.</li>
                <li><strong>Standardized Manufacturing:</strong> Ensuring quality and consistency in remedies.</li>
              </ul>
              <p>
                Recent studies show approximately 200 million people worldwide use homeopathic medicines regularly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Homeopathy */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Homeopathy?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Holistic Approach</h3>
              <p className="text-gray-600">
                Homeopathy treats the whole person—mind, body, and spirit—addressing the root cause of illness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Safe for All Ages</h3>
              <p className="text-gray-600">
                Ideal for infants, children, and the elderly due to its gentle and non-toxic nature.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Substitute for Antibiotics</h3>
              <p className="text-gray-600">
                Effective alternative for many infections, reducing antibiotic resistance risks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Viral Infections</h3>
              <p className="text-gray-600">
                Proven efficacy in treating viral illnesses like flu, dengue, and chikungunya.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Avoids Surgery</h3>
              <p className="text-gray-600">
                Many conditions requiring surgery can be managed effectively with homeopathy.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Psychosomatic Ailments</h3>
              <p className="text-gray-600">
                Excellent for treating stress-related disorders, anxiety, and depression.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Is homeopathy safe during pregnancy?</h3>
            <p className="text-gray-600">
              Many homeopathic remedies are considered safe during pregnancy but should only be used under professional supervision. Always consult a qualified practitioner.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">How long does treatment take?</h3>
            <p className="text-gray-600">
              Chronic conditions may require several months of treatment, while acute illnesses often show improvement within hours or days. Individual response varies.
            </p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Can it be used with conventional medicine?</h3>
            <p className="text-gray-600">
              Homeopathy often complements conventional treatments. However, always inform all healthcare providers about any remedies you're using.
            </p>
          </div>
        </div>
      </div>

      {/* References */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-sm text-gray-500">
          <h3 className="font-semibold mb-4">References & Further Reading:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>World Health Organization - Traditional Medicine Strategy</li>
            <li>National Center for Complementary and Integrative Health (NCCIH)</li>
            <li>European Committee for Homeopathy Research</li>
            <li>Journal of Alternative and Complementary Medicine</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeopathySection;