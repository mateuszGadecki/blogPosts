import {
  StyledContactBoxWrapper,
  StyledContactContent,
  StyledContactTitle,
} from './contactBox.style';
import Form from './form/form.component';

const ContactBox = () => {
  return (
    <StyledContactBoxWrapper>
      <StyledContactContent>
        <StyledContactTitle>Contact Form</StyledContactTitle>
        <Form />
      </StyledContactContent>
    </StyledContactBoxWrapper>
  );
};

export default ContactBox;
