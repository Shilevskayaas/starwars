import styled from "styled-components"

export const StyledCharacter = styled.div`
  min-height: calc(100% - 93px);
  max-height: calc(100% - 93px);
  padding: 36px 158px 12px 158px;
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
      padding: 16px;
      background: #F0F0F0;
      border-radius: 8px;
      cursor: pointer;

      h3 {
        margin-bottom: 12px;
        font-size: 18px;
        font-weight: 700;
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
        font-size: 15px;
        text-align: center;
        border: 3px solid #212121;
        border-radius: 18px;
      }

      .tags > div {
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 60px;
        margin-top: 8px;
        padding: 2px 8px;
        background: #73D677;
        border-radius: 11px;

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
    background: #F2F2F2;
    border-radius: 4px;
    box-shadow: 2px 2px 2px 0px #2121211A;
  }

  .fix_button {
    position: fixed;
    bottom: 24px;
    right: 24px;
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
`;