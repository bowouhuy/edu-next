import React, { Key } from "react";
import styled from "styled-components";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import Paragraph from "@/components/atoms/Paragraph";
import TitleColor from "../atoms/TitleColor";
import Image from "next/image";
import FlexRow from "../atoms/FlexRow";
import Button from "../atoms/Button";

interface ThankyouItem {
    total_students: string;
    status_name: string;
    title: string;
    content: string;
}



export default function ThankyouSection(props: { data:any }){
    return (
        <>
            <TySection>
                <TyHead>
                    <Image src={props.data.icon} alt={props.data.title} width={100} height={100}/>                
                    <TitleColor>
                        {props.data.title}
                    </TitleColor>  
                </TyHead>
                <TyRow>
                    <Accordion className="accordion">
                        {props.data.status.map((item: ThankyouItem, index: number) => (
                            <AccordionItem key={index}>          
                                <Items>
                                    <AccordionHeader>
                                        <FlexRow>
                                            <h5>{item.status_name}</h5> 
                                            <p>{item.total_students} Students</p>
                                        </FlexRow>
                                        <Triangle/>
                                    </AccordionHeader>
                                    <AccordionBody>
                                        <Paragraph>{item.content}</Paragraph>
                                    </AccordionBody>
                                </Items>  
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <div className="flex-row">
                            <Button href={"/submit"}>SUBMIT MORE REFFERALS</Button>
                            <Button href={"/student"}>CHECK STUDENT LIST</Button>
                    </div>
                </TyRow>
            </TySection>
        </>
    )
}

const TySection = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    gap: 40px;
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
    border-top: solid 10px #181818;
    border-left: solid 8px transparent;
    border-right: solid 8px transparent;
`
const Items = styled.div`
    cursor: pointer;
    padding: 20px;
    background-repeat: no-repeat;
    border: 1px solid #00000020;
    border-bottom: 0;
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
            font-family: '__Poppins_baf6f6';
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
