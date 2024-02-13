'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import ForgotPasswordModal from '@/components/molecules/Auth/Login/ForgotPassword';
import Forms from '@/components/atoms/Form';
import axios from 'axios';


export default function Form (){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleButtonLogin = (e: any) => {
    e.preventDefault();
    axios.post(process.env.NEXT_PUBLIC_API_URL +  'auth/login', {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value
    })
    .then((response) => {
      if(response.status === 200){
        console.log(response.data)
        localStorage.setItem('accessToken', response.data.data.token);
        localStorage.setItem('refreshToken', response.data.data.token);
      }else if(response.status === 401){
        console.log('Unauthorized')
      }
    })
  }
  return (
    <div className='modal-root'>
      <Forms id="login" onSubmit={(e) => handleButtonLogin(e)}>
        <FieldRow>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Your Email'
            required
          />
          <div>
            <input
              type="password"
              id="password"
              value={password}
              placeholder='Your Password'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <ForgotPasswordModal/>
            
          </div>
          
          <button type="submit" >Login</button>
          {/* <Button text={"Login"} /> */}
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