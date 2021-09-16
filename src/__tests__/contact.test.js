import React from 'react';
import ContactBox from '../sections/contactBox/contactBox.component';
import Form from '../sections/contactBox/form/form.component';
import { ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme/theme';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

test('should render the basic fields', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <ContactBox />
    </ThemeProvider>
  );

  const headerEl = getByTestId('contact-page-title');
  const nameInput = getByTestId('name-input');
  const emailInput = getByTestId('email-input');
  const messageInput = getByTestId('message-input');
  const submitButton = getByTestId('submit-form-button');

  expect(headerEl.textContent).toBe('Contact Form');
  expect(nameInput).toBeInTheDocument('Contact Form');
  expect(emailInput).toBeInTheDocument('Contact Form');
  expect(messageInput).toBeInTheDocument('Contact Form');
  expect(submitButton).toBeInTheDocument('Contact Form');
});

describe('Submit Form', () => {
  describe('with valid inputs', () => {
    it('call the console.log', async () => {
      console.log = jest.fn();

      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );

      const nameInput = getByTestId('name-input');
      const emailInput = getByTestId('email-input');
      const messageInput = getByTestId('message-input');
      const submitButton = getByTestId('submit-form-button');

      await act(async () => {
        fireEvent.change(nameInput, { target: { value: 'exampleName' } });
        fireEvent.change(emailInput, { target: { value: 'email@test.com' } });
        fireEvent.change(messageInput, {
          target: { value: 'example text message' },
        });
      });

      await act(async () => {
        fireEvent.click(submitButton);
      });

      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('with invalid email', () => {
    it('change input border color to red', async () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );

      const emailInput = getByTestId('email-input');
      const submitButton = getByTestId('submit-form-button');

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: 'invalid email' } });
        fireEvent.blur(emailInput);
      });

      await act(async () => {
        fireEvent.click(submitButton);
      });

      expect(emailInput).toHaveStyleRule('border-color', '#ee5253');
    });
  });

  describe('with empty inputs', () => {
    it('change inputs border color to red', async () => {
      const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <Form />
        </ThemeProvider>
      );

      const emailInput = getByTestId('email-input');
      const nameInput = getByTestId('name-input');
      const messageInput = getByTestId('message-input');
      const submitButton = getByTestId('submit-form-button');

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: '' } });
        fireEvent.change(nameInput, { target: { value: '' } });
        fireEvent.change(messageInput, { target: { value: '' } });

        fireEvent.blur(emailInput);
        fireEvent.blur(nameInput);
        fireEvent.blur(messageInput);
      });

      await act(async () => {
        fireEvent.click(submitButton);
      });

      expect(emailInput).toHaveStyleRule('border-color', '#ee5253');
      expect(nameInput).toHaveStyleRule('border-color', '#ee5253');
      expect(messageInput).toHaveStyleRule('border-color', '#ee5253');
    });
  });
});
