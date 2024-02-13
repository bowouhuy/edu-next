'use client'
import React from "react";
import DashProfile from "@/components/organisms/Dashboard/DashProfile";
import BasicSection from "@/components/atoms/BasicSection";
import Container from "@/components/atoms/Container";
import SideBarLayout from "@/components/molecules/SideBarMenu";
import ContainerSideBar from "@/components/atoms/ContainerSideBar";
import styled from "styled-components";
import AffiliateProfileInfo from "@/components/organisms/Dashboard/Affiliate/AffiliateProfileInfo";


const myProfile = () => {
  // const defaultParams = { slug: [] };
    return (
        <BasicSection>
          {/* <Container>
            <ContainerSideBar>
              <SideBarLayout/>
              <MainContent>
                {/* <DashProfile data={ProfileInfo}/>   
                <AffiliateProfileInfo data={AffeliateInfo}  /> */}
              {/* </MainContent> */}
            {/* </ContainerSideBar> */}
          {/* </Container> */} 
        </BasicSection>
    )
}


const MainContent = styled.div`
  width: 80%;
`

export default myProfile;


