import styled from "styled-components";

const MainHeaderWrapper = styled.div`
  padding: 1.1rem 0rem;
  background: rgba(255, 255, 255, 0.8);
  z-index: 900;
  position: sticky;
  top: 0;
  width: 100%;
  backdrop-filter: blur(5px);

  .navigate {
    .nav_icon {
      font-size: 1.5rem;
    }
  }

  .title {
    h1 {
      font-size: 1.05rem;
      font-weight: 700;
    }
  }
`;

export default MainHeaderWrapper;
