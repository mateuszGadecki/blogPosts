import styled, { keyframes } from 'styled-components';

export const StyledPostDetailsWrapper = styled.div`
  padding-bottom: 100px;
`;

export const StyledPostDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 0 0;
  @media only screen and (max-width: 425px) {
    margin: 60px 0 0 0;
  }
`;

export const StyledPostDetailsTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  max-width: 800px;
  width: 85%;
  text-align: center;
  letter-spacing: 1px;
  @media only screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.xxmedium};
  }
`;

export const StyledPostDetailsUser = styled.p`
  margin: 40px 0;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  @media only screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

export const StyledPostDetailsText = styled.p`
  margin: 0;
  line-height: 145%;
  max-width: 700px;
  text-align: ${({ left }) => (left ? 'left' : 'center')};
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  @media only screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

export const StyledPostDetailsComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const nextPage = keyframes`
  0% {
    opacity: 0;
    transform: translate(10em, 0);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const prevPage = keyframes`
0% {
    opacity: 0;
    transform: translate(-10em, 0);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const handleAnimationType = (animation) => {
  switch (animation) {
    case 'prev':
      return prevPage;
    case 'next':
      return nextPage;
    default:
      return '';
  }
};

export const StyledPostDetailsCommentsList = styled.div`
  display: flex;
  gap: 0 40px;
  margin: 40px 0;
  width: 100%;
  animation: ${({ animation }) => handleAnimationType(animation)};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 40px 0;
    margin: 40px 0 0 0;
    width: fit-content;
  }
`;

export const StyledPostDetailsComment = styled.div`
  flex-basis: 33%;
  padding: 0 20px 40px 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  @media only screen and (max-width: 425px) {
    width: 95%;
    margin: 0 auto;
  }
`;

export const StyledDivider = styled.div`
  margin: 80px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before,
  &::after {
    content: '';
    display: block;
    height: 2px;
    min-width: 350px;
    background: ${({ theme }) => theme.colors.lightGrey};
  }
  &::before {
    margin-right: 70px;
  }
  &::after {
    margin-left: 70px;
  }
  @media only screen and (max-width: 425px) {
    &::before {
      margin-right: 30px;
    }
    &::after {
      margin-left: 30px;
    }
  }
`;

export const StyledDividerIcon = styled.img`
  width: 30px;
  height: auto;
`;
