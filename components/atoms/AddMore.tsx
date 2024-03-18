import styled from "styled-components";
import { media } from "@/utils/media";

const AddMore = styled.button`
    padding: 0!important;
    background: transparent!important;
    color: black!important;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 400!important;
    svg {
        width: 10px;
        height: 10px;
        padding: 5px;   
        border-radius: 100px;
        background: var(--primary);
        path {
            fill: white;
        }
    }
    ${media('<=smallPhone')} {
        font-size: 14px!important;
    }
`

export default AddMore;