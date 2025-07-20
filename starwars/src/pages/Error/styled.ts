import styled from "styled-components"

export const StyledError = styled.div`
  height: 100%;
  padding: 96px 82px;
  background: #17002F;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    & > div {
      position: relative;
      display: flex;
      justify-content: space-between;
      height: -webkit-fill-available;
      width: 100%;
      margin-bottom: 70px;
    }
  }

  .number {
    flex: 0 0 auto;
    font-size: 700px;
    font-weight: 700;
    color: #898096;
  }

  .planet {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);

    img {
      height: 70vh;
    }
  }

  .return_button {
    padding: 20px 78px;
    font-size: 23px;
    font-weight: 700;
    text-align: center;
    color: #212121;
    background: #73D677;
    border-radius: 11px;
    box-shadow: 0px -9px 0px 0px #0000002E inset;

    &:hover {
      opacity: 0.8;
    }
  }
`;