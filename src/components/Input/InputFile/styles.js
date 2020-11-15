import styled from 'styled-components';

export const StyledInputFile = styled.div`
  align-items: center;
  display: inline-flex;
  justify-content: space-around;
  position: relative;

  & > label {
    display: initial;
    margin-right: 16px;
  }

  & > input {
    height: 32px;
    margin-right: 8px;
    // opacity: 0;
    position: absolute;
    right: 0;
    width: 32px;
    // z-index: -1;
  }

  & > svg {
    cursor: pointer;
    // user-select: none;
    position: relative;
    pointer-events: auto;
  }
`;