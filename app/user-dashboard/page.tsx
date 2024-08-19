"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserDashboard = () => {
  const [ownedAssets, setOwnedAssets] = useState(null);
  const [marketplaceAssets, setMarketplaceAssets] = useState(null);
  const [allAssetContractList, setAllAssetContractList] = useState(null);
  const [tokenTransactions, setTokenTransactions] = useState(null);
  const [activeSection, setActiveSection] = useState("My Assets"); // New state for active section

  const fetchAssetContractList = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/certificate/get-smart-contract`,
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
        throw new Error("Failed to fetch smart contract list");
      }

      const result = await response.json();
      const assets = result.result;

      if (!assets) {
        throw new Error("Assset contract list not found in the response");
      }

      setAllAssetContractList(assets);
    } catch (error) {
      console.error("Error fetching asset contract list :", error);
      toast.error("🦄 Error fetching asset contract list", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const fetchSmartContract = async (smartContractId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/certificate/get-smart-contract/${smartContractId}`,
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
        throw new Error("Failed to fetch smart contracts");
      }

      const result = await response.json();
      const transactionResult = result.result;

      setTokenTransactions(transactionResult);
      if (!transactionResult) {
        throw new Error("Smart contract not found in the response");
      }
    } catch (error) {
      console.error("Error fetching smart contracts:", error);
      toast.error("🦄 Error fetching smart contracts", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  useEffect(() => {
    const walletAddress = sessionStorage.getItem("walletAddress");
    if (walletAddress) {
      fetchAssetContractList(walletAddress);
      // fetchSmartContract(walletAddress, contract_address);
    }
  }, []);

  return (
    <div className="flex">
      <aside
        id="default-sidebar"
        className="z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto border-r-2">
          <ul className="space-y-2 font-medium">
            <li>
              <button
                onClick={() => setActiveSection("My Assets")}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:hover:bg-gray-300 group"
              >
                <span className="ms-3">My Assets</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("Marketplace")}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:hover:bg-gray-300 group"
              >
                <span className="ms-3">Marketplace</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("Transaction Record")}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:hover:bg-gray-300 group"
              >
                <span className="ms-3">Transaction Record</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection("Rental Income")}
                className="flex items-center p-2 text-gray-900 rounded-lg dark:hover:bg-gray-300 group"
              >
                <span className="ms-3">Rental Income</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 flex-grow">
        {activeSection === "My Assets" && (
          <div>
            <h2 className="flex text-xl font-bold items-center justify-center pb-2">My Assets</h2>
            <main className="flex flex-col items-center justify-center">
              {/* <h1 className="font-bold text-lg text-center">
                {tokenBalance !== null ? `${tokenBalance}` : "0"} Tokens
              </h1>
              <h1 className="font-bold text-lg text-center">
                {tokenTransactionMade !== null
                  ? `${tokenTransactionMade}`
                  : "0"}{" "}
                Transactions made
              </h1> */}

              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        To
                      </th>
                      <th scope="col" className="px-4 py-3">
                        From
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Block Number
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Transaction Hash
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Method
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Amount
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Token Name
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Symbol
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Timestamp
                      </th>
                      <th scope="col" className="px-4 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tokenTransactions &&
                      tokenTransactions.map((transaction, index) => (
                        <tr
                          key={index}
                          className="odd:bg-white even:bg-gray-50 border-b"
                        >
                          <td className="px-4 py-3">{`${transaction.to.slice(
                            0,
                            6
                          )}...${transaction.to.slice(-4)}`}</td>
                          <td className="px-4 py-3">{`${transaction.from.slice(
                            0,
                            6
                          )}...${transaction.to.slice(-4)}`}</td>
                          <td className="px-4 py-3">{transaction.status}</td>
                          <td className="px-4 py-3">
                            {transaction.blockNumber}
                          </td>
                          <td className="px-4 py-3">
                            <a
                              href={`https://etherscan.io/tx/${transaction.transactionHash}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline"
                            >
                              {transaction.transactionHash.slice(0, 10)}...
                            </a>
                          </td>
                          <td className="px-4 py-3">{transaction.method}</td>
                          <td className="px-4 py-3">
                            {(
                              transaction.amount /
                              10 ** transaction.decimal
                            ).toFixed(transaction.decimal)}
                          </td>
                          <td className="px-4 py-3">
                            {transaction.token.name}
                          </td>
                          <td className="px-4 py-3">
                            {transaction.token.symbol}
                          </td>
                          <td className="px-4 py-3">
                            {new Date(transaction.timestamp).toLocaleString()}
                          </td>
                          <td className="px-4 py-3">
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Edit
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        )}
        {activeSection === "Marketplace" && (
          <div>
            <h2 className="text-2xl font-bold">Marketplace</h2>
            {/* Content for Marketplace */}
          </div>
        )}
        {activeSection === "Transaction Record" && (
          <div>
            <h2 className="text-2xl font-bold">Transaction Record</h2>
            {/* Content for Transaction Record */}
          </div>
        )}
        {activeSection === "Rental Income" && (
          <div>
            <h2 className="text-2xl font-bold">Rental Income</h2>
            {/* Content for Rental Income */}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
