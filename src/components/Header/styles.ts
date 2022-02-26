import styled from "styled-components";

import { colors } from "../../styles/globalVars";

export const HeaderWrapper = styled.header`
  padding: 20px;
  background-color: ${colors.primary};
  border-bottom: 3px solid ${colors.secondary};
  .content {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > img {
      max-height: 50px;
    }
    > div {
      display: flex;
      gap: 16px;
      button {
        height: 40px;
      }
    }
    .links {
      display: flex;
      flex-direction: row;
      .link-item {
        margin-left: 15px;
        text-decoration: none;
        color: ${colors.secondary};
        font-family: Inter;
        font-weight: 500;
        transition: all 0.9;
        display: inline-block;
        position: relative;
        cursor: pointer;
      }
      .link-user {
        text-decoration: none;
        color: ${colors.secondary};
        font-family: Inter;
        font-weight: 500;
        display: inline-block;
        position: relative;
      }

      .link-item:after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: ${colors.secondary};
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
      .link-item:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
      }
    }
  }
`;
