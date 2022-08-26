import styled from "styled-components";

const SearchHeaderWrapper = styled.div`
  padding: 0.6rem 0rem;
  background: rgba(255, 255, 255, 0.8);
  z-index: 900;
  position: sticky;
  top: 0;
  width: 100%;
  backdrop-filter: blur(5px);

  .Input_section {
    position: relative;

    .search_icon {
      position: absolute;
      left: 20px;
      top: 14px;
      font-size: 1.3rem;
      color: grey;
    }

    input {
      border: none;
      outline: none;
      background: ${(props) => props.theme.BodyPrimaryBg};
      border-radius: 50px;
      padding: 0.8rem 0rem;
      text-indent: 60px;
      width: 100%;
      font-size: 0.9rem;

      &::placeholder {
        font-size: 0.9rem;
        font-weight: 600;
      }
    }
  }
`;

export default SearchHeaderWrapper;
