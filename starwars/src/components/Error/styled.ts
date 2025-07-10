import styled from "styled-components"

export const StyledError = styled.div`
  padding: 96px 82px;

  & > div {
    display: flex;
    flex-direction: column;

    & > div {
      display: flex;
    }
  }

  img {
    position: absolute;
    z-index: 2;
    top: 120px;
    margin: auto;
    height: 623px;
  }
`;