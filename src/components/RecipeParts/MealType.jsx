import { Text } from "@chakra-ui/react";

export const MealType = ({ recipe }) => {
  return (
    <>
      <Text>
        Meal:{" "}
        {recipe.recipe.mealType.map((type) => {
          return (
            <Text as="i" key={type} style={{ textTransform: "capitalize" }}>
              {type} {""}
            </Text>
          );
        })}
      </Text>
    </>
  );
};
