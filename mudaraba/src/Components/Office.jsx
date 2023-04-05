import React from "react";
const Office = () => {
  return (
    <div className="container">
      <h2 className="text-center fw-semibold mt-5 mb-5">Our Office</h2>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.092085344466!2d74.31449041467268!3d31.466652956942013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919036915f916f5%3A0x97666dab90a9b371!2sArbitech%20Solution!5e0!3m2!1sen!2s!4v1680514921808!5m2!1sen!2s"
          className="w-100 mb-5"
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Office;
