import styled from "styled-components";
import { media } from "@/utils/media";

const NavSubmenu = styled.ul`
    display: none;
    flex-direction: column;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: absolute;
    background-color: transparent;
    z-index: 999;
    padding:0;
    padding-top: 30px;
    margin-top: 10px;
    div {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: 15px;
        background-color: white;
        box-shadow: 0 4px 20px 0 rgb(0 0 0 / 10%);
        padding: 10px 20px;
        border-radius: 15px;
    }
    
    &::before {
        content: '';
        border-bottom: 16px solid white;
        border-right: 9px solid transparent;
        border-left: 9px solid transparent;
        background-color: transparent;
        position: absolute;
        top: 15px;
    }

    li {
        padding: 0;
        text-transform: capitalize;
        white-space: nowrap;
        a {
            margin: 0;
            &:hover {
                color: #0074B2;
            }
        }
    }
    li.active {
        color: var(--primary);
        &::before {
            display: none;
        }
    }

    ${media('<desktop')} {
    display: none;
    }
`;

export default NavSubmenu;


