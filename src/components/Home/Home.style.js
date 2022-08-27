import styled from "styled-components";

const HomeWrapper = styled.div`
  .Home {
    .post_section {
      .post_card {
        padding: 1rem 1.5rem 0.5rem 1.5rem;
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
            font-size: 2rem;
            border-radius: 50%;
            padding: 0.2rem;
            border: 1px solid ${(props) => props.theme.ButtonPrimaryBg};
            color: ${(props) => props.theme.ButtonPrimaryBg};
          }
        }

        .post_form_section {
          .input_field {
            input,
            textarea {
              border: 1px solid ${(props) => props.theme.bodyLineMain};
              outline: none;
              width: 100% !important;
              background: transparent;
              padding: 0.8rem 0.5rem 0.5rem 0.8rem;
              border-radius: 8px;
              font-weight: 500;
              color: ${(props) => props.theme.lightMainColor};

              &::placeholder {
                color: ${(props) => props.theme.lightSecondaryColor};
              }
            }

            textarea {
              overflow: hidden;
              font-weight: 500;
              resize: none;
            }

            button {
              position: absolute;
              right: 30px;
              top: 60px;
              width: 30px;
              height: 30px;
              font-size: 1.2rem;
              background: ${(props) => props.theme.ButtonPrimaryBg};
              text-align: center;
              border-radius: 50%;
              color: ${(props) => props.theme.BodyTertiaryColor};
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          .hashtag_section {
            .name {
              span {
                display:flex;
                align-items:center;
                justify-content-center;
                border: 1px solid ${(props) => props.theme.ButtonPrimaryBg};
                padding:0.2rem 0.5rem;
                min-width:40px;
                border-radius:0.4rem;
  
                p {
                  color: ${(props) => props.theme.ButtonPrimaryBg};
                  font-size: 0.8rem;
                }
                button {
                  background:none;
                  cursor:pointer;
                  
                  i {
                    color: ${(props) => props.theme.lightMainColor};
                    margin-left: 7px;
                    font-size: 0.9rem;
                   
                  }
                }
               
              }
            }
          }
        }

        .select_img_Section {
          display: relative;

          button {
            width:20px;
            background:none;
            cursor:pointer
          }

          i {
            font-size: 1.2rem;
            color: ${(props) => props.theme.BodySecondaryColor};
          }

          img {
            width: 100%;
            object-fit: cover;
          }
        }

        .images_section {
          border-top: 1px solid ${(props) => props.theme.bodyLineMain};
          padding: 0.7rem 0rem 0rem 0rem;
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

      .posts_card {
        padding: 1rem 1.5rem;
        border-radius: 0px 0px 4px 4px;
        border-bottom: 1px solid ${(props) => props.theme.bodyLineMain};
        display:flex;
        flex-direction:row;

        &:hover {
          background:${(props) => props.theme.lightTertiaryColor};
        }

        .poster_img {
          img {
            border-radius:50%;
            height:2.6rem;
            width:2.6rem;
            object-fit:cover;
          }
        }

        .details_section {
          width:100%;

          .username {
            span {
              font-size:0.9rem;
            }          
          }
  
          .message{
            span {
              font-size:0.9rem;
            }
          }
  
          .post_img {
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      } 
    }
  }
`;

export default HomeWrapper;
