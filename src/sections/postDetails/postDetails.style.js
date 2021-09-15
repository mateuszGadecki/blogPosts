import styled from 'styled-components';

export const StyledPostDetailsWrapper = styled.div``;

export const StyledPostDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 0 0;
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
`;

export const StyledPostDetailsUser = styled.p`
  margin: 40px 0;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const StyledPostDetailsText = styled.p`
  margin: 0;
  line-height: 145%;
  max-width: 700px;
  text-align: ${({ left }) => (left ? 'left' : 'center')};
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const StyledPostDetailsComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledPostDetailsCommentsList = styled.div`
  display: flex;
  gap: 0 40px;
  margin: 40px 0;
  width: 100%;
`;

export const StyledPostDetailsComment = styled.div`
  flex-basis: 33%;
  padding: 0 20px 40px 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 20px;
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
`;

export const StyledDividerIcon = styled.img`
  width: 30px;
  height: auto;
`;
