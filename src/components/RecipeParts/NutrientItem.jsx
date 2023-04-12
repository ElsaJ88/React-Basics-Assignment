import { Tr, Td } from "@chakra-ui/react";

export const NutrientItem = ({ nutrient }) => {
  return (
    <>
      <Tr>
        <Td>{nutrient.label}</Td>
        <Td>
          {Math.floor(nutrient.quantity * 10) / 10} {" " + nutrient.unit}
        </Td>
      </Tr>
    </>
  );
};
