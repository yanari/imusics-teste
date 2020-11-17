import styled from 'styled-components';
import { THEME } from '../../constants';

import { ReactComponent as Arrow } from '../../assets/arrow.svg';

export const StyledChatArea = styled.div`
  display: flex;
  direction: ltr;

  & > .chat-area__input {
    margin-bottom: 0;
    margin-right: 8px;

    & > input {
      border-color: ${THEME.PRIMARY};
      border-radius: 48px;
      font-size: 14px;
      padding: 16px;
    }
  }

  & > button {
    align-items: center;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    padding: 0;
    width: 48px;

    &:hover > svg > path {
      fill: white;
    }
  }
`;

export const StyledSendIcon = styled(Arrow)`
  height: 24px;
  width: 24px;

  & > path {
    fill: ${THEME.PRIMARY};
  }
`;