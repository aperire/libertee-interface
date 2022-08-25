import React from "react";
import LoaderWrapper from "./Loader.style";

const Loader = () => {
  return (
    <LoaderWrapper>
      <div className="Loader_overlay">
        <div className="Loader">
          <div className="container-fluid">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-10 col-12">
                <div className="icon_div">
                  <img
                    src="/images/Loaders/Loader.png"
                    alt="Loader"
                    className="icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoaderWrapper>
  );
};

export default Loader;
