import styled from "styled-components";

const SnackbarWrapper = styled.div`
  .snackbar {
    p {
      color: ${(props) => props.theme.BodyPrimaryColor};
      a {
        color: ${(props) => props.theme.BodyPrimaryColor};
        text-decoration: underline;
        margin-left: 10px;
      }
    }
  }
`;

export default SnackbarWrapper;
