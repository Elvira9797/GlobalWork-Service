import styled from '@emotion/styled';

export const SocialList = styled.ul`
  display: flex;
`;

export const SocialListItem = styled.li`
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1236px) {
    border-radius: 4px;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  @media (max-width: 1236px) {
    padding: 6px;
  }
`;
