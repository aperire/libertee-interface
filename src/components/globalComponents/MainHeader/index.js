import React, { memo } from "react";
import MainHeaderWrapper from "./MainHeader.style";
import WalletButton from "components/globalComponents/WalletButton";

const MainHeader = ({ title }) => {
  return (
    <>
      <MainHeaderWrapper>
        <div className="Header">
          <div className="row d-flex align-items-center">
            <div className="col-6">
              <div className="title">
                <h1>{title}</h1>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <WalletButton
                p="0.5rem 0.8rem"
                size="0.9rem"
                radius="50px"
                ImgHeight="1.3rem"
                Title="Connect wallet"
              />
            </div>
          </div>
        </div>
      </MainHeaderWrapper>
    </>
  );
};

export default memo(MainHeader);
