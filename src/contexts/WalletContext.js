import React, { createContext, useState, useContext, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from "lib/ProviderOptions";
import { getHooke } from "utils";

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
  const [posts, setPosts] = useState([]);

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
    const hooke = getHooke(signer);
    const profile = await hooke.getProfileMap(address);
    const hashTagArrayLength = await hooke.getAddressHashTagLength(address);
    var hashTagArray = [];

    for (var i = 0; i < hashTagArrayLength; i++) {
      var hashTag = await hooke.getAddressHashTag(address, i);
      hashTagArray.push(hashTag);
    }

    const accountInfo = {
      pfpHash: profile?.pfpHash,
      username: profile?.username,
      bio: profile?.bio,
      address: profile?.owner,
      hashTagArray: hashTagArray,
    };

    setAccount(accountInfo);
  };

  const readFeedPosts = async (start, end, signer) => {
    try {
      var postArray = [];

      const hooke = getHooke(signer);
      const mediaArrayLength = await hooke.getMediaArrayLength();

      for (var i = 0; i < mediaArrayLength; i++) {
        const media = await hooke.getMediaArray(i);

        const date = parseInt(media.uploadDate);
        const message = media.text;
        const pfpHash = media.pfpHash;
        const postHash = media.postHash;
        const userName = media.userName;

        postArray.push({
          date,
          message,
          pfpHash,
          postHash,
          userName,
        });
      }

      setPosts(postArray);
    } catch (error) {
      // console.log(error);
    }
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
        await readFeedPosts(0, 4, signer);
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
        posts,
        readFeedPosts,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);
