import React from "react";
import ButtonWrapper from "./Button.style";

const Button = ({ children, ...props }) => {
  React.useEffect(() => {
    const button = document.getElementById("btn");

    function addProperties(e) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;

      let ripples = document.createElement("span");
      ripples.style.left = x + "px";
      ripples.style.top = y + "px";
      this.appendChild(ripples);

      setTimeout(() => {
        ripples.remove();
      }, 1000);
    }

    button.addEventListener("click", addProperties);

    return () => {
      button.removeEventListener("click", addProperties);
    };
  }, []);

  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
