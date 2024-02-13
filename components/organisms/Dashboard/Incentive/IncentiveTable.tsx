import React, { useEffect, useState } from 'react';
import { Incentive } from '@/types';
import styled from 'styled-components';
import IncentivePagination from '@/components/molecules/Dashboard/IncentivePagination';

interface IncentiveTableProps {
    dataIncentive: Incentive[];
}

const IncentiveTable: React.FC<IncentiveTableProps> = ({ dataIncentive }) => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCountry, setSelectedCountry] = useState('All'); // Initialize with 'All'
    const [filteredData, setFilteredData] = useState(dataIncentive);

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const filterData = (country: string) => {
        setSelectedCountry(country);
    };

    useEffect(() => {
        // Filter the data based on the selected country
        if (selectedCountry === 'All') {
            setFilteredData(dataIncentive);
        } else {
            setFilteredData(dataIncentive.filter(incentive => incentive.country === selectedCountry));
        }
        // Reset the current page to 1 when applying a filter
        setCurrentPage(1);

    }, [selectedCountry, dataIncentive]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataToDisplay = filteredData.slice(startIndex, endIndex);

    const uniqueCountries = [...new Set(dataIncentive.map(incentive => incentive.country))];

    return (
        <>  
            <FilterRow>
                <label htmlFor="country">Filter By Country</label>
                <select
                    id="country"
                    onChange={(e) => filterData(e.target.value)}
                    value={selectedCountry}
                >
                    <option value="All">Select Country</option>
                    {uniqueCountries.map((country, index) => (
                        <option key={index} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </FilterRow>
            <TableParent>
                <table>
                    <thead>
                        <tr>
                            <th>EVENT/ PROGRAM NAME</th>
                            <th>INCENTIVE PER STUDENT</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataToDisplay.map((incentive, index) => {
                            // Filter based on the selected country
                            if (selectedCountry === 'All' || incentive.country === selectedCountry) {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {incentive.programName && <span>{incentive.programName} </span>}
                                            {incentive.groupName && <span> {incentive.groupName}</span>}
                                            {!(incentive.programName && incentive.groupName) && incentive.country && <span> - {incentive.country}</span>}
                                        </td>
                                        <td>                                        
                                            {incentive.amount}
                                        </td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
            </TableParent>
                <IncentivePagination
                    data={filteredData}
                    itemsPerPage={itemsPerPage}
                    onPageChange={onPageChange}
                />
        </>
    );
};

export default IncentiveTable;


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
                padding: 20px 30px;
                letter-spacing: .1em;
                font-size: 18px;
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
                    padding: 20px 30px;
                    justify-content: space-between;
                    font-size: 18px;
                    font-weight: 400;
                    border-right: 1px solid #00000020;
                    &:last-child {
                        border-right: none;
                    }
                }
                &:nth-child(odd) { 
                    td {
                        background-color: white;
                    }
                }
            }
        }
    }
`


function setSelectedFilter(value: string) {
    throw new Error('Function not implemented.');
}