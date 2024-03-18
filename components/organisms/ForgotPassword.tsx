'use client'
import { useRouter } from 'next/navigation';
import React, { FormEvent, useState } from 'react';
import { useEffect } from 'react';
import BasicSection from "@/components/atoms/BasicSection";
import Container from "@/components/atoms/Container";   
import Forms from "@/components/atoms/Form";
import styled from 'styled-components';
import api from '@/utils/api';
import { useSearchParams } from 'next/navigation';
import ErrorField from '@/components/atoms/ErrorField';
import forgotPasswordValidation from '@/validations/forgotPasswordForm';
import { useForm } from 'react-hook-form';

type ForgotPasswordData = {
    password: string;
    password_confirmation: string;
}

export default function ForgotPasswordSection(){
    const router = useRouter();
    const [loading, setLoading] = React.useState(false)
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    const searchParams = useSearchParams()
    const token = searchParams?.get('token')
    const email = searchParams?.get('email')
    useEffect(() => {
        if (!token && !email) {
            router.push('/not-found');
        }
    }, [token, email, router]);

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<ForgotPasswordData>({ resolver: forgotPasswordValidation });

    const handleUpdatePassword = handleSubmit(async (data) => {
        try {
            const response = await api.post('auth/reset-password', {...data, email, token});
            setResponse('Password Change Request Submitted Successfully');
            reset();
            setTimeout(() => {
                setResponse('');
                router.push('/auth/login');
            }, 3000);
        } catch (error){
            setError('Oops! Password Change Request Failed. Your Password does not match');
        }
    })

    return (
        <BasicSection>
            <Container>
                <>
                    <Forms onSubmit={handleUpdatePassword} className='forgot-password'>
                        <Column>
                            <label>
                                <input
                                    id="password"
                                    {...register('password')}
                                    type="password"
                                    required
                                    placeholder='New Password'
                                />
                                {errors.password &&
                                    <ErrorField>
                                    {errors.password.message}
                                    </ErrorField>
                                }
                            </label>
                            <label>
                                <input
                                    id="passwordConfirmation"
                                    {...register('password_confirmation')}
                                    type="password"
                                    required
                                    placeholder='Confirm Password'
                                />
                                {errors.password_confirmation &&
                                    <ErrorField>
                                    {errors.password_confirmation.message}
                                    </ErrorField>
                                }
                            </label>
                        </Column>
                        <div className="flex-row">
                            <button type='submit' name="reset-pwd-button" className="reset-pwd">
                                {!loading ? 'Reset Password': 'Sending...'}    
                            </button>
                        </div>
                        {response && <p>{response}</p>}
                        {error && <p>Error: {error}</p>}
                    </Forms>    
                </>
            </Container>
        </BasicSection> 
    );
}

const Column = styled.div`
    display: flex;
    flex-direction: column;    
    gap: 1rem;
    label {
        display: flex;
        flex-direction: column;    
        gap: 1rem;
    }
    p {
        font-family: '__Poppins_ad20f7';
    }
    span {
        font-family: '__Poppins_ad20f7';
        margin-top: 1rem;
        text-align: left;
    }
`
