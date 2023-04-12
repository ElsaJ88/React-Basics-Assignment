//Chakra imports
import {
  Heading,
  Button,
  Image,
  Grid,
  GridItem,
  Flex,
  Text,
  Box,
  Center,
} from "@chakra-ui/react";

//Component imports
import { HealthLabels } from "./RecipeParts/labels/HealthLabels";
import { DietLabels } from "./RecipeParts/labels/DietLabels";
import { Cautions } from "./RecipeParts/labels/CautionLabel";
import { DishType } from "./RecipeParts/DishType";
import { MealType } from "./RecipeParts/MealType";
import { Ingredients } from "./RecipeParts/Ingredients";
import { TotalNutrients } from "./RecipeParts/TotalNutrients";
import { buttonStyle } from "./ui/buttonStyle";

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <>
      <Box height="100%">
        <Grid
          mx={{ base: 3, sm: 5, md: 10 }}
          p={5}
          templateColumns={"repeat(6 auto)"}
          templateRows={"repeat(6, auto)"}
          bg={"green.50"}
          gap="3"
        >
          <GridItem colSpan="6">
            <Flex m={5} gap="10" flexDir={{ base: "column", md: "row" }}>
              <Button
                sx={buttonStyle}
                onClick={() => onClick()}
                alignSelf={"center"}
              >
                Go Back
              </Button>
              <Heading as="header" style={{ textTransform: "capitalize" }}>
                {recipe.recipe.label}
              </Heading>
            </Flex>
          </GridItem>

          <GridItem
            mx={6}
            colSpan={{ base: 6, md: 3 }}
            rowSpan={{ base: 3, md: 3 }}
          >
            <Image
              m={"auto"}
              src={recipe.recipe.image}
              w={{ base: 300, sm: 200, md: 350, lg: 450 }}
              h={{ base: 300, sm: 200, md: 350, lg: 450 }}
              alt={recipe.recipe.label}
              objectFit="fill"
            />
            <Center m="3">
              <DishType recipe={recipe} />
            </Center>
          </GridItem>

          <GridItem colSpan={{ base: 6, md: 2 }}>
            <MealType recipe={recipe} />
            <Text>Total Cooking Time: {recipe.recipe.totalTime} minutes</Text>
            <Text>Servings: {recipe.recipe.yield}</Text>
          </GridItem>

          <GridItem mx={2} colSpan={{ base: 6, md: 2 }}>
            <TotalNutrients recipe={recipe} />
          </GridItem>

          <GridItem m={5} colSpan={{ base: 6, md: 2 }} rowSpan={3}>
            <Heading size="md" my={5}>
              Ingredients:
            </Heading>
            <Ingredients recipe={recipe} />
          </GridItem>

          <GridItem m={2} colSpan={{ base: 6, md: 3 }}>
            <DietLabels recipe={recipe} />
            <HealthLabels recipe={recipe} labels={"All"} />
            <Cautions recipe={recipe} />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};
