import styled from "styled-components";

const ModalForm = styled.form`
    margin-top: 40px; 
    font-family: 'Poppins', sans-serif;
    width: 100%;
    display: flex;
    justify-content: center;
    input {
        padding: 25px;
        border-radius: 10px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border: 1px solid #00000040;
        font-size: 18px;
        width: 400px;
        font-family: '__Poppins_baf6f6';  
        &::placeholder {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            width: 400px;
            text-transform: uppercase;
            font-size: 18px;
            font-weight: 400;
            font-family: '__Poppins_baf6f6'!important;
            line-height: 1.4;
            text-align: left;
        }
        &:focus-visible {
            outline: 0;
            border: 1px solid var(--primary);
            border-right: 0;
        }
    }
    button {
        border-radius: 10px;
        padding: 24px 60px;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        width: fit-content;
        border: none;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.4;
        letter-spacing: 0.1em;
        text-align: center;
        background-color: var(--primary);
        text-transform: uppercase;
        color: white;
        cursor: pointer;
    }
`

export default ModalForm;