import React, { useState } from 'react';
import MyModal from '@/components/atoms/Modal';
import CloseBtn from '@/components/atoms/CloseBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import TitleColor from '@/components/atoms/TitleColor';
import Paragraph from '@/components/atoms/Paragraph';
import ModalForm from '@/components/atoms/ModalForm';

const ForgotPasswordModal = () => {
    const [email, setEmail] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle the "Forgot Password" form submission here.
        console.log('Email submitted: ', email);
        // You can add further logic to handle the password reset process.
        // For example, send a password reset email.
        // Then, close the modal using `closeModal` or `onRequestClose`.
        closeModal();
    };

    return (
        <div>
            <TriggerModal href={'#'} onClick={openModal}>Forgot Password?</TriggerModal>
            <MyModal isOpen={isModalOpen} onClose={closeModal}>
                <TitleColor>Forgot Your Password?</TitleColor>
                <Paragraph fontSize={18}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra.</Paragraph>
                <ModalForm onSubmit={handleSubmit}>
                    <Row>
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
                <CloseBtn onClick={closeModal}><FontAwesomeIcon icon={faXmark} /></CloseBtn>
            </MyModal>
        </div>
    );
}

export default ForgotPasswordModal;

const TriggerModal = styled.a`
    display: flex;
    margin-top: 10px;
    color: var(--primary);
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: italic;
    font-weight: 400;
    text-decoration-line: underline;
    text-transform: capitalize;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
`