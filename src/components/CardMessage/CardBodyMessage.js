import { CardBody, Text } from "@chakra-ui/react";
import React from "react";

export default function CardBodyMessage({ post }) {
  return (
    <CardBody>
      <Text size="18px" fontWeight="400">
        {post.content}
      </Text>
    </CardBody>
  );
}
