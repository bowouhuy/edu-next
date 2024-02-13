'use client'
import React from 'react';
import { StudentList } from '@/types';
import styled from 'styled-components';
import Heading from '@/components/atoms/Heading';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { media } from "@/utils/media";
import StudentListTable from '@/components/organisms/Dashboard/StudentList/StudentListTable';
import BasicSection from '@/components/atoms/BasicSection';
import Container from '@/components/atoms/Container';

const dataStudent : StudentList[] = [
   {
      name: 'Serena William',
      phoneNumber: '081223456789',
      school: 'Don Bosco 2',
      programName: 'Study in Singapore - Group A',
      earning: 'Rp 120.000',
      date: '01-02-23',
      status: 'Registered'
   },
   {
      name: 'Antonius Brahmanajaya',
      phoneNumber: '081223456789',
      school: 'Tunas Bangsa',
      programName: 'Study in Singapore - Group A',
      earning: 'Rp 120.000',
      date: '12-02-23',
      status: 'On process'
   },
   {
      name: 'Yasser Hartanto',
      phoneNumber: '081223456789',
      school: 'Don Bosco 2',
      programName: 'Study in Singapore - Group B',
      earning: 'Rp 120.000',
      date: '12-02-23',
      status: 'Sucessfull'
   },
   {
      name: 'Serena William',
      phoneNumber: '081223456789',
      school: 'Don Bosco 2',
      programName: 'Study in Singapore - Group C',
      earning: 'Rp 120.000',
      date: '01-02-23',
      status: 'Unsuccessful'
   },
   {
      name: 'Antonius Brahmanajaya',
      phoneNumber: '081223456789',
      school: 'Tunas Bangsa',
      programName: 'Study in Singapore - Group D',
      earning: 'Rp 120.000',
      date: '12-02-23',
      status: 'Paid'
   },
   {
      name: 'Yasser Hartanto',
      phoneNumber: '081223456789',  
      school: 'Don Bosco 2',
      programName: 'Study in Singapore - Group A',
      earning: 'Rp 120.000',
      date: '12-02-23',
      status: 'Cancelled'
   }
];

const StudentsListPage: React.FC = () => {
   
   return (
      <>
         <BasicSection className='first-child'>
            <Container>
               <IncentiveSection>
                     <Heading>STUDENT LIST</Heading>
                     <Tabs id='incentive-tabs'>
                        <STabList>
                           <STab>Study Abroad</STab>
                           <STab>English Program</STab>
                           <STab>Events</STab>
                        </STabList>
                        <STabPanel>
                           <StudentListTable dataStudent={dataStudent} />
                        </STabPanel>
                        <STabPanel>
                           <StudentListTable dataStudent={dataStudent} />
                        </STabPanel>
                        <STabPanel>
                           <StudentListTable dataStudent={dataStudent}/>
                        </STabPanel>
                     </Tabs>
               </IncentiveSection>
            </Container>
         </BasicSection>
      </>
   );
};

export default StudentsListPage;

const IncentiveSection = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px;
   position: relative;
`

const STabList = styled(TabList)`
   display: flex;
   flex-direction: row;
   list-style: none;
   position: absolute;
   right: 0;
   top: 0;
   margin: 0;
   ${media("<=tablet")} {
      display: none;
   }
`;

// const TabSelect = styled.select`
//   width: calc(100% - 20px);
//   padding: 10px 15px;
//   margin: 30px auto;
//   font-size: 16px;
//   border: 1px solid #333;
//   border-radius: 5px;
//   background: #fff
//     url("data:image/svg+xml,%3Csvg width='11' height='7' viewBox='0 0 11 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0.222683 1.3625L5.50229 7L10.7819 1.3625C10.9253 1.20885 11.0037 1.00269 10.9999 0.789377C10.996 0.576067 10.9102 0.37308 10.7613 0.225069C10.6124 0.0770585 10.4126 -0.003851 10.2059 0.00014026C9.9992 0.00413152 9.80249 0.0926963 9.65907 0.246351L5.50229 4.6873L1.34093 0.246352C1.19751 0.092697 1.0008 0.00413231 0.7941 0.000141082C0.587396 -0.00385014 0.38762 0.0770594 0.238723 0.22507C0.0898262 0.373081 0.00400442 0.576068 0.000136786 0.789378C-0.00373085 1.00269 0.0746728 1.20885 0.2181 1.3625L0.222683 1.3625Z' fill='%23101820'/%3E%3C/svg%3E")
//     no-repeat right 0.75rem center;
//   appearance: none;
//   display: none;

//   ${media("<=tablet")} {
//     display: block;
//   }
// `;

const STab = styled(Tab)`
   font-weight: 500;
   font-size: 14px;
   cursor: pointer;
   position: relative;
   background: white;
   padding: 20px 30px;
   border-radius: 0;
   border: 1px solid rgba(0, 0, 0, 0.20); 
   &.react-tabs__tab--selected {
      color: white;
      background: var(--primary);
      border-radius: 0!important;
      border: 1px solid var(--primary); 
   }
   &:nth-child(1) {
      border-top-left-radius: 10px!important;
      border-bottom-left-radius: 10px!important;
   }
   &:not(:last-child){
      border-right: 0;
   }
   &:focus-visible {
      border-radius: 0;
      outline: none;
   }
   &:nth-last-child(1) {
      border-top-right-radius: 10px!important;
      border-bottom-right-radius: 10px!important;
   }
`;

const STabPanel = styled(TabPanel)`
   ${media("<=smallPhone")} {
   width: 100%;
   }
`
