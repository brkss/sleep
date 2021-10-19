import React from "react";
import { Box, Center, Heading, Button } from "@chakra-ui/react";
import { useHistory } from "react-router";

export const SleepTime: React.FC = () => {
  const history = useHistory();
  return (
    <Box h={"100vh"}>
      <Center h={"full"}>
        <Box>
          <Heading> Sleep Time !</Heading>
          <Button onClick={() => history.push("/")}> Home </Button>
        </Box>
      </Center>
    </Box>
  );
};
