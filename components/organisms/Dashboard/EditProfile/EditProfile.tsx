import Forms from '@/components/atoms/Form';
import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { media } from '@/utils/media';
import Heading from '@/components/atoms/Heading';
import api from '@/utils/api';

export default function EditProfile(props: { data:any }){

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bankNumber, setBankNumber] = useState('');

    // Function to handle form submission
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            // Send POST request to the API to update the profile data
            await api.post(process.env.NEXT_PUBLIC_API_URL + 'update-profile', {
                fullName,
                email,
                phoneNumber,
                bankNumber
            });
            console.log('Profile updated successfully!');
            // Redirect to the profile page after successful submission
            window.location.href = 'dashboard/profile';
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    return (
        <>  
            <Heading>
                Hallo, {props.data.data.name}
            </Heading>  
            <Forms onSubmit={handleSubmit}>
                <FieldRow>
                    <h4>Edit Your Profile</h4>
                </FieldRow>
                <FieldRow>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        placeholder='Full Name'
                    />
                </FieldRow>
                <FieldRow>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Email'
                    />
                </FieldRow>
                <FieldRow>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        placeholder='Phone Number'
                    />
                </FieldRow>
                <FieldRow>
                    <label htmlFor="phoneNumber">Bank Account Number</label>
                    <input
                        type="tel"
                        id="bankNumber"
                        value={bankNumber}
                        onChange={(e) => setBankNumber(e.target.value)}
                        required
                        placeholder='Bank Number'
                    />
                </FieldRow>
                {/* Add more fields for other profile data */}
                <button style={{ marginTop: '30px' }} type="submit">Save Changes</button>
            </Forms>
        </>
    );
}


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
`