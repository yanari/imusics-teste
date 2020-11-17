import styled, { css } from 'styled-components';

import { THEME } from '../../constants';

const BOX_SHADOW = {
  DEFAULT: THEME.FONT_COLOR + 40,
  HOVERED: THEME.FONT_COLOR + 80,
};

export const card = css`
  border-radius: 8px;
  box-shadow: 2px 2px 8px ${BOX_SHADOW.DEFAULT};
  display: block;
  margin-bottom: 16px;
  padding: 16px;
  text-align: left;

  &:hover {
    box-shadow: 2px 2px 8px ${BOX_SHADOW.HOVERED};
  }
`;

export const StyledCard = styled.div`
  ${card};
`;