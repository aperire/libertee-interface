import React from "react";
import WalletButtonWrapper from "./WalletButton.style";
import Button from "Layout/Button";
import { useWallet } from "contexts/WalletContext";
import { useDispatch } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

const WalletButton = () => {
  const { connectWallet, disconnectWallet, publickey } = useWallet();
  const dispatch = useDispatch();

  return (
    <WalletButtonWrapper>
      <div className="wallet">
        {!publickey ? (
          <Button
            active={1}
            br="0.4rem"
            p="0.8rem 1.2rem"
            size="1rem"
            id="btn"
            onClick={() => dispatch(connectWallet())}
            className="d-flex align-items-center"
          >
            <img
              src="/images/Metamask.png"
              alt="Metamask"
              loading="lazy"
              className="pr-2"
            />
            <p>Connect to MetaMask</p>
          </Button>
        ) : (
          <div className="btn-group">
            <button
              type="button"
              className="dropdown_btn"
              data-toggle="dropdown"
              data-display="static"
              aria-expanded="false"
            >
              <div className="dropdown_btn_left align-items-center">
                <span>
                  {" "}
                  {`${publickey.slice(0, 4)}...${publickey.slice(
                    publickey.length - 4,
                    publickey.length
                  )}`}
                </span>
              </div>
              <div className="dropdown_btn_right justify-content-end align-items-center">
                <MdKeyboardArrowDown className="bottom_icon ml-1" />
              </div>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <button
                className="dropdown-item d-flex align-items-center"
                type="button"
                onClick={() => dispatch(disconnectWallet())}
              >
                <div>
                  <IoMdLogOut className="logout_icon" />
                </div>
                <div className="token_name ml-1">
                  <span>Disconnect</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </WalletButtonWrapper>
  );
};

export default WalletButton;
