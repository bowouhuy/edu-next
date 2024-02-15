import axios, { AxiosError } from "axios";

/**
 * Handle axios error and return the error message. If closure parameter is provided, it will be executed and will return depending on the closure return value.
 *
 * @param error
 * @param closureAxiosError 
 * @param closureMainError 
 * @returns Boolean | void | any
 */
export const axiosError = (
  error: Error | AxiosError<MainResponse<ErrorData>>,
  closureAxiosError?: (error: AxiosError<MainResponse<ErrorData>>) => void,
  closureMainError?: (error: Error) => void
) => {
  if (axios.isAxiosError<MainResponse<ErrorData>>(error)) {
    console.log(error.status);
    console.error(error.response);
    alert(error);
    return closureAxiosError ? closureAxiosError(error) : false;
    // Do something with this error...
  } else {
    console.error(error);
    return closureMainError ? closureMainError(error) : false;
  }
};

export default axiosError;
