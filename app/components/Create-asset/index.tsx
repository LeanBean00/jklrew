"use client";
import React, { useState, useEffect } from "react";

const CreateAssetModal = ({ onSubmit, onClose }) => {
  const [wallet_address, setWalletAddress] = useState("");
  const [name, setName] = useState("");
  const [base64Image, setBase64Image] = useState('');
  const [field, setField] = useState({
    wallet_address_owner: "",
    max_supply: 0,
    name: "",
    symbol: "",
  });

  const callback_url = "https://postman-echo.com/post?";

  // Convert a file to base64 string
  const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          resolve(fileReader.result.split(',')[1]); // Extract Base64 part
        } else {
          reject(new Error('FileReader result is not a string'));
        }
      };

      fileReader.onerror = (error) => {
        reject(error);
      };

      fileReader.readAsDataURL(file);
    });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the selected file
    if (file) {
      try {
        const base64String = await toBase64(file);
        setBase64Image(base64String); // Set the Base64 image data
      } catch (error) {
        console.error('Error converting file to base64:', error);
      }
    }
  };

  useEffect(() => {
    const storedWalletAddress = sessionStorage.getItem("walletAddress");
    if (storedWalletAddress) {
      setWalletAddress(storedWalletAddress);
      updateField("wallet_address_owner", storedWalletAddress);
    }
  }, []);

  const updateField = (key: keyof typeof field, value: any) => {
    setField((prevField) => ({
      ...prevField,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ wallet_address, name, field, base64Image, callback_url });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg lg:w-96 w-3/4">
        <h2 className="text-2xl font-bold mb-8">Create Asset</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="file_input" className="block mb-2">
              Asset Image
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />

            {/* Image Preview */}
            {base64Image && (
              <div className="mt-4">
                <img
                  src={`data:image/png;base64,${base64Image}`}
                  alt="Preview"
                  className="w-20 h-auto rounded-lg border border-gray-300"
                />
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Asset Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="max_supply" className="block mb-2">
              Max Supply
            </label>
            <input
              type="number"
              id="max_supply"
              value={field.max_supply}
              onChange={(e) => updateField("max_supply", parseInt(e.target.value, 10))}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="certificate_name" className="block mb-2">
              Certificate Name
            </label>
            <input
              type="text"
              id="certificate_name"
              value={field.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="symbol" className="block mb-2">
              Certificate Symbol
            </label>
            <input
              type="text"
              id="symbol"
              value={field.symbol}
              onChange={(e) => updateField("symbol", e.target.value)}
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
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAssetModal;
