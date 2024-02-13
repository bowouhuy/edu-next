import styled from "styled-components";
import { media } from "@/utils/media";

const ProfileRow = styled.div`
    display: flex;
    width: 50%;
    border-right: 1px solid #dbdbbd;
    p {
        padding: 25px;
        font-size: 20px;
    }
    &:last-child {
        border-right: 0;
    }

    ${media("<=phone")} {
        width: 100%;
    }
`

export default ProfileRow;