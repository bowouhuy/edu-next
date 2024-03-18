import React, { useEffect, useState } from 'react';
import MyModal from '@/components/atoms/Modal';
import CloseBtn from '@/components/atoms/CloseBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import TitleColor from '@/components/atoms/TitleColor';
import Paragraph from '@/components/atoms/Paragraph';
import ArrowLong from '@/components/atoms/ArrowLong';
import Image from 'next/image';
import  { media } from '@/utils/media';
import api from '@/utils/api';

const WithdrawModal = () => {

    const [number, setNumber] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [withdrawAvailable, setWithdrawAvailable] = useState(true);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleWithdraw = async () => {
        try {
            const response = await api.post('request-withdraw');
            if (response) {
                console.log('Withdraw request sent successfully');
                openModal(); // Open modal after successful withdrawal request
            } else {
                console.error('Error fetching Withdraw request');
            }
        } catch (error) {
            console.error('Error fetching withdraw request:', error);
        }
    };

    useEffect(() => {
        const fetchWithdrawAvailability = async () => {
            try {
                const response = await api.get('affiliate');
                setWithdrawAvailable(response.data.data.available_withdraw.status);
                // console.log(response.data.data.available_withdraw.status);
            } catch (error) {
                console.error('Error fetching withdraw availability:', error);
            }
        };
        
        fetchWithdrawAvailability();
    }, []);

    return (
        <div>
            <TriggerModal  className={withdrawAvailable ? 'cta-primary' : 'btn-withdraw-unavailable'} href={'#'} onClick={handleWithdraw}>REQUEST WITHDRAW <ArrowLong/></TriggerModal>
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
    font-weight: 700;
    background: var(--primary);
    padding: 20px;
    display: flex;
    font-size: 16px;
    justify-content: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    ${media('<=phone')} {
        font-size:14px;
        padding: 10px;
        border-radius:0;
    }
    svg {
        path {
            fill: white;
        }
    }
    &.btn-withdraw-unavailable {
        background: grey!important;
        pointer-events: none!important;   
        border: 1px solid grey!important;
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
    &.btn-withdraw-unavailable {
        background: grey;
        pointer-events: none;   
        border: 1px solid grey;
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