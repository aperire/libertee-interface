import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "components/Home";
import CreateAccount from "components/CreateAccount";
import { AppCommon } from "Routes";
import Navigation from "components/globalComponents/Navigation";

const App = () => {
  const [isAuth] = useState(false);

  return (
    <AppCommon>
      {!isAuth && (
        <Routes>
          <Route path="/" element={<CreateAccount />} />
        </Routes>
      )}
      {isAuth && (
        <div className="container float_container">
          <div className="float_child_nav">
            <Navigation />
          </div>
          <div className="float_child_routes">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      )}
    </AppCommon>
  );
};

export default App;
