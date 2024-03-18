import styled from "styled-components";
import { media } from "@/utils/media";

const ProfileRow = styled.div`
    display: flex;
    width: 50%;
    border-right: 1px solid #00000020;
    p {
        padding: 25px;
        font-size: 20px;
    }
    &:nth-last-child(1) {
        border-right: 0;
    }
    &.profile-row__first {
        width: 100%;
    }

    ${media("<=phone")} {
        width: 100%;
        border-right: 0;
        &:nth-child(1) {
            border-bottom: 1px solid #00000020;
        }
        &.profile-row__first:nth-child(1) {
            border-bottom: 0;
        }
    }
`

export default ProfileRow;