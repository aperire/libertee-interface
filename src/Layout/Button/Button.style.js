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
    transition:all 0.3s;
  `}

  ${(props) =>
    props.active === 2 &&
    `
    color: #854DFF;
    background: white;
    font-weight:600;
    transition:all 0.3s;
    border:1px solid  #854DFF;
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
