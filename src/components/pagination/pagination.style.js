import styled, { css } from 'styled-components';

export const StyledPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

export const StyledPaginationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

export const StyledPaginationItem = styled.li`
  margin: 0 6px;
`;

const activeStyles = css`
  background-color: ${({ theme }) => theme.colors.grey};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledPaginationButton = styled.button`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  outline: none;
  padding: 5px 8px;
  transition: background-color, border, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  border-radius: 30px;
  ${({ active }) => (active ? activeStyles : '')}
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.white};
  }
`;
