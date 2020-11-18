import styled from 'styled-components';

export const StyledForm = styled.form`
  margin: auto;
  max-width: 480px;
`;

export const StyledActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 100%;

  & > :first-child {
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {
    flex-direction: row;

    & > :first-child {
      margin-bottom: 0;
    }
  }
`;