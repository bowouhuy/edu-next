import { Participant } from '@/types/referral';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { media } from '@/utils/media';

interface ParticipantFieldProps {
    index: number
    onChange: (index: number, value: Participant) => void;
    participant: Participant;
}

export default function ParticipantField({ index, onChange, participant }: ParticipantFieldProps) {
    // const [fullName, setFullName] = useState(participant.fullName);
    // const [phoneNumber, setPhoneNumber] = useState(participant.phoneNumber);
    const fullNameId = `fullname-name-${index}`;
    const phoneNumberId = `phone-number-${index}`;
    const partcipantName = `participant-name-${index}`;
    const phoneNumberName = `participant-number-${index}`;

    return (
        <ParticipantRow>
            <h4>PARTICIPANT DATA</h4>
            <div>
                <label htmlFor={fullNameId}>FULL NAME</label>
                <input id={fullNameId} name={partcipantName} type='text' placeholder='Participant Full Name' value={participant.fullName} onChange={(e) => onChange(index, { fullName: e.target.value, phoneNumber: participant.phoneNumber })} />
            </div>
            <div>
                <label htmlFor={phoneNumberId}>Phone Number </label>
                <input id={phoneNumberId} name={phoneNumberName} type='number' placeholder='Participant Phone Number' value={participant.phoneNumber} onChange={(e) => onChange(index, { fullName: participant.fullName, phoneNumber: e.target.value })} />
            </div>
        </ParticipantRow>
    )
}



const ParticipantRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #F9F9F9;
    padding: 40px 30px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    position: relative;
    margin-top: 2px;
    counter-increment: item-counter;
    h4 {
        font-family: '__Poppins_ad20f7';
        text-transform: uppercase;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 28px;
        &::after {
            content: "#" counter(item-counter);
            font-family: '__Poppins_ad20f7';
            font-weight: 700;
            font-size: 22px;
        }
        ${media('<=smallPhone')} {
            font-size: 20px;
        }
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 10px;
        input {
            text-transform: capitalize;
            font-family: '__Poppins_ad20f7';
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