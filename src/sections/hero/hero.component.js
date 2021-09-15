import {
  StyledHeroWrapper,
  StyledHeroBox1,
  StyledHeroBox2,
  StyledHeroBox3,
  StyledHeroBox4,
  StyledHeroImage,
  StyledHeroTitle,
  StyledHeroSubTitle,
  StyledHeroLink,
} from './hero.style';
import Bg1 from '../../images/bg1.jpg';
import Bg2 from '../../images/bg2.jpg';
import Bg3 from '../../images/bg3.jpg';

const Hero = () => {
  return (
    <StyledHeroWrapper>
      <StyledHeroBox1>
        <StyledHeroLink to="/blog">Read Blog!</StyledHeroLink>
      </StyledHeroBox1>
      <StyledHeroBox2>
        <StyledHeroImage src={Bg1} />
        <StyledHeroTitle>Morbi eleifend molestie nisl</StyledHeroTitle>
        <StyledHeroSubTitle>consectetur adipiscing</StyledHeroSubTitle>
      </StyledHeroBox2>
      <StyledHeroBox3>
        <StyledHeroImage src={Bg2} />
        <StyledHeroTitle>Lorem ipsum dolor</StyledHeroTitle>
        <StyledHeroSubTitle>non ornare sem</StyledHeroSubTitle>
      </StyledHeroBox3>
      <StyledHeroBox4>
        <StyledHeroImage src={Bg3} />
        <StyledHeroTitle>Nullam commodo</StyledHeroTitle>
        <StyledHeroSubTitle>Pellentesque non</StyledHeroSubTitle>
      </StyledHeroBox4>
    </StyledHeroWrapper>
  );
};

export default Hero;
