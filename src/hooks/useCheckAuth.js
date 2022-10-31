export const useCheckAuth = () => {
  let token = localStorage.getItem("auth_token");

  if (token) {
    return true;
  } else {
    return false;
  }
};
