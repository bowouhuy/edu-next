import React, { useState } from 'react';
import MyModal from '@/components/atoms/Modal';
import CloseBtn from '@/components/atoms/CloseBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import TitleColor from '@/components/atoms/TitleColor';
import Paragraph from '@/components/atoms/Paragraph';
import ArrowLong from '@/components/atoms/ArrowLong';
import Image from 'next/image';

const WithdrawModal = () => {

    const [number, setNumber] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <TriggerModal className='cta-primary' href={'#'} onClick={openModal}>REQUEST WITHDRAW <ArrowLong/></TriggerModal>
            <MyModal isOpen={isModalOpen} onClose={closeModal}>
                <Column>
                    <Image src={'/images/IconPopup.svg'} alt={'Sure'} width={123} height={108} />
                    <div>
                        <TitleColor>Withdraw request has been received</TitleColor>
                        <Paragraph fontSize={18}>Please wait up to 1 week for transfer</Paragraph>
                        <CloseBtn onClick={closeModal}><FontAwesomeIcon icon={faXmark} /></CloseBtn>
                    </div>
                    <ModalBtn onClick={closeModal}>CLOSE THIS WINDOW</ModalBtn>
                </Column>
            </MyModal>
        </div>
    );
}

export default WithdrawModal;

const TriggerModal = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: white;
    svg {
        path {
            fill: white;
        }
    }
`
const ModalBtn = styled.button`
    border: 1px solid var(--primary);
    text-decoration: none;
    text-align: center;
    padding: 30px;         
    background: white;
    border-radius: 10px;
    font-size: 18px;
    color: var(--primary);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    font-weight: 700;     
    letter-spacing: 0.1em;
    display: inline-block;      
    width: fit-content;    
    margin-top: 10px;
    span {
        margin-left: 2rem;
    }
    &:hover {
        background: var(--primary);
        transition: all 0.3s ease-in-out;
        border: 1px solid var(--primary);
        color: white;
    }
`
const Column = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
    p {
        margin-top: 0px;
    }
`