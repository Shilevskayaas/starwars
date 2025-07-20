import styled from "styled-components"

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  height: 36vh;
  border-radius: 16px;

  & > button {
    position: absolute;
    top: -55px;
    right: 0;
    background: transparent;

      &:hover {
        opacity: 0.8;
      }

    img {
      height: 32px;
      width: 32px;
    }
  }

  .modal-container {
    display: flex;
    align-items: center;

    & > div {
      height: -webkit-fill-available;
      padding: 12px;

      &:first-child {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #1F2A63;
      }

      &:last-child {
        display: flex;
        flex-direction: column;
        background: linear-gradient(180deg, #17002F 42.19%, #1F2A63 100%);
      }
    }

    .card-tags {
      display: flex;
      align-self: flex-end;
      gap: 16px;
    }

    .card-tags > div {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 60px;
      margin-top: 8px;
      padding: 2px 8px;
      border-radius: 11px;
      background: #73D677;

      &:last-child {
        background: #07D6F2;
      }
    }

    h2 {
      margin: 16px 0;
      font-size: 36px;
      font-weight: 700;
      color: #fdfdfd;
    }

    .card-abilities {
      flex: 1 1 auto;
      width: fit-content;
      margin-bottom: 76px;
      padding: 12px;
      border-radius: 8px;
      background: #fdfdfd;
      box-shadow: 4px 4px 4px 0px #2121211A;
    }

    .card-counters {
      display: flex;
      gap: 24px;

      & > div {
        background: #fdfdfd;
        padding: 12px;
        border-radius: 8px;
        box-shadow: 4px 4px 24px 0px #01112633;
      }
    }
  }
`;