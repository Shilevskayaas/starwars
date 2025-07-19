import styled from "styled-components"

export const StyledCharacter = styled.div`
  padding: 36px 36px 12px 36px;
  background: linear-gradient(180deg, #FFFFFF 30.32%, #F5F5F5 100%);

  & > div {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  .lang {
    align-self: flex-end;
    margin-bottom: 24px;
  }

  h2 {
    margin-bottom: 48px;
    font-family: Karla;
    font-weight: 400;
    font-size: 35px;
    letter-spacing: 3px;
    text-align: center;
    color: #000000;
  }

  .cards_container {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    margin-top: 24px;

    & > div {
      flex: 0 0 calc((100% - 64px) / 3);
    }

    .card {
      display: flex;
      flex-direction: column;
      background: #F0F0F0;
      border-radius: 8px;

      h3 {
        margin-bottom: 12px;
        font-family: Karla;
        font-weight: 700;
        font-size: 18px;
        letter-spacing: 0%;
      }

      .props,
      .tags {
        display: flex;
        gap: 16px;
      }

      .props > div > div:first-child {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        margin-bottom: 8px;
        border: 3px solid #212121;
        border-radius: 18px;
        font-family: Karla;
        font-weight: 400;
        font-size: 15px;
        letter-spacing: 0%;
        text-align: center;
        vertical-align: middle;
      }

      .tags > div {
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

        &.disabled {
          display: none;
        }
      }
    }
  }

  .select select {
    padding: 4px;
    border-radius: 4px;
    background: #F2F2F2;
    box-shadow: 2px 2px 2px 0px #2121211A;
  }

  .fix_button {
    position: fixed;
    bottom: 24px;
    right: 24px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 90px;
      width: 90px;
      background: #F28F16;
      border-radius: 45px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;