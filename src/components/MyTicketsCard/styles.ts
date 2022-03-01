import styled from "styled-components";

import { colors } from "../../styles/globalVars";

export const CardWrapper = styled.div`
  .card-img-top {
    height: 225px;
    width: 100%;
    display: block;
  }
  .card-body {
    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Content = styled.div`
  border-right: 1px solid #dee2e6;
  padding: 1rem;

  h6 {
    margin-top: 1rem;
    display: flex;

    i {
      margin-right: 5px;
      color: ${colors.primary};
    }
  }

  .card-img-top {
    height: 225px;
    width: 100%;
    display: block;
    object-fit: contain;
  }
`;
