'use client'
import React, { useEffect, useState } from 'react';
import HistoryTable from '@/components/organisms/Dashboard/BalanceHistory';
import { Transaction } from '@/types/global';
import styled from 'styled-components';
import Tooltip from '@/components/atoms/Tooltip';
import QuestionMark from '@/components/atoms/QuestionMark';
import { media } from "@/utils/media";
import ProfileLabel from '../../../components/atoms/ProfileLabel';
import WithdrawModal from "@/components/molecules/Submit/WithdrawModal";
import api from '@/utils/api';
import formatPrice from "../../../utils/helper";

async function fetchData() {
    try {
        const response = await api.get(process.env.NEXT_PUBLIC_API_URL+'withdrawal-history');

        return response.data; // Ini akan mengembalikan data dari API.
    } catch (error) {
        // Handle error jika terjadi kesalahan dalam permintaan.
        console.error('Error fetching data:', error);
        throw error;
    }
}

async function fetchDataBalance() {
    try {
        const response = await api.get(process.env.NEXT_PUBLIC_API_URL+'affiliate');

        return response.data; // Ini akan mengembalikan data dari API.
    } catch (error) {
        // Handle error jika terjadi kesalahan dalam permintaan.
        console.error('Error fetching data:', error);
        throw error;
    }

}
export default function History() {
    const [historyData, setHistoryData] = useState(null);
    const [AvailableBalance, setAvailableBalance] = useState<number>(0);

    useEffect(() => {
        fetchData()
            .then((data) => {
                setHistoryData(data);
            })
            .catch((error) => {
                // Handle error jika terjadi kesalahan dalam permintaan.
            });
        fetchDataBalance().then((data) => {
            setAvailableBalance(data.data.available_withdraw.amount);
        }).catch((error) => {

        });
    }, []);
    return (
        <>
            <h1 className="d-none" style={{paddingBottom: '1rem'}}>Balance History</h1>
            <HistoryParent>
                <Card>
                    <div>
                        <ProfileLabel><span>Available balance</span>
                            <Tooltip text={'Available ammount of incentives you can withdraw from your account'}><QuestionMark/>
                            </Tooltip>
                        </ProfileLabel>
                        <TotalBalance>{formatPrice(AvailableBalance)}</TotalBalance>
                    </div>
                    <div>
                        <WithdrawModal />
                    </div>
                </Card>
                {historyData && <HistoryTable historyData={historyData} />}
            </HistoryParent>
        </>
    );


}

const Card = styled.div`
    background: var(--primary);
    border-radius: 15px;
    padding: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    span {
        color: white;
    }
    .btn-withdraw-unavailable {
        background: transparent!important;
        border: none!important;
    }
    ${media("<=tablet")} {
        padding: 30px;
        flex-direction: column;
        align-items: flex-start;
    }
    ${media("<=phone")} {
        padding: 20px;
    }
`
const TotalBalance = styled.span`
    color: white;
    font-size: 40px;
    ${media("<=phone")} {
        font-size: 24px;
    }
`

const HistoryParent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    
`