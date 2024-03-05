import api from '@/utils/api';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddParticipant from '@/components/organisms/Submit/AddParticipant';
import { Participant, SchoolDetail } from '@/types/referral';


interface SchoolDetailsProps {
    // key : number;
    index: number;
    schoolDetails: SchoolDetail[];
    onCityChange: (index: number, city: string) => void;
    onSchoolChange: (index: number, school: string) => void;
    onParticipantChange: (index: number, indexParticipant: number, participant: Participant) => void;
    onParticipantNew: (index: number, participant: Participant) => void;
    onParticipantDelete: (index: number, indexParticipant: number) => void;
}

type Item = {
    'id': string
    'name': string
}

const SchoolDetails: React.FC<SchoolDetailsProps> = ({ index, onCityChange, onSchoolChange, onParticipantChange, onParticipantNew, onParticipantDelete, schoolDetails }) => {
    const [selectedCity, setSelectedCity] = useState<string>('');
    const [selectedSchool, setSelectedSchool] = useState<string>('');
    const [cities, setCities] = useState<Item[]>([]);
    const [schools, setSchools] = useState<Item[]>([]);
    // const [participants, setParticipants] = useState<Participant[]>(schoolDetails[index].participants);

    // useEffect(() => {
    //     setParticipants(schoolDetails[index].participants);
    //     console.log('schoolDetails on Component SchoolDetails:', schoolDetails);
    // }, [schoolDetails, index]);

    useEffect(() => {
        if (selectedCity) {
            api.get(`/schools/${selectedCity}`)
                .then((response: { data: any }) => {
                    setSchools(response.data.data);
                })
                .catch((error: any) => console.error('Error fetching schools:', error));
        }
    }, [selectedCity]);


    useEffect(() => {
        api.get('/cities')
            .then((response: { data: any }) => {
                // console.log(response.data);
                setCities(response.data.data);
            })
            .catch((error: any) => console.error('Error fetching cities:', error));
    }, []);

    const onHandleCityChange = (value: string) => {
        setSelectedCity(value);
        onCityChange(index, value)
    }

    const onHandleSchoolChange = (value: string) => {
        setSelectedSchool(value);
        onSchoolChange(index, value);
    }

    return (
        <SchoolRow>
            <h4>School Details</h4>
            <span></span>
            <label htmlFor={'city-' + index}>City</label>
            {/* #TODO Tambah Delete School */}
            <select
                id={'city-' + index}
                name={'city' + index}
                value={schoolDetails[index].city}
                onChange={(e) => onHandleCityChange(e.target.value)}
            >
                <option value="">Choose a City</option>
                {cities && cities.map((city, index) => (
                    <option key={index} value={city.id}>
                        {city.name}
                    </option>
                ))}
            </select>

            <label htmlFor={'school-' + index}>School</label>
            <select id={'school-' + index} name={'school' + index} value={schoolDetails[index].school} onChange={(e) => onHandleSchoolChange(e.target.value)}>
                <option value="">Choose a School Name</option>
                {schools && schools.map((school, index) => (
                    <option key={index} value={school.id}>
                        {school.name}
                    </option>
                ))}
            </select>
            <AddParticipant
                onDelete={(indexParticipant) => onParticipantDelete(index, indexParticipant)}
                onNew={(value) => onParticipantNew(index, value)}
                participants={schoolDetails[index].participants}
                onChange={(indexParticipant, value) => onParticipantChange(index, indexParticipant, value)} />
        </SchoolRow>
    );
};

export default SchoolDetails;



const SchoolRow = styled.div`
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

