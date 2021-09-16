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

export const StyledPaginationItem = styled.li``;

const activeStyles = css`
  background-color: ${({ theme }) => theme.colors.grey};
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.white};
`;

const activeAfterStyles = css`
  content: '>';
  margin-left: 3px;
  color: ${({ theme }) => theme.colors.grey};
`;

const activeBeforeStyles = css`
  content: '<';
  margin-right: 3px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const StyledPaginationButton = styled.button`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  outline: none;
  width: 33px;
  height: 33px;
  margin: 0 6px;
  transition: background-color, border, color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in;
  border-radius: 30px;
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
  position: relative;
  ${({ active }) => (active ? activeStyles : '')}
  &::before {
    ${({ dotsBefore }) => (dotsBefore ? activeBeforeStyles : '')}
  }
  &::after {
    ${({ dotsAfter }) => (dotsAfter ? activeAfterStyles : '')}
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
    border: 1px solid transparent;
    color: ${({ theme }) => theme.colors.white};
  }
  @media only screen and (max-width: 425px) {
    margin: 0 3px;
  }
`;
