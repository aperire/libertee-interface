import React, { createContext, useState, useContext, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from "lib/ProviderOptions";
import { getLibertee } from "utils";

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [publickey, setPublickey] = useState();
  const [error, setError] = useState("");
  const [chainId, setChainId] = useState();
  const [network, setNetwork] = useState();
  const [signer, setSigner] = useState(null);
  const [Account, setAccount] = useState(null);
  const [Posts, setPosts] = useState([]);

  const web3Modal = new Web3Modal({
    network: "mainnet",
    cacheProvider: true,
    providerOptions,
    theme: {
      background: "#854DFF",
      main: "rgb(199, 199, 199)",
      secondary: "rgb(136, 136, 136)",
      hover: "rgba(255, 255, 255,0.2)",
    },
  });

  const connectWallet = () => {
    return async () => {
      try {
        const provider = await web3Modal.connect();
        const library = new ethers.providers.Web3Provider(provider);
        const signer = library.getSigner();
        const accounts = await library.listAccounts();
        const network = await library.getNetwork();
        setProvider(provider);
        setLibrary(library);
        setSigner(signer);
        if (accounts) {
          setPublickey(accounts[0]);
        }
        setNetwork(network);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };
  };

  const readAccount = async (address, signer) => {
    const libertee = getLibertee(signer);
    const profile = await libertee.getProfileMap(address);
    setAccount(profile);
  };

  const readFeedPosts = async (start, end, signer) => {
    try {
      var postArray = [];

      const libertee = getLibertee(signer);
      const mediaArrayLength = await libertee.getMediaArrayLength();
      for (
        var i = mediaArrayLength - start - 1;
        i > mediaArrayLength - end - 1;
        i--
      ) {
        var media = await libertee.getMediaArray(i);

        const data = parseInt(media.uploadDate);
        const message = media.text;
        const img = media.ipfsHash;
        const userName = media.userName;

        postArray.push({
          data,
          message,
          img,
          userName,
        });
      }

      setPosts([...Posts, ...postArray]);
    } catch (error) {}
  };

  const refreshState = () => {
    setPublickey();
    setChainId();
    setNetwork("");
    setProvider();
    setLibrary();
    setAccount(null);
  };

  const disconnectWallet = () => {
    return async () => {
      await web3Modal.clearCachedProvider();
      refreshState();
    };
  };

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        if (accounts) setPublickey(accounts[0]);
      };

      const handleChainChanged = (_hexChainId) => {
        setChainId(_hexChainId);
      };

      const handleDisconnect = () => {
        console.log("disconnect", error);
        disconnectWallet();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider]);

  useEffect(() => {
    if (publickey && signer) {
      const getInfo = async () => {
        await readAccount(publickey, signer);
        await readFeedPosts(0, 10, signer);
      };
      getInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [publickey, signer]);

  return (
    <WalletContext.Provider
      value={{
        provider,
        connectWallet,
        disconnectWallet,
        publickey,
        library,
        chainId,
        network,
        signer,
        Account,
        readAccount,
        Posts,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
