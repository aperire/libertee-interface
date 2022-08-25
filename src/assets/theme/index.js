import React, { useEffect } from "react";
import { darkTheme, lightTheme, GlobalStyle } from "./Config";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

const ModeProvider = ({ children }) => {
  const ThemeState = useSelector((state) => state.ThemeReducer);

  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const body = (
    <ThemeProvider
      theme={ThemeState.theme === "LIGHT" ? lightTheme : darkTheme}
    >
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );

  if (!mounted) {
    return <div style={{ visibility: "hidden" }}>{body}</div>;
  }

  return body;
};

export default ModeProvider;
