import Heading from "@/components/atoms/Heading";
import React, { Key } from "react";
import styled from "styled-components";
import Paragraph from "@/components/atoms/Paragraph";
import Image from "next/image";

interface stepsItems {
    icon: string;
    title: string;
    detail: string;
}

export default function StepClaim(props: { data:any }){
    return (
        <>
            <Heading>
                {props.data.title}
            </Heading>  
            <div>
                {props.data.steps.map((item: stepsItems, index: number) => (
                    <div key={index}>          
                        <StepItems>
                            <StepImage>
                                <Image src={item.icon} alt={item.title} width={100} height={100}/>
                            </StepImage>                  
                            <div>
                                <h4>{item.title}</h4>
                                <Paragraph>{item.detail}</Paragraph>
                            </div>
                        </StepItems>  
                    </div>
                ))}
            </div>
        </>
    );
}
    
const StepImage = styled.div`
    border-radius: 100%;
    border: 1px solid var(--primary);
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StepItems = styled.div`
    cursor: pointer;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    img {
        object-fit: contain;
        width: 65px;
        height: 65px;
    }
    h4 {
        font-size: 25px;
        margin-bottom: 0;
    }
    p {
        margin-top: 0;
    }
    
`;
