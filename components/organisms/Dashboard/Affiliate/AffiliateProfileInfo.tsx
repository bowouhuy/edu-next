import Heading from "@/components/atoms/Heading";
import ProfileList from "@/components/atoms/ProfileList";
import ProfileRow from "@/components/atoms/ProfileRow";
import QuestionMark from "@/components/atoms/QuestionMark";
import Tooltip from "@/components/atoms/Tooltip";
import React, { Key } from "react";
import styled from "styled-components";
import { media } from "@/utils/media";


// Define the type for the affiliate data
interface AffiliateData {
    title: string;
    suc_referral: string;
    reg_referral: string;
    // Add other properties here
}

export default function AffiliateProfileInfo(props: { data:any }){
    return (
        <>
            <h5>{props.data.title}</h5>
            <ProfileLayout>
                <ProfileList>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Successful referral</ProfileLabel> 
                            <span className="large-text">{props.data.suc_referral}</span>
                        </ParentInfo> 
                    </ProfileRow>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Registered referral</ProfileLabel> 
                            <span className="large-text">{props.data.reg_referral}</span>
                        </ParentInfo> 
                    </ProfileRow>
                </ProfileList>
                <ProfileList>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Balance
                                <Tooltip text={"Available ammount of incentives you can withdraw from your account"}><QuestionMark/></Tooltip></ProfileLabel>
                            {props.data.suc_referral}
                        </ParentInfo>
                    </ProfileRow>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Pending incentive
                            <Tooltip text={"Available ammount of incentives you can withdraw from your account"}><QuestionMark/></Tooltip>
                            </ProfileLabel>
                            {props.data.pend_balance}
                        </ParentInfo>
                    </ProfileRow>
                </ProfileList>
                <ProfileList>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Withdrawal on process
                            <Tooltip text={"Available ammount of incentives you can withdraw from your account"}><QuestionMark/></Tooltip></ProfileLabel> 
                            {props.data.on_withdraw}
                        </ParentInfo>
                    </ProfileRow>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>total withdrawn
                            <Tooltip text={"Available ammount of incentives you can withdraw from your account"}><QuestionMark/></Tooltip></ProfileLabel> 
                            {props.data.total_withdraw}
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
    .large-text {
        font-size: 30px;
    }
  } 
`;

const ProfileLayout = styled.div`
    // padding: 20px;
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
    ${media("<=phone")} {
        font-size: 12px;
    }
`;
