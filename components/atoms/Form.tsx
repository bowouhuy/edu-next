import styled from "styled-components";
import { media } from "@/utils/media";

const Forms = styled.form`
    margin-top: 40px; 
    font-family: 'Poppins', sans-serif;
    display: flex;
    gap: 20px;
    flex-direction: column;
    input {
        padding: 20px 25px;
        border-radius: 10px;
        border: 1px solid #00000040;
        width: -webkit-fill-available;
        &::placeholder {
            text-transform: capitalize;
            font-size: 18px;
            font-weight: 400;
            font-family: 'Poppins', sans-serif;
            line-height: 1.4;
            text-align: left;
            color: rgba(24, 24, 24, 0.50);
        }
        &:focus-visible {
            outline: 0;
            border: 1px solid var(--primary);
        }
    }
    button {
        width: fit-content;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.4;
        letter-spacing: 0.1rem;
        text-align: center;
        background-color: var(--primary);
        text-transform: uppercase;
        padding: 20px 50px;
        border-radius: 10px;
        color: white;
        cursor: pointer;
        border: 0;
        font-family: '__Poppins_ad20f7';
        ${media('<=phone')} {
            width: 100%;
            font-size: 14px;
        }

    }
    label {
        font-family: '__Poppins_ad20f7';
        font-size: 18px;
        font-weight: 500;
        letter-spacing: .1em;
        text-transform: uppercase;
        margin-top: 15px;
        ${media('<=smallPhone')} {
            font-size: 14px;
        }
    }
    select {
        font-family: '__Poppins_ad20f7'!important;
        padding: 20px 40px 20px 20px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.20);
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        color: rgba(24, 24, 24, 0.50);
        -webkit-appearance: none;
        display: block;
        -moz-appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%), linear-gradient(to right, transparent, transparent);
        background-position: calc(100% - 20px) calc(1.6em + 2px), calc(100% - 15px) calc(1.6em + 2px),100% 0;
        background-size: 5px 5px, 5px 5px, 2.5em 2.5em;
        background-repeat: no-repeat;
        &:focus-visible  {
            outline: var(--primary) auto 1px;
        }
        ${media('<=smallPhone')} {
            font-size: 14px;
        }
    }
    span {
        font-family: '__Poppins_ad20f7';
        text-align: left;
        margin-top: -1rem;
    }
`

export default Forms;