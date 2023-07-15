import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/globalContext";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { UrlPosts } from "../constants/API";

export default function useComments(id) {
  const { auth } = useContext(GlobalContext);
  const { user, signout, setErrorMessage } = auth;
  const [errorMessagePost, setErrorMessagePost] = useState();

  const verificaMensagem = (mensagem) => {
    if (
      mensagem === "token inválido" ||
      mensagem === "'token' é obrigatório" ||
      mensagem === "'token' deve ser do tipo string"
    ) {
      signout();
      setErrorMessage("Login expirou, entre novamente");
    } else {
      setErrorMessagePost(mensagem);
    }
  };

  const key = ["comments"];

  const { data: comments, refetch } = useQuery(key, async () => {
    const result = await axios
      .get(`${UrlPosts}/${id}`, {
        headers: {
          Authorization: user.token,
        },
      })
      .then((response) => {
        setErrorMessagePost(undefined);
        return response;
      })
      .catch((error) => {
        verificaMensagem(error.response.data);
      });
    return result.data;
  });

  const { mutateAsync: createMessagem } = useMutation({
    mutationFn: async (newPost) => {
      await axios
        .post(UrlPosts, newPost, {
          headers: {
            Authorization: user.token,
          },
        })
        .then((response) => {
          refetch();
        })
        .catch((error) => {
          verificaMensagem(error.response.data);
          console.log(error.response.data);
        });
    },
  });

  return { comments, errorMessagePost, createMessagem, refetch };
}
