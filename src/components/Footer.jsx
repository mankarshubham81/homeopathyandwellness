import React from "react";
import Link from "next/link";
import { Facebook, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer 
      id="contact"
      className="bg-pink-800 text-gray-100 mt-16"
      aria-label="Website footer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Clinic Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Homeopathy & Wellness</h3>
            <p className="text-sm leading-relaxed">
              Holistic Homeopathy Clinic serving Singapore with natural, 
              personalized treatments since 2010.
            </p>
            <div className="flex items-center mt-4">
              <Facebook className="w-5 h-5 mr-2" />
              <a
                href="https://www.facebook.com/homeopathyandwellness"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-200 transition-colors"
                aria-label="Visit our Facebook page"
              >
                Connect on Facebook
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <address className="not-italic">
                  Little India Road<br />
                  Singapore 123456
                </address>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+6588933212" className="hover:text-pink-200 transition-colors">
                  +65 8893 3212
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:dr.poonamsg@gmail.com" className="hover:text-pink-200 transition-colors break-all">
                  dr.poonamsg@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Mon-Sat: 9AM - 7PM<br />
                Sun: Closed
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about" className="hover:text-pink-200 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/treatments" className="hover:text-pink-200 transition-colors">
                    Treatments
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-pink-200 transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-pink-200 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Health Tips</h4>
            <p className="text-sm">Subscribe to our wellness newsletter:</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-gray-900"
                aria-label="Email for newsletter subscription"
              />
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-pink-700 mt-12 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Homeopathy & Wellness. All rights reserved.
          </p>
          <p className="text-xs mt-2 opacity-75">
            Licensed by Singapore Ministry of Health | ROHM Registration: 123456
          </p>
        </div>
      </div>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Homeopathy & Wellness",
          "url": window.location.href,
          "logo": "/logo.png",
          "description": "Holistic Homeopathy Clinic providing natural treatments in Singapore",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Little India Road",
            "addressLocality": "Singapore",
            "postalCode": "123456"
          },
          "telephone": "+65-88933212",
          "openingHours": "Mo-Sa 09:00-19:00"
        })}
      </script>
    </footer>
  );
};

export default Footer;