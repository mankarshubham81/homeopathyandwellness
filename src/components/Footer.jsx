import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-pink-600 text-white text-center py-6 mt-6">
      <p>&copy; 2024 Homeopathy & Wellness. All rights reserved.</p>
      <p>
        Location: Little India, Singapore |{" "}
        <a href="https://www.facebook.com/homeopathyandwellness" target="_blank" rel="noopener noreferrer" className="underline">
          Facebook Page
        </a>
      </p>
    </footer>
  );
};

export default Footer;
