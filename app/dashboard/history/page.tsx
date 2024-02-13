'use client'
import React from 'react';
import HistoryTable from '@/components/organisms/Dashboard/BalanceHistory';
import { Transaction } from '@/types';
import styled from 'styled-components';
import Tooltip from '@/components/atoms/Tooltip';
import QuestionMark from '@/components/atoms/QuestionMark';

const AvailableHistory = {
    title: "Balance History",
    balance: "Rp999.999.999.999,-",
}

const HistoryPage: React.FC = () => {
    
    const historyData: Transaction[] = [
        {
            date: '23 September 2023',
            transactionType: 'Dana Masuk',
            amount: 'Rp200.000',
            bankNumber: '123456789',
        },
        {
            date: '20 September 2023',
            transactionType: 'Withdrawal',
            amount: 'Rp50.000',
            bankNumber: '987654321',
        },
        {
            date: '15 September 2023',
            transactionType: 'Withdrawal',
            amount: 'Rp200.000',
            bankNumber: '123456789',
        },
        {
            date: '10 September 2023',
            transactionType: 'Dana Masuk',
            amount: 'Rp50.000',
            bankNumber: '987654321',
        },
        {
            date: '23 September 2023',
            transactionType: 'Dana Masuk',
            amount: 'Rp200.000',
            bankNumber: '123456789',
        },
        {
            date: '20 September 2023',
            transactionType: 'Withdrawal',
            amount: 'Rp50.000',
            bankNumber: '987654321',
        },
        {
            date: '15 September 2023',
            transactionType: 'Withdrawal',
            amount: 'Rp200.000',
            bankNumber: '123456789',
        },
        {
            date: '10 September 2023',
            transactionType: 'Dana Masuk',
            amount: 'Rp50.000',
            bankNumber: '987654321',
        },
        {
            date: '23 September 2023',
            transactionType: 'Dana Masuk',
            amount: 'Rp200.000',
            bankNumber: '123456789',
        },
        {
            date: '20 September 2023',
            transactionType: 'Withdrawal',
            amount: 'Rp50.000',
            bankNumber: '987654321',
        },
        {
            date: '15 September 2023',
            transactionType: 'Withdrawal',
            amount: 'Rp200.000',
            bankNumber: '123456789',
        },
        {
            date: '10 September 2023',
            transactionType: 'Dana Masuk',
            amount: 'Rp50.000',
            bankNumber: '987654321',
        },
        {
            date: '23 September 2023',
            transactionType: 'Dana Masuk',
            amount: 'Rp200.000',
            bankNumber: '123456789',
        },
        {
            date: '20 September 2023',
            transactionType: 'Withdrawal',
            amount: 'Rp50.000',
            bankNumber: '987654321',
        },
        {
            date: '15 September 2023',
            transactionType: 'Withdrawal',
            amount: 'Rp200.000',
            bankNumber: '123456789',
        },
        {
            date: '10 September 2023',
            transactionType: 'Dana Masuk',
            amount: 'Rp50.000',
            bankNumber: '987654321',
        },
    ];

    return (
        <>
            <h1>{AvailableHistory.title}</h1>
            <HistoryParent>
                <Card>
                    <div>
                        <ProfileLabel><span>Available balance</span>
                            <Tooltip text={'Available ammount of incentives you can withdraw from your account'}><QuestionMark/>
                            </Tooltip>
                        </ProfileLabel>
                        <TotalBalance>{AvailableHistory.balance}</TotalBalance>
                    </div>
                    {/* <BtnArrowPrimary href={'#'} text={'REQUEST WITHDRAW'}/> */}
                </Card>
                <HistoryTable historyData={historyData} />
            </HistoryParent>
        </>
    );
};

export default HistoryPage;

const Card = styled.div`
    background: var(--primary);
    border-radius: 15px;
    padding: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span {
        color: white;
    }
`
const TotalBalance = styled.span`
    color: white;
    font-size: 40px;
`

const HistoryParent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const ProfileLabel = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
`;