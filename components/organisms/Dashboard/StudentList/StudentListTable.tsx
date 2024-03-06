import React, { useEffect, useState } from 'react';
import { StudentList } from '@/types/global';
import styled from 'styled-components';
import formatPrice, {formatDate, getMonthName} from "../../../../utils/helper";
import StudentListPagination from "@/components/molecules/StudentList/StudentListPagination";
import { media } from '@/utils/media';
import api from '@/utils/api';


interface StudentListTableProps {
    // dataStudent: StudentList[];
    selectedEvent: string;
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

const StudentListTable: React.FC<StudentListTableProps> = ({ selectedEvent }) => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMonth, setSelectedMonth] = useState('All');
    const [selectedYear, setSelectedYear] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [filteredData, setFilteredData] = useState<StudentList[]>([]);
    // const [selectedProgramCategory, setSelectedProgramCategory] = useState('All'); // Initialize with 'All'

    const onPageChange = (page: number) => {
        setCurrentPage(page);
    };

    const filterData = (month: string, year: string, status: string) => {
      setSelectedMonth(month);
      setSelectedYear(year);
      setSelectedStatus(status);
  };
  useEffect(() => {
    const fetchFilteredData = async () => {
          try {
              const response = await api.get(`${process.env.NEXT_PUBLIC_API_URL}submissions`, {
              params: {
                      month: selectedMonth,
                      year: selectedYear,
                      status: selectedStatus,
                      program_category: selectedEvent
                  }
              });
              setFilteredData(response.data.data);
              console.log(response.data.data);
          } catch (error) {
              console.error('Error fetching filtered data:', error);
          }
      };

      fetchFilteredData();
  }, [selectedMonth, selectedYear, selectedStatus, selectedEvent]);
    // useEffect(() => {
    //     let filtered = dataStudent;

    //     if (selectedMonth !== 'All') {
    //       console.log('Filtering by month:', selectedMonth);
    //       filtered = filtered.filter(StudentList => formatDate(StudentList.date).split('/')[0] === selectedMonth);
    //     }
    //     if (selectedYear !== 'All') {
    //       filtered = filtered.filter(StudentList => new Date(StudentList.date).getFullYear().toString() === selectedYear);
    //     }

    //     if (selectedStatus !== 'All') {
    //         filtered = filtered.filter(StudentList => StudentList.status === selectedStatus);
    //     }

    //     setFilteredData(filtered);
    //     // Reset the current page to 1 when applying a filter
    //     setCurrentPage(1);

    // }, [selectedMonth, selectedYear, selectedStatus, dataStudent]);

    const sortedData = filteredData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataToDisplay = filteredData.slice(startIndex, endIndex);

    const uniqueMonths = [...new Set(dataStudent.map(StudentList => new Date(StudentList.date).toLocaleString('default', { month: 'long' })))];
    const uniqueYears = [...new Set(dataStudent.map(StudentList => new Date(StudentList.date).getFullYear()))];
    const uniqueStatus = [...new Set(dataStudent.map(StudentList => StudentList.status))];

    return (
        <>
            <FilterRow>
              <Column>
                  <label htmlFor="month">FILTER BY MONTH</label>
                  <select
                      id="month"
                      onChange={(e) => filterData(e.target.value, selectedYear, selectedStatus)}
                      value={selectedMonth}
                  >
                      <option value="All">All Months</option>
                      {uniqueMonths.map((month, index) => (
                          <option key={index} value={month}>
                              {month}
                          </option>
                      ))}
                  </select>
              </Column>
              <Column>
                  <label htmlFor="year">FILTER BY YEAR</label>
                  <select
                      id="year"
                      onChange={(e) => filterData(selectedMonth, e.target.value, selectedStatus)}
                      value={selectedYear}
                  >
                      <option value="All">All Years</option>
                      {uniqueYears.map((year, index) => (
                          <option key={index} value={year}>
                              {year}
                          </option>
                      ))}
                  </select>
              </Column>  
              <Column>
                  <label htmlFor="status">FILTER BY STATUS</label>
                  <select
                      id="status"
                      onChange={(e) => filterData(selectedMonth, selectedYear, e.target.value)}
                      value={selectedStatus}
                  >
                      <option value="All">All Status</option>
                      {uniqueStatus.map((status, index) => (
                          <option key={index} value={status}>
                              {status}
                          </option>
                      ))}
                  </select>
              </Column>
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
                    {dataToDisplay.map((StudentList, index) => (
                        <tr key={index}>
                            <td>
                                {formatDate(StudentList.date)}
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
                                {formatPrice(StudentList.earning)}
                            </td>
                            <td>
                                <span className={getClassBasedOnStatus(StudentList.status)}>
                                    {StudentList.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </TableParent>
            <StudentListPagination
                    data={filteredData}
                    itemsPerPage={itemsPerPage}
                    onPageChange={onPageChange}
                />
        </>
    );
};

export default StudentListTable;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
const FilterRow = styled.div`
  margin-bottom: 40px;
  font-weight: 500;
  display: flex;
  gap: 20px;
  align-items: center;
  select {
    padding: 20px 40px 20px 20px;
    border-radius: 10px;
    width: 310px;
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
    ${media("<desktop")} {
      min-width: 200px;
      width: auto
    }
  }
  label {
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: .1em;
  }
  ${media("<desktop")} {
    flex-direction: column;
    select, div {
      width: 100%;
    }
  }
`

const TableParent = styled.div `
  width: 100%;
  table {
    width: 100%;
    border-radius: 10px;
    border: 1px solid #00000020;
    border-spacing: 0;
    margin-bottom: 30px;
    // overflow-x: auto;
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
          border-top-right-radius: 10px;
        }
        &:first-child {
          border-top-left-radius: 10px;
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
  ${media("<tablet")} {
    width: 800px;
    overflow-x: auto;
    margin-bottom: 20px;
    table {
      white-space: pre;
      margin-right: 30px;
      margin-bottom: 20px;
    }
  }
  ${media("<=smallPhone")} {
    width: 380px;
  }
`