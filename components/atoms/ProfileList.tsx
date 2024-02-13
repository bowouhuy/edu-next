import styled from "styled-components";
import { media } from "@/utils/media";

const ProfileList = styled.div`
    border: 1px solid #00000020;
    display: flex;
    &:not(:last-child) {
        border-bottom: 0;
    }
    &:first-child {
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
    &:last-child {
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    p {
        margin: 0;
        gap: 10px;
    }


    ${media("<=phone")} {
        flex-direction: column;
    }
`

export default ProfileList;