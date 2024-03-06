import { AxiosError } from "axios";

type ApiError = Error | AxiosError<MainResponse<ErrorData>>;

export type { ApiError };