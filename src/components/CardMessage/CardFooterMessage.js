import {
  CardFooter,
  Flex,
  FormControl,
  FormErrorMessage,
  IconButton,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  PiArrowFatDownLight,
  PiArrowFatUpLight,
  PiChatCenteredBold,
} from "react-icons/pi";
import { formatNum } from "../../util/returnFormatNum";
import useLikes from "../../hook/useLikes";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { goToComments } from "../../routes/coordinator";

export default function CardFooterMessage({ post }) {
  const { likePost, errorMessageLike, likesData } = useLikes();
  const [hidden, setHidden] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (hidden) {
      setTimeout(() => {
        setHidden(false);
      }, 1000);
    }
  }, [hidden]);

  const totalLikes = useMemo(() => {
    setHidden(true);

    if (likesData) {
      return formatNum(likesData.totalLikes, 0);
    }
    return formatNum(post.likes + post.dislikes, 0);
  }, [likesData, post]);

  const mensagem = useMemo(() => {
    if (likesData) {
      return likesData.message;
    }
    return "";
  }, [likesData]);

  return (
    <CardFooter flexDirection="column">
      <Flex display="flex" gap={3}>
        <Tag
          borderRadius="full"
          size="lg"
          variant="outline"
          colorScheme="cinza"
        >
          <IconButton
            variant="link"
            colorScheme="cinza"
            fontSize="20px"
            icon={<PiArrowFatUpLight />}
            onClick={() => {
              likePost({ id: post.id, like: true });
            }}
          />
          <TagLabel>{totalLikes}</TagLabel>
          <IconButton
            variant="link"
            colorScheme="cinza"
            aria-label="Call Sage"
            fontSize="20px"
            icon={<PiArrowFatDownLight />}
            onClick={() => {
              likePost({ id: post.id, like: false });
            }}
          />
        </Tag>
        {!post.id_post_comment && (
          <Tag
            borderRadius="full"
            size="lg"
            variant="outline"
            colorScheme="cinza"
          >
            <IconButton
              variant="link"
              colorScheme="cinza"
              aria-label="Call Sage"
              fontSize="20px"
              icon={<PiChatCenteredBold />}
              onClick={() => {
                goToComments(navigate, post.id);
              }}
            />
            <TagLabel>{formatNum(post.count_comments, 0)}</TagLabel>
          </Tag>
        )}
      </Flex>
      <FormControl isInvalid={errorMessageLike}>
        {errorMessageLike && (
          <FormErrorMessage>{errorMessageLike}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl margin={2}>
        <Text size="12px" color="cinza.500">
          {hidden && mensagem}
        </Text>
      </FormControl>
    </CardFooter>
  );
}
