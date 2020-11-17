import styled from 'styled-components';
import { THEME } from '../../constants';

import { ReactComponent as Arrow } from '../../assets/arrow.svg';

export const StyledChatArea = styled.form`
  bottom: 8px;
  display: flex;
  direction: ltr;
  position: absolute;
  width: 100%;

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

export const StyledMessageField = styled.div`
  border: 1px solid ${THEME.PRIMARY};
  border-radius: 48px;
  display: flex;
  flex: 1;
  margin-right: 8px;

  & > .input-file__chat-area {
    margin-left: 8px;
  }

  & > .chat-area__input {
    margin-bottom: 0;
    flex: 1;

    & > input {
      border: none;
      border-radius: 48px;
      font-size: 14px;
      padding: 16px;
      width: 100%;
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