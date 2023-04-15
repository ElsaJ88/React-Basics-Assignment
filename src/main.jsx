import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecipesPage } from "./pages/RecipesPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <Box minH={"100vh"} bg={"green.100"}>
        <RecipesPage />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
