import styled from "styled-components";
import { media } from "@/utils/media";

const ProfileLabel = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1rem;
    ${media('<=smallPhone')} {
        font-size: 14px;
        margin-bottom: 8px;
    }
`;

export default ProfileLabel;