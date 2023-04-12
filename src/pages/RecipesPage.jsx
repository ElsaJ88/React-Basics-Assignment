// React imports
import { useState } from "react";

// Chakra imports
import { Box, Center, Flex, Heading } from "@chakra-ui/react";

// Data imports
import { data } from "../utils/data";

// Components imports
import { SearchRecipes } from "../components/SearchRecipes";
import { RecipeChoice } from "../components/RecipeChoice";

// CSS import
import "./RecipesPage.css";

export const RecipesPage = () => {
  const [userRecipe, setUserRecipe] = useState();
  return (
    <>
      {userRecipe ? (
        <Center>
          <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
        </Center>
      ) : (
        <Flex flexDir="column">
          <Heading
            as="header"
            size={"2xl"}
            mt={6}
            mb={3}
            fontFamily={"calibri"}
            color="green.50"
            bg="green.200"
          >
            RECIPE FINDER
          </Heading>

          <Box as="main">
            <SearchRecipes recipes={data.hits} onClick={setUserRecipe} />
          </Box>
        </Flex>
      )}
    </>
  );
};
