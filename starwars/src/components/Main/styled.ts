import styled from "styled-components"

export const StyledMain = styled.div`
  position: relative;
  padding: 12px 36px;

  & > div {
    position: relative;
    display: flex;
    align-items: center;
    color: #ffffff;
    text-align: left;

    & > div {
      display: flex;
      flex-direction: column;
      flex: 0 0 50%;
    }
  }

  .yoda {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }
`;