import styled from "styled-components"

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  height: 93px;
  z-index: 999;
  padding: 0 157px;
  box-shadow: 0px 4px 4px 0px #FFFFFF40;
  color: #ffffff;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    height: 90px;
  }

  ul {
    display: flex;
    gap: 74px;
    list-style-type: none;

    li a {
      color: #ffffff;
    }
  }
`;