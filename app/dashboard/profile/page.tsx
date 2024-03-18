'use client'
import React, { useEffect, useState } from "react";
import DashProfile from "@/components/organisms/Dashboard/DashProfile";
import AffiliateProfileInfo from "@/components/organisms/Dashboard/Affiliate/AffiliateProfileInfo";
import axios from 'axios';
import { useRouter } from 'next/router';
import api from "@/utils/api";
import BasicSection from "@/components/atoms/BasicSection";
import {processEnv} from "@next/env";


const ProfileInfo = {
    title: "welcome Back",
    name: "Sara",
    fullname: "Sara Wijaya",
    email: "Sara@mail.com",
    schoolname: "Sekolah Bintang kejora, jakarta",
    phonenumber: "0812345678",
    banknumber: "BCA 645789012"
}

async function fetchData() {
    try {
        const response = await api.get(process.env.NEXT_PUBLIC_API_URL+'profile');

        return response.data; // Ini akan mengembalikan data dari API.
    } catch (error) {
        // Handle error jika terjadi kesalahan dalam permintaan.
        console.error('Error fetching data:', error);
        throw error;
    }
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


const AffeliateInfo = {
    title: "Affiliates",
    suc_referral: "10",
    reg_referral: "50",
    balance: "120.000",
    pend_balance: "500.000",
    on_withdraw: "0",
    total_withdraw: "1.300.000"
}

export default function Profile() {
    const [profileData, setProfileData] = useState(null);
    const [affiliateData, setAffiliateData] = useState(null);

    useEffect(() => {
        fetchData()
            .then((data) => {
            setProfileData(data);
            })
            .catch((error) => {
            // Handle error jika terjadi kesalahan dalam permintaan.
            });
        fetchDataAffiliate().then((data) => {
            setAffiliateData(data);
        }).catch((error) => {
            // Handle error jika terjadi kesalahan dalam permintaan.
        });
    }, []);

    
    return (
        <>  
            {/* <DashProfile data={ProfileInfo}/>    */}
            {profileData && <DashProfile data={profileData} />}  
            {affiliateData && <AffiliateProfileInfo data={affiliateData} />}
        </>
    )
}