import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  @media only screen and (max-width: 768px) {
    height: 45px;
  }
`;

export const StyledHeaderContent = styled.div`
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 768px) {
    height: 45px;
  }
`;

export const StyledHeaderNav = styled.nav`
  display: flex;
`;

export const StyledHeaderNavItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xxmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  margin-left: 30px;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.3s ease-in-out;
  padding-bottom: 2px;

  &.selected {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }

  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }
  @media only screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;
