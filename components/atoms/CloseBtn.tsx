import styled from "styled-components"
import { media } from "@/utils/media"; 

const CloseBtn = styled.button`
    background: transparent;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    cursor: pointer;
    svg {
        width: 34px;
        height: 34px;
        path {
            fill: #00000090;
        }
    }
    ${media('<=smallPhone')} {
        right:5rem;
    }

`



export default CloseBtn;