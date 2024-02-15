"use client";

import { ApiError } from "@/types/axios";
import api from "@/utils/api";
import { axiosError } from "@/utils/axiosError";

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
  } catch (error) {
    return axiosError(error as ApiError);
  }
};

const setAccessToken = (token: any) => {
};

export {login}