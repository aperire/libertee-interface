import styled from "styled-components";

const MainHeaderWrapper = styled.div`
  padding: 0.8rem 1.5rem;
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
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
`;

export default MainHeaderWrapper;
