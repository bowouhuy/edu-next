import React, { useState } from 'react';
import { Transaction } from '@/types/global';
import styled from 'styled-components';
import HistoryPagination from '@/components/molecules/Dashboard/HistoryPagination';
import ChangeAccountNumberModal from '@/components/molecules/Dashboard/AccountNumber';
import ProfileLabel from '../../../components/atoms/ProfileLabel';
import { media } from '@/utils/media';
import helper, {formatDate} from '@/utils/helper';
import formatPrice from "@/utils/helper";


interface HistoryTableProps {
    historyData: {data: Transaction[]};
}

const HistoryTable: React.FC<HistoryTableProps> = ({ historyData }) => {
    const itemsPerPage = 10;

    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataToDisplay = historyData.data.slice(startIndex, endIndex);

    return (
        <>
            <TableParent >
                <table>
                    <thead>
                        <tr>
                            <th>History</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataToDisplay.map((transaction, index) => (
                            <tr key={index}>
                                <td>
                                    <div>
                                        <ProfileLabel>
                                            {transaction.status}
                                        </ProfileLabel>
                                        <DateDetail>
                                            <span>{formatDate(transaction.created_at)}</span>
                                            {(transaction.status === 'Rejected' || transaction.status === 'Finance rejected' || transaction.status === 'Partnership rejected') &&  (
                                                <span> - {transaction.bank}</span>
                                            )}
                                        </DateDetail>
                                    </div>
                                    <Balance style={{ color: 
                                        transaction.status === 'Transfered' ? '#1BC80C' : 
                                        (transaction.status === 'Rejected' || transaction.status === 'Finance rejected' || transaction.status === 'Partnership rejected') ? 'red' :
                                        'orange'
                                    }}>
                                        {formatPrice(transaction.amount)}
                                    </Balance>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableParent>
            <HistoryPagination
                data={historyData.data}
                itemsPerPage={itemsPerPage}
                onPageChange={onPageChange}
            />
        </>
    );
};

export default HistoryTable;


const TableParent = styled.div `
    table {
        width: 100%;
        border-radius: 20px;
        border: 1px solid #00000020;
        border-spacing: 0;
        thead {
            th {
                background-color: #DDF2FD;
                text-align: left;
                color: var(--primary);
                padding: 15px 25px;
                border-radius: 20px 20px 0 0px;
                border-left-top-radius: 0;
                ${media("<=smallPhone")} {
                    font-size: 14px;
                }
            }
        }
        tbody {
            tr {
                td {
                    background-color: #F9F9F9;
                    padding: 20px 25px;
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    justify-content: space-between;
                    &:last-child {
                        border-radius: 0 0 20px 20px;
                    }
                    ${media("<=smallPhone")} {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 10px;
                        span {
                            font-size: 14px;
                        }
                    }
                }
                &:nth-child(odd) { 
                    td {
                        background-color: white;
                    }
                }
            }
        }
        tr {
            &:last-child {
            }
        }
    }
`

const DateDetail = styled.div`
    display: flex;
    flex-direction: row;
    gap: 6px;
`

const Balance = styled.span`
    font-size: 22px;
    ${media("<=smallPhone")} {
        font-size: 18px;
    }
`