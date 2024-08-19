"use client";
import React, { useState, useEffect } from "react";
import CreateWalletModal from "../Create-wallet";
import ConnectWalletModal from "../Connect-wallet";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import CreateAssetModal from "../Create-asset";
import MintAssetModal from "../Mint-asset";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import logo from "../../assets/logo.png";

const Header = () => {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState(null);
  const [isCreateWalletModalOpen, setIsCreateWalletModalOpen] = useState(false);
  const [isConnectWalletModalOpen, setIsConnectWalletModalOpen] =
    useState(false);

  const [isCreateAssetOpen, setIsCreateAssetModalOpen] = useState(false);
  const [isMintAssetModalOpen, setIsMintAssetModalOpen] = useState(false);
  const [isWalletDropdownOpen, setIsWalletDropdownOpen] = useState(false);

  useEffect(() => {
    const storedWalletAddress = sessionStorage.getItem("walletAddress");
    if (storedWalletAddress) {
      setWalletAddress(storedWalletAddress);
    }
  }, []);

  const openCreateWalletModal = () => {
    setIsCreateWalletModalOpen(true);
  };

  const closeCreateWalletModal = () => {
    setIsCreateWalletModalOpen(false);
  };

  const openConnectWalletModal = () => {
    setIsConnectWalletModalOpen(true);
  };

  const closeConnectWalletModal = () => {
    setIsConnectWalletModalOpen(false);
  };

  const openCreateAssetModal = () => {
    setIsWalletDropdownOpen(false);
    setIsCreateAssetModalOpen(true);
  };

  const closeCreateAssetModal = () => {
    setIsCreateAssetModalOpen(false);
  };

  const openMintAssetModal = () => {
    setIsWalletDropdownOpen(false);
    setIsMintAssetModalOpen(true);
  };

  const closeMintAssetModal = () => {
    setIsMintAssetModalOpen(false);
  };

  const navigateUserDashboard = () => {
    router.push("/user-dashboard");
    setIsWalletDropdownOpen(false);
  };

  const toggleWalletDropdown = () => {
    setIsWalletDropdownOpen((prevState) => !prevState);
  };

  const clearWalletAddress = () => {
    sessionStorage.removeItem("walletAddress");
    setWalletAddress(null);
    setIsWalletDropdownOpen(false);
    toast.success("Wallet Disconnected", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    router.push("/");
  };

  const handleCreateWalletSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/wallet/create-user`,
        {
          method: "POST",
          headers: {
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const result = await response.json();
      const walletAddress = result.result.wallet.wallet_address;
      sessionStorage.setItem("walletAddress", walletAddress);

      if (!walletAddress) {
        throw new Error("Wallet address not found in the response");
      }

      toast.success(
        `🦄 User created successfully!
        Wallet address: ${walletAddress}`,
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      setIsWalletDropdownOpen(true);
      closeCreateWalletModal();
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("🦄 Error creating user", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // Don't send the request if there's an error
      return;
    }
  };

  const handleConnectWalletSubmit = async ({ walletAddress }) => {
    try {
      // Use the passed-in walletAddress directly
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/wallet/wallet/${walletAddress}`,
        {
          method: "GET",
          headers: {
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Wallet Address does not exist");
      }

      const result = await response.json();
      const fetchedWalletAddress = result.result.address;
      sessionStorage.setItem("walletAddress", fetchedWalletAddress);

      if (!fetchedWalletAddress) {
        throw new Error("Wallet address not found in the response");
      }

      toast.success(
        `Wallet Connected successfully! Wallet address: ${fetchedWalletAddress}`,
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );

      setIsWalletDropdownOpen(true);
      closeConnectWalletModal();
      router.push("/user-dashboard");
    } catch (error) {
      console.error("Error connecting wallet:", error);
      toast.error("🦄 Error connecting wallet", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
  };

  const handleCreateAssetSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/certificate/create-smartcontract`,
        {
          method: "POST",
          headers: {
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create asset NFTs");
      }

      const result = await response.json();
      console.log(result);

      if (result.status != 200) {
        throw new Error("Asset NFTs creation failed");
      }

      toast.success(
        `🦄  Asset NFTs created successfully!
        Wallet address: ${walletAddress}`,
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      closeCreateAssetModal();
    } catch (error) {
      console.error("Error :", error);
      toast.error("🦄 Error creating asset NFTs", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
  };

  const handleMintCertSubmit = async (data) => {
    try {
      console.log("Data:", data);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/certificate/mint-certificate`,
        {
          method: "POST",
          headers: {
            client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
            client_secret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
            "Content-Type": "multipart/form-data",
          },
          body: data,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to mint certificate");
      }

      const result = await response.data;
      if (!walletAddress) {
        throw new Error("Wallet address not found in the response");
      }

      toast.success(
        `🦄 Certificate Minted successfully!
        Wallet address: ${walletAddress}`,
        {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      closeMintAssetModal();
    } catch (error) {
      console.error("Error minting certificate:", error);
      toast.error("🦄 Error minting certificate", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
  };

  return (
    <header className="w-full py-6 lg:py-4 relative border-b">
      <div className="container mx-auto px-8 lg:px-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">
            <Link href="/">
              <div className="flex">
                <Image
                  src={logo} // Path to your image file
                  alt="Description of the image"
                  width={35} // Desired width of the image
                  height={35} // Desired height of the image
                />
                <div className="ml-2 flex justify-center items-center">
                  ShareEstate
                </div>
              </div>
            </Link>
          </h1>
        </div>
        <div>
          <Link className="py-2 px-4" href="/marketplace">
            Marketplace
          </Link>
          <Link className="py-2 px-4" href="/about">
            About
          </Link>
        </div>
        {walletAddress ? (
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={toggleWalletDropdown}
              >
                {`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {isWalletDropdownOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1" role="none">
                  <button
                    onClick={navigateUserDashboard}
                    className="w-full py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Dashboard
                  </button>
                  <button
                    onClick={openCreateAssetModal}
                    className="w-full py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Create Asset
                  </button>
                  <button
                    onClick={openMintAssetModal}
                    className="w-full py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Mint Certificate
                  </button>
                  <button
                    onClick={clearWalletAddress}
                    className="w-full py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Disconnect Wallet
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-row gap-x-2">
            <button
              onClick={openCreateWalletModal}
              className="border rounded-md py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
            >
              Create Wallet
            </button>
            <button
              onClick={openConnectWalletModal}
              className="border rounded-md py-2 px-4 hover:bg-black hover:text-white transition-all duration-300"
            >
              Connect Wallet
            </button>
          </div>
        )}
      </div>
      <AnimatePresence>
        {isCreateWalletModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <CreateWalletModal
              onSubmit={handleCreateWalletSubmit}
              onClose={closeCreateWalletModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isConnectWalletModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <ConnectWalletModal
              onSubmit={handleConnectWalletSubmit}
              onClose={closeConnectWalletModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isCreateAssetOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <CreateAssetModal
              onSubmit={handleCreateAssetSubmit}
              onClose={closeCreateAssetModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isMintAssetModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <MintAssetModal
              onSubmit={handleMintCertSubmit}
              onClose={closeMintAssetModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </header>
  );
};

export default Header;
