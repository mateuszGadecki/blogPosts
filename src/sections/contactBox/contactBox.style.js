import styled from 'styled-components';

export const StyledContactBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledContactContent = styled.div`
  max-width: 1200px;
  width: 90%;
  height: 700px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 100px 0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 768px) {
    margin: 60px 0;
    width: 95%;
  }
`;

export const StyledContactTitle = styled.h2`
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  @media only screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.xxxmedium};
  }
`;
