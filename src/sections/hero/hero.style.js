import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeroWrapper = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledHeroBox1 = styled.div`
  height: 40%;
  flex-basis: 40%;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-property: opacity, background-color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  &:hover {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.white};
    a {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const StyledHeroBox2 = styled.div`
  position: relative;
  height: 40%;
  flex-basis: 60%;
  background-color: ${({ theme }) => theme.colors.black};
  overflow: hidden;

  &:hover {
    cursor: pointer;
    h2 {
      color: ${({ theme }) => theme.colors.black};
    }
    img {
      opacity: 1;
      transform: scale(1.08);
    }
  }
`;

export const StyledHeroBox3 = styled.div`
  position: relative;
  height: 60%;
  flex-basis: 40%;
  background-color: ${({ theme }) => theme.colors.black};
  overflow: hidden;
  &:hover {
    cursor: pointer;
    h2 {
      color: ${({ theme }) => theme.colors.black};
    }
    img {
      opacity: 1;
      transform: scale(1.15);
    }
  }
`;

export const StyledHeroBox4 = styled.div`
  position: relative;
  height: 60%;
  flex-basis: 60%;
  background-color: ${({ theme }) => theme.colors.black};
  transition: background-color 0.3s ease-in-out;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    h2 {
      color: ${({ theme }) => theme.colors.black};
    }
    img {
      opacity: 1;
      transform: scale(1.08);
    }
  }
`;

export const StyledHeroImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  z-index: 10;
`;

export const StyledHeroTitle = styled.h2`
  position: absolute;
  bottom: 80px;
  left: 60px;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  transition: color 0.3s ease-in-out;
`;

export const StyledHeroSubTitle = styled.h2`
  position: absolute;
  bottom: 40px;
  left: 60px;
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xmedium};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  transition: color 0.3s ease-in-out;
`;

export const StyledHeroLink = styled(Link)`
  margin: 0;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  transition-property: color, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
