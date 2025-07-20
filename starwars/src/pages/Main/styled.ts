import styled from "styled-components"

export const StyledMain = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: calc(100% - 93px);
  max-height: calc(100% - 93px);
  padding: 0;
  background: linear-gradient(180deg, #1F2A63 0%, #17002F 100%);

  & > div {
    position: relative;
    display: flex;
    align-items: center;
    height: -webkit-fill-available;
    padding: 66px 0 184px 150px;
    text-align: left;
    color: #ffffff;

    & > div:first-child {
      display: flex;
      flex-direction: column;
      flex: 0 0 45%;
    }

    & > div:last-child {
      position: relative;
      flex: 0 0 55%;
      height: -webkit-fill-available;
    }

    h1,
    p {
      margin-bottom: 36px;
    }

    h1 {
      font-size: 78px;
    }

    p {
      font-size: 38px;
    }

    button {
      width: fit-content;
      padding: 20px 58px;
      font-size: 24px;
      background: #FFC107;
      border-radius: 11px;
      transition: opacity 0.1s;

      &:hover {
        opacity: 0.8;
      }

      a {
        color: #000000;
      }
    }
  }

  .cloud_big {
    position: absolute;
    top: 16px;
    right: 130px;
    height: 150px;
    z-index: 1;
  }

  .cloud_small {
    position: absolute;
    bottom: 37%;
    left: 36px;
    height: 100px;
    z-index: 1;
  }

  .yoda {
    position: relative;
    top: 0;
    right: 0;
    z-index: 2;
  }
`;