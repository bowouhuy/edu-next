import React, { FormEvent, useState } from 'react';
import MyModal from '@/components/atoms/Modal';
import CloseBtn from '@/components/atoms/CloseBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import TitleColor from '@/components/atoms/TitleColor';
import Paragraph from '@/components/atoms/Paragraph';
import Arrow from '@/components/atoms/ArrowLong';
import ModalForm from '@/components/atoms/ModalForm';
import api from '@/utils/api';
import ErrorField from '@/components/atoms/ErrorField';
import changePasswordValidation from '@/validations/changePasswordForm';
import { useForm } from 'react-hook-form';
import { AxiosError } from "axios";


type ChangePasswordData = {
    old_password: string;
    new_password: string;
    new_password_confirmation: string;
}

const ChangePasswordModal = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setError('');
        reset();
    };

    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<ChangePasswordData>({ resolver: changePasswordValidation });

    const handleChangePassword = handleSubmit(async (data) => {
        try {
            const response = await api.post('/change-password', data);
            setResponse('Password Change Request Submitted Successfully');
            setTimeout(() => {
                setResponse('');
            }, 3000);
            reset();
        } catch (error){
            // console.log(error);
            const e=error as AxiosError<MainResponse<ErrorData>>
            if (e.response?.data.code===400 && !e.response?.data.data) { 
                setError('Old Password Incorrect');
            } else {
                setError('Oops! Password Change Request Failed. Please Try Again');
            }
        }
    })
    
    return (
        <div>
            <TriggerModal className='cta-primary' href={'#'} onClick={openModal}>Change Password <Arrow/></TriggerModal>
            <MyModal isOpen={isModalOpen} onClose={closeModal}>
                <TitleColor>Change Password</TitleColor>
                <Paragraph fontSize={18}>Please enter a password that is at least 8 characters long and contains a combination of letters and numbers. </Paragraph>
                <ModalForm className='column' onSubmit={handleChangePassword}>
                    <Column>
                        <label>
                            <input
                                id="oldPassword"
                                {...register('old_password')}
                                type="password"
                                required
                                placeholder='Old Password'
                            />
                            {errors.old_password &&
                                <ErrorField>
                                {errors.old_password.message}
                                </ErrorField>
                            }
                        </label>
                        <label>
                            <input
                                id="newPassword"
                                {...register('new_password')}
                                type="password"
                                required
                                placeholder='New Password'
                            />
                            {errors.new_password &&
                                <ErrorField>
                                {errors.new_password.message}
                                </ErrorField>
                            }
                        </label>
                        <label>
                            <input
                                id="newConfirmPassword"
                                {...register('new_password_confirmation')}
                                type="password"
                                required
                                placeholder='Confirm Password'
                            />
                            {errors.new_password_confirmation &&
                                <ErrorField>
                                {errors.new_password_confirmation.message}
                                </ErrorField>
                            }   
                        </label>
                    </Column>
                    <div className="flex-row">
                        <button type="submit">CONFIRM CHANGES</button>
                        <button onClick={closeModal}>CANCEL</button>
                    </div>
                </ModalForm>
                {response && <p>{response}</p>}
                {error && <p>Error: {error}</p>}
                <CloseBtn onClick={closeModal}><FontAwesomeIcon icon={faXmark} /></CloseBtn>
            </MyModal>
        </div>
    );
}

export default ChangePasswordModal;

const TriggerModal = styled.a`
    display: flex;
    margin-top: 10px;
    align-items: center;
    gap: 10px;
    color: var(--primary);
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    text-decoration: none;
    font-style: normal;
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;    
    gap: 1rem;
    label {
        display: flex;
        flex-direction: column;
    }
    span {
        font-family: '__Poppins_ad20f7';
        margin-top: 1rem;
        text-align: left;
    }
`
