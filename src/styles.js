import styled from 'styled-components';
import { MAX_WIDTH } from './constants';

import { ReactComponent as Loading } from './assets/loading.svg';

export const StyledContainer = styled.main`
  margin: auto;
  margin-top: 32px;
  padding: 0 16px;
  position: relative;
  text-align: center;

  @media (min-width: 768px) {
    padding: 0;
    max-width: ${MAX_WIDTH};
  }
`;

export const StyledLoadingIcon = styled(Loading)`
  height: 64px;
  width: 64px;
  transition: initial;

  & > * {
    transition: initial;
  }
`;