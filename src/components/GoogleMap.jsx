import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full flex justify-center my-8">
      <iframe
        title="Google Map Location"
        className="w-full md:w-3/4 h-80 md:h-96 rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.424365224247!2d103.85209!3d1.3067634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19b895f6abbb%3A0x9317a36aa599bf0!2s92%20Serangoon%20Rd%2C%20%2302%2C%20Singapore%20217997!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
