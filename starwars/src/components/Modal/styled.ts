import styled from "styled-components"

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  transition: all 1s;

    & > div {
      min-height: 371px;
    }
`;