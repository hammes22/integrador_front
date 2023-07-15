import React from "react";
import { Alert, AlertIcon, Container, Flex } from "@chakra-ui/react";

import CardMessager from "../../components/CardMessage";
import PostContainer from "../../components/PostContainer";
import usePosts from "../../hook/usePosts";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSchema } from "../../validations/postSchema";

export default function HomePage() {
  const { posts, errorMessagePost, createPost } = usePosts();

  const methods = useForm({
    resolver: zodResolver(postSchema),
  });

  const onSubmit = async (data) => {
    createPost(data);
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
          <PostContainer onSubmit={onSubmit} />
        </FormProvider>

        <Container mt="35vh">
          {errorMessagePost && (
            <Alert status="error">
              <AlertIcon />
              {errorMessagePost}
            </Alert>
          )}
          {posts &&
            posts.map((post) => <CardMessager key={post.id} post={post} />)}
        </Container>
      </Flex>
    </Container>
  );
}
