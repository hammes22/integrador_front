import React, { useContext, useEffect } from "react";
import labEdit from "../../assets/image/LabEdit.png";
import {
  Alert,
  AlertIcon,
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

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema } from "../../validations/signinSchema";
import { GlobalContext } from "../../context/globalContext";
import { useNavigate } from "react-router-dom";
import { goToSignupPage } from "../../routes/coordinator";
import { ButtonGradiente } from "../../components/ButtonGradiente";

export default function SigninPage() {
  const { auth } = useContext(GlobalContext);
  const { signin, errorMessage } = auth;
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (data) => {
    signin(data);
  };

  return (
    <Flex justifyContent="center" alignItems="start">
      <Flex
        marginTop={10}
        flexDirection="column"
        alignItems="center"
        width="-moz-fit-content"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={10} padding={5} width="sm">
            <Center flexDirection="column">
              <Image src={labEdit} alt="LabEdit" width="152px" />
              <Text>O projeto de rede social da Labenu</Text>
            </Center>
            <Center flexDirection="column" gap={5}>
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
              <ButtonGradiente borderRadius="24px" width="100%" type="submit">
                Continuar
              </ButtonGradiente>
              <Divider bgColor="primary.DEFAULT" />
              <Button
                borderRadius="24px"
                width="100%"
                onClick={() => {
                  goToSignupPage(navigate);
                }}
              >
                Crie uma conta!
              </Button>
            </Center>
          </Stack>
        </form>
      </Flex>
    </Flex>
  );
}
