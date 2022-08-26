import styled from "styled-components";

const HomeWrapper = styled.div`
  .Home {
    .post_section {
      .post_card {
        padding: 1rem 1.5rem;
        border-radius: 0px 0px 4px 4px;
        border-bottom: 1px solid ${(props) => props.theme.bodyLineMain};

        .profile_img {
          object-fit: cover;
          height: 2.8rem;
          width: 2.8rem;
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            height: 2.9em;
            width: 2.9rem;
          }

          .person {
            font-size: 2.4rem;
            border-radius: 50%;
            padding: 0.2rem;
            border: 1px solid ${(props) => props.theme.ButtonPrimaryBg};
            color: ${(props) => props.theme.ButtonPrimaryBg};
          }
        }

        .post_form_section {
          .input_field {
            textarea {
              // border: 1px solid ${(props) => props.theme.bodyLineMain};
              border: none;
              outline: none;
              width: 100% !important;
              background: transparent;
              padding: 0.8rem 0.5rem 0.5rem 0rem;
              border-radius: 8px;
              overflow: hidden;
              resize: none;

              color: ${(props) => props.theme.lightMainColor};

              &::placeholder {
                color: ${(props) => props.theme.lightMainColor};
              }
            }
          }
        }

        .select_img_Section {
          display: relative;

          i {
            font-size: 1.2rem;
            cursor: pointer;
            color: ${(props) => props.theme.BodySecondaryColor};
          }

          img {
            width: 100%;
            object-fit: cover;
          }
        }

        .images_section {
          border-top: 1px solid ${(props) => props.theme.bodyLineMain};
          padding: 1rem 0rem 0rem 0rem;
          width: 100%;

          label {
            display: flex;
            align-items: center;

            .upload_icons1,
            .upload_icons2,
            .upload_icons3 {
              color: ${(props) => props.theme.ButtonPrimaryBg};
              cursor: pointer;
            }

            .upload_icons1 {
              font-size: 1.5rem;
            }
            .upload_icons2 {
              font-size: 1.4rem;
            }
            .upload_icons3 {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
`;

export default HomeWrapper;
