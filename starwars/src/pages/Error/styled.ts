import styled from "styled-components"

export const StyledError = styled.div`
  padding: 96px 82px;
  background: #17002F;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;

    & > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 70px;
      width: 100%;
      position: relative;
    }
  }

  .number {
    flex: 0 0 auto;
    color: #898096;
    font-family: Karla;
    font-weight: 700;
    font-size: 700px;
  }

  .planet {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img {
      height: 70vh;
    }
  }

  button {
    padding: 20px 78px;
    background: #73D677;
    box-shadow: 0px -9px 0px 0px #0000002E inset;

    a {
      font-family: Karla;
      font-weight: 700;
      font-size: 23px;
      letter-spacing: 0%;
      text-align: center;
      vertical-align: middle;
      color: #212121;
    }
  }
`;