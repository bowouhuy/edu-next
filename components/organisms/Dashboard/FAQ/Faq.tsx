import React, { Key } from "react";
import styled from "styled-components";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import Paragraph from "@/components/atoms/Paragraph";
import PlusIcon from "@/components/atoms/PlusMinus";
import { media } from "@/utils/media";

interface FAQItem {
    title: string;
    content: string;
}

export default function FaqDetail(props: { data:any }){
    return (
        <>
            <SectionFaq>
                <FaqTitle>
                    Frequently Asked Questions
                </FaqTitle>  
                <div>
                    <Accordion>
                        {props.data.faqItems.map((item: FAQItem, index: number) => (
                            <AccordionItem key={index}>          
                                <Items>
                                    <SAccordionHeader>
                                        <h5>{item.title}</h5><PlusIcon/>
                                    </SAccordionHeader>
                                    <SAccordionBody>
                                        <Paragraph>{item.content}</Paragraph>
                                    </SAccordionBody>
                                </Items>  
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </SectionFaq>
        </>
    )
}
    

const SectionFaq = styled.div`
    position: relative;                                                                                                                         
    padding-top: 80px;
    &::after {
        content: "";
        position: absolute;
        display: block;
        width: 500%;
        height: 200%;
        background: #F9F9F9;
        left: -200%;
        bottom: -105%;  
        z-index: -1;
`

const FaqTitle = styled.h3`
    margin-bottom:20px;
`

const Items = styled.div`
    cursor: pointer;
    margin-bottom: 30px;
    background-image: repeating-linear-gradient(-13deg, transparent, transparent 7px, transparent 0, transparent 0, #000000 0),repeating-linear-gradient(77deg, transparent, transparent 0, transparent 0, transparent 0, transparent  0),repeating-linear-gradient(167deg, transparent, transparent 7px, transparent 0, transparent 0, transparent 0),repeating-linear-gradient(257deg, #000000, #000000 7px, transparent 7px, transparent 12px, #000000 12px);
    background-size: 1px 100%, 100% 1px, 1px 100% , 100% 1px;
    background-position: 0 0, 0 0, 100% 0, 0 100%;
    background-repeat: no-repeat;
`;

const SAccordionHeader = styled(AccordionHeader)`
    display: flex;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    background-color: transparent;
    appearance: none;
    outline: none;
    border: 0px;
    padding: 0px;
    margin: 0px;
    cursor: pointer;
    margin-bottom: 30px;
    h5 {
        font-family: '__Poppins_ad20f7';
        font-size: 18px;
        color: var(--primary);
        margin-bottom: 0    ;
        text-align: left;
        ${media("<=smallPhone")} {
            font-size: 16px;
        }
    }
    svg {
        display: flex;
        align-items: center;
        justify-content: center;
        path {
            transition: fill .6s ease;
            
            }
        }
    }
    &[aria-expanded='true'] {
        svg {
            path:nth-child(1) {
                fill: transparent;
            }
        }
    }
`

const SAccordionBody = styled(AccordionBody)`
    p {
        font-weight: 400;
        margin-top: 0;
        margin-bottom: 30px;
    }
`