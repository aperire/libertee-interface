import styled from "styled-components";

const NavWrapper = styled.div`
  .Navigation {
    .Navigation_Section {
      height: 100vh;
      transition: all 0.3s ease;
      background: transparent;
      padding: 0 1.5rem 0 0;

      .logo_img {
        padding: 0.8rem 0.4rem;

        img {
          width: auto;
          height: 2.8rem;
        }
      }

      .close_div {
        display: none;
        cursor: pointer;

        .close_icon {
          color: ${(props) => props.theme.BodyTertiaryColor};
          font-size: 1.4rem;
        }
      }

      .navbar_List {
        max-height: 350px;
        overflow-y: scroll;

        ::-webkit-scrollbar {
          height: 5px;
          width: 5px;
          background-color: transparent;
        }

        li {
          list-style-type: none;
          cursor: pointer;
          transition: all 0.3s;
          border-radius: 20px;
          margin: 0.3rem 0.3rem;

          .noActive,
          .active {
            text-decoration: none;
            display: inline-block;
            padding: 0.9rem 0.8rem;
            transition: all 0.4s;

            span {
              padding-left: 12px;
              font-size: 1.05rem;
              font-weight: 500;
            }

            .nav_icon {
              height: 1.5rem;
              width: 1.5rem;
              object-fit: cover;
            }
          }

          .noActive {
            color: ${(props) => props.theme.BodyPrimaryColor};
          }

          .active {
            color: ${(props) => props.theme.BodyPrimaryColor};
            background: ${(props) => props.theme.bodyOverlay};
            border-radius: 50px;

            span {
              font-weight: 600;
            }
          }
        }

        li:hover > a {
          border-radius: 50px;
          background: ${(props) => props.theme.bodyOverlay};
        }
      }

      .post_section {
        padding: 0.8rem 0.5rem;
      }

      .profile_section {
        position: fixed;
        bottom: 0;
        display: flex;
        align-items: center;
        padding: 0.8rem 1rem;

        .profile_icon {
          img {
            height: 2.5rem;
            width: 2.5rem;
            object-fit: cover;
          }
        }
        .details {
          p,
          span {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }

          p {
            font-weight: 500;
            color: ${(props) => props.theme.HeadersMain};
            font-size: 0.9rem;
          }
          span {
            color: ${(props) => props.theme.lightMainColor};
            font-size: 0.8rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .Navigation {
      .Navigation_Section {
        .navbar_List {
          li {
            .noActive,
            .active {
              span {
              }
            }
          }
        }

        .profile_section {
          position: absolute;
          bottom: 0;
        }
      }
    }
  }
`;

export default NavWrapper;
