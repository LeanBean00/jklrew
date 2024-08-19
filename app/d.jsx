import React from 'react';

export default function Home() {
  return (
    <div>
      {/* Header Section */}
      <header className="flex justify-between p-4 bg-white shadow-md">
        <div className="flex items-center space-x-2">
          <img src="img/Share%20Estate.png" alt="Share Estate Logo" className="h-8" />
          <h1 className="text-blue-500 font-bold text-xl">Share Estate</h1>
        </div>
        <nav className="flex space-x-4">
          <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#learn" className="text-gray-700 hover:text-blue-500">Learn</a>
          <a href="#property-tokens" className="text-gray-700 hover:text-blue-500">Property Tokens</a>
          <a href="#about-us" className="text-gray-700 hover:text-blue-500">About us</a>
        </nav>
        <div className="flex space-x-4">
          <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">Start now</button>
          <a href="#sign-in" className="text-blue-500 hover:underline">Sign in/Sign up</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/path-to-background-image.jpg')" }}>
        <div className="text-center text-white bg-black bg-opacity-50 p-10 rounded-lg">
          <h2 className="text-4xl font-bold mb-4">Don't wait to buy real estate, buy real estate and wait</h2>
          <p className="text-lg mb-6">"90% of all millionaires become so through owning real estate." - Andrew Carnegie</p>
          <div className="flex items-center space-x-2">
            <input type="text" placeholder="Insert your post code or address here" className="px-4 py-2 w-64 rounded-l-lg" />
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg">Search</button>
          </div>
        </div>
      </section>
    </div>
  );
}