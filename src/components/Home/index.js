import React, { useEffect } from "react";
import HomeWrapper from "./Home.style";
import MainHeader from "../globalComponents/MainHeader";
import SearchHeader from "../globalComponents/SearchHeader";
import { useWallet } from "contexts/WalletContext";
import Post from "./Post";
import Posts from "./Posts";
// import Loader from "../globalComponents/Loader";

const Home = () => {
  const { Account, signer, posts, readFeedPosts, publickey } = useWallet();

  useEffect(() => {
    async function handleScroll() {
      const { scrollHeight, scrollTop, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight) {
        await readFeedPosts(0, posts.length + 4, signer);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                    signer={signer}
                    readFeedPosts={readFeedPosts}
                  />

                  {publickey && (
                    <>
                      {posts?.length > 0 && (
                        <>
                          {posts?.map((items, ind) => {
                            return <Posts key={ind} {...items} />;
                          })}
                        </>
                      )}
                    </>
                  )}
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
