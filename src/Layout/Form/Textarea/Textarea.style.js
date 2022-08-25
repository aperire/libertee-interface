import styled from "styled-components";

const TextareaWrapper = styled.div`
  textarea {
    border: 1px solid ${(props) => props.theme.BodyNeutralAlt};
    outline: none;
    width: 100% !important;
    background: transparent;
    padding: 0.5rem;
    text-indent: 10px;
    border-radius: 8px;
    color: ${(props) => props.theme.BodyPrimary};
    &::placeholder {
      color: ${(props) => props.theme.HeadersMain};
    }
  }
`;

export default TextareaWrapper;
