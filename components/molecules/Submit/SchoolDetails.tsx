import api from '@/utils/api';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddParticipant from '@/components/organisms/Submit/AddParticipant';
import { Participant, SchoolDetail } from '@/types/referral';
import { media } from '@/utils/media';
import RSelect from 'react-select/async'
import { Option } from '@/types/global';

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
    const [optionCities, setOptionCities] = useState<Option[]>([])
    const [schools, setSchools] = useState<Item[]>([]);

    useEffect(() => {
        if (selectedCity) {
            api.get(`/schools/${selectedCity}`)
                .then((response: { data: MainResponse<Item[]> }) => {
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

    const promiseSelect = (type: 'city' | 'school', inputValue: string) =>
        new Promise<Option[]>((resolve) => {
            setTimeout(() => {
                resolve(filterSelect(type, inputValue));
            }, 500);
        });


    const filterSelect = (type: 'city' | 'school', inputValue: string) => {
        const arr = type === 'city' ? cities : schools
        let clone = [...arr]
        if (inputValue) {
            clone = clone.filter((i) =>
                i.name.toLowerCase().includes(inputValue.toLowerCase())
            );
        }
        let newArr = clone.map(v => ({ name: v.id, label: v.name }))
        if (newArr.length > 50) {
            newArr.length = 50
        }
        return newArr;
    }

    const defaultOptions = (type: 'city' | 'school') => {
        let clone = type === 'city' ? [...cities] : [...schools]
        if (clone.length > 50) {
            clone.length = 50
        }

        return clone.map(v => ({ name: v.id, label: v.name }));
    }


    return (
        <SchoolRow>
            <h3>School Details</h3>
            {/* <span></span> */}
            <label htmlFor={'city-' + index}>City</label>
            {/* <select
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
            </select> */}
            <RSelect
                className="select"
                classNamePrefix="select"
                isClearable={true}
                // defaultOptions={true}
                // defaultValue={{ label: 'Pilih Kota', name: '' }}
                defaultOptions={defaultOptions('city')}
                defaultInputValue=""
                isSearchable={true}
                name="color"
                placeholder="Choose a City"
                loadOptions={(inputValue: string) => promiseSelect('city', inputValue)}
                onChange={(v) => onHandleCityChange(v?.name ?? '')}
            />
            <label htmlFor={'school-' + index}>School</label>
            {/* <select id={'school-' + index} name={'school' + index} value={schoolDetails[index].school} onChange={(e) => onHandleSchoolChange(e.target.value)}>
                <option value="">Choose a School Name</option>
                {schools && schools.map((school, index) => (
                    <option key={index} value={school.id}>
                        {school.name}
                    </option>
                ))}
            </select> */}
            <RSelect
                className="select"
                classNamePrefix="select"
                isClearable={true}
                defaultOptions={defaultOptions('school')}
                isSearchable={true}
                name="color"
                placeholder="Choose a School Name"
                loadOptions={(inputValue: string) => promiseSelect('school', inputValue)}
                onChange={(v) => onHandleSchoolChange(v?.name ?? '')}
            />
            <Participant>
                <AddParticipant
                    onDelete={(indexParticipant) => onParticipantDelete(index, indexParticipant)}
                    onNew={(value) => onParticipantNew(index, value)}
                    participants={schoolDetails[index].participants}
                    onChange={(indexParticipant, value) => onParticipantChange(index, indexParticipant, value)} />
            </Participant>
        </SchoolRow>
    );
};

export default SchoolDetails;

const SchoolRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    counter-reset: item-counter;
    padding: 2rem 0;
    position: relative;
    margin-top: 2px;
    // counter-increment: number-counter;
    h3 {
        font-family: '__Poppins_ad20f7';
        text-transform: uppercase;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 28px;
        &::after {
            content: "#" counter(number-counter);
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
        // flex-direction: column;
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
    .css-t3ipsp-control:hover {
        outline: var(--primary) auto 1px!important;
        border-color: var(--primary) !important;
    }
    .select__control, .select__value-container, .select__input-container {
        flex-direction: row;
        padding-left: 0;
    }
    .select__control {
        width: -webkit-fill-available;
        font-family: '__Poppins_ad20f7'!important;
        padding: 15px 20px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.20);
        font-size: 18px;
        color: rgba(24, 24, 24, 0.50);
        -webkit-appearance: none;
        -moz-appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, black 50%), linear-gradient(135deg, black 50%, transparent 50%), linear-gradient(to right, transparent, transparent);
        background-position: calc(100% - 20px) calc(1.6em + 2px), calc(100% - 15px) calc(1.6em + 2px), 100% 0;
        background-size: 5px 5px;
        background-repeat: no-repeat;
    }
    .select__indicator-separator,.select__indicator {
        display: none;
    }
    .select__menu {
        background: white;
        div {
            display: flex;
            width: 100%;
            flex-direction: column;
            font-family: '__Poppins_ad20f7'!important;
            background: white;
            color: black;
            gap: 0; 
            &:hover {
                background: #f2f2f2;
            }
        }
    }
    .select__value-container {
        position: relative;
        height: 38px;
    }
    .select__input-container {
        position: absolute;
    }
`

const Participant = styled.div`
    div {
        width: -webkit-fill-available;
    }
`