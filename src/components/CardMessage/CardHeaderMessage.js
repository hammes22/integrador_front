import { CardHeader, Text } from "@chakra-ui/react";
import React from "react";

export default function CardHeaderMessage({ post }) {
  return (
    <CardHeader>
      <Text size="12px" color="cinza.500">
        Enviado por: {post.creator.name}
      </Text>
    </CardHeader>
  );
}
