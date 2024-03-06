'use client'
import React, {useEffect, useState} from 'react';
import { StudentList } from '@/types/global';
import styled from 'styled-components';
import Heading from '@/components/atoms/Heading';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { media } from "@/utils/media";
import StudentListTable from '@/components/organisms/Dashboard/StudentList/StudentListTable';
import BasicSection from '@/components/atoms/BasicSection';
import Container from '@/components/atoms/Container';
import ClientMiddleware from '@/components/molecules/ClientMiddleware';
import api from "../../utils/api";
import NotesSection from '@/components/organisms/Dashboard/StudentList/FootNotes';



const FootNotes = {
   title: "Footnotes",
   steps: [
      {
         detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra. There will be a 7-14 working days of processing time for each incentive.'
      },
      {
         detail: 'Paullum deliquit, ponderibus modulisque suis ratio utitur.'
      },
      {
         detail: 'Etiam habebis sem dicantur magna mollis euismod. Ullamco laboris nisi ut aliquid ex ea commodi consequat.'
      },
      {
         detail: 'laboris nisi ut aliquid ex ea commodi consequat.'
      }
   ],
}

const StudentsListPage: React.FC = () => {

   const [dataStudent, setSubmissionData] = React.useState<StudentList[]>([]);
   const uniqueEvents = [...new Set(dataStudent.map(item => item.programCategory))];
   const [selectedEvent, setSelectedEvent] = useState<string>('All');
   const [filteredData, setFilteredData] = useState([]);
   const [selectedMonth, setSelectedMonth] = useState<string>('All');
   const [selectedYear, setSelectedYear] = useState<string>('All');
   const [selectedStatus, setSelectedStatus] = useState<string>('All');


   // useEffect(() => {
   //    const fetchSubmission = async () => {
   //       try {
   //          const response = await api.get(process.env.NEXT_PUBLIC_API_URL+'submissions');
   //          if (response) {
   //             const data = await response.data.data;
   //             setSubmissionData(data);
   //          } else {
   //             console.error('Error fetching referral types');
   //          }
   //          // const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}submissions?month=${selectedMonth}&year=${selectedYear}&status=${selectedStatus}`;

   //          //    // Call the API endpoint
   //          //    const response = await api.get(apiUrl);
   //          //    console.log(response.data.data);

   //          //    // Update state with filtered data from the response
   //          //    setFilteredData(response.data.data);
   //       } catch (error) {
   //          console.error('Error fetching referral types', error);
   //       }
   //    };

   //    fetchSubmission();
   // }, []);

   return (
      <ClientMiddleware>
         <BasicSection className='first-child'>
            <Container>
               <StudentListSection>
                  <Heading>STUDENT LIST</Heading>
                  <Tabs id='incentive-tabs'>
                     <STabList>
                        <Tab onClick={() => setSelectedEvent('All')}>All</Tab>
                        {uniqueEvents.map(event => (
                           <Tab key={event} onClick={() => setSelectedEvent(event)}>
                              {event}
                           </Tab>
                        ))}
                     </STabList>
                     <STabPanel>
                        {/* Display all dataStudent when All tab is selected */}
                        {/* <StudentListTable dataStudent={selectedEvent === 'All' ? dataStudent : dataStudent.filter(item => item.programCategory === selectedEvent)} /> */}
                        <StudentListTable selectedEvent={selectedEvent} />

                     </STabPanel>
                     {/* {uniqueEvents.map(event => (
                        <STabPanel key={event}>
                           <StudentListTable dataStudent={dataStudent.filter(item => item.programCategory === event)} />
                        </STabPanel>
                     ))} */}
                  </Tabs>
               </StudentListSection>
            </Container>
         </BasicSection>
         <NotesSection data={FootNotes} />
      </ClientMiddleware>
   );
};

export default StudentsListPage;

const StudentListSection = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px;
   position: relative;
   ${media("<=smallPhone")} {
      gap: 10px;
   }
`

const STabList = styled(TabList)`
display: flex;
flex-direction: row;
list-style: none;
position: absolute;
right: 0;
top: 0;
margin: 0;
${media("<desktop")} {
   position: relative;
   padding: 0;
   margin-bottom: 40px;
}
li {
   font-weight: 500;
   font-size: 14px;
   cursor: pointer;
   position: relative;
   background: white;
   padding: 20px 30px;
   border-radius: 0;
   border: 1px solid rgba(0, 0, 0, 0.20);
   ${media("<=smallPhone")} {
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
   }
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

}
;
`


const TabWrapper = styled.div`
display: flex;
`


const STabPanel = styled(TabPanel)`
${media("<=smallPhone")} {
   width: 100%;
}`