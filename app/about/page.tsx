"use client";
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const About = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [paragraphVisible, setParagraphVisible] = useState([false, false, false]);
  const [benefitVisible, setBenefitVisible] = useState([false, false, false, false]);

  useEffect(() => {
    // Trigger the header animation after the component is mounted
    setHeaderVisible(true);

    // Trigger paragraph animations with delays for smoother effects
    setTimeout(() => setParagraphVisible([true, false, false]), 300);
    setTimeout(() => setParagraphVisible([true, true, false]), 600);
    setTimeout(() => setParagraphVisible([true, true, true]), 900);

    // Trigger benefit animations with delays for staggered effects
    setTimeout(() => setBenefitVisible([true, false, false, false]), 1200);
    setTimeout(() => setBenefitVisible([true, true, false, false]), 1500);
    setTimeout(() => setBenefitVisible([true, true, true, false]), 1800);
    setTimeout(() => setBenefitVisible([true, true, true, true]), 2100);
  }, []);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-cover bg-center bg-[url('https://www.bankrate.com/2015/06/19095912/low-apprasials-and-condo-associations-can-trip-up-mortgages.jpg?auto=webp&optimize=high&crop=16:9')] pt-16">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-white opacity-80"></div>

      {/* Social Media Icons Section */}
      <div className="absolute top-4 left-4 flex space-x-4 z-20">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            alt="Facebook"
            className="w-6 h-6"
          />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="w-6 h-6"
          />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="Twitter"
            className="w-6 h-6"
          />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-6 h-6"
          />
        </a>
      </div>

      {/* FAQ Button Section */}
      <div className="absolute top-4 right-4 z-20">
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-all">
          FAQ
        </button>
      </div>

      {/* Header Section */}
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8"></div>
      <div
        className={`relative max-w-3xl w-full text-center transition-all duration-1500 ease-out transform ${
          headerVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        {/* Opaque Banner */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-100 rounded-md"></div>

        {/* Header Text */}
        <h1 className="relative font-bold text-5xl text-white p-4">About Us</h1>
      </div>

      {/* Increased Spacing Between Header and Paragraph */}
      <div className="container mx-auto px-4 lg:px-8 mt-12 max-w-3xl">
        <p
          className={`text-base leading-relaxed transition-all duration-2000 ease-out transform ${
            paragraphVisible[0] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          Our platform enables real estate tokenization using NFTs, allowing physical
          assets to be represented as digital tokens on the blockchain. Each
          NFT corresponds to a fractional ownership stake, granting investors
          voting rights, and a share of rental income or sold price.
        </p>
      </div>

      {/* Increased Spacing Between Paragraph and Section */}
      <section className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-5xl">
        {/* Benefit 1: Transparency */}
        <div
          className={`flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-2000 ease-out transform hover:translate-y-[-10px] hover:shadow-xl ${
            benefitVisible[0] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <h3 className="text-lg font-semibold text-white">Transparency</h3>
          <p className="text-gray-300 mt-2">Transparent and trustworthy platform for data storage.</p>
        </div>

        {/* Benefit 2: Traceability */}
        <div
          className={`flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-2000 ease-out transform hover:translate-y-[-10px] hover:shadow-xl ${
            benefitVisible[1] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <h3 className="text-lg font-semibold text-white">Traceability</h3>
          <p className="text-gray-300 mt-2">Real-time data acquisition.</p>
        </div>

        {/* Benefit 3: Efficiency */}
        <div
          className={`flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-2000 ease-out transform hover:translate-y-[-10px] hover:shadow-xl ${
            benefitVisible[2] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <h3 className="text-lg font-semibold text-white">Efficiency</h3>
          <p className="text-gray-300 mt-2">Fast and secure transactions.</p>
        </div>

        {/* Benefit 4: Decentralization */}
        <div
          className={`flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-2000 ease-out transform hover:translate-y-[-10px] hover:shadow-xl ${
            benefitVisible[3] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
          }`}
        >
          <h3 className="text-lg font-semibold text-white">Decentralization</h3>
          <p className="text-gray-300 mt-2">Implements a voting system for decision-making.</p>
        </div>
      </section>

      {/* "Trusted by" Section */}
      <div className="relative z-10 mt-16 text-center">
        <p className="text-lg font-semibold text-gray-700">Trusted by</p>
        <img
          src="https://cdn.prod.website-files.com/66092c4a4ffe765e2ec07651/660cfb4eb52789eecfb96f7e_Frame%201.png"
          alt="Mасhain Icon"
          className="mt-4 mx-auto w-80 h-24"
        />
      </div>
    </main>
  );
};

export default About;
