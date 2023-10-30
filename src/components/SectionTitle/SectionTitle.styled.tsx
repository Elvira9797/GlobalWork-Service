import styled from '@emotion/styled';

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 26px;
  margin-bottom: 30px;
  &::after {
    content: '';
    width: 240px;
    height: 2px;
    display: block;
    margin-top: 10px;
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.colors.accentColor};
  }

  @media (min-width: 1236px) {
    font-size: 32px;
    align-items: center;
    &::after {
      width: 300px;
    }
  }
`;
