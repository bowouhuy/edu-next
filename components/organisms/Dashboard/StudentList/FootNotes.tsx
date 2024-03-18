import Heading from "@/components/atoms/Heading";
import React, { Key, ReactNode } from "react";
import BasicSection from "@/components/atoms/BasicSection";
import Container from "@/components/atoms/Container";

interface footNotesStudentList {
    title: string
    detail: ReactNode;
}

export default function NotesSection(props: { data:any }){
    return (
        <BasicSection style={{background:"#F9F9F9"}}>
            <Container>
                <h3>
                    {props.data.title}
                </h3>  
                <ol>
                    {props.data.steps.map((item: footNotesStudentList, index: number) => (
                        <li key={index}>          
                            {item.detail}  
                        </li>
                    ))}
                </ol>
            </Container>
        </BasicSection>
    );
}
