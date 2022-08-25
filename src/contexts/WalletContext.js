import React, { createContext, useState, useContext, useEffect } from "react";
import { ethers } from "ethers";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const connectWalletHandler = () => {
    if (window.ethereum !== "undefined") {
      const connect = window.ethereum.isConnected();
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          handleAccountsChanged(accounts[0]);
          setIsConnected(connect);
          setProvider(window.ethereum);
        });
    } else {
      setErrorMessage("install MetaMask");
    }
  };

  const disconnectWalletHandler = () => {
    window.ethereum.on("disconnect", (error) => console.log(error));
  };

  const handleAccountsChanged = (newAccount) => {
    setAccount(newAccount);
    getBalance(newAccount.toString());
  };

  const getBalance = (address) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((bal) => {
        setBalance(ethers.utils.formatEther(bal));
      });
  };

  window.ethereum.on("accountsChanged", function (accounts) {
    handleAccountsChanged(accounts[0]);
  });

  window.ethereum.on("chainChanged", (chainId) => {
    console.log(chainId);
    window.location.reload();
  });

  useEffect(() => {
    if (window.ethereum.isConnected()) {
      console.log(window.ethereum);
      console.log(window.ethereum);
      window.ethereum.on("accountsChanged", function (accounts) {
        handleAccountsChanged(accounts[0]);
      });
    }
  }, []);

  return (
    <WalletContext.Provider
      value={{
        provider,
        errorMessage,
        account,
        balance,
        isConnected,
        connectWalletHandler,
        disconnectWalletHandler,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
