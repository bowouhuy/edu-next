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
import { media } from '@/utils/media';
import api from "../../utils/api";
import AffiliateProfileInfo from "../../components/organisms/Dashboard/Affiliate/AffiliateProfileInfo";
import {ProgramName, ReferralType} from "../../types/global";
import Link from "next/link";
import RemoveRow from "../../components/atoms/RemoveRow";
import TrashIcon from '../../components/atoms/TrashIcon';


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

async function fetchDataAffiliate() {
    try {
        const response = await api.get(process.env.NEXT_PUBLIC_API_URL+'affiliate');

        return response.data; // Ini akan mengembalikan data dari API.
    } catch (error) {
        // Handle error jika terjadi kesalahan dalam permintaan.
        console.error('Error fetching data:', error);
        throw error;
    }
}

const SubmitReferallPage: React.FC = () => {
    const [affiliateData, setAffiliateData] = useState(null);
    const [programNameFieldVisible, setProgramNameFieldVisible] = useState(true);
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [programNames, setProgramNames] = useState<ProgramName[]>([]);
    const [referallTypes, setReferallTypes] = useState<ReferralType[]>([]);

    useEffect(() => {
        fetchDataAffiliate().then((data) => {
            setAffiliateData(data);
        }).catch((error) => {
            // Handle error jika terjadi kesalahan dalam permintaan.
        });
    }, []);

    const initData: SchoolDetail = {
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

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const programName = programNameFieldVisible ? formData.get('program-name') : '';

        var data = {
            countryGroupname: formData.get('country'),
            referralType: formData.get('referral-type'),
            programName: formData.get('program-name'),
            schoolDetails: schoolDetails
        }
        // console.log('Form submitted successfully!', data);
        setResponse('Form submitted successfully!');
        setError('');

        try {
            const response = await api.post('submissions', data);
            console.log('Response:', response.data);
            console.log(response.data);
            window.location.href = '/thankyou';
            localStorage.setItem("latestSubmission", JSON.stringify(response.data.data));

        } catch (error) {
            // Handle error jika terjadi kesalahan dalam permintaan.
            console.error('Error fetching data:', error);
            throw error;
        }
    }

    // State to manage form data
    const [formData, setFormData] = useState({
        referralType: '',
        programName: '',
        countryGroupname: '',
    });

    // Function to fetch referral types when the component mounts
    useEffect(() => {
        const fetchReferralTypes = async () => {
            try {
                const response = await api.get('program-categories');
                if (response) {
                    const data = await response.data.data;
                    setReferallTypes(data);
                } else {
                    console.error('Error fetching referral types');
                }
            } catch (error) {
                console.error('Error fetching referral types', error);
            }
        };

        fetchReferralTypes();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    // Function to handle changes in referral type
    const handleReferralTypeChange = async (event:any) => {
        const selectedReferralType = event.target.value;
        setFormData({
            ...formData,
            referralType: selectedReferralType,
            programName: '', // Reset program name when referral type changes
        });

        // Fetch program names based on the selected referral type
        try {
            const response = await api.get('programs/'+selectedReferralType, );
            if (response) {
                const data = await response.data.data;
                setProgramNames(data);
            } else {
                console.error('Error fetching program names');
            }
        } catch (error) {
            console.error('Error fetching program names', error);
        }
        setProgramNameFieldVisible(selectedReferralType !== '3');
    };

    // Function to handle changes in program name
    const handleProgramNameChange = (event:any) => {
        const selectedProgramName = event.target.value;
        setFormData({
            ...formData,
            programName: selectedProgramName,
        });
    };
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
                                    <label htmlFor="referral-type">TYPE OF REFERRAL </label>
                                    <select id="referral-type" name="referral-type" onChange={handleReferralTypeChange} value={formData.referralType}>
                                        <option value="">Select a Type of Referral</option>
                                        {referallTypes.map((type, index) => (
                                            <option key={index} value={type.id}>
                                                {type.name}
                                            </option>
                                        ))}
                                    </select>
                                </FieldRow>
                                <FieldRow className={programNameFieldVisible ? 'program' : 'program hidden'}>
                                    <label htmlFor="program-name">Program Name </label>
                                    <select id="program-name" name="program-name" onChange={handleProgramNameChange} value={formData.programName}>
                                        <option value="">Select a Type of Referral</option>
                                        {programNames.map((type, index) => (
                                            <option key={index} value={type.id}>
                                                {type.name}
                                            </option>
                                        ))}
                                    </select>
                                </FieldRow>
                                <FieldRow>
                                    <div className='label-group'>
                                        <label htmlFor="country">CHOOSE COUNTRY & GROUP UNIVERSITY</label>
                                        <Link href={'/dashboard/profile'} target="_blank">
                                            <span>Universities Incentives List (PDF)</span>
                                        </Link>
                                    </div>
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
                                    {schoolDetails.map((school, index) => (
                                        <Fragment key={index}>
                                            <SchoolRow className='school-row'>
                                                <RemoveRow type="button" className='delete-school' onClick={() => onSchoolDelete(index)}><TrashIcon /></RemoveRow>
                                                <SchoolField
                                                    // key={index}
                                                    index={index}
                                                    schoolDetails={schoolDetails}
                                                    onCityChange={onCityChange}
                                                    onSchoolChange={(i, v) => onSchoolChange(i, v)}
                                                    onParticipantDelete={(index, indexParticipant) => deleteParticipantValue(index, indexParticipant)}
                                                    onParticipantChange={(index, indexParticipant, value) => changeParticipantValue(index, value, indexParticipant)}
                                                    onParticipantNew={(index, value) => changeParticipantValue(index, value)}
                                                />
                                            </SchoolRow>
                                        </Fragment>
                                    ))}
                                    <AddMore type="button" onClick={addSchoolRow}>
                                        <PlusMinus />
                                        Add More School
                                    </AddMore>
                                </FieldRow>
                                <button style={{ marginTop: '30px' }} type="submit" value="Submit">SUBMIT REFERALLS</button>
                            </Forms>
                            {response && <p>{response}</p>}
                            {error && <p>Error: {error}</p>}
                        </RowLeft>
                        {affiliateData && <WithdrawCardInfo data={affiliateData} />}
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
        padding-right: 4rem;
    }
    ${media("<desktop")} {
        width: 55%;
    }
    ${media("<=tablet")} {
        width: 100%;
        form {
            padding-right: 0;
        }
    }
    ${media("<phone")} {
        form {
            gap: 0;
        }
    }
`
const ColParent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 80px;
    ${media("<tablet")} {
        flex-direction: column;
    }
`
const SchoolRow = styled.div`
    position: relative;
    counter-increment: number-counter;
    &:nth-child(1) {
        .delete-school {
            visibility: hidden;
        }
    }
`

const FieldRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    h4, label {
        font-family: '__Poppins_ad20f7';
        text-transform: uppercase;
    }
    h4 {
        font-size: 28px;
        ${media("<phone")} {
            font-size: 20px;
        }
    }
    div {
        
        justify-content: space-between;
    }
    .label-group {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-top: 15px;
        label {
            margin: 0;
        }
        a {
            color: var(--primary);
            cursor: pointer;
            text-decoration: underline;
            font-size: 14px;
            font-family: '__Poppins_ad20f7';
            font-style: italic;
        }
        ${media("<=phone")} {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
        }
    }
    &.hidden {
        display: none;
    }
`