import { Card } from "@chakra-ui/react";
import React from "react";
import CardFooterMessage from "./CardFooterMessage";
import CardHeaderMessage from "./CardHeaderMessage";
import CardBodyMessage from "./CardBodyMessage";

export default function CardMessager({ post }) {
  return (
    <Card
      variant="elevated"
      bgColor="cinza.DEFAULT"
      borderRadius="12px"
      size="sm"
      margin={5}
    >
      <CardHeaderMessage post={post} />
      <CardBodyMessage post={post} />
      <CardFooterMessage post={post} />
    </Card>
  );
}
