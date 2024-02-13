'use client'
import BasicSection from "@/components/atoms/BasicSection";
import Container from "@/components/atoms/Container";
import React from "react";
import styled from "styled-components";                                                             
import ContainerSideBar from "@/components/atoms/ContainerSideBar";
import SideBarLayout from "@/components/molecules/SideBarMenu";
import { media } from "@/utils/media";


export default function layout({children}:{children:React.ReactNode}){
    return (
        <BasicSection className="first-child">
            <Container>
                <ContainerSideBar>
                    <SideBarLayout />
                    <Main>
                        {children}
                    </Main>
                </ContainerSideBar>
            </Container>
        </BasicSection>
    )
}


const Main = styled.div`
    width: 76%;
    min-height: 50vh;
    @media (max-width: 1200px) {
        width: 70%;
    }
    ${media("<=tablet")} {
        width: 100%;
    }
`