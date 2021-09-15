import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBlogListPageWrapper = styled.div`
  margin: 100px 0 70px 0;
  display: flex;
  justify-content: center;
`;

export const StyledBlogListWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledBlogList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin-top: 40px;
`;

export const StyledBlogPost = styled.li`
  max-width: 600px;
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
`;

export const StyledBlogPostTitle = styled.p`
  text-align: center;
  margin: 0;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSizes.xxmedium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const StyledBlogPostUser = styled.p`
  margin: 25px 0;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;

export const StyledBlogPostBody = styled.p`
  text-align: center;
  margin: 0;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  line-height: 145%;
`;

export const StyledBlogPostButton = styled(Link)`
  cursor: pointer;
  margin: 30px 10px 0 auto;
  width: 150px;
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
`;
