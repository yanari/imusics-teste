import styled from 'styled-components';

import { THEME } from '../../constants';

export const StyledChatArea = styled.div`
  background-color: ${THEME.PRIMARY};
  direction: ltr;

  & > .chat-area__input {
    margin-bottom: 0;

    & > input {
      // border: none;
      border-radius: 16px;
    }
  }
`;