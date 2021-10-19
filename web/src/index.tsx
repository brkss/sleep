import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./Application";
import { ChakraProvider } from "@chakra-ui/react";
import "./assets/main.css";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Application />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
