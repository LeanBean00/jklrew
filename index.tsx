"use client";
import React, { useState, useEffect } from "react";

const TransferTokenModal = ({ onSubmit, onClose }) => {
  const [wallet_address, setWalletAddress] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [contract_address, setContractAddress] = useState("");
  const callback_url = "https://postman-echo.com/post?";

  useEffect(() => {
    const storedWalletAddress = sessionStorage.getItem("walletAddress");
    if (storedWalletAddress) {
      setWalletAddress(storedWalletAddress);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ wallet_address, to, amount, contract_address, callback_url });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-96 w-3/4">
        <h2 className="text-2xl font-bold mb-8">Transfer Token</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="walletAddress" className="block mb-2">
              Wallet Address
            </label>
            <input
              type="text"
              id="walletAddress"
              value={wallet_address}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="to" className="block mb-2">
              Recipient Address
            </label>
            <input
              type="text"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contractAddress" className="block mb-2">
              Contract Address
            </label>
            <input
              type="text"
              id="contractAddress"
              value={contract_address}
              onChange={(e) => setContractAddress(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-2">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4 hidden">
            <label htmlFor="callbackUrl" className="block mb-2">
              Callback URL
            </label>
            <input
              type="text"
              id="callbackUrl"
              value={callback_url}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Transfer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransferTokenModal;

