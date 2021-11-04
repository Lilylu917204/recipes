import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ data }) {
  const recipeUri = data.recipe.uri.split(/([_])/)[2];

  const mealType = data.recipe.mealType;
  return (
    <div>
      <Link to={`/recipe/${mealType}/${recipeUri}`}>
        {/* test */}
        {data.recipe.label}
      </Link>
    </div>
  );
}

export default RecipeCard;
