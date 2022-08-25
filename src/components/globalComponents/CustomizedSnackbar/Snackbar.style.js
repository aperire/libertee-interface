import styled from "styled-components";

const SnackbarWrapper = styled.div`
  .snackbar {
    p {
      color: ${(props) => props.theme.BodyPrimary};
      a {
        color: ${(props) => props.theme.BodyPrimary};
        text-decoration: underline;
        margin-left: 10px;
      }
    }
  }
`;

export default SnackbarWrapper;
