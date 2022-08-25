import React from "react";
import InputWrapper from "./Input.style";

const Input = ({ ...props }) => {
  return (
    <InputWrapper>
      <input {...props} />
    </InputWrapper>
  );
};

export default Input;
