import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import PlusMinus from '@/components/atoms/PlusMinus';
import ParticipantField from '@/components/molecules/Submit/Participant';
import AddMore from '@/components/atoms/AddMore';
import { Participant } from '@/types/referral';
import RemoveRow from '@/components/atoms/RemoveRow';
import TrashIcon from '@/components/atoms/TrashIcon';

interface AddParticipantProps {
    participants: Participant[];
    onChange: (indexParticipant: number, value: Participant) => void;
    onNew: (value: Participant) => void;
    onDelete: (indexParticipant: number) => void;
}

const AddParticipant: React.FC<AddParticipantProps> = ({ onChange, onNew, participants, onDelete }) => {

    const handleChange = (indexParticipant: number, value: Participant) => {
        console.log('indexParticipant:', indexParticipant);
        if (indexParticipant !== undefined) {
            onChange(indexParticipant, value);
        } else {
            onNew(value);
        }
    }

    const addParticipantRow = () => {
        // const newCount = participantCount + 1;
        onNew({
            fullName: '',
            phoneNumber: '',
        });
    };

    return (
        <>
            <ParticipantParent>
                {participants.map((participant, index) => (
                    <Fragment key={index}>
                        <ParticipantRow className='participant'>    
                            <RemoveRow className="delete" type="button" onClick={() => onDelete(index)}><TrashIcon /></RemoveRow>
                            <div className='wrapper'>
                                <ParticipantField
                                    participant={participant}
                                    key={index}
                                    index={index}
                                    onChange={handleChange}
                                />
                            </div>
                        </ParticipantRow>   
                    </Fragment>
                ))}
                <AddMore type="button" onClick={addParticipantRow}>
                    <PlusMinus /> ADD MORE PARTICIPANT
                </AddMore>
            </ParticipantParent>
        </>
    );
}

export default AddParticipant;


const ParticipantParent = styled.div`
    padding-left: 40px;
    counter-reset: item-counter;
    background-image: repeating-linear-gradient(6deg, #000, #000 9px, transparent 10px, transparent 19px, #000 19px),repeating-linear-gradient(96deg, transparent, transparent 9px, transparent 9px, transparent 19px, transparent 19px),repeating-linear-gradient(186deg, transparent, transparent 7px, transparent 9px, transparent 19px, #333333 19px),repeating-linear-gradient(276deg, transparent, transparent 9px, transparent 9px, transparent 19px, #333333 19px);
    background-size: 1px 100%, 100% 1px, 1px 100% , 100% 1px;
    background-position: 0 0, 0 0, 100% 0, 0 100%;
    background-repeat: no-repeat;
    margin-top: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .delete {
        margin-top: 0;
    }
`
const ParticipantRow = styled.div`
    position: relative;
    &:nth-child(1) {
        .delete {
            visibility: hidden;
        }
    }
`