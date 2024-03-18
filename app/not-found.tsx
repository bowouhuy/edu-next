'use client'
import React from 'react'
import Link from 'next/link'
import Button from '@/components/atoms/Button';
import BasicSection from '@/components/atoms/BasicSection'; 
import Container from '@/components/atoms/Container';
import styled from "styled-components";
import TitleColor from '@/components/atoms/TitleColor';

export default function NotFound() {
    return (
        <BasicSection className="first-child">
            <Container>
                <Wrapper>
                    <TitleColor>404 Not Found</TitleColor>
                    <p>Could not find requested resource</p>
                    <Button padding className="btn " href="/">Return Home</Button>
                </Wrapper>
            </Container>
        </BasicSection>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    min-height: 60vh;
    a {
        width: fit-content;
        text-transform: uppercase;
    }
`