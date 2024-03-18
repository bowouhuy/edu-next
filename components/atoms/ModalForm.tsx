import styled from "styled-components";
import { media } from "@/utils/media";

const ModalForm = styled.form`
    margin-top: 40px; 
    font-family: 'Poppins', sans-serif;
    width: 100%;
    display: flex;
    justify-content: center;
    &.column {
        flex-direction: column;
        gap: 1rem;
        input {
            border: 1px solid #00000040;
            border-radius: 10px;
            width: -webkit-fill-available;
            &:focus-visible {
                border: 1px solid var(--primary);
            }
        }
        button {
            border-radius: 10px;
            width: -webkit-fill-available;
            &:hover {
                background: transparent;
                transition: all 0.3s ease-in-out;
                border: 1px solid var(--primary);
                color: var(--primary);
            }
            &:last-child {
                background: transparent;
                color: var(--primary);
                border: 1px solid var(--primary);
                &:hover {
                    background: var(--primary);
                    color: white;
                    border: 1px solid var(--primary);
                }
            }
        }
    }
    input {
        padding: 20px 25px;
        border-radius: 10px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border: 1px solid #00000040;
        width: 400px;
        font-family: 'Poppins', sans-serif;
        &::placeholder {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            width: 400px;
            text-transform: uppercase;
            font-size: 18px;
            font-weight: 400;
            font-family: 'Poppins', sans-serif;
            line-height: 1.4;
            text-align: left;
        }
        &:focus-visible {
            outline: 0;
            border: 1px solid var(--primary);
            border-right: 0;
        }
        ${media('<=tablet')} {
            width: 100%;
        }
    }
    label {
        ${media('<=tablet')} {
            width: 100%;
        }
    }
    .modal-wrapper {
        width: 100%;
    }
    ${media('<=smallPhone')} {
        input {
            border-radius: 10px;
            width: -webkit-fill-available;
        }
    }
    button {
        border-radius: 10px;
        padding: 20px 60px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        width: fit-content;
        border: none;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.4;
        letter-spacing: 0.1rem;
        text-align: center;
        background-color: var(--primary);
        text-transform: uppercase;
        color: white;
        font-family: '__Poppins_ad20f7';
        cursor: pointer;
        ${media('<=smallPhone')} {
            border-radius: 10px;
            width: 100%;
            font-size:14px;
        }
    }
`

export default ModalForm;