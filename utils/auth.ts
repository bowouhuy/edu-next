const _restrictedRoutes = ["/auth/login", "/auth/register"];

/**
 * Function to check if the user is authenticated or not
 * @returns boolean
 **/
const isAuthenticated = () => {
  return !!localStorage.getItem("accessToken");
};

/**
 * Function to set the access token in local storage
 * @param token string
 * @returns void
 **/
const setToken = (token: string) => {
  localStorage.setItem("accessToken", token);
};

/**
 * Function to get the access token from local storage
 * @returns string
 **/
const getToken = () => {
  return localStorage.getItem("accessToken");
};

/**
 * Function to remove the access token from local storage
 * @returns void
 **/
const removeToken = () => {
  localStorage.removeItem("accessToken");
};

/**
 * Function to handle if the user is authenticated or not. If not, it will redirect to the login page.
 *
 * @returns void
 */
const authClientMiddleware = () => {
  //check url
  const currentPath = window.location.pathname;
  if (_restrictedRoutes.includes(currentPath)) {
    return;
  }
  if (!isAuthenticated()) {
    window.location.href = "/auth/login";
    alert("You are not authenticated, please login first.");
  }
};

export {
  isAuthenticated,
  setToken,
  getToken,
  removeToken,
  authClientMiddleware,
};
