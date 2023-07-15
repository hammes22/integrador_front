import { Button, Center, Image, Stack } from "@chakra-ui/react";
import labenuIcon from "../../assets/image/labenu.png";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/globalContext";
import { goToSigninPage } from "../../routes/coordinator";

export default function Header({ Close = <Stack> </Stack> }) {
  const { auth } = useContext(GlobalContext);
  const { user, signout } = auth;
  const navigate = useNavigate();

  const returnButtonLoginLogout = () => {
    return user ? (
      <Button
        colorScheme="teal"
        variant="link"
        onClick={() => {
          signout();
        }}
      >
        Logout
      </Button>
    ) : (
      <Button
        colorScheme="teal"
        variant="link"
        onClick={() => {
          goToSigninPage(navigate);
        }}
      >
        Entrar
      </Button>
    );
  };

  return (
    <Center
      width="-moz-max-content"
      padding={2}
      background="cinza.DEFAULT"
      justifyContent="space-between"
    >
      {Close}
      <Image src={labenuIcon} alt="LabEdit" />
      {returnButtonLoginLogout()}
    </Center>
  );
}
