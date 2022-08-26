import React from "react";
import HomeWrapper from "./Home.style";
import MainHeader from "../globalComponents/MainHeader";
import SearchHeader from "../globalComponents/SearchHeader";
import { useWallet } from "contexts/WalletContext";
import Post from "./Post";

const Home = () => {
  const { Account } = useWallet();

  return (
    <>
      <HomeWrapper>
        <div className="page_container">
          <div className="float_page_left">
            <MainHeader title="Home" />
            <div className="container Home">
              <div className="row post_section">
                <div className="col-12">
                  <Post
                    pfpHash={Account?.pfpHash}
                    username={Account?.username}
                  />
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
