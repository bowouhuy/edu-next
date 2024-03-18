import Heading from "@/components/atoms/Heading";
import React, { Key, ReactNode } from "react";
import styled from "styled-components";
import Paragraph from "@/components/atoms/Paragraph";
import Image from "next/image";
import BasicSection from "@/components/atoms/BasicSection";
import { Ultra } from "next/font/google";

interface incentiveSteps {
    title: string
    detail: ReactNode;
}

export default function FootnotesSection(props: { data:any }){
    return (
        <BasicSection>
            <h3>
                {props.data.title}
            </h3>  
            <ol>
                {props.data.steps.map((item: incentiveSteps, index: number) => (
                    <li key={index}>          
                        {item.detail}  
                    </li>
                ))}
            </ol>
        </BasicSection>
    );
}
