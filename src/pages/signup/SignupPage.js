import React, { useContext, useEffect } from "react";
import {
  Alert,
  AlertIcon,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { GlobalContext } from "../../context/globalContext";
import { signupSchema } from "../../validations/signupSchema";
import Header from "../../components/Header";
import { ButtonGradiente } from "../../components/ButtonGradiente";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";

export default function SignupPage() {
  const { auth } = useContext(GlobalContext);
  const { signup, errorMessage, signout, isSuccessSignup } = auth;

  const navigate = useNavigate();

  useEffect(() => {
    signout();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
  });
  const onSubmit = async (data) => {
    signup(data);

    if (isSuccessSignup) {
      reset();
      goToHomePage(navigate);
    }
  };

  return (
    <Container
      as="main"
      justifyContent="center"
      alignItems="start"
      width="100vw"
    >
      <Flex flexDirection="column" alignItems="center" width="-moz-max-content">
        <Container as="header" flexDirection="column">
          <Header />
        </Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={5} padding={5} width="sm">
            <Center flexDirection="column" marginBottom={10}>
              <Text fontSize="3xl" fontWeight="bold">
                Olá, boas vindas ao LabEddit ;)
              </Text>
            </Center>
            <Center flexDirection="column" gap={5}>
              <FormControl isInvalid={errors.name}>
                <Input
                  type="text"
                  placeholder="name"
                  size="lg"
                  {...register("name")}
                />
                {errors.name && (
                  <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors.email}>
                <Input
                  type="text"
                  placeholder="E-mail"
                  size="lg"
                  {...register("email")}
                />
                {errors.email && (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors.password}>
                <Input
                  {...register("password")}
                  placeholder="Senha"
                  type="password"
                  size="lg"
                />
                {errors.password && (
                  <FormErrorMessage>{errors.password.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errorMessage}>
                {errorMessage && (
                  <Alert status="error">
                    <AlertIcon />
                    {errorMessage}
                  </Alert>
                )}
              </FormControl>
            </Center>
            <Center flexDirection="column" gap={5}>
              <Text>
                Ao continuar, você concorda com o nosso Contrato de usuário e
                nossa Política de Privacidade
              </Text>
            </Center>
            <FormControl isInvalid={errors.aceite}>
              <Checkbox {...register("aceite")}>
                Eu concordo em receber emails sobre coisas legais no Labeddit
              </Checkbox>
              {errors.aceite && (
                <FormErrorMessage>{errors.aceite.message}</FormErrorMessage>
              )}
            </FormControl>
            <Center flexDirection="column" gap={5}>
              <ButtonGradiente borderRadius="24px" width="100%" type="submit">
                Cadastrar
              </ButtonGradiente>
            </Center>
          </Stack>
        </form>
      </Flex>
    </Container>
  );
}
