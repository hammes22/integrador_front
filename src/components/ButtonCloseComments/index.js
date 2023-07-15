import { CloseIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";
import { goToHomePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function ButtonCloseComments() {
  const navigate = useNavigate();
  return (
    <IconButton
      variant="ghost"
      colorScheme="gray"
      icon={<CloseIcon color="gray.500" />}
      onClick={() => {
        goToHomePage(navigate);
      }}
    />
  );
}
