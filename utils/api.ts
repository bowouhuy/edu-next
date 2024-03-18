// api.js
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

// interface IConfig extends InternalAxiosRequestConfig {
//   headers: {
//     Authorization: string;
//   };
// }

interface IResponse {
    data: {
        token: string;
    };
}

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

let accessToken: String | null;

// Function to set the access token
const setAccessToken = (token: any) => {
    localStorage.setItem("accessToken", token);
};

// Function to get the access token
const getAccessToken = () => {
    return localStorage.getItem("accessToken");
};

const refreshToken  = async () => {
  // This could involve making a request to your token refresh endpoint
  // and updating the accessToken variable with the new token

    accessToken = localStorage.getItem("accessToken");

    try {
        const response = await axios.post(
            process.env.NEXT_PUBLIC_API_URL + "auth/refreshtoken",
            null,
            {
                headers: {
                Authorization: "Bearer " + accessToken,
                },
            }
        );
        setAccessToken(response.data.data.token);
        onTokenRefreshed(response.data.data.token);

        return response.data.data.token;
    } catch (error) {
        // Handle the token refresh error (e.g., log out the user)
    }
};

// Axios request interceptor to add the Bearer token to requests
api.interceptors.request.use(
    (config) => {
        accessToken = getAccessToken();
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

let isRefreshing = false;
let refreshSubscribers:any = [];

// Add an interceptor to handle token refreshing
api.interceptors.response.use(
    (response) => {
        // If the response is successful, just return it
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        if(error.response.status === 401 && error.response.data.message =="Invalid Credentials"){
            console.log("Invalid Credentials");
        }
        else if (error.response.status === 406) {
            window.location.href = "/auth/login";
        }
        else if (error.response.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                // If the token is already being refreshed, wait for the new token and retry the original request
                try {
                    const newAccessToken = await new Promise((resolve) => {
                        refreshSubscribers.push((token:any) => {
                            resolve(token);
                        });
                    });

                    originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axios(originalRequest);
                } catch (error) {
                    // Handle error refreshing token
                    return Promise.reject(error);
                }
            }

            // Set a flag to indicate that the token is being refreshed
            isRefreshing = true;

            // Refresh the token
            await refreshToken();
            let newAccessToken = getAccessToken();

            // Reset the flag and update the original request with the new token
            isRefreshing = false;
            originalRequest._retry = true;
            originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

            // Retry the original request with the new token
            return axios(originalRequest);
        }

        // If the error is not related to token expiration, simply reject the promise
        return Promise.reject(error);
    }
);

// Function to update all subscribers with the new token
const onTokenRefreshed = (token:any) => {
    refreshSubscribers.forEach((callback:any) => callback(token));
    refreshSubscribers = [];
};

export default api;
export { onTokenRefreshed };

// // Function to refresh the access token
// const refreshAccessToken = async () => {
//   // This could involve making a request to your token refresh endpoint
//   // and updating the accessToken variable with the new token
//
//     accessToken = localStorage.getItem("accessToken");
//
//     try {
//         const response = await axios.post(
//             process.env.NEXT_PUBLIC_API_URL + "auth/refreshtoken",
//             null,
//             {
//                 headers: {
//                 Authorization: "Bearer " + accessToken,
//                 },
//             }
//         );
//         setAccessToken(response.data.token);
//     } catch (error) {
//         // Handle the token refresh error (e.g., log out the user)
//     }
// };
//
// // Axios request interceptor to add the Bearer token to requests
// api.interceptors.request.use(
//     (config) => {
//         accessToken = getAccessToken();
//         if (accessToken) {
//             config.headers.Authorization = `Bearer ${accessToken}`;
//         }
//         return config;
//     },
//     (error: any) => {
//         return Promise.reject(error);
//     }
// );
//
// // Axios's response interceptor to handle token expiration and refresh
// api.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     async (error: AxiosError<MainResponse<ErrorData>>): Promise<AxiosError> => {
//     const url = error.request?.responseURL as String | undefined;
//
//         // This handles the case where the user is not authenticated (Token Middleware)
//         //TODO add url that don't need to redirect
//         if (url && url.includes("auth/login")) {
//             return Promise.reject(error);
//     }
//     if (error.response && error.response.status === 401) {
//         console.log("error", error);
//
//         //// Token is expired; refresh it and retry the request
//         ////   await refreshAccessToken();
//         ////   accessToken = getAccessToken();
//         //   // Reattempt the original request with the new token
//         ////   error.config.headers["Authorization"] = `Bearer ${accessToken}`;
//         ////   return axios(error.config);
//
//         // Top of this is the original code, but I'm going to try to implement my own version of it below because
//         // the refresh token is not implemented on the backend yet
//         //! This redirect will work if a axios request is made and the token is expired
//
//         //redirect to login page
//         //TODO add toast for notification then redirect
//         localStorage.removeItem("accessToken");
//         window.location.href = "/auth/login";
//         // alert("Token expired");
//     }
//     return Promise.reject(error);
//     }
// );
//
// export default api;