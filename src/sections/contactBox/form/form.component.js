import { useForm } from 'react-hook-form';
import {
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledSubmitButton,
} from './form.style';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        data-testid="name-input"
        errorInput={errors.name ? true : false}
        {...register('name', {
          required: 'required',
        })}
        placeholder="name"
      />
      <StyledInput
        data-testid="email-input"
        errorInput={errors.email ? true : false}
        placeholder="email"
        {...register('email', {
          required: 'required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'wrong value',
          },
        })}
      />
      <StyledTextArea
        data-testid="message-input"
        errorInput={errors.message ? true : false}
        placeholder="message"
        {...register('message', {
          required: 'required',
        })}
      />
      <StyledSubmitButton data-testid="submit-form-button">
        Submit
      </StyledSubmitButton>
    </StyledForm>
  );
};

export default Form;
