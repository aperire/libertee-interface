import React from "react";
import { BrowserRouter } from "react-router-dom";
import store from "Redux/store";
import ModeProvider from "assets/theme";
import { Provider } from "react-redux";
import CustomizedSnackbar from "components/globalComponents/CustomizedSnackbar";
import SnackbarProviderMessage from "components/globalComponents/SnackbarProviderMessage";

export const CommonRoot = ({ children }) => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export const AppCommon = ({ children }) => {
  return (
    <ModeProvider>
      <SnackbarProviderMessage>
        <CustomizedSnackbar>{children}</CustomizedSnackbar>
      </SnackbarProviderMessage>
    </ModeProvider>
  );
};
