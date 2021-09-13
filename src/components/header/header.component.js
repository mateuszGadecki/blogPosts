import {
  StyledHeaderContent,
  StyledHeaderWrapper,
  StyledHeaderNav,
  StyledHeaderNavItem,
} from './header.style';
import { StyledCenter } from '../../utils/styledComponents/center.style';

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <StyledCenter>
        <StyledHeaderContent>
          <StyledHeaderNav>
            <StyledHeaderNavItem to="/" activeClassName="selected" exact>
              Home
            </StyledHeaderNavItem>
            <StyledHeaderNavItem activeClassName="selected" to="/contact">
              Contact
            </StyledHeaderNavItem>
            <StyledHeaderNavItem activeClassName="selected" to="/blog">
              Blog
            </StyledHeaderNavItem>
          </StyledHeaderNav>
        </StyledHeaderContent>
      </StyledCenter>
    </StyledHeaderWrapper>
  );
};

export default Header;
