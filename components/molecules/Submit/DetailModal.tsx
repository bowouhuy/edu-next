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

const DetailModal = () => {

    const [number, setNumber] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <TriggerModal className='cta-primary' href={'#'} onClick={openModal}>See more details <ArrowLong/></TriggerModal>
            <MyModal isOpen={isModalOpen} onClose={closeModal}>
                <Column>
                    <Image src={'/images/IconPopup.svg'} alt={'Sure'} width={123} height={108} />
                    <div>
                        <TitleColor>Are you sure you want to withdraw?</TitleColor>
                        <Paragraph fontSize={18}>Withdraw 30 hari sekali dengan min withdraw sebesar 250k</Paragraph>
                        <CloseBtn onClick={closeModal}><FontAwesomeIcon icon={faXmark} /></CloseBtn>
                    </div>
                <div className="flex-row">
                    <ModalBtn onClick={closeModal}>YES, WITHDRAW</ModalBtn>
                    <ModalBtn onClick={closeModal}>NO, CANCEL IT</ModalBtn>
                </div>
                </Column>
            </MyModal>
        </div>
    );
}

export default DetailModal;

const TriggerModal = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    margin-top: 10px;
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
    width:100%;    
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
    &:first-child {
        background: var(--primary);
        color: white;
        &:hover {
            background: transparent;
            color: var(--primary);
            border: 1px solid var(--primary);
        }
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