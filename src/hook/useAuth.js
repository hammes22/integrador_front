import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { UrlSignin, UrlSignup } from "../constants/API";

export default function useAuth() {
  const keyLocalStorage = "user";
  const [errorMessage, setErrorMessage] = useState();
  const [user, setUser] = useState();
  const { mutateAsync: signin } = useMutation({
    mutationFn: async (newLogin) => {
      await axios
        .post(UrlSignin, newLogin)
        .then((response) => {
          setErrorMessage(undefined);
          saveToken(response.data);
          setUser(response.data);
        })
        .catch((error) => {
          setErrorMessage(error.response.data);
        });
    },
  });

  const saveToken = (newUser) => {
    localStorage.setItem(keyLocalStorage, JSON.stringify(newUser));
  };

  useEffect(() => {
    const usersStorage = localStorage.getItem(keyLocalStorage);

    if (usersStorage) {
      const hasUser = JSON.parse(usersStorage);
      if (hasUser) setUser(hasUser);
    }
  }, []);

  const { mutateAsync: signup, isSuccess: isSuccessSignup } = useMutation({
    mutationFn: async (newUser) => {
      await axios
        .post(UrlSignup, newUser)
        .then((response) => {
          saveToken(response.data);
          setUser(response.data);
          setErrorMessage(undefined);
        })
        .catch((error) => {
          setErrorMessage(error.response.data);
        });
    },
  });

  const signout = () => {
    setUser(undefined);
    localStorage.removeItem(keyLocalStorage);
  };

  return {
    user,
    signin,
    errorMessage,
    signout,
    signed: !!user,
    signup,
    isSuccessSignup,
    setErrorMessage,
  };
}
