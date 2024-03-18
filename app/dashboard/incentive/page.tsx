'use client'
import React, { useState, useEffect } from "react";
import { Incentive } from '@/types/global';
import styled from 'styled-components';
import Heading from '@/components/atoms/Heading';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { media } from "@/utils/media";
import IncentiveTable from '@/components/organisms/Dashboard/Incentive/IncentiveTable';
import FootnotesSection from '@/components/organisms/Dashboard/Incentive/Steps';
import api from "../../../utils/api";
import formatPrice from "@/utils/helper";

const dataIncentive: Incentive[] = [
    {
        event: 'Study Abroad',
        programName: 'Study in Singapore',
        groupName: '',
        country: 'Indonesia',
        amount: 120000,
    }
];

const stepsNotes = {
    title: "More information on Incentives",
    steps: [
        {
            detail: 'There will be a 7-14 working days of processing time for each incentive.'
        },
        {
            detail: <span>For more information, <a href="/dashboard/    profile">click here to view the official document.</a></span>
        },
        {
            detail: 'Etiam habebis sem dicantur magna mollis euismod. Ullamco laboris nisi ut aliquid ex ea commodi consequat.'
        },
        {
            detail: 'laboris nisi ut aliquid ex ea commodi consequat.'
        }
    ],
}

async function fetchData() {
    try {
        const response = await api.get(process.env.NEXT_PUBLIC_API_URL+'incentive-program');

        return response.data; // Ini akan mengembalikan data dari API.
    } catch (error) {
        // Handle error jika terjadi kesalahan dalam permintaan.
        console.error('Error fetching data:', error);
        throw error;
    }
}

const IncentivePage: React.FC = () => {
    const [dataIncentive, setProgramList] = useState<Incentive[]>([]);

     // Step 1: Determine unique events
    const uniqueEvents = [...new Set(dataIncentive.map(item => item.event))].sort((a, b) => a.localeCompare(b));

     // Step 2: Create state to track selected event
    const [selectedEvent, setSelectedEvent] = useState<string>(uniqueEvents[0]);

    useEffect(() => {
        fetchData()
            .then((data) => {
                setProgramList(data.data);
                console.log(data.data);
            })
            .catch((error) => {
                // Handle error jika terjadi kesalahan dalam permintaan.
            });
    }, []);

    return (
        <>
            <IncentiveSection>
                <Heading>Incentives Table </Heading>
                <TabWrapper>    
                    <Tabs id='incentive-tabs'>
                        <STabList>
                            {uniqueEvents.map(event => (
                                <Tab key={event} onClick={() => setSelectedEvent(event)}>
                                    {event}
                                </Tab>
                            ))}
                        </STabList>
                        {uniqueEvents.map(event => (
                            <STabPanel key={event}>
                                {/* Filter dataIncentive based on selected event */}
                                {/* <IncentiveTable dataIncentive={dataIncentive.filter(item => item.event === event)} /> */}
                                <IncentiveTable dataIncentive={dataIncentive.filter(item => item.event === event)} selectedEvent={selectedEvent} />
                            </STabPanel>
                        ))}
                    </Tabs>
                </TabWrapper>
            </IncentiveSection>
            <FootnotesSection data={stepsNotes}/>
        </>
    );
};

export default IncentivePage;

const IncentiveSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    ${media("<=phone")} {
        gap: 20px;
        h1 {
            display: none;
        }
    }
    .react-tabs {
        width: 100%;
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
`;


const TabWrapper = styled.div`
    display: flex;
`

const STabPanel = styled(TabPanel)`
    ${media("<=smallPhone")} {
        width: 100%;
    }
    &:not(:last-child) {
        .filter {
            display: none;
        }
    }
`