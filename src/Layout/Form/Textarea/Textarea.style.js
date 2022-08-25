import styled from "styled-components";

const TextareaWrapper = styled.div`
  textarea {
    border: 1px solid ${(props) => props.theme.bodyLineMain};
    outline: none;
    width: 100% !important;
    background: transparent;
    padding: 0.5rem;
    text-indent: 10px;
    border-radius: 8px;
    overflow: hidden;
    resize: none;

    color: ${(props) => props.theme.BodyTertiaryColor};

    &::placeholder {
      color: ${(props) => props.theme.bodyLineMain};
    }
  }
`;

export default TextareaWrapper;
