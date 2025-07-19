import styled from "styled-components"

export const StyledMain = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  min-height: calc(100% - 93px);
  max-height: calc(100% - 93px);
  background: linear-gradient(180deg, #1F2A63 0%, #17002F 100%);

  & > div {
    position: relative;
    display: flex;
    align-items: center;
    height: -webkit-fill-available;
    padding: 66px 0 184px 150px;
    color: #ffffff;
    text-align: left;

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

    h1 {
      font-size: 78px;
      margin-bottom: 36px;
    }

    p {
      font-size: 38px;
      margin-bottom: 36px;
    }

    button {
      width: fit-content;
      padding: 8px 44px;
      font-size: 24px;
      background: #FFC107;
      transition: all 0.1s;

      &:hover {
        opacity: 0.8;
      }

      a {
        color: black;
      }
    }
  }

  .cloud_big {
    position: absolute;
    top: 16px;
    right: 130px;
    height: 150px;
  }

  .cloud_small {
    position: absolute;
    bottom: 37%;
    left: 36px;
    height: 100px;
  }

  .yoda {
    position: relative;
    top: 0;
    right: 0;
    z-index: 2;
  }
`;