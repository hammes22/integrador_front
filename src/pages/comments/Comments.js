import { Alert, AlertIcon, Container, Flex } from "@chakra-ui/react";
import React from "react";
import useComments from "../../hook/useComments";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "../../validations/postSchema";
import PostContainer from "../../components/PostContainer";
import { useParams } from "react-router-dom";
import CardMessager from "../../components/CardMessage";
import ButtonCloseComments from "../../components/ButtonCloseComments";

export default function Comments() {
  const { id } = useParams();
  const { comments, createMessagem, errorMessagePost } = useComments(id);

  const methods = useForm({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = async (data) => {
    createMessagem({ ...data, idPost: id });
    methods.reset();
  };

  return (
    <Container
      as="main"
      justifyContent="center"
      alignItems="start"
      width="100vw"
    >
      <Flex flexDirection="column" alignItems="center" width="-moz-max-content">
        <FormProvider {...methods}>
          <PostContainer
            onSubmit={onSubmit}
            Close={<ButtonCloseComments />}
            comments={comments}
          />
        </FormProvider>

        <Container mt="55vh" padding={0}>
          {errorMessagePost && (
            <Alert status="error">
              <AlertIcon />
              {errorMessagePost}
            </Alert>
          )}

          {comments &&
            comments.comments.map((post) => (
              <CardMessager key={post.id} post={post} />
            ))}
        </Container>
      </Flex>
    </Container>
  );
}
