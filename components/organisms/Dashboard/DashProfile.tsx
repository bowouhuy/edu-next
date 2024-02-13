'use client'
import Heading from "@/components/atoms/Heading";
import ProfileList from "@/components/atoms/ProfileList";
import ProfileRow from "@/components/atoms/ProfileRow";
import ChangeAccountNumberModal from "@/components/molecules/Dashboard/AccountNumber";
import React, { Key } from "react";
import styled from "styled-components";
import { media } from "@/utils/media";

export default function DashProfile(props: { data:any }){
    return (
        <>  
        <Heading>
                Welcome Back, {props.data.data.name}
                {/* {data.title}, {data.name} */}
            </Heading>  
            <ProfileLayout>
                <ProfileList>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Name</ProfileLabel> 
                            {props.data.data.name}
                        </ParentInfo> 
                    </ProfileRow>
                </ProfileList>
                <ProfileList>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Email</ProfileLabel>
                            {props.data.data.email}
                        </ParentInfo>
                    </ProfileRow>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Phone Number</ProfileLabel>
                            {props.data.data.phone}
                        </ParentInfo>
                    </ProfileRow>
                </ProfileList>
                <ProfileList>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>School</ProfileLabel> 
                            {props.data.data.school_id}
                        </ParentInfo>
                    </ProfileRow>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Bank Number </ProfileLabel> 
                            {props.data.data.bank.account_number}
                            <div></div>
                                <ChangeAccountNumberModal />
                        </ParentInfo>
                    </ProfileRow>
                </ProfileList>                   
            </ProfileLayout>
        </>
    );
}
    

const ParentInfo = styled.div`
    color: var(--text);
    font-size: 16px;
    line-height: 1.3;
    margin-bottom: 0px;
    padding: 30px;
    ${media("<=smallPhone")} {
    font-size: 14px;
    } 
`;

const ProfileLayout = styled.div`
    margin-bottom: 30px;

    p {
        display: flex;
        flex-direction: column;
    }
`;


const ProfileLabel = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    h4 {
        font-size: 20px;
    }
    h5 {
    font-size: 18px;
    }
`;