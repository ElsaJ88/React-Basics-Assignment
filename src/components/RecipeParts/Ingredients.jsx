import { UnorderedList, ListItem } from "@chakra-ui/react";

export const Ingredients = ({ recipe }) => {
  return (
    <UnorderedList styleType="none">
      {recipe.recipe.ingredientLines.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
    </UnorderedList>
  );
};
