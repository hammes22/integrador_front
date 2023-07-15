import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/globalContext";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { UrlLike } from "../constants/API";

export default function useLikes() {
  const { auth } = useContext(GlobalContext);
  const { user } = auth;
  const [errorMessageLike, setErrorMessageLike] = useState();

  const { data: likesData, mutateAsync: likePost } = useMutation({
    mutationFn: async (newLike) => {
      const result = await axios
        .put(UrlLike(newLike.id), newLike, {
          headers: {
            Authorization: user.token,
          },
        })
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          setErrorMessageLike(error.response.data);
          console.log(error.response.data);
        });
      return result;
    },
  });

  return { likePost, errorMessageLike, likesData };
}
