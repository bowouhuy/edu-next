'use client'
import Heading from "@/components/atoms/Heading";
import ProfileList from "@/components/atoms/ProfileList";
import ProfileRow from "@/components/atoms/ProfileRow";
import ChangeAccountNumberModal from "@/components/molecules/Dashboard/AccountNumber";
import React, { Key } from "react";
import styled from "styled-components";
import { media } from "@/utils/media";
import ChangePasswordModal from "@/components/molecules/Dashboard/ChangePassword";
import CtaPrimary from "@/components/atoms/CtaPrimary";

export default function DashProfile(props: { data:any }){
    return (
        <>  
        <Heading>
                Welcome Back, {props.data.data.name}
            </Heading>  
            <ProfileLayout>
                <ProfileList>
                    <ProfileRow className="profile-row__first">
                        <ParentInfo className="with-cta">
                            <div className="info">
                                <ProfileLabel>Name</ProfileLabel> 
                                <span>{props.data.data.name}</span>
                            </div>
                            <div>
                                {/* <CtaPrimary href={"/dashboard/changeprofile"} color={""}>Edit Profile</CtaPrimary> */}
                                <ChangePasswordModal/>
                            </div>
                        </ParentInfo> 
                    </ProfileRow>
                </ProfileList>
                <ProfileList>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Email</ProfileLabel>
                            <span>{props.data.data.email}</span>
                        </ParentInfo>
                    </ProfileRow>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Phone Number</ProfileLabel>
                            <span>{props.data.data.phone}</span>
                        </ParentInfo>
                    </ProfileRow>
                </ProfileList>
                <ProfileList>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>School</ProfileLabel> 
                            <span>{props.data.data.school.name}</span>
                        </ParentInfo>
                    </ProfileRow>
                    <ProfileRow>
                        <ParentInfo className="with-cta">
                            <div className="info">
                                <ProfileLabel>Bank Number </ProfileLabel> 
                                <span>{props.data.data.bank.account_number}</span>
                            </div>
                            <div>
                                <ChangeAccountNumberModal />
                            </div>
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
    width: 100%;
    padding: 30px;
    span {
        font-size: 20px;
        ${media("<=smallPhone")} {
            font-size: 16px;
        } 
    }
    &.with-cta {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        a {
            margin-top: 2.5px;
        }
    }
    a {
        font-size: 12px;
    }
    ${media("<=smallPhone")} {
        font-size: 14px;
        padding: 20px;
        &.with-cta {
            flex-direction: column;
            gap: 1.5rem;
        }
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
    margin-bottom: 1rem;
    ${media('<=smallPhone')} {
        font-size: 12px;
        margin-bottom: 8px;
    }
    h4 {
        font-size: 20px;
    }
    h5 {
    font-size: 18px;
    }
`;