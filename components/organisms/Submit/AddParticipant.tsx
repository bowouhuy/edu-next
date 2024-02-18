import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PlusMinus from '@/components/atoms/PlusMinus';
import ParticipantField from '@/components/molecules/Submit/Participant';
import AddMore from '@/components/atoms/AddMore';
import { Participant } from '@/types/referral';

interface AddParticipantProps {
    participants: Participant[];
    onChange: (indexParticipant: number, value: Participant) => void;
    onNew: (value: Participant) => void;
}

const AddParticipant: React.FC<AddParticipantProps> = ({ onChange, onNew, participants }) => {
    // const [participants, setParticipants] = useState<JSX.Element[]>([]);
    // const [participantCount, setParticipantCount] = useState(0);

    const handleChange = (indexParticipant: number, value: Participant) => {
        console.log('indexParticipant:', indexParticipant);
        if (indexParticipant !== undefined) {
            onChange(indexParticipant, value);
        } else {
            onNew(value);
        }
    }
    // Function to add the initial ParticipantField
    // const addInitialParticipant = () => {
    // setParticipants([
    //     <ParticipantField
    //         key={0}
    //         index={0}
    //         onChange={handleChange}
    //     />,
    // ]);
    // setParticipantCount(0);
    // };

    // useEffect(() => {
    //     addInitialParticipant();
    // }, []);

    const addParticipantRow = () => {
        // const newCount = participantCount + 1;
        onNew({
            fullName: '',
            phoneNumber: '',
        });
        // setParticipants((prevParticipants) => [
        //     ...prevParticipants,
        //     <ParticipantField
        //         key={newCount}
        //         index={newCount}
        //         onChange={handleChange}
        //     />,
        // ]);
        // setParticipantCount(newCount);
    };


    return (
        <>
            <ParticipantParent>
                {participants.map((participant, index) => (
                    <div key={index}>
                        <ParticipantField
                            participant={participant}
                            key={index}
                            index={index}
                            onChange={handleChange}
                        />
                    </div>
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
`