import React from "react";
import MainHeaderWrapper from "./MainHeader.style";

const MainHeader = ({ title }) => {
  return (
    <>
      <MainHeaderWrapper>
        <div className="Header">
          <div className="title px-4">
            <h1>{title}</h1>
          </div>
        </div>
      </MainHeaderWrapper>
    </>
  );
};

export default MainHeader;
