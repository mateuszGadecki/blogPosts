import styled from 'styled-components';

export const StyledCenter = styled.div`
  width: 1820px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1820px) {
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }
  @media (max-width: 375px) {
    padding: 0 7px;
  }
`;
