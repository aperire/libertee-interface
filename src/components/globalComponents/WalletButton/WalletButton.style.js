import styled from "styled-components";

const WalletButtonWrapper = styled.div`
  .wallet {
    img {
      width: auto;
      height: ${(props) => props.ImgHeight};
    }

    .btn-group {
      width: 100%;

      .dropdown_btn {
        background: transparent;
        border: none;
        outline: none;
        width: 100%;
        padding: ${(props) => props.padding};
        border-radius: ${(props) => props.radius};
        background: ${(props) => props.theme.ButtonPrimaryBg};
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;

        .dropdown_btn_left {
          span {
            color: ${(props) => props.theme.BodyTertiaryColor};
            text-transform: uppercase;
            font-size: ${(props) => props.size};
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
            background: none;
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

  @media only screen and (max-width: 900px) {
    .wallet {
      p {
        display: none;
      }
    }
  }
`;

export default WalletButtonWrapper;
