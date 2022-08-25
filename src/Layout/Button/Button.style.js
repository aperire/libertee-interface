import styled from "styled-components";

const ButtonWrapper = styled.button`
  position: relative;
  display: inline-block;
  width: 100%;
  border: none;
  outline: none;
  padding: ${(props) => props.p};
  border-radius: ${(props) => props.br};
  font-size: ${(props) => props.size};
  overflow: hidden;

  ${(props) =>
    props.active === 1 &&
    `
    color:white;
    background: #854DFF;
    font-weight:600;
  `}

  span {
    position: absolute;
    background: #fff;
    transform: translate(-50%, -50%);
    pointer-events: none;
    border-radius: 50%;
    animation: animate 1s linear infinite;
  }

  @keyframes animate {
    0% {
      width: 0px;
      height: 0px;
      opacity: 0.5;
    }
    100% {
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }
`;

export default ButtonWrapper;
