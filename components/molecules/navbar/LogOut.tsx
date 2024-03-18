import styled, { css } from 'styled-components';
import React, { useEffect, useState } from "react";
import { media } from "@/utils/media";
import { logout } from '@/actions/auth';

type LogOutText = { text: string; };

const LogOutText: LogOutText = {
    text: 'LogOut',
};

export default function LogOut (){
    return (
        <>
            <LogOutWrapper>
                <LogOutBtn onClick={logout}>         
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0.888889C0 0.397969 0.391751 0 0.875 0H9.625C10.1082 0 10.5 0.397969 10.5 0.888889C10.5 1.37981 10.1082 1.77778 9.625 1.77778H1.75V13.3333C1.75 13.5691 1.84219 13.7952 2.00628 13.9619C2.17038 14.1286 2.39294 14.2222 2.625 14.2222H9.625C10.1082 14.2222 10.5 14.6202 10.5 15.1111C10.5 15.602 10.1082 16 9.625 16H2.625C1.92881 16 1.26113 15.719 0.768845 15.219C0.276562 14.7189 0 14.0406 0 13.3333V0.888889ZM9.88128 5.96187C9.53957 5.61474 9.53957 5.05193 9.88128 4.70479C10.223 4.35766 10.777 4.35766 11.1187 4.70479L13.7437 7.37146C13.9078 7.53816 14 7.76425 14 8C14 8.23575 13.9078 8.46184 13.7437 8.62854L11.1187 11.2952C10.777 11.6423 10.223 11.6423 9.88128 11.2952C9.53957 10.9481 9.53957 10.3853 9.88128 10.0381L11.0126 8.88889H4.375C3.89175 8.88889 3.5 8.49092 3.5 8C3.5 7.50908 3.89175 7.11111 4.375 7.11111H11.0126L9.88128 5.96187Z" fill="#0074B2"/>
                    </svg>
                    <span>{LogOutText.text}</span>
                </LogOutBtn>
            </LogOutWrapper>
        </>
    )
};

const LogOutWrapper = styled.div`
`
const LogOutBtn = styled.button`
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 6px;
    position: relative;
    border: none;
    cursor: pointer;
    span {
        color: rgb(var(--navText));
        text-decoration: none;
        font-weight: 500;
        font-size: 14px;
        line-height: normal;
        text-decoration: none;
        text-transform: uppercase;  
        letter-spacing: 0.08rem;
        font-family: '__Poppins_ad20f7';
    }
    ${media('<desktop')} {
        margin-top: 25px;
        color: white;
        svg {
            path {
                fill: white;
            }
        }
    }
    &:hover {
        color: var(--primary);
    }
`;