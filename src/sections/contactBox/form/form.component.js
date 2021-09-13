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
      {errors.name ? (
        <StyledInput
          errorInput={true}
          {...register('name', {
            required: 'required',
          })}
          placeholder="name"
        />
      ) : (
        <StyledInput
          errorInput={false}
          {...register('name', {
            required: 'required',
          })}
          placeholder="name"
        />
      )}
      {errors.email ? (
        <StyledInput
          errorInput={true}
          placeholder="email"
          {...register('email', {
            required: 'required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'wrong value',
            },
          })}
        />
      ) : (
        <StyledInput
          errorInput={false}
          placeholder="email"
          {...register('email', {
            required: 'required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'wrong value',
            },
          })}
        />
      )}
      {errors.message ? (
        <StyledTextArea
          errorInput={true}
          placeholder="message"
          {...register('message', {
            required: 'required',
          })}
        />
      ) : (
        <StyledTextArea
          errorInput={false}
          placeholder="message"
          {...register('message', {
            required: 'required',
          })}
        />
      )}
      <StyledSubmitButton>Submit</StyledSubmitButton>
    </StyledForm>
  );
};

export default Form;
