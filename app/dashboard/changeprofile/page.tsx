'use client'
import React, { useEffect, useState } from "react";
import api from "@/utils/api";
import EditProfile from "@/components/organisms/Dashboard/EditProfile/EditProfile";

async function fetchData() {
    try {
        const response = await api.get(process.env.NEXT_PUBLIC_API_URL+'profile');
        return response.data; 
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}


export default function ChangeProfile() {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        fetchData()
            .then((data) => {
            setProfileData(data);
            })
            .catch((error) => {
            });
    }, []);

    
    return (
        <>  
            {profileData && <EditProfile data={profileData} />}  
        </>
    )
}