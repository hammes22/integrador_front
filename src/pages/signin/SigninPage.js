import React from "react";
import labEdit from "../../assets/image/LabEdit.png";
import {
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ButtonGradiente } from "../../components/commons/ButtonGradiente";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../validations/loginSchema";

export default function SigninPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data) => console.log("data", data);
  console.log(errors);
  return (
    <Flex
      marginTop={10}
      justifyContent="center"
      alignItems="start"
      height="100vh"
      width="100vw"
    >
      <Flex flexDirection="column" alignItems="center" width="-moz-fit-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={10} padding={5} width="sm">
            <Center flexDirection="column">
              <Image src={labEdit} alt="LabEdit" width="152px" />
              <Text>O projeto de rede social da Labenu</Text>
            </Center>
            <Center flexDirection="column" gap={5}>
              <FormControl isInvalid={errors.email}>
                <Input
                  type="email"
                  placeholder="E-mail"
                  size="lg"
                  {...register("email")}
                />
                {errors.email && (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors.senha}>
                <Input
                  {...register("senha")}
                  placeholder="Senha"
                  type="password"
                  size="lg"
                />
                {errors.senha && (
                  <FormErrorMessage>{errors.senha.message}</FormErrorMessage>
                )}
              </FormControl>
            </Center>
            <Center flexDirection="column" gap={5}>
              <ButtonGradiente borderRadius="24px" width="100%" type="submit">
                Continuar
              </ButtonGradiente>
              <Divider bgColor="primary.DEFAULT" />
              <Button borderRadius="24px" width="100%">
                Crie uma conta!
              </Button>
            </Center>
          </Stack>
        </form>
      </Flex>
    </Flex>
  );
}
