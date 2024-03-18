'use client'
import React, { Key, useEffect, useState } from "react";
import styled from "styled-components";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import Paragraph from "@/components/atoms/Paragraph";
import TitleColor from "../atoms/TitleColor";
import Image from "next/image";
import FlexRow from "../atoms/FlexRow";
import Button from "../atoms/Button";
import api from "@/utils/api";
import thankyouicon from "../../public/Images/thankyouicon.svg";    

interface ThankyouItem {
    total_students: string;
    status_name: string;
    title: string;
    content: string;
}

interface ResponseSubmission {
    success: number;
    failed: number;
    submission: Submission[];
}

interface Submission {
    name: string;
    phone: number;
    status: string;
}

export default function ThankyouSection() {
    const [studentDetailsByStatus, setStudentDetailsByStatus] = useState<{ [status: string]: Submission[] }>({});

    useEffect(() => {
        const latestSubmission = localStorage.getItem("latestSubmission");

        if (latestSubmission) {

            let data = JSON.parse(latestSubmission) as unknown as ResponseSubmission;
            const detailsByStatus: { [status: string]: Submission[] } = {
                success: [],
                failed: []
            };

            data.submission.forEach((s:any) => {
                if (s.status === "Successfull") {
                    detailsByStatus["success"].push(s);
                } else {
                    detailsByStatus["failed"].push(s);
                }

            });
            setStudentDetailsByStatus(detailsByStatus);
            localStorage.removeItem("latestSubmission");
        }
    }, []);

    const filteredStatuses = Object.entries(studentDetailsByStatus).filter(([status, students]) => students.length > 0);

    return (
        <TySection>
            <TyHead>
            <Image src={thankyouicon} width={100} alt="test" />
            <TitleColor>
                We’ve received<br></br> Your Referrals Submission
            </TitleColor>  
            </TyHead>
            <TyRow>
                <Accordion className="accordion">
                    {filteredStatuses.map(([status, students]) => (
                        <AccordionItem key={status}>    
                            <Items>
                                <AccordionHeader>
                                    <FlexRow>
                                        <h5>{status}</h5>
                                        <p>{students.length} Students</p>
                                    </FlexRow>
                                    <Triangle/>
                                </AccordionHeader>
                                <AccordionBody>
                                    {students.map((student, index): JSX.Element => (
                                        <div key={index} className="accordion-content">
                                            <div className="student-details">
                                                <div>
                                                    <p>{student.name}</p>|
                                                    <p>{student.phone}</p>
                                                </div>  
                                                <p>{student.status}</p>
                                            </div>
                                        </div>
                                    ))}
                                </AccordionBody>
                            </Items>
                        </AccordionItem>
                    ))}
                </Accordion>
                <div className="flex-row">
                    <Button href={"/referral"}>SUBMIT MORE REFERRALS</Button>
                    <Button href={"/student"}>CHECK STUDENT LIST</Button>
                </div>
            </TyRow>
        </TySection>
    )
}

// export default function ThankyouSection(props: { data:any }){

//     return (
//         <>
//             <TySection>
//                 <TyHead>
//                     <Image src={props.data.icon} alt={props.data.title} width={100} height={100}/>                
//                     <TitleColor>
//                         {props.data.title}
//                     </TitleColor>  
//                 </TyHead>
//                 <TyRow>
//                     <Accordion className="accordion">
//                         {props.data.status.map((item: ThankyouItem, index: number) => (
//                             <AccordionItem key={index}>          
//                                 <Items>
//                                     <AccordionHeader>
//                                         <FlexRow>
//                                             <h5>{item.status_name}</h5> 
//                                             <p>{item.total_students} Students</p>
//                                         </FlexRow>
//                                         <Triangle/>
//                                     </AccordionHeader>
//                                     <AccordionBody>
//                                         <Paragraph>{item.content}</Paragraph>
//                                     </AccordionBody>
//                                 </Items>  
//                             </AccordionItem>
//                         ))}
//                     </Accordion>
//                     <div className="flex-row">
//                             <Button href={"/referral"}>SUBMIT MORE REFFERALS</Button>
//                             <Button href={"/student"}>CHECK STUDENT LIST</Button>
//                     </div>
//                 </TyRow>
//             </TySection>
//         </>
//     )
// }

const TySection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap: 40px;
    .student-details {
        display: flex;
        flex-direction: column;
        padding:1rem 0;
        gap: 10px;
        border-bottom: 1px solid #00000020;
        width: 100%;
        p {
            margin: 0;
            font-size: 16px;
        }
        div {
            display: flex;
            flex-direction: row;
            gap: 10px;
            align-items:center;
            justify-content: flex-start;
        }
    }
    .accordion {
        width: 100%;
    }
    a {
        white-space: nowrap;
    }
    .accordion-content {
        &:last-child {
            .student-details {
                border-bottom: 0;
            }
        }
    }
`
    
const TyRow = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;;
    gap: 30px;
    max-width: 55%;

    .flex-row {
        width: 100%;
        gap: 20px;
        a {
            width: 100%;
        }
    }
`
const TyHead = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items:center;
    max-width: 58%;
    h1 {
        text-align: center;
    }
`
const Triangle = styled.span`
    border-top: solid 8px #181818;
    border-left: solid 6px transparent;
    border-right: solid 6px transparent;
`

const Items = styled.div`
    cursor: pointer;
    padding: 20px;
    background-repeat: no-repeat;
    border: 1px solid #00000020;
    border-bottom: 0;
    font-family: '__Poppins_ad20f7';
    width: -webkit-fill-available;
    &:nth-last-child(1) {
        border-bottom: 1px solid #00000020;
    }
    button {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        background-color: transparent;
        appearance: none;
        outline: none;
        border: 0px;
        padding: 0px;
        margin: 0px;
        cursor: pointer;
        h5, p {
            font-family: 'Poppins', sans-serif;
            font-family: '__Poppins_ad20f7';
            font-size: 14px;
            margin: 0;
        }
        h5 {
            text-transform: uppercase;
        }
        div {
            gap: 10px;
            p {
                margin-bottom: 0;
            }
        }
        span {
            transition: rotate .3s ease-in-out;
            rotate: 0deg;
        }
        &[aria-expanded='true'] {
            span {
                rotate: 180deg;
            }
        }
    }
`;
