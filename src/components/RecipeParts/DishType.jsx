import { Text } from "@chakra-ui/react";

export const DishType = ({ recipe }) => {
  return (
    <>
      <Text as="i" style={{ textTransform: "capitalize" }}>
        {recipe.recipe.dishType}
      </Text>
    </>
  );
};
