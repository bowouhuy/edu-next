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

type UniqueEvent = {
   id: number,
   name: string,
   description: string,
   created_at: string,
   updated_at: string,
}

const StudentsListPage: React.FC = () => {
   const [dataStudent, setSubmissionData] = React.useState<StudentList[]>([]);
   // const uniqueEvents = [...new Set(dataStudent.map(item => item.programCategory))];
   // events
   const [selectedEvent, setSelectedEvent] = useState<number>(0);
   const [filteredData, setFilteredData] = useState([]);
   const [selectedMonth, setSelectedMonth] = useState<string>('All');
   const [selectedYear, setSelectedYear] = useState<string>('All');
   const [selectedStatus, setSelectedStatus] = useState<string>('All');
   const [uniqueEvents, setUniqueEvents] = useState<UniqueEvent[]>();

   useEffect(() => {
      api.get<MainResponse<UniqueEvent[]>>('program-categories').then((res) => {
         const data = res.data.data
         setUniqueEvents(data)
      }).catch((err) => {
         console.error(err)
      })
   }, [])

   
   return (
      <ClientMiddleware>
         <BasicSection className='first-child'>
            <Container>
               <StudentListSection>
                  <Heading>STUDENT LIST</Heading>
                  <Tabs id='incentive-tabs'>
                     <STabList>
                        <Tab onClick={() => setSelectedEvent(0)}>All</Tab>
                        {uniqueEvents?.map((event, key) => (
                           <Tab key={event.id} onClick={() => setSelectedEvent(event.id)}>
                              {event.name}
                           </Tab>
                        ))}
                     </STabList>
                     <STabPanel>
                        <StudentListTable selectedEvent={selectedEvent} />
                     </STabPanel>
                     {uniqueEvents?.map((event,key) => (
                        <STabPanel key={key}>
                           <StudentListTable selectedEvent={selectedEvent}  />
                        </STabPanel>
                     ))}
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