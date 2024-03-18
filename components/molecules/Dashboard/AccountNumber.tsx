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
import { AxiosError } from "axios";
import hangeAccountNumberValidation from '@/validations/changeAccountNumberForm';

// type ChangeAccountNumberData = {
//     account_number: string;
//     account_name: string;
//     bank_name: string;
// }

const ChangeAccountNumberModal = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [accountName, setAccountName] = useState('');
    const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [confirmBankError, setConfirmBankError] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        setIsModalOpen(false);
        setResponse('');
        setBankName('');
        setAccountName('');
        setAccountNumber('');
        setConfirmAccountNumber('');
        setConfirmBankError('');
    };

    // const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<ChangeAccountNumberData>({ resolver: changePasswordValidation });

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        try {
            const formData = new FormData(event.currentTarget);
            const bankNumber = formData.get('accountNumber');
            const confirmBankNumber = formData.get('confirmAccountNumber');

            if (bankNumber !== confirmBankNumber) {
                setConfirmBankError('Bank account numbers do not match');
                return;
            } else {
                setConfirmBankError('');
            }

            const data = {
                account_number: formData.get('accountNumber'),
                account_name: formData.get('accountName'),
                bank_name: formData.get('bankName')
            }
    
            // Submit the form data
            const response = await api.post(process.env.NEXT_PUBLIC_API_URL + 'change-bank-request', data);
            console.log(response.data);
    
            // Set success message and clear form fields
            setResponse('Your Update Request Account Submitted Successfully!');
            setTimeout(() => {
                setResponse('');
            }, 4000);
            setBankName('');
            setAccountName('');
            setAccountNumber('');
            setConfirmAccountNumber('');
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to submit the update request.');
            setTimeout(() => {
                setError('');
            }, 3000);
        }
    }
    
    return (
        <div>
            <TriggerModal className='cta-primary' href={'#'} onClick={openModal}>Update Bank Details <Arrow/></TriggerModal>
            <MyModal isOpen={isModalOpen} onClose={closeModal}>
                <TitleColor>Want to change your Bank Account number?</TitleColor>
                <Paragraph fontSize={18}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra. </Paragraph>
                <ModalForm onSubmit={handleSubmit}>
                    <Column>
                        <label>
                            <input
                                type="text"
                                onChange={(e) => setBankName(e.target.value)}
                                required
                                name='bankName'
                                value={bankName}
                                placeholder='Enter Bank Name'
                            />
                        </label>
                        <label>
                            <input
                                type="text"
                                name='accountName'
                                value={accountName}
                                onChange={(e) => setAccountName(e.target.value)}
                                required
                                placeholder='Enter Account Name'
                            />
                        </label>
                        <label>
                            <input
                                type="number"
                                onChange={(e) => setAccountNumber(e.target.value)}
                                required
                                name='accountNumber'
                                value={accountNumber}
                                placeholder='Change Account Number'
                            />
                        </label>
                        <label>
                            <input
                                type="number"
                                onChange={(e) => setConfirmAccountNumber(e.target.value)}
                                required
                                name='confirmAccountNumber'
                                value={confirmAccountNumber}
                                placeholder='Confirm Account Number'
                            />
                        </label>
                        {confirmBankError && <p>{confirmBankError}</p>}
                        <button type="submit">Submit</button>
                    </Column>
                </ModalForm>
                <>
                    {response && <p>{response}</p>}
                    {error && <p>Error: {error}</p>}
                </>
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

const Column = styled.div`
    display: flex;
    flex-direction: column;   
    gap: 15px; 
    width: 100%;
    input {
        border: 1px solid #00000040!important;
        border-radius: 10px!important;
        width: -webkit-fill-available;
    }
    button {
        border-radius: 10px!important;
        transition: all 0.3s ease-in-out;   
        border: 1px solid var(--primary)!important;
        &:hover {
            background: transparent;
            color: var(--primary)!important;   
        }
    }
    p {
        margin: 0;
        font-family: '__Poppins_ad20f7';
        text-align: left;
        color: red;
        font-size: 16px;
    }
`