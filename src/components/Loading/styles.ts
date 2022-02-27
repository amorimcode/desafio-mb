import styled from "styled-components";

import { colors } from '../../styles/globalVars'

export const LoadingWrapper = styled.div`
  text-align: center;
  padding: 30vh;
  margin-bottom: 2rem;

  .spinner-border {
    color: ${colors.primary};
  }
`;
