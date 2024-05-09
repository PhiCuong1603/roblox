import React, { useEffect, useState } from "react";
import { isLogin } from "../utils";
import { useSelector } from "react-redux";

const useUserLogin = () => {
  const [userLogin, setUserLogin] = useState(null);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(user);
    setUserLogin(isLogin());

    return () => {};
  }, [user]);

  return userLogin;
};

export default useUserLogin;
