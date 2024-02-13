'use client'
import React from "react";
import FaqDetail from "@/components/organisms/Dashboard/FAQ/Faq";
import StepClaim from "@/components/organisms/Dashboard/FAQ/Steps";

const faq = {
    title: "How To Claim Your Incentives",
    steps: [
        {
            icon: '/Images/step1.svg',
            title: 'Step 1',
            detail: 'If you have available balance to withdraw. Simply click on the withdraw button to start the process.'
        },
        {
            icon: '/Images/step2.svg',  
            title: 'Step 2',
            detail: 'Our staff will verify your withdrawal. This step might take 7-14 working days.'
        },
        {
            icon: '/Images/step3.svg',  
            title: 'Step 3',
            detail: 'Once verified, your incentives will be transfered directly into your registered bank account.'
        }
    ],
    faqItems: [
        {
            title: 'How many times i can draw my incentives in a month?',
            content: 'Prima luce, cum quibus mons aliud consensu ab eo. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Inmensae subtilitatis, obscuris et malesuada fames. Quo usque tandem abutere, Catilina, patientia nostra? Donec sed odio operae, eu vulputate felis rhoncus. Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae.'
        },
        {
            title: 'I want to change my bank account',
            content: 'Prima luce, cum quibus mons aliud consensu ab eo. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Inmensae subtilitatis, obscuris et malesuada fames. Quo usque tandem abutere, Catilina, patientia nostra? Donec sed odio operae, eu vulputate felis rhoncus. Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae.'
        },
        {
            title: 'I want to change my email',
            content: 'Prima luce, cum quibus mons aliud consensu ab eo. Vivamus sagittis lacus vel augue laoreet rutrum faucibus. Inmensae subtilitatis, obscuris et malesuada fames. Quo usque tandem abutere, Catilina, patientia nostra? Donec sed odio operae, eu vulputate felis rhoncus. Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae.'
        }
    ]
}

export default function FaqPage() {
    return (
        <>  
            <StepClaim data={faq} />
            <FaqDetail data={faq} />   
        </>
    )
}
