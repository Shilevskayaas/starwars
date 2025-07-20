import styled from "styled-components"

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  height: 93px;
  padding: 0 157px;
  color: #ffffff;
  background: #1F2A63;
  box-shadow: 0px 4px 4px 0px #FFFFFF40;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  img {
    position: absolute;
    top: -28px;
    width: 150px;
  }

  ul {
    display: flex;
    gap: 74px;
    list-style-type: none;

    li a {
      padding-bottom: 4px;
      color: #ffffff;
      transition: border 0.1s;

      &.active,
      &:hover {
        border-bottom: 1px solid #ffffff;
      }
    }
  }
`;