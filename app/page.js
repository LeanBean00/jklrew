import React from 'react';

export default function Home() {
  // Define the servicesData array here
  const servicesData = [
    {
      icon: '💬',
      title: 'Booking Calls',
      description: 'Helps scheduling and organizing phone or face time appointments, to discuss, plan, or finalize details with clients or partners.',
    },
    {
      icon: '🔒',
      title: 'Secure Trasaction',
      description: 'Ensures data integrity and user trust through cryptographic encryption, decentralized consensus, and smart contract validation.',
    },
    {
      icon: '🎯',
      title: 'Traget Driven',
      description: 'Results-oriented professional with a relentless focus on achieving targets and driving success. Passionate about setting and surpassing goals, leveraging data-driven strategies to deliver impactful outcomes in every project.',
    },
    {
      icon: '👥',
      title: 'Certified Real Estate/Properties',
      description: 'Clear Certification using Non-Fungible Tokens (NFTs) are provided with a save track in terms and policies ',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bold text-5xl text-center">
        Discover, List & Sell Real Estate
      </h1>
      <h3 className="m-2 text-xl">
        Digital marketplace representing real state...
      </h3>
      
    </main>
  );
}