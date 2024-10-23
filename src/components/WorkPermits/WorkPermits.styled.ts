import styled from '@emotion/styled';

export const WorkPermitsSection = styled.section`
  padding-top: ${({ theme }) => theme.section.padding.small.paddingTop};
  padding-bottom: ${({ theme }) => theme.section.padding.small.paddingBottom};
  @media (min-width: 1236px) {
    padding-top: ${({ theme }) => theme.section.padding.medium.paddingTop};
    padding-bottom: ${({ theme }) =>
      theme.section.padding.medium.paddingBottom};
  }
`;

export const DocsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  cursor: pointer;
`;

export const DocsItems = styled.li`
  width: 100%;
  background: rgb(25, 79, 130, 0.04);
  border-radius: 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border: 0;
  min-height: 150px;
  height: auto;
  color: var(--second-title-color);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (min-width: 768px) {
    width: calc((100% - 30px) / 2);
  }

  @media (min-width: 1236px) {
    width: calc((100% - 90px) / 4);
    &:hover {
      transform: scale(1.05); /* Збільшення картки при наведенні */
    }
  }
`;

export const DocsItemTitle = styled.h3`
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const DocsItemPrice = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--accent-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &::before {
  content: '';
  display: block;
  background-color: ${({ theme }) => theme.colors.accentColor};;
  width: 70px;
  height: 1px;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const Bolt = styled.b`
  display: block;
  text-align: center;
`;
