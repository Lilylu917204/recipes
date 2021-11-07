import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ data }) {
  const dataUrl = data.recipe.uri;
  const recipeId = dataUrl.split("recipe_")[1];

  // 可惡的樹懶 正規表達式
  // const recipeUri = data.recipe.uri.split(/([recipe_])/)[2];

  const mealType = data.recipe.mealType;

  return (
    <div>
      <Link to={`/recipe/${mealType}/${recipeId}`}>
        {/* test */}
        {data.recipe.label}
      </Link>
    </div>
  );
}

export default RecipeCard;
