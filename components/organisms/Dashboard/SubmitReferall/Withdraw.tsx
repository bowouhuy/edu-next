'use client'
import QuestionMark from '@/components/atoms/QuestionMark';
import Tooltip from '@/components/atoms/Tooltip';
import DetailModal from '@/components/molecules/Submit/DetailModal';
import WithdrawModal from '@/components/molecules/Submit/WithdrawModal';
import styled from 'styled-components';
import CtaLearnMore from './CtaClaim';


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
                    {props.data.affiliateInfo.map((item: affiliateInfo, index: number) => (
                        <div key={index}>          
                            <h5>{item.title}</h5>
                            <FieldRow>  
                                <Info>
                                    <span>Referalls</span><span>{item.referall}</span>
                                </Info>
                                <Info>
                                    <span>Registered students</span><span>{item.registeredStudent}</span>
                                </Info>
                            </FieldRow>
                            <DetailModal />
                        </div>
                    ))}
                    {props.data.balanceInfo.map((item: balanceInfo, index: number) => (
                        <div key={index}>          
                            <h5>{item.title}</h5>
                            <FieldColumn>  
                                <ColumnInfo>
                                    <span>balance
                                        <Tooltip text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra. "}>
                                            <QuestionMark/>
                                        </Tooltip>
                                    </span>
                                    <span>{item.total_balance}</span>
                                </ColumnInfo>
                                <ColumnInfo>
                                    <span>pending incentive
                                        <Tooltip text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra. "}>
                                            <QuestionMark/>
                                        </Tooltip>    
                                    </span>
                                    <span>{item.pending_incentive}</span>
                                </ColumnInfo>
                                <ColumnInfo>
                                    <span>withdrawal on process
                                        <Tooltip text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra. "}>
                                            <QuestionMark/>
                                        </Tooltip>
                                    </span>
                                    <span>{item.withdrawalProcess}</span>
                                </ColumnInfo>
                                <ColumnInfo>
                                    <span>total withdrawn
                                        <Tooltip text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra. "}>
                                            <QuestionMark/>
                                        </Tooltip>
                                    </span>
                                    <span>{item.total_withdraw}</span>
                                </ColumnInfo>
                            </FieldColumn>
                        </div>
                    ))}
                </Card>
                <Cta>
                    <WithdrawModal />
                </Cta>
                <CtaLearnMore />
            </RowRight>
        </>
    )
};

const RowRight = styled.div`
    width: 35%;
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
    gap: 20px;
    span {
        font-size: 45px;
        font-weight: 700;
        text-transform: uppercase;
        line-height: .8;
        &:first-child {
            font-size: 11px;
            letter-spacing: .1em;
        }
    }
    &:first-child {
        border-right: 1px solid rgba(0, 0, 0, 0.20);
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
            letter-spacing: .1em;
            border: 1px solid rgba(0, 0, 0, 0.20); 
            width: 70%;
        }
        &:last-child {
            border-left: 0;  
            width: 30%;
        }
    }
`

const Cta = styled.div`
    background: var(--primary);
    padding: 20px;
    display: flex;
    justify-content: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`