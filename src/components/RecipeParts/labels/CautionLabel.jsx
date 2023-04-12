import { Label } from "../../ui/Label";

export const Cautions = ({ recipe }) => {
  return (
    recipe.recipe.cautions.length >= 1 && (
      <Label
        recipe={recipe.recipe.cautions}
        color={"red.400"}
        text="Cautions: "
      />
    )
  );
};
