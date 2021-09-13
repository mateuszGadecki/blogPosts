import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  width: 90%;
  @media only screen and (max-width: 768px) {
    width: 95%;
  }
`;

export const StyledInput = styled.input`
  height: 50px;
  max-width: 500px;
  width: 80%;
  margin-bottom: 20px;
  border: solid 2px;
  border-color: ${({ theme, errorInput }) =>
    errorInput ? theme.colors.red : theme.colors.grey};
  background: ${({ theme }) => theme.colors.white};
  padding-left: 30px;
  border-radius: 10px;
  outline: none;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-family: 'Montserrat', sans-serif;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSizes.xmedium};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  }
`;

export const StyledTextArea = styled.textarea`
  height: 200px;
  max-width: 500px;
  width: 80%;
  margin-bottom: 10px;
  border: solid 2px;
  border-color: ${({ theme, errorInput }) =>
    errorInput ? theme.colors.red : theme.colors.grey};
  background: ${({ theme }) => theme.colors.white};
  padding: 10px 0 0 30px;
  border-radius: 10px;
  outline: none;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-family: 'Montserrat', sans-serif;

  &::placeholder {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-size: ${({ theme }) => theme.fontSizes.xmedium};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSizes.medium};
    }
  }
`;

export const StyledSubmitButton = styled.button`
  border: solid 2px;
  height: 50px;
  max-width: 250px;
  width: 80%;
  border-color: ${({ theme }) => theme.colors.grey};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  border-radius: 10px;
  cursor: pointer;
  margin: 20px auto;
  transition: transform 0.2s ease-in;

  &:hover {
    transform: scale(1.05);
  }
  @media only screen and (max-width: 425px) {
    width: 90%;
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;
