// Chakra imports
import { Flex } from "@chakra-ui/react";

// Component imports
import { RecipeItem } from "./RecipeItem";

export const RecipeItems = ({ recipes, onClick }) => {
  return (
    <Flex
      m={2}
      justify="space-evenly"
      alignItems="center"
      flexWrap="wrap"
      flexDir={["column", "row"]}
      gap={[3]}
    >
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.recipe.label}
          recipe={recipe}
          onClick={onClick}
        />
      ))}
    </Flex>
  );
};
