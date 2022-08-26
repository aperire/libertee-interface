import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "components/Home";
import CreateAccount from "components/CreateAccount";
import { AppCommon } from "Routes";
import Navigation from "components/globalComponents/Navigation";

const App = () => {
  const location = useLocation();

  return (
    <AppCommon>
      {location.pathname === "/createAccount" ? (
        <Routes>
          <Route path="/createAccount" element={<CreateAccount />} />
        </Routes>
      ) : (
        <div className="container float_container">
          <div className="float_child_nav">
            <Navigation />
          </div>
          <div className="float_child_routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/createAccount" element={<CreateAccount />} />
            </Routes>
          </div>
        </div>
      )}
    </AppCommon>
  );
};

export default App;
