import styled from 'styled-components';
import { MAX_WIDTH } from './constants';

import { ReactComponent as Loading } from './assets/loading.svg';

export const StyledContainer = styled.main`
  margin: auto;
  margin-top: 32px;
  max-width: ${MAX_WIDTH};
  position: relative;
  text-align: center;
`;

export const StyledLoadingIcon = styled(Loading)`
  height: 64px;
  width: 64px;
  transition: initial;

  & > * {
    transition: initial;
  }
`;