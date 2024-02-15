'use client'
import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import ForgotPasswordModal from '@/components/molecules/Auth/Login/ForgotPassword';
import Forms from '@/components/atoms/Form';
import axios from 'axios';
import { login } from '@/actions/auth';
import { useForm } from 'react-hook-form';
import loginValidation from '@/validations/loginForm';
import ErrorField from '@/components/atoms/ErrorField';

// Define the type of data that will be used in the form
type LoginFormData = {
  email: string;
  password: string;
}

export default function Form() {
  // Using react-hook-form to handle form validation
  const { register, handleSubmit, formState: { errors }, watch } = useForm<LoginFormData>({ resolver: loginValidation });
  const [onLoading, setOnLoading] = useState(false);

  // handleSubmit is a function from react-hook-form to handle form submission
  const handleButtonLogin = handleSubmit(async (data) => {
    setOnLoading(true);
    // Call login function from actions/auth.ts
    const response = await login(data.email, data.password);
    if (typeof response === 'boolean') {
      alert('Error, check console');
      setOnLoading(false);
      return
    }
    alert('Login success');
    setOnLoading(false);

  })
  return (
    <div className='modal-root'>
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
          <ForgotPasswordModal />
        </FieldRow>
        <FieldRow>
          <button disabled={onLoading} type="submit" >{!onLoading ? 'Login' : 'Loading'}</button>
        </FieldRow>
      </Forms>
    </div>
  )
};

const FieldRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  input {
    font-family: '__Poppins_baf6f6';  
    &::placeholder {
      font-family: '__Poppins_baf6f6'!important;
  }
`