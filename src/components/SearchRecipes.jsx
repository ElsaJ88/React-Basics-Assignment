// React imports
import { useState } from "react";

// Components imports
import { RecipeItems } from "./RecipesItems";
import { FilterButton } from "./FilterButton";

// Chakra imports
import { Button, Flex, Input } from "@chakra-ui/react";
import { buttonStyle } from "./ui/buttonStyle";

export const SearchRecipes = ({ recipes, onClick }) => {
  const [searchFieldInput, setSearchFieldInput] = useState("");
  const [healthFilter, setHealthFilter] = useState("");
  const [recipeList, setRecipeList] = useState(true);

  const searchRecipes = recipes.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchFieldInput.toLowerCase());
  });

  const filterRecipes = recipes.filter((recipe) => {
    return recipe.recipe.healthLabels.includes(healthFilter);
  });

  const handleFilter = (filter) => {
    setHealthFilter(filter);
    if (recipeList) {
      changeRecipeList();
    }
  };

  const handleChange = (event) => {
    setSearchFieldInput(event.target.value);
    if (!recipeList) {
      changeRecipeList();
    }
  };

  const changeRecipeList = () =>
    recipeList == true ? setRecipeList(false) : setRecipeList(true);

  const handleReset = () => {
    if (recipeList) {
      setSearchFieldInput("");
    } else {
      changeRecipeList();
    }
  };

  return (
    <>
      <Flex
        flexDir={["column", "column", "row"]}
        gap={[3]}
        align="center"
        mb={7}
      >
        <Input
          w={"70vw"}
          variant="filled"
          placeholder="Search a recipe..."
          onChange={handleChange}
          textAlign={"center"}
          m={5}
        />
        <FilterButton
          buttonStyle={buttonStyle}
          onClick={(filter) => {
            handleFilter(filter);
          }}
        />
        <Button sx={buttonStyle} onClick={handleReset}>
          Reset
        </Button>
      </Flex>
      {recipeList === true ? (
        <RecipeItems recipes={searchRecipes} onClick={onClick} />
      ) : (
        <RecipeItems recipes={filterRecipes} onClick={onClick} />
      )}
    </>
  );
};
