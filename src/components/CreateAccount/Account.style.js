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

      .wallet {
        img {
          width: auto;
          height: 1.8rem;
        }

        .btn-group {
          width: 100%;

          .dropdown_btn {
            background: transparent;
            border: none;
            outline: none;
            width: 100%;
            padding: 0.8rem 1.8rem;
            border-radius: 10px;
            background: ${(props) => props.theme.ButtonPrimaryBg};
            transition: all 0.2s;
            display: flex;
            align-items: center;

            .dropdown_btn_left {
              span {
                color: ${(props) => props.theme.BodyTertiaryColor};
                text-transform: uppercase;
              }
            }

            .dropdown_btn_right {
              .bottom_icon {
                color: ${(props) => props.theme.BodyTertiaryColor};
              }
            }
          }

          .dropdown-menu {
            position: absolute !important;
            background: ${(props) => props.theme.BodyTertiaryColor};
            margin: 0.4rem 0 0;
            padding: 0;
            border-radius: 0.4rem;
            transition: all 0.2s;
            opacity: 1;
            overflow: hidden;
            transform-origin: top center;
            transform: scale(1, 0);
            display: block;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            width: 100%;

            .dropdown-item {
              padding: 0.6rem 1rem;
              margin: 0rem 0rem;
              width: 100%;
              color: white;
              transition: all 0.2s;

              .logout_icon {
                font-size: 1.3rem;
                color: ${(props) => props.theme.ButtonPrimaryBg};
              }

              span {
                padding-left: 5px;
                color: ${(props) => props.theme.ButtonPrimaryBg};
                text-decoration: none;
                transition: all 0.3s;
              }

              &:hover {
                background: ${(props) => props.theme.BodyNeutralAlt};
              }
              $:focus {
                background: ${(props) => props.theme.BodyNeutralAlt};
              }
            }
            .dropdown-item:hover > span,
            .dropdown-item:hover > profile_icon {
              color: ${(props) => props.theme.BodyPrimary};
            }
          }
          &.show {
            .dropdown-menu {
              transform: scale(1);
            }
          }
        }
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
          position: relative;

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

          .add_hashtag {
            position: absolute;
            right: 30px;
            top: 7px;
            width: 100px;
          }
        }

        .hashtag_section {
          .name {
            span {
              display:flex;
              align-items:center;
              justify-content-center;
              background:  ${(props) => props.theme.BodyTertiaryColor};
              padding:0.4rem 1rem;
              min-width:40px;
              border-radius:0.4rem;

              p {
                color: ${(props) => props.theme.ButtonPrimaryBg};
                font-size: 0.8rem;
              }
              i {
                color: ${(props) => props.theme.lightMainColor};
                margin-left: 7px;
                font-size: 0.9rem;
                cursor:pointer;
              }
            }
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
