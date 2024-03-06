interface MainResponse<T> {
    status: boolean;
    code: number;
    data: T;
    message: string;
}

interface ErrorData {
    error: string;
}

interface LoginData {
    token: string;
}