import React, { memo } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { NavigationList } from "assets/api";
import NavWrapper from "./Nav.style";
import Button from "Layout/Button";
import { useWallet } from "contexts/WalletContext";
import WalletButton from "components/globalComponents/WalletButton";

const Navigation = () => {
  const navigate = useNavigate();
  const { publickey, Account } = useWallet();

  return (
    <NavWrapper>
      <div className="container Navigation">
        <div className="Navigation_Section">
          <div className="row">
            <div className="col-12">
              <div className="logo_img">
                <img src="/images/Logo.png" alt="Loading..." />
              </div>
            </div>
            <div className="col-12">
              <ul className="navbar_List">
                {NavigationList.map((list, index) => {
                  return (
                    <li key={index}>
                      <NavLink
                        to={list.href}
                        className="noActive d-flex align-items-center"
                        activeclassname="active"
                      >
                        <p>{list.icons}</p>
                        <span>{list.name}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="col-12">
              <div className="post_section">
                <Button
                  type="submit"
                  active={1}
                  br="50px"
                  p="0.9rem 1rem"
                  id="btn"
                >
                  Post
                </Button>
              </div>
            </div>

            <div className="col-12">
              <div className="profile_section">
                {publickey ? (
                  <>
                    {!Account?.pfpHash &&
                    !Account?.username &&
                    !Account?.bio ? (
                      <Button
                        active={1}
                        br="50px"
                        p="0.8rem 3.5rem"
                        size="0.9rem"
                        id="btn"
                        onClick={() => navigate("/createAccount")}
                      >
                        Create Account
                      </Button>
                    ) : (
                      <>
                        <div className="profile_icon">
                          {Account?.pfpHash && (
                            <img
                              src={`https://ipfs.io/ipfs/${Account?.pfpHash}`}
                              alt={Account?.username}
                              loading="lazy"
                            />
                          )}
                        </div>
                        <div className="details d-flex flex-column pl-2">
                          <p>{Account?.username}</p>
                          <span>{Account?.bio}</span>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <WalletButton
                    p="0.8rem 2.8rem"
                    size="0.9rem"
                    radius="50px"
                    ImgHeight="1.5rem"
                    Title="Connect wallet"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default memo(Navigation);
