import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  BodyMainBg: "rgb(255,255,255)",
  BodyPrimaryBg: "rgb(239, 243, 244)",
  BodySecondaryBg: "rgb(247, 249, 249)",
  BodyPrimaryColor: "black",
  BodySecondaryColor: "#575757",
  BodyTertiaryColor: "white",
  lightMainColor: "#6b6b6b",
  lightSecondaryColor: "#a8a8a8",
  lightTertiaryColor: "rgba(0,0,0,0.03)",
  bodyLineMain: "rgb(239, 243, 244)",
  bodyOverlay: "rgb(239, 243, 244)",
  HeadersMain: "black",
  ButtonPrimaryBg: "#854DFF",
};

export const darkTheme = {};

export const GlobalStyle = createGlobalStyle`
*,
*:before,
*:after {
    box-sizing: inherit;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html {
  margin: 0;
  padding: 0;
  text-size-adjust: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
}

body {
  padding: 0;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  font-family: 'Raleway', sans-serif; 
  font-feature-settings: "tnum","tnum";
  font-variant: tabular-nums;
  background:${(props) => props.theme.BodyMainBg};
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
}

::-webkit-scrollbar {
  height: 8px;
  width:10px;
  background: ${(props) => props.theme.BodyMainBg};
}

::-webkit-scrollbar-corner {
  background: ${(props) => props.theme.BodyMainBg};
}

::-webkit-scrollbar-thumb {
  background: ${(props) => props.theme.lightMainColor};
  border-radius: 10px;
  -webkit-border-radius: 1ex;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: ${(props) => props.theme.HeadersMain};
  margin-bottom:inherit;
}

p {
  margin-bottom: 0 !important;
  font-weight:500;
}

label {
  margin-bottom:inherit;
}

span {
  // font-weight:500;
}

.container {
  max-width: 1352px !important;
  padding-left:0px;
  padding-right:0px;
}


.float_container {
  padding: 0px 50px;
}

.float_child_nav {
  position: fixed;
  top: 0;
  width: 285px;
  float: left;
  height: 100%;
}

.float_child_routes {
  position: relative;
  left: 285px;
  width: calc(100% - 285px);
  float: left;
  padding-bottom:50px;
}

.float_page_left {
  width: calc(100% - 350px);  
  float: left;
  border-left:1px solid ${(props) => props.theme.bodyLineMain};
  border-right:1px solid ${(props) => props.theme.bodyLineMain};
  height:100%;
  min-height:100vh;
  padding-bottom:50px;
}

.float_page_right{
  width: 350px;
  float: left;
  padding: 0px 25px;
  height:100%;
  min-height:100vh;
}

.not-allowed {
  cursor: not-allowed! important;
}
 



@media only screen and (max-width: 1200px) { 
  .float_container {
    padding: 0px 0px;
  }

  .float_child_nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 0px;
    height: auto;
    z-index: 999;
    overflow-x: hidden;
    transition: all 0.1s ease;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    background: white;
  }

  .float_child_routes {
    position: relative;
    left: 0px;
    width: 100%;
    float: left;
  }
  
  .float_page_left {
    width: 100%;  
    border-left:none;
    border-right:none;
    height:100%;
  }
  
  .float_page_right{
    width: 0px;
    float: left;
  }
  
}
`;
