'use client'
import BasicSection from '@/components/atoms/BasicSection';
import AddMore from "@/components/atoms/AddMore";
import Container from '@/components/atoms/Container';
import FlexRow from '@/components/atoms/FlexRow';
import Forms from '@/components/atoms/Form';
import SubmitReferall from '@/components/organisms/Dashboard/SubmitReferall/Hero';
import PlusMinus from "@/components/atoms/PlusMinus";
import SchoolField from "@/components/molecules/Submit/SchoolDetails";
import WithdrawCardInfo from '@/components/organisms/Dashboard/SubmitReferall/Withdraw';
import React, { FormEvent, Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import ClientMiddleware from '@/components/molecules/ClientMiddleware';
import { Participant, SchoolDetail } from '@/types/referral';


const submitReferall = {
    title: 'Nihilne te nocturnum praesidium Palati, nihil urbis vigiliae.',
    bannerImage: '/images/heroBanner.jpg',
    shortDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet mattis ligula, in aliquet tellus. In accumsan ac justo non consequat. Donec mollis feugiat pharetra. ',
    ctaUrl: '/dashboard/profile',
    ctaText: 'Learn More'
}

const eventDetails = {
    referallTypes: [
        { name: 'Study Abroad' },
        { name: 'English Program' },
        { name: 'Events' }
    ],
    countryGroupname: [
        { name: 'Indonesia', code: 'C1' },
        { name: 'Singapore', code: 'C2' },
        { name: 'Japan', code: 'C3' },
    ],
    schollName: [
        { name: 'MAN 10 JOGLO', city: 'Jakarta' },
        { name: 'SMA Al Kamal', city: 'Bandung' },
        { name: 'MAN 11 JOGLO', city: 'Jakarta' },
        { name: 'SMA Al Mukhlisin', city: 'Depok' },
        { name: 'SMA Al Mukhlisin', city: 'Jakarta' },
    ]
}

const WithdrawInfo = {
    affiliateInfo: [
        {
            title: 'affiliate',
            referall: '10',
            registeredStudent: '20'
        }
    ],
    balanceInfo: [
        {
            title: 'balance',
            total_balance: 'Rp570.000',
            pending_incentive: 'Rp150.000',
            withdrawalProcess: 'Rp0',
            total_withdraw: 'Rp1.870.000'
        }
    ]
}


const SubmitReferallPage: React.FC = () => {
    const initData: SchoolDetail =
    {
        school: '',
        city: '',
        participants: [
            {
                fullName: '',
                phoneNumber: ''
            }
        ]
    }

    const [schoolDetails, setSchoolDetails] = useState<SchoolDetail[]>([{ ...initData }]);

    const onCityChange = (index: number, value: string) => {
        changeSchoolDetailValue('city', index, value);
    };

    const onSchoolChange = (index: number, value: string) => {
        changeSchoolDetailValue('school', index, value);
    }

    const onSchoolDelete = (index: number) => {
        let newSchools = schoolDetails;
        newSchools.splice(index, 1);
        setSchoolDetails([...newSchools]);
    }

    const changeSchoolDetailValue = (key: 'city' | 'school', index: number, value: string) => {
        if (value) {
            let schoolDetail = schoolDetails;
            schoolDetail[index][key] = value;
            setSchoolDetails(schoolDetail);
            console.log(schoolDetails);
        } else {
            console.error('Invalid event object or event.target.value is undefined.');
        }
        console.log('The schoolDetails array has been updated:', schoolDetails);
    }

    /**
     * Change the value of a participant in the schoolDetails array. If indexParticipant is provided, it will change the value of the participant in the specified school.
     * @param index
     * @param value 
     * @param indexParticipant
     *
     * @returns void
     */
    const changeParticipantValue = (index: number, value: Participant, indexParticipant?: number) => {
        console.log('indexParticipant:', indexParticipant, 'value:', value);
        let newSchoolDetails = schoolDetails;
        if (indexParticipant !== undefined) {
            let participants = schoolDetails[index].participants
            if (participants) {
                participants[indexParticipant] = value;
                newSchoolDetails[index].participants = participants;
            } else {
                newSchoolDetails[index].participants = [value];
            }
        } else {
            newSchoolDetails[index].participants.push(value);
        }
        setSchoolDetails([...newSchoolDetails]);
        console.log('The schoolDetails array has been updated:', schoolDetails);

    }

    const deleteParticipantValue = (index: number, indexParticipant: number) => {
        let newSchoolDetails = schoolDetails;
        let participants = newSchoolDetails[index].participants;
        participants.splice(indexParticipant, 1);
        newSchoolDetails[index].participants = participants;
        setSchoolDetails([...newSchoolDetails]);
    }

    const addSchoolRow = () => {
        console.log('clicked')
        // Add a new empty school to the schools array
        setSchoolDetails([...schoolDetails, { ...initData }]);
    };


    // const removeDuplicates = (data: SchoolData[], property: keyof SchoolData) => {
    // const uniqueValues: string[] = [];
    // const result: SchoolData[] = [];
    // data.forEach((item: SchoolData) => {
    //     if (!uniqueValues.includes(item[property])) {
    //     uniqueValues.push(item[property]);
    //     result.push(item);
    //     }
    // });
    //     return result;
    // };

    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // const formData = new FormData(event.currentTarget);

        // console.log('Form submitted successfully!', Object.fromEntries(formData));
        console.log('Form submitted successfully!', schoolDetails);
        setResponse('Form submitted successfully!');
        setError('');


    }

    return (
        <ClientMiddleware>
            <SubmitReferall data={submitReferall} />
            <BasicSection>
                <Container>
                    <ColParent>
                        <RowLeft>
                            <Forms onSubmit={onSubmit}>
                                <FieldRow>
                                    <h4>Event Details</h4>
                                    <label htmlFor="referallType">TYPE OF REFERRAL </label>
                                    <select id="referallType" name="referallType">
                                        <option value="">Select a Type of Referral</option>
                                        {eventDetails.referallTypes.map((type, index) => (
                                            <option key={index} value={type.name}>
                                                {type.name}
                                            </option>
                                        ))}
                                    </select>
                                </FieldRow>
                                <FieldRow>
                                    <label htmlFor="country">CHOOSE COUNTRY & GROUP UNIVERSITY</label>
                                    <select id="country" name="country">
                                        <option value="">Select a Country & Group University</option>
                                        {eventDetails.countryGroupname.map((country, index) => (
                                            <option key={index} value={country.name}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                </FieldRow>
                                <FieldRow>
                                    <FlexRow>
                                        <h4>School Details</h4> <span></span>
                                    </FlexRow>
                                    <label htmlFor="schoolName">City</label>
                                    {/* Render the existing school fields */}
                                    {schoolDetails.map((school, index) => (
                                        <Fragment key={index}>
                                            <button onClick={() => onSchoolDelete(index)}>Hapus</button>
                                            <SchoolField
                                                index={index}
                                                schoolDetails={schoolDetails}
                                                onCityChange={onCityChange}
                                                onSchoolChange={(i, v) => onSchoolChange(i, v)}
                                                onParticipantDelete={(index, indexParticipant) => deleteParticipantValue(index, indexParticipant)}
                                                onParticipantChange={(index, indexParticipant, value) => changeParticipantValue(index, value, indexParticipant)}
                                                onParticipantNew={(index, value) => changeParticipantValue(index, value)}
                                            />
                                        </Fragment>
                                    ))}

                                    <AddMore type="button" onClick={addSchoolRow}>
                                        <PlusMinus />
                                        Add More School
                                    </AddMore>
                                </FieldRow>
                                <button type="submit" value="Submit">SUBMIT REFERALLS</button>
                            </Forms>
                            {response && <p>{response}</p>}
                            {error && <p>Error: {error}</p>}
                        </RowLeft>
                        <WithdrawCardInfo data={WithdrawInfo} />
                    </ColParent>
                </Container>
            </BasicSection>
        </ClientMiddleware>
    );
};

export default SubmitReferallPage;


const RowLeft = styled.div`
    width: 65%;
    form {
        margin-top: 0;
    }
`
const ColParent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 80px;
`

const FieldRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    h4 {
        font-family: '__Poppins_baf6f6';
        text-transform: uppercase;
    }
    div {
        
        justify-content: space-between;
        span::after {
            counter-increment: span;
            content: "#" counter(span) "";
            font-family: '__Poppins_baf6f6';
            font-weight: 700;
            font-size: 28px;
        }
    }
`