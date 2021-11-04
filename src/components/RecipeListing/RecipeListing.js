import React from "react";
import { getRecipe } from "../../features/appSlice";

import { useSelector } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeListing() {
  const recipe = useSelector(getRecipe);

  const recipeRender = (recipe.hits || []).map((recipe, index) => {
    return <RecipeCard key={index} data={recipe} />;
  });

  return <div>{recipeRender}</div>;
}

export default RecipeListing;
