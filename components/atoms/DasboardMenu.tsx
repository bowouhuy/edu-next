import styled from "styled-components";
import { media } from "@/utils/media";



const DashboardMenu = styled.ul`    
    display: flex;
    background: white;
    flex-direction: column;
    list-style: none;
    border-radius: 20px;
    border: 1px solid #00000020;
    padding: 20px 0;
    .active {
        &:before {
            display: inline-block;
        }
        a {
            color: var(--primary);
        }
    }
`

export default DashboardMenu;