import React from 'react';
import styled from 'styled-components';

interface ParticipantFieldProps {
    fullNameId: string;
    phoneNumberId: string;
    partcipantName: string;
    phoneNumberName: string;
}

export default function ParticipantField ({ fullNameId, phoneNumberId, partcipantName, phoneNumberName } : ParticipantFieldProps) {
    return (
        <>      
            <ParticipantRow>
                <h4>PARTICIPANT DATA</h4>
                    <div>
                        <label htmlFor={fullNameId}>FULL NAME</label>
                        <input id={fullNameId} name={partcipantName} type='text' placeholder='Participant Full Name'/>
                    </div>
                    <div>
                        <label htmlFor={phoneNumberId}>Phone Number </label>
                        <input id={phoneNumberId} name={phoneNumberName} type='text' placeholder='Participant Phone Number'/>
                    </div>
            </ParticipantRow>
        </>
    )   
}



const ParticipantRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #F9F9F9;
    padding: 40px 30px;
    margin-bottom: 40px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    position: relative;
    margin-top: 2px;
    h4 {
        font-family: '__Poppins_baf6f6';
        text-transform: uppercase;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &::after {
            counter-increment: item-counter;
            content: "#" counter(item-counter);
            font-family: '__Poppins_baf6f6';
            font-weight: 700;
            font-size: 22px;
        }
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        input {
            text-transform: capitalize;
            font-family: '__Poppins_baf6f6';
            padding: 20px 40px 20px 20px;
            &:placeholder {
                text-transform: capitalize !important;
            }
        }
    }
    &:before {
        content: '';
        width: 30px;
        height: 30px;
        background: var(--primary);
        border-radius: 100px;
        position: absolute;
        left: 0;
        margin-left: -56px;
        top: calc(50% - 15px);
    }
    
`