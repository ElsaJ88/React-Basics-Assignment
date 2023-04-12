// Chakra imports
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer,
  TableCaption,
} from "@chakra-ui/react";

// Component imports
import { NutrientItem } from "./NutrientItem";

export const TotalNutrients = ({ recipe }) => {
  const energy = recipe.recipe.totalNutrients.ENERC_KCAL;
  const fat = recipe.recipe.totalNutrients.FAT;
  const carbs = recipe.recipe.totalNutrients.CHOCDF;
  const cholesterol = recipe.recipe.totalNutrients.CHOLE;
  const sodium = recipe.recipe.totalNutrients.NA;
  const protein = recipe.recipe.totalNutrients.PROCNT;
  return (
    <TableContainer>
      <Table size="sm" variant="striped" colorScheme="green">
        <TableCaption placement="top">Total Nutrients</TableCaption>
        <Thead>
          <Tr>
            <Th>Nutrient</Th>
            <Th>Quantity</Th>
          </Tr>
        </Thead>
        <Tbody>
          <NutrientItem nutrient={energy} />
          <NutrientItem nutrient={fat} />
          <NutrientItem nutrient={carbs} />
          <NutrientItem nutrient={cholesterol} />
          <NutrientItem nutrient={sodium} />
          <NutrientItem nutrient={protein} />
        </Tbody>
      </Table>
    </TableContainer>
  );
};
