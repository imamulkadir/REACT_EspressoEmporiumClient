import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";
import logo from "../assets/headerLogo.png";
import footerBg from "../assets/footerBg.jpg";
import footerBg2 from "../assets/footerBg2.jpg";

// style={{ backgroundImage: `url(${headerBg})` }}

const Footer = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center md:py-12"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 p-4 md:grid-cols-2 md:px-24">
          <div className="flex flex-col gap-4">
            <img src={logo} alt="logo" className="h-auto w-16" />
            <h2 className="font-rancho text-3xl font-bold text-[#794c23] [text-shadow:0_0_3px_#351f2a]">
              Espresso Emporium
            </h2>
            <p className="text-gray-500">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-4 text-2xl text-[#794c23]">
              <FaFacebook className="transition-all duration-300 hover:text-[#351f2a]" />
              <FaInstagram className="transition-all duration-300 hover:text-[#351f2a]" />
              <FaTwitter className="transition-all duration-300 hover:text-[#351f2a]" />
              <FaLinkedin className="transition-all duration-300 hover:text-[#351f2a]" />
            </div>
            <h2 className="font-rancho text-3xl font-bold text-[#794c23] [text-shadow:0_0_3px_#351f2a]">
              Get in Touch
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <FaPhone className="text-[#794c23]" />
                <p>+8801717171717</p>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#794c23]" />
                <p>info@espressoemporium.com</p>
              </div>
              <div className="flex items-center gap-4">
                <FaLocationArrow className="text-[#794c23]" />
                <p>123 Main St, Anytown, USA</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <div className="flex w-full flex-col gap-4 rounded-md p-4">
              <h2 className="font-rancho text-3xl font-bold text-[#794c23] [text-shadow:0_0_3px_#351f2a]">
                Connect with Us
              </h2>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-md bg-white p-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md bg-white p-2"
              />
              <textarea
                placeholder="Message"
                className="w-full rounded-md bg-white p-2"
              />
              <button className="font-rancho w-full rounded-md bg-[#794c23] p-2 text-xl text-white hover:bg-[#351f2a]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center py-4"
        style={{ backgroundImage: `url(${footerBg2})` }}
      >
        <p className="font-rancho text-center text-lg font-bold text-white">
          &copy; 2025 Espresso Emporium. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
