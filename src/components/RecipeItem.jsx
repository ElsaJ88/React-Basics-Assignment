// Chakra imports
import { Image, Heading, Flex, Box } from "@chakra-ui/react";

// Component imports
import { DietLabels } from "./RecipeParts/labels/DietLabels";
import { HealthLabels } from "./RecipeParts/labels/HealthLabels";
import { Cautions } from "./RecipeParts/labels/CautionLabel";
import { DishType } from "./RecipeParts/DishType";

export const RecipeItem = ({ recipe, onClick }) => {
  const flexboxStyle = {
    bg: "teal.50",
    w: { base: "80vw", sm: 200 },
    h: { base: "auto", sm: 415 },
    py: { base: 5, sm: 2 },
    borderRadius: "10",
    flexDir: "column",
    alignItems: "center",
    textAlign: "center",
    ":hover": {
      transform: "scale(102%)",
    },
  };
  return (
    <Flex sx={flexboxStyle} onClick={() => onClick(recipe)}>
      <Box color="green.400">
        <DishType recipe={recipe} />
      </Box>
      <Box>
        <Image
          src={recipe.recipe.image}
          w={{ base: 300, sm: 200 }}
          h={{ base: 300, sm: 200 }}
          alt={recipe.recipe.label}
          objectFit="fill"
        />
      </Box>
      <Box p={2}>
        <Heading
          size={"sm"}
          color="teal.900"
          style={{ textTransform: "capitalize" }}
        >
          {recipe.recipe.label}
        </Heading>
      </Box>
      <Box>
        <DietLabels recipe={recipe} />{" "}
      </Box>

      <Box>
        <HealthLabels recipe={recipe} labels={"Vega"} />
      </Box>

      <Box>
        <Cautions recipe={recipe} />
      </Box>
    </Flex>
  );
};
