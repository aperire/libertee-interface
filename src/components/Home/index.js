import React from "react";
import HomeWrapper from "./Home.style";
import MainHeader from "../globalComponents/MainHeader";
import SearchHeader from "../globalComponents/SearchHeader";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <div className="page_container">
          <div className="float_page_left">
            <div className="container Home">
              <div className="row">
                <div className="col-12">
                  <MainHeader title="Home" />
                </div>
              </div>
            </div>
          </div>
          <div className="float_page_right">
            <div className="container Home">
              <div className="row">
                <div className="col-12">
                  <SearchHeader />
                </div>
              </div>
            </div>
          </div>
        </div>
      </HomeWrapper>
    </>
  );
};

export default Home;
