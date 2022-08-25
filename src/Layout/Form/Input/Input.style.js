import styled from "styled-components";

const InputWrapper = styled.div`
  input {
    border: 1px solid ${(props) => props.theme.bodyLineMain};
    outline: none;
    width: 100% !important;
    background: transparent;
    padding: 0.5rem;
    text-indent: 10px;
    border-radius: 8px;
    color: ${(props) => props.theme.BodyTertiaryColor};
    -moz-appearance: textfield;

    &::placeholder {
      color: ${(props) => props.theme.bodyLineMain};
    }
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export default InputWrapper;
