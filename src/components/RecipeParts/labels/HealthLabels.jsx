import { Label } from "../../ui/Label";

export const HealthLabels = ({ recipe, ...props }) => {
  const healthLabels = recipe.recipe.healthLabels.filter((labels) => {
    return labels.includes("Vegan") || labels.includes("Vegetarian");
  });

  if (props.labels === "Vega") {
    return (
      recipe.recipe.healthLabels.length >= 1 && (
        <Label recipe={healthLabels} color={"green.400"} text="" />
      )
    );
  } else {
    return (
      recipe.recipe.healthLabels.length >= 1 && (
        <Label
          recipe={recipe.recipe.healthLabels}
          color={"green.400"}
          text="Health Labels:"
        />
      )
    );
  }
};
