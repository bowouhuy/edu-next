import Heading from "@/components/atoms/Heading";
import ProfileList from "@/components/atoms/ProfileList";
import ProfileRow from "@/components/atoms/ProfileRow";
import QuestionMark from "@/components/atoms/QuestionMark";
import Tooltip from "@/components/atoms/Tooltip";
import React, { Key } from "react";
import styled from "styled-components";
import { media } from "@/utils/media";
import ProfileLabel from "@/components/atoms/ProfileLabel";
import WithdrawModal from "@/components/molecules/Submit/WithdrawModal";

function formatPrice(price: number) {
    return "Rp. "+price.toLocaleString('id-ID');
}

export default function AffiliateProfileInfo(props: { data:any }){
    return (
        <>
            <h5>Affiliates</h5>
            <ProfileLayout>
                <ProfileList>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Successful referral</ProfileLabel> 
                            <span className="large-text">{props.data.data.submissions.paid}</span>
                        </ParentInfo> 
                    </ProfileRow>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Registered referral</ProfileLabel> 
                            <span className="large-text">{props.data.data.submissions.total}</span>
                        </ParentInfo> 
                    </ProfileRow>
                </ProfileList>
                <ProfileList>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Balance
                                <Tooltip text={"Available ammount of incentives you can withdraw from your account"}><QuestionMark/></Tooltip></ProfileLabel>
                            <span>{formatPrice(props.data.data.available_withdraw.amount)}</span>
                        </ParentInfo>
                    </ProfileRow>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Pending incentive
                            <Tooltip text={"Available ammount of incentives you can withdraw from your account"}><QuestionMark/></Tooltip>
                            </ProfileLabel>
                            <span>{formatPrice(props.data.data.potential_commission)}</span>
                        </ParentInfo>
                    </ProfileRow>
                </ProfileList>
                <ProfileList className="profile-row__last">
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>Withdrawal on process
                            <Tooltip text={"Available ammount of incentives you can withdraw from your account"}><QuestionMark/></Tooltip></ProfileLabel> 
                            <span>{formatPrice(props.data.data.pending_withdrawal)}</span>
                        </ParentInfo>
                    </ProfileRow>
                    <ProfileRow>
                        <ParentInfo>
                            <ProfileLabel>total withdrawn
                            <Tooltip text={"Available ammount of incentives you can withdraw from your account"}><QuestionMark/></Tooltip></ProfileLabel> 
                            <span>{formatPrice(props.data.data.total_withdrawn)}</span>
                        </ParentInfo>
                    </ProfileRow>
                </ProfileList>                   
            </ProfileLayout>
            <WithdrawModal />
        </>
    );
}

const ParentInfo = styled.div`
    color: var(--text);
    font-size: 16px;
    line-height: 1.3;
    margin-bottom: 0px;
    padding: 30px;
    span {
        font-size: 20px;
    }
    .large-text {
        font-size: 40px;
    }
    ${media("<=smallPhone")} {
        font-size: 14px;
        .large-text {
            font-size: 30px;
        }
        padding: 20px;
        span {
            font-size: 16px;
        }
    } 
`;

const ProfileLayout = styled.div`
    p {
        display: flex;
        flex-direction: column;
    }
    .profile-row__last {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
`;