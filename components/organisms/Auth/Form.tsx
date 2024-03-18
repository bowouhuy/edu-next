'use client'
import React, { FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import ForgotPasswordModal from '@/components/molecules/Auth/Login/ResetPassword';
import Forms from '@/components/atoms/Form';
import axios from 'axios';
import { login } from '@/actions/auth';
import { useForm } from 'react-hook-form';
import loginValidation from '@/validations/loginForm';
import ErrorField from '@/components/atoms/ErrorField';
import { media } from '@/utils/media';

// Define the type of data that will be used in the form
type LoginFormData = {
  email: string;
  password: string;
}

export default function Form() {

  const buttonSubmit = useRef<HTMLButtonElement>(null);
  const handleButtonSubmit = () => {
    if (buttonSubmit.current) {
      buttonSubmit.current.click();
    }
  }
  // Using react-hook-form to handle form validation
  const { register, handleSubmit, formState: { errors }, watch } = useForm<LoginFormData>({ resolver: loginValidation });
  const [onLoading, setOnLoading] = useState(false);

  // handleSubmit is a function from react-hook-form to handle form submission
  const handleButtonLogin = handleSubmit(async (data) => {
    setOnLoading(true);
    // Call login function from actions/auth.ts
    const response = await login(data.email, data.password);
    if (response.status === false) {
      console.log(response);
      alert(response.message);
      setOnLoading(false);
      return
    }
    // alert('Login success');
    setOnLoading(false);
    window.location.href= '/dashboard/profile';

  })
  return (
    <FormLoginWrapper className='modal-root'>
      <Forms id="login" onSubmit={handleButtonLogin}>
        <FieldRow>
          <input
            type="text"
            id="email"
            {...register('email')}
            placeholder='Your Email'
            required
          />
          {errors.email &&
            <ErrorField>
              {errors.email.message}
            </ErrorField>
          }
          {/* <Button text={"Login"} /> */}
        </FieldRow>
        <FieldRow>
          <input
            type="password"
            id="password"
            {...register('password')}
            placeholder='Your Password'
            required
          />
          {errors.password &&
            <ErrorField>
              {errors.password.message}
            </ErrorField>
          }
        </FieldRow>
        <FieldRow>
          <button disabled={onLoading} style={{display: 'none'}} ref={buttonSubmit}  type="submit" >{!onLoading ? 'Login' : 'Loading'}</button>
        </FieldRow>
      </Forms>
      <ForgotPasswordModal />
      <button disabled={onLoading} onClick={handleButtonSubmit} >{!onLoading ? 'Login' : 'Loading'}</button>
    </FormLoginWrapper>
  )
};

const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  input {
    font-family: 'Poppins', sans-serif;
    &::placeholder {
      font-family: '__Poppins_ad20f7';
  }
`
const FormLoginWrapper = styled.div`
  button {
    width: fit-content;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: 0.1rem;
    text-align: center;
    background-color: var(--primary);
    text-transform: uppercase;
    padding: 20px 50px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    border: 0;
    font-family: '__Poppins_ad20f7';
    ${media('<=phone')} {
        width: 100%;
        font-size: 14px;
    }
  }
`