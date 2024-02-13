import React, { useEffect, useState } from 'react';
import { Incentive, StudentList } from '@/types';
import styled from 'styled-components';
import IncentivePagination from '@/components/molecules/Dashboard/IncentivePagination';

interface StudentListTableProps {
    dataStudent: StudentList[];
}

function getClassBasedOnStatus(status: string) {
    if (status === 'Registered') {
        return 'blue';
    } else if (status === 'On Process') {
        return 'orange';
    } else if (status === 'Sucessfull') {
        return 'green';
    } else if (status === 'Unsuccessful') {
        return 'red';
    } else if (status === 'Cancelled') {
        return 'red';
    } else if (status === 'Paid') {
        return 'purple';
    } else {
        return 'orange';
    }
}

const StudentListTable: React.FC<StudentListTableProps> = ({ dataStudent }) => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedDate, setSelectedDate] = useState('All'); // Initialize with 'All'
    const [filteredData, setFilteredData] = useState(dataStudent);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const filterData = (date: string) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        // Filter the data based on the selected country
        if (selectedDate === 'All') {
            setFilteredData(dataStudent);
        } else {
            setFilteredData(dataStudent.filter(StudentList => StudentList.date === selectedDate));
        }
        // Reset the current page to 1 when applying a filter
        setCurrentPage(1);

    }, [selectedDate, dataStudent]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataToDisplay = filteredData.slice(startIndex, endIndex);

    const uniqueDate = [...new Set(dataStudent.map(StudentList => StudentList.date))];

    return (
        <>  
            <FilterRow>
                <label htmlFor="country">FILTER BY MONTH</label>
                <select
                    id="country"
                    onChange={(e) => filterData(e.target.value)}
                    value={selectedDate}
                >
                    <option value="All">Choose Month</option>
                    {uniqueDate.map((date, index) => (
                        <option key={index} value={date}>
                            {date}
                        </option>
                    ))}
                </select>
            </FilterRow>
            <TableParent>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>SCHOOL</th>
                            <th>Program Name</th>
                            <th>EARNING</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataToDisplay.map((StudentList, index) => {
                            // Filter based on the selected country
                            if (selectedDate === 'All' || StudentList.date === selectedDate) {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {StudentList.date}
                                        </td>
                                        <td>                                        
                                            {StudentList.name}
                                        </td>
                                        <td>                                        
                                            {StudentList.phoneNumber}
                                        </td>
                                        <td>                                        
                                            {StudentList.school}
                                        </td>
                                        <td>                                        
                                            {StudentList.programName}
                                        </td>
                                        <td>                                        
                                            {StudentList.earning}
                                        </td>
                                        <td>                                        
                                            <span className={getClassBasedOnStatus(StudentList.status)}>
                                                {StudentList.status}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
            </TableParent>
                {/* <IncentivePagination
                    data={filteredData}
                    itemsPerPage={itemsPerPage}
                    onPageChange={onPageChange}
                /> */}
        </>
    );
};

export default StudentListTable;


const FilterRow = styled.div`
    margin-bottom: 40px;
    font-weight: 500;
    display: flex;
    gap: 20px;
    align-items: center;
    select {
        padding: 20px 40px 20px 20px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.20);
        font-size: 18px;
        font-family: inherit;
        color: rgba(0, 0, 0, 0.60);
        -webkit-appearance: none;
        display: block;
        -moz-appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%), linear-gradient(to right, transparent, transparent);
        background-position: calc(100% - 20px) calc(1.6em + 2px), calc(100% - 15px) calc(1.6em + 2px),100% 0;
        background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
        background-repeat: no-repeat;
        &:focus-visible  {
            
            outline: var(--primary) auto 1px;
        }
    }
    label {
        font-size: 16px;
        text-transform: uppercase;
        letter-spacing: .1em;
    }
`

const TableParent = styled.div `
    table {
        width: 100%;
        border-radius: 10px;
        border: 1px solid #00000020;
        border-spacing: 0;
        margin-bottom: 30px;
        overflow: hidden;
        thead {
            th {
                background-color: var(--primary);
                text-align: left;
                color: white;
                padding: 20px;
                letter-spacing: .1em;
                font-size: 16px;
                font-weight: 400;
                text-transform: uppercase;
                border-right: 1px solid #ffffff50;
                &:last-child {
                    border-right: none;
                }
            }
        }
        tbody {
            tr {
                border-radius: 0 0 20px 20px;
                td {
                    background-color: #F9F9F9;
                    padding: 20px;
                    justify-content: space-between;
                    font-size: 16px;
                    font-weight: 400;
                    border-right: 1px solid #00000020;
                    &:last-child {
                        border-right: none;
                    }
                    span {
                        font-size: 11px;
                        padding: 10px;
                        color: white;
                        border-radius: 50px;
                        text-transform: uppercase;
                        font-weight: 600;
                        display: flex;
                        justify-content: center;
                    }
                }
                &:nth-child(odd) { 
                    td {
                        background-color: white;
                    }
                }
                .blue {
                    background: var(--primary);
                }
                .orange {
                    background: #FE9A04;
                }
                .red {
                    background: #EA3939;
                }
                .purple {
                    background: #9328C5;
                }
                .green {
                    background: #1BC80C;
                }
            }
        }
    }
`
