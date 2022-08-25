import styled from "styled-components";

const AccountWrapper = styled.div`
  .CreateAccount {
    padding: 1rem 5rem;
    height: 100%;
    min-height: 100vh;
    background: radial-gradient(
        circle at 94.35384114583333% 89.61588541666666%,
        rgba(158, 193, 247, 0.93) 0%,
        20%,
        rgba(158, 193, 247, 0) 40%
      ),
      radial-gradient(
        circle at 6.503906249999999% 88.037109375%,
        rgba(133, 77, 255, 0.99) 0%,
        25%,
        rgba(133, 77, 255, 0) 50%
      ),
      radial-gradient(
        circle at 6.165364583333333% 12.617187499999998%,
        #2e58ff 0%,
        42%,
        rgba(46, 88, 255, 0) 70%
      ),
      radial-gradient(
        circle at 93.6865234375% 11.42578125%,
        #0cdde8 0%,
        42%,
        rgba(12, 221, 232, 0) 70%
      ),
      radial-gradient(
        circle at 48.9013671875% 49.521484375%,
        rgba(255, 255, 255, 0.29) 0%,
        100%,
        rgba(255, 255, 255, 0) 100%
      );

    .header {
      img {
        height: 3.5rem;
        width: auto;
      }
    }

    .title {
      h1 {
        font-size: 2.4rem;
        font-weight: 800;
      }

      h1,
      span {
        color: ${(props) => props.theme.BodyTertiaryColor};
      }
    }

    .form_section {
      .form_title {
        h4 {
          color: ${(props) => props.theme.BodyTertiaryColor};
        }
      }

      .form_fields {
        .form_field {
          label {
            width: 100%;
            border: 1px solid ${(props) => props.theme.bodyLineMain};
            outline: none;
            width: 100% !important;
            background: transparent;
            padding: 0.5rem 1.2rem;
            text-indent: 10px;
            border-radius: 8px;
            color: ${(props) => props.theme.BodyTertiaryColor};
            -moz-appearance: textfield;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .CreateAccount {
      padding: 1rem 1rem;
    }
  }
`;

export default AccountWrapper;
