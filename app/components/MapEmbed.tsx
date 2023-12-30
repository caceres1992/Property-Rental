import React from "react";

type Props = {};

function MapEmbed({}: Props) {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105908.60681328202!2d-78.19452524185179!3d33.95028428090983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89aa073117f1ab8b%3A0x3f92f138b13cb284!2sFairfield%20Inn%20%26%20Suites%20by%20Marriott%20Southport!5e0!3m2!1ses-419!2sus!4v1703640164229!5m2!1ses-419!2sus"
        className="  w-full max-w-4xl h-96 rounded-md"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

export default MapEmbed;
