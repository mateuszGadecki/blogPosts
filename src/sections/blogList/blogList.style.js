import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBlogListPageWrapper = styled.div`
  margin: 100px 0 70px 0;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 425px) {
    margin: 60px 0 70px 0;
  }
`;

export const StyledBlogListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const nextPage = keyframes`
  0% {
    opacity: 0;
    transform: translate(400px, 0);
  }

  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const prevPage = keyframes`
0% {
    opacity: 0;
    transform: translate(-400px, 0);
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

export const StyledBlogList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  align-items: center;
  padding: 0;
  margin-top: 40px;
  animation: ${({ animation }) => handleAnimationType(animation)};
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  max-width: 600px;
  width: 90%;
`;

export const StyledBlogPost = styled.li`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
  margin-bottom: 30px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
  @media only screen and (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const StyledBlogPostTitle = styled.p`
  text-align: center;
  margin: 0;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.xxmedium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  @media only screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.xmedium};
  }
`;

export const StyledBlogPostUser = styled.p`
  margin: 25px 0;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  @media only screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const StyledBlogPostBody = styled.p`
  text-align: center;
  margin: 0;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: 145%;
  @media only screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export const StyledBlogPostButton = styled(Link)`
  cursor: pointer;
  margin: 30px 50px 0 auto;
  transition: transform 0.2s ease-in-out;
  border-color: ${({ theme }) => theme.colors.grey};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border-radius: 10px;
  &:hover {
    transform: scale(1.04);
  }
  @media only screen and (max-width: 425px) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin: 30px auto 0 auto;
  }
`;
