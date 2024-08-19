"use client";
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

const Marketplace = () => {
  const [imageVisible, setImageVisible] = useState([false, false, false, false, false, false]);

  useEffect(() => {
    // Trigger the fade-in effect for each image one-by-one with delays
    const timers = imageVisible.map((_, index) =>
      setTimeout(() => {
        setImageVisible(prev => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, index * 300) // Adjust timing for staggered effect (300ms delay between each image)
    );

    return () => {
      // Clear timeouts when the component unmounts
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8"></div>
      <h1 className="font-bold text-5xl text-center">Marketplace</h1>

      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-18 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Most checked property</h2>

          {/* Flex container to center the middle image and position the others */}
          <div className="flex justify-between items-center mt-6 w-full lg:max-w-4xl mx-auto">
            {/* Left Image */}
            <div
              className={`group relative transform transition-opacity duration-1000 ease-out ${
                imageVisible[0] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              <div className="w-72 h-48 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <img
                  src="https://images.crowdspring.com/blog/wp-content/uploads/2017/08/23163415/pexels-binyamin-mellish-106399.jpg"
                  alt="Property house 1"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Basic Banglo
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Johor Bahru, Malaysia</p>
                </div>
                <p className="text-sm font-medium text-gray-900">USDt35k/nft</p>
              </div>
            </div>

            {/* Middle Image */}
            <div
              className={`group relative mx-4 transform transition-opacity duration-1000 ease-out ${
                imageVisible[1] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              <div className="w-72 h-48 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <img
                  src="https://teja12.kuikr.com/is/a/c/655x525/gallery_images/original/cf5ca32dc7c18eb.gif"
                  alt="Property house 2"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Modern Condo
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Kuala Lumpur, Malaysia</p>
                </div>
                <p className="text-sm font-medium text-gray-900">USDt20k/nft</p>
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`group relative transform transition-opacity duration-1000 ease-out ${
                imageVisible[2] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              <div className="w-72 h-48 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <img
                  src="https://teja12.kuikr.com/is/a/c/655x525/gallery_images/original/cf5f52243eb0384.gif"
                  alt="Property house 3"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Basic Condo
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Kota Kinabalu, Malaysia</p>
                </div>
                <p className="text-sm font-medium text-gray-900">USDt10k/nft</p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex justify-between items-center mt-6 w-full lg:max-w-4xl mx-auto">
            {/* Left Image */}
            <div
              className={`group relative transform transition-opacity duration-1000 ease-out ${
                imageVisible[3] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              <div className="w-72 h-48 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <img
                  src="https://www.retalkmalaysia.com/sites/default/files/styles/article-full/public/capture_1.jpg?itok=UmO98uY_"
                  alt="Property house 4"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Luxury Villa
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Osaka, Japan</p>
                </div>
                <p className="text-sm font-medium text-gray-900">USDt45k/nft</p>
              </div>
            </div>

            {/* Middle Image */}
            <div
              className={`group relative mx-4 transform transition-opacity duration-1000 ease-out ${
                imageVisible[4] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              <div className="w-72 h-48 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <img
                  src="https://www.agentadvice.com/wp-content/uploads/2020/12/shutterstock_1247473441-scaled.jpg"
                  alt="Property house 5"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Modern Villa
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Bali, Indonesia</p>
                </div>
                <p className="text-sm font-medium text-gray-900">USDt30k/nft</p>
              </div>
            </div>

            {/* Right Image */}
            <div
              className={`group relative transform transition-opacity duration-1000 ease-out ${
                imageVisible[5] ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              <div className="w-72 h-48 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <img
                  src="https://i2.au.reastatic.net/800x600/0068add0eff35a82284d0d40d02631a3cab2560f56fd1579619a786d21a65baa/main.jpg"
                  alt="Property house 6"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      Basic Theras
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Bern, Switzerland</p>
                </div>
                <p className="text-sm font-medium text-gray-900">USDt15k/nft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Marketplace;
