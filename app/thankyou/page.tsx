'use client'
import BasicSection from "@/components/atoms/BasicSection";
import Container from "@/components/atoms/Container";
import ClientMiddleware from "@/components/molecules/ClientMiddleware";
import ThankyouSection from "@/components/organisms/Thankyou";
import React from "react";

const thankyou = {
    icon: '/Images/thankyouicon.svg',
    title: "We’ve received Your Referrals Submission",
    status: [
        {
            status_name: 'Submitted',
            total_students: '10',
            content: 'If you have available balance to withdraw. Simply click on the withdraw button to start the process.'
        },
        {
            status_name: 'Rejected',
            total_students: '3',
            content: 'If you have available balance to withdraw. Simply click on the withdraw button to start the process.'
        }
    ],
}


export default function thankyouPage(){
    return (
        <ClientMiddleware>
            <BasicSection className="first-child">
                <Container>
                    <ThankyouSection/>
                </Container>
            </BasicSection>
        </ClientMiddleware>
    )
}