import React, { useState } from 'react';
import MyModal from '@/components/atoms/Modal';
import CloseBtn from '@/components/atoms/CloseBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import TitleColor from '@/components/atoms/TitleColor';
import Paragraph from '@/components/atoms/Paragraph';
import Arrow from '@/components/atoms/ArrowLong';
import ModalForm from '@/components/atoms/ModalForm';

const ChangeAccountNumberModal = () => {
    const [number, setNumber] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log('Account Number submitted: ', number);
        closeModal();
    };
    return (
        <div>
            <TriggerModal href={'#'} onClick={openModal}>Update Bank Details <Arrow/></TriggerModal>
            <MyModal isOpen={isModalOpen} onClose={closeModal}>
                <TitleColor>Want to change your Bank Account number?</TitleColor>
                <Paragraph fontSize={18}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra. </Paragraph>
                <ModalForm onSubmit={handleSubmit}>
                    <Row>
                        <label>
                            <input
                                type="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                required
                                placeholder='Change Account Number Modal'
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

export default ChangeAccountNumberModal;

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

const Row = styled.div`
    display: flex;
    flex-direction: row;    
`