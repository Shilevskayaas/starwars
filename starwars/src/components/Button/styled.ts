import styled from "styled-components"

export const StyledButton = styled.button`
  width: fit-content;
  text-align: center;
  border-radius: 11px;
  transition: opacity 0.1s;
  
  &:hover {
    opacity: 0.8;
  }

  button {
    font-size: inherit;
    color: inherit;
    background: inherit;
  }
`;