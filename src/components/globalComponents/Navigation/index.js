import React from "react";
import { NavLink } from "react-router-dom";
import { NavigationList } from "assets/api";
import NavWrapper from "./Nav.style";
import Button from "Layout/Button";

const Navigation = () => {
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
                <div className="profile_icon">
                  <img src="/images/Logo.png" alt="profile" loading="lazy" />
                </div>
                <div className="details d-flex flex-column pl-2">
                  <p>Deepak kurmi</p>
                  <span>@k847764kurmi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavWrapper>
  );
};

export default Navigation;
