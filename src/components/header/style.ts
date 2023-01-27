import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-left: 3rem;

  figure {
    img {
    height: 5rem;
    width: 7rem;
    }
  }

  h1 {
    font-size: 3rem;
    margin-left: 60vh;
  }
`;

export { HeaderContainer };
