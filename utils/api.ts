// api.js
const axios = require('axios');

interface IConfig {
    headers: {
        Authorization: string;
    };
}

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
const setAccessToken = (token:any) => {
    localStorage.setItem('accessToken', token);
};

// Function to get the access token
const getAccessToken = () => {
    return localStorage.getItem('accessToken');
};

// Function to refresh the access token
const refreshAccessToken = async () => {
  // This could involve making a request to your token refresh endpoint
  // and updating the accessToken variable with the new token

    accessToken = localStorage.getItem('accessToken');

    try {
        const response = await axios.post(process.env.NEXT_PUBLIC_API_URL+'auth/refreshtoken', null, {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        });
        setAccessToken(response.data.token);
    } catch (error) {
        // Handle the token refresh error (e.g., log out the user)
    }
    };

// Axios request interceptor to add the Bearer token to requests
api.interceptors.request.use(
    (config:IConfig) => {
        accessToken = getAccessToken();
        if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error:any) => {
        return Promise.reject(error);
    }
);

    // Axios response interceptor to handle token expiration and refresh
api.interceptors.response.use(
    (response:IResponse) => {
        return response;
    },
    async (error:any) => {
        if (error.response && error.response.data.message === "Unauthorized") {
        // Token is expired; refresh it and retry the request
        await refreshAccessToken();
        accessToken = getAccessToken();
        // Reattempt the original request with the new token
        error.config.headers['Authorization'] = `Bearer ${accessToken}`;
        return axios(error.config);
        }
        return Promise.reject(error);
    }
);

export default api;
