'use client'
import React from 'react';
import QuestionMark from '@/components/atoms/QuestionMark';
import Tooltip from '@/components/atoms/Tooltip';
import DetailModal from '@/components/molecules/Submit/DetailModal';
import WithdrawModal from '@/components/molecules/Submit/WithdrawModal';
import styled from 'styled-components';
import CtaLearnMore from './CtaClaim';
import { media } from '@/utils/media';
import formatPrice from "../../../../utils/helper";
import Link from "next/link";
import Arrow from '@/components/atoms/ArrowLong';
import ArrowLong from '@/components/atoms/ArrowLong';


interface affiliateInfo {
    title: string;
    referall: string;
    registeredStudent: string;
}
interface balanceInfo {
    title: string;
    total_balance: string;
    pending_incentive: string;
    withdrawalProcess: string;
    total_withdraw: string;
}

export default function WithdrawCardInfo(props: { data:any }){
    return (
        <>
            <RowRight>
                <Card>
                    <div key={0}>
                        <h5>Affiliate</h5>
                        <FieldRow>  
                            <Info>
                                <span>Referalls</span><span>{props.data.data.submissions.paid}</span>
                            </Info>
                            <Info>
                                <span>Registered students</span><span>{props.data.data.submissions.total}</span>
                            </Info>
                        </FieldRow>
                        {/* <DetailModal /> */}
                        <Link className="cta-primary flex-row" style={{width: "fit-content", gap:"10px", textDecoration: "none"}} href={'/student'}><span>See More Details</span><ArrowLong/></Link>
                    </div>
                    <div key={1}>
                        <h5>Balance</h5>
                        <FieldColumn>  
                            <ColumnInfo>
                                <span>balance
                                    <Tooltip text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra. "}>
                                        <QuestionMark/>
                                    </Tooltip>
                                </span>
                                <span>{formatPrice(props.data.data.available_withdraw.amount)}</span>
                            </ColumnInfo>
                            <ColumnInfo>
                                <span>pending incentive
                                    <Tooltip text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra. "}>
                                        <QuestionMark/>
                                    </Tooltip>    
                                </span>
                                <span>{formatPrice(props.data.data.potential_commission)}</span>
                            </ColumnInfo>
                            <ColumnInfo>
                                <span>withdrawal on process
                                    <Tooltip text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra. "}>
                                        <QuestionMark/>
                                    </Tooltip>
                                </span>
                                <span>{formatPrice(props.data.data.pending_withdrawal)}</span>
                            </ColumnInfo>
                            <ColumnInfo>
                                <span>total withdrawn
                                    <Tooltip text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra. "}>
                                        <QuestionMark/>
                                    </Tooltip>
                                </span>
                                <span>{formatPrice(props.data.data.total_withdrawn)}</span>
                            </ColumnInfo>
                        </FieldColumn>
                    </div>
                </Card>
                <>
                    <WithdrawModal />
                </>
                <CtaLearnMore />
            </RowRight>
        </>
    )
};

const RowRight = styled.div`
    width: 35%;
    ${media("<desktop")} {
        width: 45%;
    }
    ${media("<=tablet")} {
        width: 100%;
    }
`

const Card = styled.div`
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
    border-radius: 20px 20px 0 0px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    h5 {
        letter-spacing: .1em;
        text-transform: uppercase;
    }
    ${media('<=smallPhone')} {
        padding: 0; 
        box-shadow:none;
    }
`

const FieldRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    border: 1px solid rgba(0, 0, 0, 0.20);
`


const FieldColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 15px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 50%;
    justify-content: space-between;
    gap: 20px;
    span {
        font-size: 45px;
        font-weight: 600;
        text-transform: uppercase;
        line-height: 1.3;
        &:first-child {
            font-size: 11px;
            letter-spacing: .1em;
        }
    }
    &:first-child {
        border-right: 1px solid rgba(0, 0, 0, 0.20);
    }
    ${media('<=phone')} {
        gap: 5px;
        span {
            font-size: 35px;
        }
    }
`

const ColumnInfo = styled.div`
    display: flex;
    flex-direction: row;
    span {
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
        padding: 20px;
        line-height: .8;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid rgba(0, 0, 0, 0.20);
        div {
            letter-spacing: normal;
        }
        &:first-child {
            font-size: 11px;
            line-height: 1.3;
            letter-spacing: .1em;
            border: 1px solid rgba(0, 0, 0, 0.20); 
            width: 60%;
            ${media('<=phone')} {
                padding: 15px 20px;
            }
        }
        &:last-child {
            border-left: 0;  
            width: 40%;
        }
    }
`