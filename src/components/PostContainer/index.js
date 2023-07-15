import { Container, Stack } from "@chakra-ui/react";
import React from "react";
import Header from "../Header";
import WriteText from "../writeText";
import CardMessager from "../CardMessage";

export default function PostContainer({
  onSubmit,
  Close = <Stack> </Stack>,
  comments = null,
}) {
  return (
    <Container
      as="header"
      position={comments ? "absolute" : "fixed"}
      flexDirection="column"
      zIndex="sticky"
      background="white"
      padding={0}
      height={comments ? "50vh" : "30vh"}
    >
      <Header Close={Close} />
      {comments && <CardMessager post={comments} />}
      <WriteText onSubmit={onSubmit} />
    </Container>
  );
}
