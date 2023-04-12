import { Label } from "../../ui/Label";

export const DietLabels = ({ recipe }) => {
  return (
    recipe.recipe.dietLabels.length >= 1 && (
      <Label recipe={recipe.recipe.dietLabels} color={"blue.300"} text="" />
    )
  );
};
