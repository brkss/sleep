import React from "react";
import { Box, Heading, Center, Button } from "@chakra-ui/react";
import { useHistory } from "react-router";

export const Home: React.FC = () => {
  const history = useHistory();

  return (
    <Box h={"100vh"}>
      <Center h={"100vh"}>
        <Box>
          <Heading>Hello 👋</Heading>
          <Button onClick={() => history.push("/sleep")}>Sleep !</Button>
        </Box>
      </Center>
    </Box>
  );
};
