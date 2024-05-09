export const isLogin = () => {
  const userToken = localStorage.getItem("user");
  if (userToken) {
    return JSON.stringify(userToken);
  }
  return null;
};
