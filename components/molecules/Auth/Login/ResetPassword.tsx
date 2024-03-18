import React, { FormEvent, useState } from 'react';
import MyModal from '@/components/atoms/Modal';
import CloseBtn from '@/components/atoms/CloseBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import TitleColor from '@/components/atoms/TitleColor';
import Paragraph from '@/components/atoms/Paragraph';
import ModalForm from '@/components/atoms/ModalForm';
import { media } from '@/utils/media';
import api from '@/utils/api';
import axios from 'axios';

const ForgotPasswordModal = () => {
    const [email, setEmail] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setResponse('');
    };
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_API_URL+'auth/forgot-password', { email });
            if (response) {
                setResponse('Password reset request submitted successfully, please check your email to reset your password');
                setEmail('');
            } else {
                console.error('Error fetching password reset request');
            }
        } catch (error) {
            console.error('Error fetching password reset request:', error);
            setError('Password Reset Request Failed. Please Try Again.'); 
        }
    };

    return (
        <div>
            <TriggerModal href={'#'} onClick={openModal}>Forgot Password?</TriggerModal>
            <MyModal isOpen={isModalOpen} onClose={closeModal}>
                <ModalWrapper>
                    <TitleColor>Forgot Your Password?</TitleColor>
                    <Paragraph fontSize={18}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra.</Paragraph>
                    <ModalForm onSubmit={handleResetPassword}>
                        <Row className='modal-wrapper'>
                            <label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder='Enter Your Email'
                                />
                            </label>
                            <button type="submit">Submit</button>
                        </Row>
                    </ModalForm>
                    {response && <p>{response}</p>}
                    {error && <p>Error: {error}</p>}
                    <CloseBtn onClick={closeModal}><FontAwesomeIcon icon={faXmark} /></CloseBtn>
                </ModalWrapper>
            </MyModal>
        </div>
    );
}

export default ForgotPasswordModal;

const TriggerModal = styled.a`
    display: flex;
    margin-top: -10px;
    margin-bottom: 2rem;
    color: var(--primary);
    font-family: '__Poppins_ad20f7';
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    text-decoration-line: underline;
    text-transform: capitalize;
`
const ModalWrapper = styled.div`
    padding: 1.5rem;
    justify-content: center;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    ${media('<=smallPhone')} {
        flex-direction: column;
        gap:20px;
    }
`