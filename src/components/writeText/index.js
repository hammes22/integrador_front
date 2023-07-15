import {
  Divider,
  FormControl,
  FormErrorMessage,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { ButtonGradiente } from "../ButtonGradiente";
import { useFormContext } from "react-hook-form";

export default function WriteText({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} padding={5} width="100%" background="white">
        <FormControl isInvalid={errors}>
          <Textarea
            bgColor="cinza.DEFAULT"
            borderRadius="12px"
            placeholder="Escreva seu post..."
            size="sm"
            {...register("content")}
          />
          {errors.content && (
            <FormErrorMessage>{errors.content.message}</FormErrorMessage>
          )}
        </FormControl>
        <ButtonGradiente type="submit">Postar</ButtonGradiente>
        <Divider borderColor="primary.DEFAULT" background="white" />
      </Stack>
    </form>
  );
}
