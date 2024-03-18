"use client";

import { ApiError } from "@/types/axios";
import api from "@/utils/api";
import { axiosError } from "@/utils/axiosError";
import { useState } from "react";

/**
 * Login function to authenticate user and get token from server. The token is then stored in local storage automatically.
 *
 * @param email User email
 * @param password User password
 * @returns Promise<MainResponse<LoginData>>
 */
const login = async (email: string, password: string) => {
    try {
        const response = await api.post<MainResponse<LoginData>>("/auth/login", {email, password});
        if (response.data.status) {
            // Set the access token in local storage
            localStorage.setItem("accessToken", response.data.data.token);

        }

        return response.data;
    } catch (response: any) {
        // return axiosError(error as ApiError);
        return response.response.data;
    }
};


const logout = async () => {

    try {
        const response = await api.post<MainResponse<LoginData>>("/auth/logout");
        if (response.data.status) {
            // Remove the access token from local storage
            localStorage.removeItem("accessToken");
            window.location.href = '/auth/login';
        } else {
            console.log('Ups! We could not logout the user: ' + response.data.message);
        }

        return response.data;
    } catch (error:any) {
        console.log('Ups! We could not logout the user: ' + error.message);
    }
};
    

export {login, logout}